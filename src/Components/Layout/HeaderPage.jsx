import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { BiBell } from "react-icons/bi";

const HeaderPage = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const notificationsRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleNotificationsToggle = () => {
    setIsNotificationsOpen(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Example, adjust based on your auth setup
    navigate('/'); // Redirect to login page
  };

  return (
    <nav className='fixed top-0 z-50 w-full bg-white border border-b-gray-200'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-start justify-normal rtl:justify-end w-80'>
            <button 
              data-drawer-target="logo-sidebar" 
              data-drawer-toggle="logo-sidebar" 
              aria-controls="logo-sidebar" 
              type="button" 
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <img src='/LOGO PPAP.png' className="h-8 me-3" alt="PPAP Logo" />
              <span className="self-center text-base font-medium sm:text-xl whitespace-nowrap font-khmer">ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យកុំព្យូទ័រ</span>
            </a>
          </div>

          {/* Highlighted Special Message with Subtle Pulse/Fade Animation */}
          <div className="items-center justify-center hidden overflow-hidden md:flex grow">
            <div className="px-6 py-2 font-medium rounded-md whitespace-nowrap animate-marquee">
              <span className="text-sm text-blue-800 md:text-xl font-khmer">សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់យើង! យើងរីករាយដែលមានអ្នកនៅទីនេះ</span>
            </div>
          </div>

          <div className='relative flex items-center ms-3'>
            <button 
              className="relative mr-5 text-gray-600 hover:text-gray-800" 
              onClick={handleNotificationsToggle}
              ref={notificationsRef}
            >
              <BiBell size={24} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                3
              </span>
            </button>

            {isNotificationsOpen && (
              <div className="absolute z-50 mt-2 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg w-72 right-16 top-full font-khmer">
                {/* Header */}
                <div className="px-5 py-3 bg-gray-100 border-b border-gray-200">
                  <p className="flex items-center font-medium text-gray-900">
                    <BiBell size={20} className="mr-2 text-indigo-500" />
                    សារជូនដំណឹង
                  </p>
                </div>

                {/* Notifications List */}
                <ul className="divide-y divide-gray-200">
                  <li className="flex items-center px-4 py-3 transition-colors hover:bg-gray-50">
                    <div className="flex-shrink-0 w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
                    <div className="ml-3 text-sm text-gray-700">
                      New employee added
                      <p className="text-xs text-gray-500 mt-0.5">Just now</p>
                    </div>
                  </li>
                  <li className="flex items-center px-4 py-3 transition-colors hover:bg-gray-50">
                    <div className="flex-shrink-0 w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                    <div className="ml-3 text-sm text-gray-700">
                      System update available
                      <p className="text-xs text-gray-500 mt-0.5">5 minutes ago</p>
                    </div>
                  </li>
                  <li className="flex items-center px-4 py-3 transition-colors hover:bg-gray-50">
                    <div className="flex-shrink-0 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    <div className="ml-3 text-sm text-gray-700">
                      Server backup completed
                      <p className="text-xs text-gray-500 mt-0.5">1 hour ago</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            <button 
              type='button' 
              className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 ' 
              aria-expanded={isDropdownOpen ? "true" : "false"} 
              onClick={handleDropdownToggle}
              ref={dropdownRef}
            >
              <span className='sr-only'>Open user menu</span>
              <img src="\blank-profile-picture.png" className='w-8 h-8 rounded-full' alt="User Photo" />
            </button>
            {isDropdownOpen && (
              <div className='absolute right-0 z-50 w-64 mt-2 text-base list-none bg-white divide-y divide-gray-300 rounded shadow-lg top-full font-khmer'>
                <div className='px-4 py-3'>
                  <p className='font-bold text-gray-900 text-ms'>Uk Kagnary</p>
                  <p className='py-1 text-sm font-medium text-gray-400 truncate'>ukkanhary04@gmail.com</p>
                </div>
                <ul className="py-1">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 " onClick={handleLogout}>Sign out</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
