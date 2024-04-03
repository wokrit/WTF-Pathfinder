import { useNavigate } from "react-router-dom"
import Button from "./Button"
import Signup from "../pages/Authentication/Signup"
import userAuthContext from "../../context/UserAuthContext"



function Navbar() {
    const navigate = useNavigate()

    const handleSignup = () => {
        navigate("/Signup");
    }
    const handleLogin = () => {
        navigate("/Login");
    }

  return (
    <>
        <nav className="navbar">
            <img className="wtf-logo" src="./src/assets/WT-LOGO-1 1.png"></img>
            <ul className="nav-links">
                <li>About</li>
                <li>Programs</li>
                <li>Tech Careers</li>
                <li>Contact</li>
            </ul>  
            <div className="nav-buttons">
                <Button type="button" variant="secondary" onClick={handleLogin}>
                    Login
                </Button>
                <Button type="button" variant="primary" onClick={handleSignup}>
                    Take Assesment
                </Button>
            </div>
            
        </nav>
      
    </>
  )
}

export default Navbar
