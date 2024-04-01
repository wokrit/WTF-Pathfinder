import { useState, useContext } from "react";
import userAuthContext from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Button from '../../layout/Button'
import "../authentication/Auth.css";
import Navbar from "../../layout/Navbar";
import Home from "../Home/Home";
import { IoCloseOutline } from "react-icons/io5";

function Signup() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [modal, setModal] = useState(true);

    const { signUp, googleSignIn } = useContext(userAuthContext);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await signUp(email, password);
          navigate("/login");
        } catch (err) {
          setError(err.message);
        }
    }
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/login");
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
                    <p>Already have an account? <span>Log In</span></p>
                  </div>
                </header>

                <Button type="Submit" variant="secondary" onClick={handleGoogleSignIn}>
                  <div className="googlebutton">
                    <img src=".\src\assets\flat-color-icons_google.png" alt="google icon"/>
                    Sign Up with Google
                  </div>  
                </Button>
                <h3 style={{ textAlign: 'center' }}>OR</h3>
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
                            type="password"
                            placeholder="xxxxxx"
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </input>
                    </div>
                    <br />
                    <Button type="Submit" variant="primary">
                        Sign Up
                    </Button>
                
                    {/* <GoogleButton
                      className="btn"
                      variant="primary"
                      type="button"
                      onClick={handleGoogleSignup}
                    /> */}
                </form>
                
                    
                      
                      
              </div>
                
            </div>
          </div>
        
        </div>
      )}
    </>
  )
}

  

export default Signup
