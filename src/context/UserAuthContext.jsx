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

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut, googleSignIn }}>
        {children}  
    </userAuthContext.Provider>
  
  )
}

export default userAuthContext