import { useState, useEffect, useContext } from "react";
import userAuthContext from "../../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from '../../layout/Button'
import "./Auth.css";
import Navbar from "../../layout/Navbar";
import Home from "../Home/Home";
import { IoCloseOutline } from "react-icons/io5";
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";


function Signup() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [modal, setModal] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const { signUp, googleSignIn } = useContext(userAuthContext);
    let navigate = useNavigate();

    // useEffect(() => {
    //   if (window.innerWidth <= 720) {
    //     setModal(!modal); // Hide modal for smaller screens initially
    //   }
    // }, []); 

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!isChecked) { // Check if checkbox is not checked
        setError("Please accept the terms and privacy policies."); // Show error message
        return; // Prevent further execution
      }
      setError(""); // Clear error message
      
      if (password === confirmPassword) {
        try {
          await signUp(email, password);
          navigate("/login");
        } catch (error) {
          setError("Sorry, something went wrong. Please try again");
        }
      } else {
        setError("Passwords do not match. Please check and try again")
      }
    }
    
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/login");
      } catch (error) {
        console.log(error.message);
        setError("Sorry, something went wrong. Please try again");
      }
    };

    const toggleModal = () => {
      setModal(!modal);
      navigate("/");
    }
    
    // const toggleModal = () => {
    //   if (window.innerWidth <= 720) {
    //     // For smaller screens, toggle the modal state
    //     setModal(!modal);
    //   } else {
    //     // For larger screens, navigate back to the home page
    //     navigate("/");
    //   }
    // };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

  return (
    <>

      {modal && (
        <div>
          <Home />
          <div className="modal">
          <div className="0verlay">
            <div className="modal-content">
              <div className="login-details">
                <header>
                  <IoCloseOutline className="close-modal" onClick={toggleModal} />
                  <h1>Create Account</h1>
                  <p>Before proceeding with the assessment, please create your Pathfinder account.
                  </p>
                  <div className="account-cta">
                    <p>Already have an account? <span><Link to="/login" className="custom-link">Log In</Link></span></p>
                  </div>
                </header>

                <Button type="Submit" variant="secondary" onClick={handleGoogleSignIn}>
                  <div className="googlebutton">
                    <img src=".\src\assets\flat-color-icons_google.png" alt="google icon"/>
                    Sign Up with Google
                  </div>  
                </Button>
                <h5 style={{ textAlign: 'center', margin:"4px" }}>OR</h5>
                <form onSubmit={handleSubmit}>
                  <div className="user-detail">
                    <label>Email</label>
                    <input 
                      className="input-field" 
                      type="email" 
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                  </div>

                  <div className="user-detail">
                    <label>Password</label>
                    <input 
                      className="input-field" 
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                        <PiEyeSlashLight className="icon" onClick={() => setShowPassword(false)} />
                      ) : (
                        <PiEyeLight className="icon" onClick={() => setShowPassword(true)} />
                      )}
                  </div>
        
                  <div className="user-detail">
                    <label>Confirm Password</label>
                    <input 
                      className="input-field" 
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {showPassword ? (
                        <PiEyeSlashLight className="icon" onClick={() => setShowPassword(false)} />
                      ) : (
                        <PiEyeLight className="icon" onClick={() => setShowPassword(true)} />
                      )}
                    <div className="error-message">{ "" !== error && error }</div>
                  </div>

                  <div className="terms">
                    <input 
                      type="checkbox" 
                      checked={isChecked} 
                      onChange={() => setIsChecked(!isChecked)} // Toggle isChecked state
                    />
                    <label htmlFor="terms"><p className="account-cta">By using WomenTechsters Pathfinder, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p></label>
                  </div>

                  <Button type="Submit" variant="primary">
                      Sign Up
                  </Button>
                </form>                      
              </div>                
            </div>
          </div>      
        </div>
        </div>
        
      )}

       
    </>
  )
}

  

export default Signup
