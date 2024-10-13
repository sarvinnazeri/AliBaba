"use client"
import { useState } from "react";
import React from 'react'



export default function Slider () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        "https://cdn.alibaba.ir/cms/uploads/Rexan_Cardview_Banner_Desktop_2x_732a43f730.png",
        "https://cdn.alibaba.ir/cms/uploads/AL_Digitalmarketing_On_going_Cardview_Banner_Desktop_03_02_12_e593c243ab.jpg",
        "https://cdn.alibaba.ir/cms/uploads/Safar_Card_Cardview_Banner_Desktop_02_09_22_89ce30438d.png",
        "https://cdn.alibaba.ir/cms/uploads/Product_Marketing_Internet_Call_Cardview_Banner_Desktop_02_08_29_6970292467.jpg",
    ];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % Math.ceil(slides.length / 2));
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + Math.ceil(slides.length / 2)) % Math.ceil(slides.length / 2));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full mx-auto rounded-lg">
            <div className="slider flex overflow-hidden w-full">
                {slides.map((slide, index) => (
                    index % 2 === 0 && (
                        <div
                            key={index}
                            className="slide min-w-full transition-transform duration-500 flex"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            <img src={slide} alt={`Slide ${index + 1}`} className="w-1/2 rounded-lg" />
                            {slides[index + 1] && (
                                <img src={slides[index + 1]} alt={`Slide ${index + 2}`} className="w-1/2 p-2" />
                            )}
                        </div>
                    )
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
                {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};