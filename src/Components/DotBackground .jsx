import React from 'react';

const DotBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-floating"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DotBackground;

