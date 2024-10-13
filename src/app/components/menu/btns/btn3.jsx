// components/DateInput.js
"use client"
import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './../../../css/styles.css';

const DateInput = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (startDateRef.current && !startDateRef.current.contains(event.target)) {
                setShowStartDatePicker(false);
            }
            if (endDateRef.current && !endDateRef.current.contains(event.target)) {
                setShowEndDatePicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <form className="flex">
            <div className="relative" ref={startDateRef}>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    onFocus={() => setShowStartDatePicker(true)}
                    placeholderText="تاریخ رفت"
                    className="peer justify-end flex w-[130px] p-2 border border-gray-400 rounded-s-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <label className={`absolute left-2 transition-all bg-white px-1 ${startDate ? 'top-[-10px] text-xs text-gray-400' : 'top-2 text-base text-gray-500 peer-focus:top-[-10px] peer-focus:text-gray-500 peer-focus:text-xs'}`}>
                    تاریخ رفت
                </label>
            </div>
            <div className="relative" ref={endDateRef}>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    onFocus={() => setShowEndDatePicker(true)}
                    placeholderText="تاریخ برگشت"
                    className="peer w-[130px] p-2 border border-gray-400 rounded-e-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <label className={`absolute left-2 transition-all bg-white px-1 ${endDate ? 'top-[-10px] text-xs text-gray-400' : 'top-2 text-base text-gray-500 peer-focus:top-[-10px] peer-focus:text-gray-500 peer-focus:text-xs'}`}>
                    تاریخ برگشت
                </label>
            </div>
        </form>
    );
};

export default DateInput;
