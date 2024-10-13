"use client"
import React, { useState } from 'react';

const PassengerCounter = () => {
    const [value, setValue] = useState(0);

    const increase = () => setValue(value + 1);
    const decrease = () => value > 0 && setValue(value - 1);

    const numberToPersian = (num) => {
        const persianNumbers = ["صفر", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
        return persianNumbers[num] || num;
    };

    return (
        <div className="flex border border-gray-300 rounded-lg w-[250px] text-center cursor-pointer relative justify-start items-center py-2">
            <div className="absolute -top-4 w-[100px] left-[180px] transform -translate-x-1/2 px-2 text-[14px] bg-white text-gray-400">
                تعداد مسافران
            </div>

            <div className="flex items-center justify-center w-fit">
                <button
                    className="w-[30px] h-[30px] mx-2 bg-[#0177db] text-white rounded-xl flex items-center justify-center shadow-md"
                    onClick={decrease}
                >
                    -
                </button>
                <span className="text-xl mx-4">{value}</span>
                <button
                    className="w-[30px] h-[30px] mx-2 bg-[#0177db] text-white rounded-xl flex items-center justify-center shadow-md"
                    onClick={increase}
                >
                    +
                </button>
            </div>
            <div className="relative flex items-center">
                <div className="border-r border-gray-300 h-full flex"></div>
                <p className="px-2 text-center w-[80px]">{numberToPersian(value)} نفر</p>
                <div className="border-l border-gray-300 h-full"></div>
            </div>
        </div>
    );
};

export default PassengerCounter;
