import React, { useEffect, useState } from 'react';

const Header = ({ onNavigate }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClass =
    'relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-[width] before:duration-500 hover:before:w-full';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`pt-6 pb-3 px-6 md:px-16 font-khmer flex items-center justify-between top-0 z-10 sticky duration-500 ${
        isScroll ? 'shadow-md bg-white' : ''
      }`}
    >
      {/* Logo */}
      <div className='font-semibold text-[20px]'>Portfolio</div>

      {/* Hamburger */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <svg
            className='w-6 h-6 text-black'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex space-x-8 font-medium text-[15px]'>
        <li className={navItemClass} onClick={onNavigate.home}>Home</li>
        <li className={navItemClass} onClick={onNavigate.about}>About</li>
        <li className={navItemClass} onClick={onNavigate.skill}>Skill</li>
        <li className={navItemClass} onClick={onNavigate.project}>Project</li>
        <li className={navItemClass} onClick={onNavigate.experience}>Experience</li>
        <li className={navItemClass} onClick={onNavigate.contact}>Contact</li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 font-medium text-[15px] md:hidden z-20'>
          <li className={navItemClass} onClick={() => { onNavigate.home(); toggleMenu(); }}>Home</li>
          <li className={navItemClass} onClick={() => { onNavigate.about(); toggleMenu(); }}>About</li>
          <li className={navItemClass} onClick={() => { onNavigate.skill(); toggleMenu(); }}>Skill</li>
          <li className={navItemClass} onClick={() => { onNavigate.project(); toggleMenu(); }}>Project</li>
          <li className={navItemClass} onClick={() => { onNavigate.experience(); toggleMenu(); }}>Experience</li>
          <li className={navItemClass} onClick={() => { onNavigate.contact(); toggleMenu(); }}>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
