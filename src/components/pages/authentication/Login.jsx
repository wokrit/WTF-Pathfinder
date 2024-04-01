import { useState, useContext } from "react";
import userAuthContext from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Button from '../../layout/Button'
import './Auth.css'
import Home from "../Home/Home";
import { IoCloseOutline } from "react-icons/io5";

function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [modal, setModal] = useState(true);

    const { logIn, googleSignIn } = useContext(userAuthContext);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await logIn(email, password);
          navigate("/");
        } catch (err) {
          setError(err.message);
        }
    }

    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/");
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
      <Home />
      {modal && (
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
                    <img src=".\src\assets\flat-color-icons_google.png" alt="google icon"/>
                    Continue with Google
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
                      Login
                    </Button>
                </form>
                
                    
                      
                      
              </div>
                
            </div>
          </div>
        
        </div>
      )}
   
    </>
  )
}

export default Login
