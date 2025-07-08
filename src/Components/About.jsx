import React, { useState } from 'react';
import { FaMusic } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="px-6 md:px-16 py-10 font-khmer">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-3">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Image */}
    <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-8 py-10">
      {/* Image Section */}
      <div className="mb-6">
        <img
          src="/premium_photo-1731442837021-3929f70e1710.jpg"
          alt="Profile"
          className="w-[280px] md:w-[320px] h-[320px] object-cover border-2 border-slate-300 rounded-tl-2xl rounded-br-2xl shadow-2xl shadow-slate-800 transition-transform duration-500 hover:scale-95"
        />
      </div>

      {/* Tag Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[450px] px-2">
        <div className="flex items-center justify-center gap-2 border-2 border-purple-200 rounded-md px-4 py-2 text-purple-700 bg-purple-50 shadow hover:shadow-md transition">
          <FaMusic className="text-purple-500 text-lg" />
          <span className="text-sm font-medium">Music Lover</span>
        </div>

        <div className="flex items-center justify-center gap-2 border-2 border-green-200 rounded-md px-4 py-2 text-green-700 bg-green-50 shadow hover:shadow-md transition">
          <GiCoffeeCup className="text-green-600 text-xl" />
          <span className="text-sm font-medium">Matcha Enthusiast</span>
        </div>
      </div>
    </div>

        {/* Right Side: Book Flip Card */}
        <div className="relative w-full h-[400px] perspective">
          <div
            onClick={() => setFlipped(!flipped)}
            className={`relative w-full h-full duration-700 transform-style preserve-3d cursor-pointer transition-transform ${
              flipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front Side (Intro) */}
            <div className="absolute w-full h-full bg-transparent border border-gray-200 rounded-xl shadow-md p-6 backface-hidden">
              <h3 className="text-2xl font-semibold text-black mb-4">Hi, Pretties Girlll</h3>
              <p className="text-base leading-relaxed text-gray-700 mb-2">
                I am a passionate developer with experience in building responsive and creative web applications. I enjoy solving problems, learning new technologies, and crafting clean user experiences.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                Whether it's frontend, backend, or full-stack development — I love bringing ideas to life through code.
              </p>
              <p className="text-sm text-gray-400 pt-28 italic bottom-11 left-52">page 1</p>
            </div>

            {/* Back Side (Education) */}
            <div className="absolute w-full h-full bg-transparent border border-gray-200 rounded-xl shadow-md p-6 rotate-y-180 backface-hidden">
              <h3 className="text-2xl font-semibold text-black mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Graduate diploma at somrong ponley high school (2021)</li>
                <li>Graduate Bachelor of Computer Science - RUPP (2025)</li>
                {/* <li>Web Development Bootcamp - FreeCodeCamp</li> */}
                <li>Self-taught projects and open-source contribution</li>
              </ul>
              <p className="text-sm text-gray-400 pt-48 italic">Page 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
