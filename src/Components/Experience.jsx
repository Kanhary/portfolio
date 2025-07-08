import React from 'react'

const Experience = () => {
  return (
    <section className='font-khmer px-16 pb-3 '>
      <h2 className='text-center font-bold text-3xl text-gray-800 pt-10 pb-10'>Experience</h2>
      <div>
        <div className='bg-slate-200 rounded-xl'>
          <div className='p-4'>
            <div className='flex space-x-[750px] mb-5'>
              <div>
                <h1 className='font-semibold'>Junior Frontend Developer</h1>
                <p className='text-blue-800'>Phnom Penh Autonomous Port</p>
              </div>
              <div>
                <p className='text-white text-[12px] px-4 py-1 bg-slate-600 border border-slate-400 rounded-full shadow-sm hover:bg-slate-500 transition duration-200'>2024-Present</p>
              </div>
            </div>
            <span className='mt-6'>Developed responsive web applications and collaborated with Back-End developer to create a dynamic website.</span>
            <div className="flex flex-wrap gap-2 mt-4">
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

export default Experience