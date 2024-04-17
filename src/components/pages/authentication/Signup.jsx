import { useState, useContext } from "react";
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
    // const [errorMessage, setErrorMessage] = useState("");

    const { signUp, googleSignIn } = useContext(userAuthContext);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      // setError("");
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
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

  return (
    <>
      {/* <Navbar handleLoginClick={toggleModal} /> */}
      <Home />
      {modal && (
        <div className="modal">
          <div className="0verlay">
            <div className="modal-content">
              <div className="login-details">
                <header>
                  <IoCloseOutline className="close-modal" onClick={toggleModal} />
                  <h1>Create Account</h1>
                  <p>Before proceeding with the assessment, please create your Pathfinder account. Signing in allows us to securely
                      save your assessment results and data, ensuring that you have access to personalized career recommendations and
                      insights whenever you need them
                  </p>
                  <div className="account-cta">
                    <p>Already have an account? <span><Link to="/login">Log In</Link></span></p>
                  </div>
                </header>

                <Button type="Submit" variant="secondary" onClick={handleGoogleSignIn}>
                  <div className="googlebutton">
                    <img src=".\src\assets\flat-color-icons_google.png" alt="google icon"/>
                    Sign Up with Google
                  </div>  
                </Button>
                <h5 style={{ textAlign: 'center' }}>OR</h5>
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

                  <Button type="Submit" variant="primary">
                      Sign Up
                  </Button>
                </form>
                <p className="account-cta">By using WomenTechsters Pathfinder, you agree to our <span>Terms of Service and Privacy Policy</span></p>                      
              </div>                
            </div>
          </div>      
        </div>
      )}
    </>
  )
}

  

export default Signup
