// src/components/FreshTeaBackground.jsx
import React from 'react';

const FreshTeaBackground = ({ children }) => {
  return (
    <div className="min-h-screen w-full animate-tea transition-colors duration-1000 text-gray-800 font-sans">
      {children}
    </div>
  );
};

export default FreshTeaBackground;
