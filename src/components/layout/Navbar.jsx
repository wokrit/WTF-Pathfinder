import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import Signup from "../pages/authentication/Signup"
import userAuthContext from "../../context/UserAuthContext"
import { RxHamburgerMenu } from "react-icons/rx"



function Navbar() {
    const navigate = useNavigate()
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const mobileMenuRef = useRef(null);

    const handleSignup = () => {
        navigate("/Signup");
    }

    // const handleLogin = () => {
    //     navigate("/Login");
    // }

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const handleClickOutside = (event) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setShowMobileMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

  return (
    <>
        <nav className="navbar">
            <img className="wtf-logo" alt="WTF Logo" src="\images\WT-LOGO-1 1.png" onClick={() => navigate("/")}  />
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
            <div className="hamburger-icon" onClick={toggleMobileMenu}>
                <RxHamburgerMenu style={{width:"24px", height:"24px"}}/>
            </div>
            <div className={`mobile-menu ${showMobileMenu ? "show" : ""}`} ref={mobileMenuRef}>
                <ul className="mobile-nav-links">
                    <li>About</li>
                    <li>Programs</li>
                    <li>Tech Careers</li>
                    <li>Contact</li>
                </ul>
                
                {/* <Button type="button" variant="secondary" onClick={handleLogin}>
                    Login
                </Button> */}
                <Button type="button" variant="primary" onClick={handleSignup}>
                    Take Assesment
                </Button>
           
        </div>
            
        </nav>
      
    </>
  )
}

export default Navbar
