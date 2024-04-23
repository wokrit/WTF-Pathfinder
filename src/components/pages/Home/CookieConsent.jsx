import React from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    onAccept();
  };

  const handleDecline = () => {
    onDecline();
  };

  return (
    <div className="cookie-consent">
      <p>This website uses cookies to enhance user experience.</p>
      <div>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
