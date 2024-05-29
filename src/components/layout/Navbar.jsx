import { useState, useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
// import Signup from "../pages/authentication/Signup"
import userAuthContext from "../../context/UserAuthContext"
import { RxHamburgerMenu } from "react-icons/rx"



function Navbar() {
    const navigate = useNavigate()
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const mobileMenuRef = useRef(null);
    const { logOut } = useContext(userAuthContext);
    const { isLoggedIn, setIsLoggedIn } = useContext(userAuthContext);
    // console.log(typeof logOut);
    const handleSignup = () => {
        navigate("/Signup");
    }

    // const handleLogin = () => {
    //     navigate("/Login");
    // }

    const handleLogout = async (e) => {  
        e.preventDefault();           
        try {
            await logOut();
            setIsLoggedIn(false)
        // Sign-out successful.
            // setIsLoggedIn(false);
            navigate("/");
            console.log("Signed out successfully")
        } catch (error)  {
        // An error happened.
        console.log("error")
        }
    }


    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };


    // const handleClickOutside = (event) => {
    //     if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
    //         setShowMobileMenu(false);
    //     }
    // };
    const handleClickOutside = (event) => {
        if (event.target.classList.contains("menu-overlay")) {
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
            <img className="pathfinder-logo" alt="pathfinder logo" src="\images\Logo pathfinder purple 1.png" onClick={() => navigate("/")}  />
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
                {isLoggedIn ? (
                    <Button type="button" variant="primary" onClick={handleLogout}>
                        Log out
                    </Button>
                ) : (
                    <Button type="button" variant="primary" onClick={handleSignup}>
                        Take Assessment
                    </Button>
                )}
            </div>

            <div className="hamburger-icon" onClick={toggleMobileMenu}>
                <RxHamburgerMenu style={{width:"24px", height:"24px"}}/>
            </div>
            <div className={`menu-overlay ${showMobileMenu ? "show" : ""}`} ref={mobileMenuRef}>
                <div className="mobile-menu">
                    <ul className="mobile-nav-links">
                        <li>About</li>
                        <li>Programs</li>
                        <li>Tech Careers</li>
                        <li>Contact</li>
                    </ul>
                
                    <div style={{width:"100%"}}>
                        {/* <Button type="button" variant="secondary" onClick={handleLogin}>
                            Login
                        </Button> */}
                        {isLoggedIn ? (
                                <Button type="button" variant="primary" onClick={handleLogout}>
                                    Log out
                                </Button>
                            ) : (
                                <Button type="button" variant="primary" onClick={handleSignup}>
                                    Take Assessment
                                </Button>
                            )}
                    </div>
                </div>
            </div>
        </nav>
      
    </>
  )
}

export default Navbar
