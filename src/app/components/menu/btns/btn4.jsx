// components/LocationInput.js
"use client"
import React, { useState, useEffect, useRef } from 'react';
import './../../../css/styles.css';

const LocationInput = () => {
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [showStartDropdown, setShowStartDropdown] = useState(false);
    const [showEndDropdown, setShowEndDropdown] = useState(false);

    const startDropdownRef = useRef(null);
    const endDropdownRef = useRef(null);

    const locations = ['Tehran', 'Mashhad', 'Isfahan', 'Shiraz', 'Tabriz'];

    const handleStartSelect = (location) => {
        setStartLocation(location);
        setShowStartDropdown(false);
    };

    const handleEndSelect = (location) => {
        setEndLocation(location);
        setShowEndDropdown(false);
    };

    const handleSwap = () => {
        const temp = startLocation;
        setStartLocation(endLocation);
        setEndLocation(temp);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (startDropdownRef.current && !startDropdownRef.current.contains(event.target)) {
                setShowStartDropdown(false);
            }
            if (endDropdownRef.current && !endDropdownRef.current.contains(event.target)) {
                setShowEndDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <form className="flex items-center relative">
            <div className="relative" ref={startDropdownRef}>
                <input
                    type="text"
                    value={startLocation}
                    onFocus={() => setShowStartDropdown(true)}
                    onChange={(e) => setStartLocation(e.target.value)}
                    placeholder="مبدا"
                    className="peer w-[50px] md:w-[100px] p-2 border border-gray-300 rounded-s-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <label className={`absolute left-2 transition-all bg-white px-1 ${startLocation ? 'top-[-10px] text-xs text-gray-500' : 'top-2 text-base text-gray-500 peer-focus:top-[-10px] peer-focus:text-gray-500 peer-focus:text-xs'}`}>
                    مبدا
                </label>
                {showStartDropdown && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1">
                        {locations.map((location) => (
                            <li
                                key={location}
                                onClick={() => handleStartSelect(location)}
                                className="p-2 cursor-pointer hover:bg-gray-200"
                            >
                                {location}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button
                type="button"
                onClick={handleSwap}
                className="btn is-null is-null-primary  text-[10px] border-gray-600 border absolute z-20 left-[50%] transform -translate-x-1/2 bg-slate-200 p-1 rounded-full"
                aria-label="swap"
                style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
            >
                <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor">
                    <path d="m16.96 12.157.07.063 3.75 3.75a.757.757 0 0 1 .06.067l-.06-.067a.748.748 0 0 1 .22.53v.025a.728.728 0 0 1-.003.039L21 16.5a.747.747 0 0 1-.147.446l-.01.014-.008.01-.055.06-3.75 3.75a.75.75 0 0 1-1.123-.99l.063-.07 2.469-2.47H8.25a.75.75 0 0 1-.087-1.495l.087-.005h10.189l-2.47-2.47a.75.75 0 0 1-.062-.99l.063-.07a.75.75 0 0 1 .99-.063ZM8.03 3.22a.75.75 0 0 1 .063.99l-.063.07-2.47 2.47h10.19a.75.75 0 0 1 .088 1.495l-.088.005H5.56l2.47 2.47a.75.75 0 0 1 .063.99l-.063.07a.75.75 0 0 1-.99.063l-.07-.063-3.75-3.75-.055-.06a.644.644 0 0 1-.005-.007l.06.067A.756.756 0 0 1 3 7.5v-.014a.47.47 0 0 1 .003-.053L3 7.5a.756.756 0 0 1 .22-.53l3.75-3.75a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
            </button>
            <div className="relative" ref={endDropdownRef}>
                <input
                    type="text"
                    value={endLocation}
                    onFocus={() => setShowEndDropdown(true)}
                    onChange={(e) => setEndLocation(e.target.value)}
                    placeholder="مقصد"
                    className="peer w-[50px] md:w-[100px] p-2 px-5 border border-gray-300 rounded-e-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <label className={`absolute left-5  transition-all bg-white px-1 ${endLocation ? 'top-[-10px] text-xs border-gray-600' : 'top-2 text-base text-gray-500 peer-focus:top-[-10px] peer-focus:text-gary-600 peer-focus:text-xs'}`}>
                    مقصد
                </label>
                {showEndDropdown && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1">
                        {locations.map((location) => (
                            <li
                                key={location}
                                onClick={() => handleEndSelect(location)}
                                className="p-2 cursor-pointer hover:bg-gray-200"
                            >
                                {location}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </form>
    );
};

export default LocationInput;




