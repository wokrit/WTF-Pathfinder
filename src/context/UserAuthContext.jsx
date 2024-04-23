import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";



const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const[user, setUser] = useState({})
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    

    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);
    const googleSignIn = () => {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider);
  };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
          });
      
          return () => {
            unsubscribe();
          };
    }, [])

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <userAuthContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, logIn, signUp, logOut, googleSignIn, windowWidth, setWindowWidth }}>
        {children}  
    </userAuthContext.Provider>
  
  )
}

export default userAuthContext