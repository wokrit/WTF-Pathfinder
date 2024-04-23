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
    const [isPasswordFocused, setIsPasswordFocused] = useState(false); 
    const [isPasswordValid, setIsPasswordValid] = useState(false); 
    const [isChecked, setIsChecked] = useState(false);
    const { signUp, windowWidth, setWindowWidth, isLoggedIn, setIsLoggedIn, googleSignIn } = useContext(userAuthContext);
    let navigate = useNavigate();

    
    
    
    
    useEffect(() => {
      setWindowWidth(window.innerWidth);
    }, [setWindowWidth]);

    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
  }
  
  const validatePassword = () => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      const isValid = passwordRegex.test(password);
      setIsPasswordValid(isValid); // Update password validity state
      if (!isValid) {
          setError("Password does not follow the password requirements.");
      } else {
          setError(""); // Clear error message
      }
  }

  const getPasswordRequirements = () => {
    return (
      <div className="password-requirements">
        <p>Password must:</p>
        <ul>
          <li>Be at least 8 characters long</li>
          <li>Contain at least one uppercase letter</li>
          <li>Contain at least one lowercase letter</li>
          <li>Contain at least one number</li>
        </ul>
      </div>
    );
  }
    
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
          setIsLoggedIn(true)
          navigate("/instructions");
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
        setIsLoggedIn(true)
        navigate("/instructions");
      } catch (error) {
        console.log(error.message);
        setError("Sorry, something went wrong. Please try again");
      }
    };

    const toggleModal = () => {
      setModal(!modal);
      navigate("/");
    }

    const handlePasswordBlur = () => {
      setIsPasswordFocused(false); // Reset isPasswordFocused state when the password field loses focus
      validatePassword(password); // Validate password when the password field loses focus
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

  return (
    <>

      {windowWidth >= 720 ? (
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
                    <img src="\images\flat-color-icons_google.png" alt="google icon"/>
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
                      // onChange={(e) => setPassword(e.target.value)}
                      onChange={handlePasswordChange}
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={handlePasswordBlur} 
                    />
                    {showPassword ? (
                        <PiEyeSlashLight className="icon" onClick={() => setShowPassword(false)} />
                      ) : (
                        <PiEyeLight className="icon" onClick={() => setShowPassword(true)} />
                      )}
                  </div>
                  {isPasswordFocused && !isPasswordValid && getPasswordRequirements()} {/* Display requirements only when password is focused */}
        
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
                    
                  </div>
                  <div className="error-message">{ "" !== error && error }</div>
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
        
      ):(
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
                <img src="\images\flat-color-icons_google.png" alt="google icon"/>
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
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handlePasswordChange}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={handlePasswordBlur} 
                />
                {showPassword ? (
                    <PiEyeSlashLight className="icon" onClick={() => setShowPassword(false)} />
                  ) : (
                    <PiEyeLight className="icon" onClick={() => setShowPassword(true)} />
                  )}
              </div>
              {isPasswordFocused && !isPasswordValid && getPasswordRequirements()}
    
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
              </div>
              <div className="error-message">{ "" !== error && error }</div>

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
      )}

       
    </>
  )
}

  

export default Signup
