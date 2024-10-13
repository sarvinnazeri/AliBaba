import React, { useState } from 'react';
import './../../css/styles.css';

const Swipero3 = ({ swiperr3 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : swiperr3.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < swiperr3.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className='relative w-full flex overflow-hidden'>
            <div className='flex w-full transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {swiperr3.map((item, index) => (
                    <div key={index} className="mx-2 a-card image-card text-justify border w-[300px] rounded-lg bg-white flex-shrink-0">
                        <div
                            className="image-card__header bg-cover bg-center h-44 rounded-t-lg"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                        </div>
                        <h5 className="text-right px-4 truncate text-4 mb-0 mt-1">{item.h5}</h5>
                        <div className="flex w-full items-end justify-between text-right p-4">
                            <div className="text-left flex-1">
                                <button type="button" className="btn is-md bg-[rgb(1,119,219)] rounded-lg p-2 border-black text-white is-solid-secondary">{item.btn}</button>
                            </div>
                            <div className="overflow-hidden flex-1 mr-0">
                                <span className="block text-2 mt-1 mb-4">{item.span1}<span className="text-gray-200 mx-1">·</span>{item.span2}</span>
                                <span className="mt-2">
                                    <small className="text-gray-300 font-normal mr-1" style={{ fontSize: '0.62em' }}>{item.small}</small>
                                    <strong className="text-secondary-400 text-[rgb(1,119,219)]" dir="ltr">{item.strong}</strong>
                                </span>
                                <span className="block text-1 text-gray-300">{item.span3}</span>
                            </div>
                        </div>
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
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${currentIndex === swiperr3.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentIndex === swiperr3.length - 1}
            >
                Next
            </button>
        </div>
    );
};

export default Swipero3;
