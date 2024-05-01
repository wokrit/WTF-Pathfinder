import React, { useState, useEffect } from 'react';
import auto from './Auto.module.css'; // Import your CSS file

const images = [
  'pingirl.png',
  'pc.png',
  'corporate.png'
];

const Animated = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2500); 
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={auto.container}>
       <img src={`/images/${images[currentIndex]}`} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default Animated;
