import React, { useState } from 'react';
import './../../css/styles.css';

const Swipero2 = ({ swiperr2 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : swiperr2.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < swiperr2.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className='relative  w-full flex'>
            <div className='flex overflow-hidden w-full'>
                {swiperr2.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full p-2 transition-transform duration-500 transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        <a href={item.link} className="slide-show-item" target="_blank" rel="noopener noreferrer">
                            <img src={item.image} alt={item.alt} className="w-full object-cover rounded-t-md" />
                            <h3 className="pr-2 pt-1 my-0 text-lg font-bold">{item.h3}</h3>
                            <span className="pr-2 my-2 h-5 overflow-hidden text-ellipsis whitespace-nowrap block">
                                <span className="text-sm text-gray-400">{item.span1}</span>
                                <span className="dot mx-3"></span>
                                <span className="text-sm text-gray-400">{item.span3}</span>
                            </span>
                            <hr className="border-t my-2" aria-hidden="true" />
                            <div className="flex justify-between items-center w-full px-2">
                                <div className="text-left flex">
                                    <div>
                                        <span>
                                            <small className="text-sm mr-1 text-gray-400">{item.small}</small>
                                            <strong className="text-lg text-blue-500" dir="ltr">{item.strong}</strong>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-400">{item.div2}</div>
                            </div>
                        </a>
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
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${currentIndex === swiperr2.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentIndex === swiperr2.length - 1}
            >
                Next
            </button>
        </div>
    );
};

export default Swipero2;
