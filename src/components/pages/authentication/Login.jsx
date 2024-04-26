import { useState, useEffect, useContext } from "react";
import userAuthContext from "../../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from '../../layout/Button'
import './Auth.css'
import Home from "../Home/Home";
import { IoCloseOutline } from "react-icons/io5";
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";


function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [modal, setModal] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, isLoggedIn, setIsLoggedIn, googleSignIn, windowWidth, setWindowWidth} = useContext(userAuthContext);
    let navigate = useNavigate();

    useEffect(() => {
      setWindowWidth(window.innerWidth);
    }, [setWindowWidth]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await logIn(email, password);
          setIsLoggedIn(true)
          navigate("/instructions");
        } catch (error) {
          setError("Your username or password is incorrect");
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
      {windowWidth >= 720 ? (
        <div>
          <Home />
          <div className="modal">
            <div className="0verlay">
              <div className="modal-content">
                <div className="login-details">
                  <header>
                    <IoCloseOutline className="close-modal" onClick={toggleModal} />
                    <h1>Welcome Back</h1>
                  </header>

                  <Button type="Submit" variant="secondary" onClick={handleGoogleSignIn}>
                    <div className="googlebutton">
                      <img src="\images\flat-color-icons_google.png" alt="google icon"/>
                      Continue with Google
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
                              onChange={(e) => setPassword(e.target.value)}
                          />
                          {showPassword ? (
                          <PiEyeSlashLight className="icon" onClick={() => setShowPassword(false)} />
                        ) : (
                          <PiEyeLight className="icon" onClick={() => setShowPassword(true)} />
                        )}
                      </div>
                      <div className="error-message">{ "" !== error && error }</div>
                    
                      <Button type="Submit" variant="primary">
                        Login
                      </Button>
                  </form>
                  <div className="account-cta">
                      <p style={{ textAlign: 'center' }}>New to Pathfinder? <span><Link to="/signup" className="custom-link">Create Account</Link></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      ):(
          <div className="login-details">
                    <header>
                      <IoCloseOutline className="close-modal" onClick={toggleModal} />
                      <h1>Welcome Back</h1>
                    </header>

                    <Button type="Submit" variant="secondary" onClick={handleGoogleSignIn}>
                      <div className="googlebutton">
                        <img src=".\images\flat-color-icons_google.png" alt="google icon"/>
                        Continue with Google
                      </div>  
                    </Button>
                    <h3 style={{ textAlign: 'center', margin:"4px" }}>OR</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="user-detail">
                            <label>Email</label>
                            <input 
                                className="input-field" 
                                type="email" 
                                placeholder="Enter your email"
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {showPassword ? (
                            <PiEyeSlashLight className="icon" onClick={() => setShowPassword(false)} />
                          ) : (
                            <PiEyeLight className="icon" onClick={() => setShowPassword(true)} />
                          )}
                        </div>
                        <div className="error-message">{ "" !== error && error }</div>
                      
                        <Button type="Submit" variant="primary">
                          Login
                        </Button>
                    </form>
                    <div className="account-cta">
                        <p style={{ textAlign: 'center' }}>New to Pathfinder? <span><Link to="/signup" className="custom-link">Create Account</Link></span></p>
                    </div>
                  </div>
      )}
   
    </>
  )
}

export default Login
