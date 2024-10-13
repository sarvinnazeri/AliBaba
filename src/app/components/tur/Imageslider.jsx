import React, { useState } from 'react';
import './../../css/styles.css';

const Swipero = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1 && slides[currentIndex + 1] && currentIndex < 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-[25%] flex-shrink-0 p-2">
            <img src={slide.image} alt={slide.alt} className="w-full h-auto rounded-lg" />
            <h2 className="mt-2 font-bold text-[15px]">{slide.text}</h2>
            <h2 className="mt-2 text-[13px]">{slide.text2}</h2>
          </div>
        ))}
      </div>
      <button 
        onClick={handlePrev} 
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentIndex === 0}
      >
        Prev
      </button>
      <button 
        onClick={handleNext} 
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${currentIndex >= 4 || currentIndex === slides.length - 1 || !slides[currentIndex + 1] ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentIndex >= 4 || currentIndex === slides.length - 1 || !slides[currentIndex + 1]}
      >
        Next
      </button>
    </div>
  );
};

export default Swipero;
