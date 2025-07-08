import React from 'react';

const Home = () => {
  return (
    <section className="min-h-[500px] flex flex-col justify-center items-center text-center px-4 md:px-16 font-khmer bg-transparent">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-[38px] md:text-[48px] font-bold text-gray-800 leading-tight">
          Hii,  <span className="text-blue-900">RY</span>
        </h1>
        <p className="text-[18px] text-gray-600">
          A passionate developer crafting clean and creative web experiences.
        </p>
      </div>

      <div className="mt-8 space-x-4">
        <button className="px-6 py-3 border text-white bg-black text-sm hover:bg-transparent hover:text-black hover:border-black transition duration-300 rounded-tl-md rounded-br-md">
          View My Works
        </button>
        <button className="px-6 py-3 border border-black text-sm font-medium hover:bg-black hover:text-white transition duration-300 rounded-tl-md rounded-br-md">
          Get In Touch
        </button>
      </div>

    </section>
    
  );
};

export default Home;
