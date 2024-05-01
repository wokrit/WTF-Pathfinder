import React, { useState, useEffect } from 'react';
import automation from './Automation.module.css'; // Import your CSS file
import Automated from "./Automated"
import Auto from "./Auto"

const images = [
  'pingirl.png',
  'pc.png',
  'corporate.png'
];

const text = [
  "Eliminate Confusion",
  "Find Your Strength",
  "Elevate Your Career"
]

const AnimatedContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={automation.container}>
       <div>
        <img src={`/images/${images[currentIndex]}`} alt={`Image ${currentIndex + 1}`} />
        <p className={automation.text}>{text[currentIndex]}</p>
       </div>

      <div className={automation.box}>
        <div className={automation.box1}><Auto></Auto></div>
        <div className={automation.box2}><Automated></Automated></div>
      </div>
    </div>
  );
};

export default AnimatedContainer;
