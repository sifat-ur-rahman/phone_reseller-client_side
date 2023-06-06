import React from 'react';
import { useState } from 'react';

const FAQCard = ({ title, content }) => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className='p-4'>
          <div className="border border-gray-200 rounded-xl mb-4">
      <button
        className="w-full flex justify-between items-center px-4 py-2 bg-white hover:bg-lime-100 focus:outline-none"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <svg
          className={`w-5 h-5 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-lime-100">
          <p className="text-gray-800">{content}</p>
        </div>
      )}
    </div>
  

        </div>
    );
};

export default FAQCard;