import React from 'react';

const Header_page = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full p-3 bg-gray-800 st shadow-m md:px-6 lg:px-8">
      {/* Logo and Title */}
      <div onClick={toggleSidebar} className="flex items-center space-x-3">
        <img
          src="/LOGO PPAP.png"
          alt="Logo"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <h1 className="text-xs font-semibold text-white md:text-2xl">
          PPAP
        </h1>
      </div>

      {/* User Account Section */}
      <div className="flex items-center space-x-4">
        <div className="hidden text-right md:block">
          <p className="text-sm font-medium text-white md:text-lg">Kagnary</p>
          <p className="text-xs text-gray-400 md:text-sm">Administrator</p>
        </div>
        <div className="relative">
          <img
            // src="/User.jpg"
            alt="User Avatar"
            className="w-8 h-8 transition duration-200 border-2 border-transparent rounded-full md:w-10 md:h-10 hover:border-gray-300"
          />
          {/* Dropdown Menu (Optional) */}
          {/* <FaUserCircle className="absolute top-0 left-0 w-8 h-8 text-white transition-opacity duration-200 opacity-0 cursor-pointer md:w-10 md:h-10 hover:opacity-100" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header_page;
