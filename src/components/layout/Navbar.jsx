import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "./Button"
import Signup from "../pages/authentication/Signup"
import userAuthContext from "../../context/UserAuthContext"



function Navbar() {
    const navigate = useNavigate()

    const handleSignup = () => {
        navigate("/Signup");
    }
    // const handleLogin = () => {
    //     navigate("/Login");
    // }

    const [toggle, setToggle] = useState(false)

    const toggleMenu = () => {
        setToggle((open) => !open)
    }

  return (
    <>
        <nav className="navbar">
            <img className="wtf-logo" alt="WTF Logo" src="./src/assets/WT-LOGO-1 1.png" onClick={() => navigate("/")}  />
            
            <section className={`nav-menu ${toggle ? "toggle" : ""}`}>
                <ul className="nav-links">
                <li>About</li>
                <li>Programs</li>
                <li>Tech Careers</li>
                <li>Contact</li>
            </ul>  
            <div className="nav-buttons">
                {/* <Button type="button" variant="secondary" onClick={handleLogin}>
                    Login
                </Button> */}
                <Button type="button" variant="primary" onClick={handleSignup}>
                    Take Assesment
                </Button>
            </div>
            </section>
            <img src="..\src\assets\jam_menu.png" className="jam-menu" onClick={toggleMenu}></img>
            
        </nav>
      
    </>
  )
}

export default Navbar
