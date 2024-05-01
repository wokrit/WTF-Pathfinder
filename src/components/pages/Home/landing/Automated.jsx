import React, { useState, useEffect } from 'react';
import automated from './Automated.module.css'; // Import your CSS file

const images = [
    'corporate.png',
    'pingirl.png',
  'pc.png',
];

const AnimateContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={automated.container}>
       <img src={`/images/${images[currentIndex]}`} alt={`Image ${currentIndex + 1}`} />

      <div>
        
      </div>
    </div>
  );
};

export default AnimateContainer;
