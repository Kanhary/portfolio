import React from 'react'
import { IoCodeSharp } from "react-icons/io5";
import DotBackground from './DotBackground ';
import ParticleBackground from './ParticleBackground';

const Skill = () => {
  return (
    <section className='font-khmer px-16 mb-2'>
      <h2 className='text-center font-bold text-3xl text-gray-800'>Skills</h2>
      <div className='border-2 align-middle flex border-dashed rounded-xl border-blue-200 mt-3 '>
        <ParticleBackground/>
        <div className='p-4  border-1 border-slate-600 w-full'>
        <div className="w-72 h-72 bg-slate-200 rounded-xl border-2 border-slate-100 shadow-lg flex flex-col justify-center items-center transition hover:shadow-2xl duration-300">
          <div className="bg-slate-500 text-white w-14 h-14 flex items-center justify-center rounded-full mb-4">
            <IoCodeSharp size={28} />
          </div>
          <h3 className=" text-lg font-semibold">Frontend Development</h3>
          <div className="flex flex-wrap gap-2 mt-4 p-3">
            {["React", "Tailwind", "JavaScript"].map((tech, index) => (
              <span
                key={index}
                className="text-white text-[12px] px-4 py-1 bg-slate-600 border border-slate-400 rounded-full shadow-sm hover:bg-slate-500 transition duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}

export default Skill