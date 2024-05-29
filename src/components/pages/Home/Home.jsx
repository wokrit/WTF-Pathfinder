import Navbar from "../../layout/Navbar"
import Button from "../../layout/Button"
import "../authentication/Auth.css";
import Hero from "./landing/Hero";
import Details from "./landing/Details";
import Programs from "./landing/Programs"
import Users from "./landing/Users"
import Footer from "./landing/Footer"
import styles from './Home.module.css'; 
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import CookieConsent from './CookieConsent';
import Cookies from 'js-cookie';


function Home() {
  const navigate = useNavigate()

  const handleSignup = () => {
      navigate("/Signup");
  }


  const [showCookieConsent, setShowCookieConsent] = useState(true); 

  useEffect(() => {
    const cookieConsentAccepted = Cookies.get('cookieConsent') === 'accepted';
    setShowCookieConsent(!cookieConsentAccepted);
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setShowCookieConsent(false);
  };

  const handleDecline = () => {
    setShowCookieConsent(false);
  };


  return (
    <div className={styles.landingContent}>
      {/* {showCookieConsent && <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />} */}

      <Navbar />
      <Hero />
      <Details />
      <Programs />
      <Users />
      <div className={styles.fit}>
        <p>Embrace the journey of self-discovery with Pathfinder, and find your true calling in the vast landscape of tech.</p>
        <Button type="button" variant="primary" onClick={handleSignup}>
            Find Your Best Fit
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default Home
