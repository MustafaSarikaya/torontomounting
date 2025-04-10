
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-brown-dark"
        >
          <path 
            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 18v-6" 
            stroke="#F47831" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="font-bold text-xl">
        <span>Toronto</span>
        <span className="text-orange">Mount</span>
        <span>Master</span>
      </div>
    </Link>
  );
};

export default Logo;
