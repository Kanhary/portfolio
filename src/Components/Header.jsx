import React, { useEffect, useState } from 'react'

const Header = (onNavigate) => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() =>{
    const handleScroll = () =>{
        setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })
  const navItemClass = 'relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-[width] before:duration-500 hover:before:w-full'
  return (
    <div className={`pt-6 pb-3 px-16 font-khmer flex space-x-[500px] top-0 z-10 sticky duration-500 ${isScroll ? 'shadow-md duration-500 bg-white' : '  '}`}>
        <div className='font-semibold text-[20px]'>Portfolio</div>
        <div>
            <ul className='flex space-x-8 font-medium text-[15px]'>
                <li className={navItemClass} onClick={onNavigate.home}>Home</li>
                <li className={navItemClass} onClick={onNavigate.about}>About</li>
                <li className={navItemClass} onClick={onNavigate.skill}>Skill</li>
                <li className={navItemClass} onClick={onNavigate.project}>Project</li>
                <li className={navItemClass} onClick={onNavigate.experience}>Experience</li>
                <li className={navItemClass} onClick={onNavigate.contact}>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header