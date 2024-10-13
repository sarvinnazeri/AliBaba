"use client";
import { useState } from "react";

export default function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(Array(options.length).fill(false));

  const toggleDropdown = (index) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <div className="border flex flex-wrap w-full">
      {options.map((option, index) => (
        <div key={index} className="relative w-full">
          <div>
            <button
              type="button"
              className="justify-between inline-flex w-full border border-gray-300 shadow-sm px-4 py-6 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => toggleDropdown(index)}
            >
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-end justify-end flex">{option.label}</span>
            </button>
          </div>

          {isOpen[index] && (
            <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {option.items.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
