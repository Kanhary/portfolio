import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-32 h-32">
        {/* Gradient Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-8 rounded-full border-t-transparent border-gradient animate-spin"></div>
        </div>
        {/* Center Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .border-gradient {
          border-image: linear-gradient(to right, #3b82f6, #8b5cf6, #ef4444);
          border-image-slice: 1;
        }

        .animate-spin {
          animation: spin 1.5s linear infinite;
        }

        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
