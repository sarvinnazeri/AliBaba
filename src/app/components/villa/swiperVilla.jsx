import React, { useState } from 'react';
import './../../css/styles.css';

const SwiperVilla = ({ swiper, apart , ramsar }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const items = swiper || apart || ramsar; // Use swiper if provided, otherwise use apart

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - itemsPerPage : Math.max(items.length - itemsPerPage, 0)));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < items.length - itemsPerPage ? prevIndex + itemsPerPage : 0));
    };

    return (
        <div className='relative w-full flex justify-between items-center'>
            <button
                onClick={handlePrev}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentIndex === 0}
            >
                Prev
            </button>

            <div className='w-full flex justify-start overflow-hidden'>
                {
                    items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                        <div key={index} className='border rounded-lg mx-2 w-[25%]'>
                            <img src={item.image} alt="" className='rounded-t-lg' />
                            <div className='p-5'>
                                <span className='text-[14px] text-[gray]'>{item.span}</span>
                                <h2 className='font-bold'>{item.h2}</h2>
                                <span className='text-[14px] text-[gray]'>{item.span1}</span>
                                <div className='justify-between flex mt-10'>
                                    <span>{item.span3}</span> <span className='text-[14px] text-[gray]'>{item.span2}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button
                onClick={handleNext}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${currentIndex >= items.length - itemsPerPage ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentIndex >= items.length - itemsPerPage}
            >
                Next
            </button>
        </div>
    );
};

export default SwiperVilla;
