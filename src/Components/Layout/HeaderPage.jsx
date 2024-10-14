import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { BiBell } from "react-icons/bi";

const HeaderPage = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const [editedUserName, setEditedUserName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const navigate = useNavigate();
  const notificationsRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('userToken');
      if (token) {
        try {
          const response = await fetch('/api/user', {
            headers: { 'Authorization': `Bearer ${token}` },
          });

          if (!response.ok) throw new Error('Failed to fetch user data');

          const userData = await response.json();
          setUserName(userData.name);
          setEditedUserName(userData.name);
          setEditedEmail(`${userData.name}@example.com`); // Adjust as necessary
        } catch (error) {
          console.error(error);
          navigate("/");
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleDropdownToggle = () => setIsDropdownOpen(prev => !prev);
  const handleNotificationsToggle = () => setIsNotificationsOpen(prev => !prev);

  const handleEditProfile = (e) => {
    e.stopPropagation(); // Prevents dropdown from closing
    setIsModalOpen(true); // Open the edit profile modal
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    localStorage.removeItem("userToken");
    setUserName(null);
    navigate("/");
  };

  const handleSaveChanges = () => {
    console.log('Profile updated:', { editedUserName, editedEmail });
    setIsModalOpen(false);
  };

  return (
    <nav className='fixed top-0 z-50 w-full bg-white border border-b-gray-200'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          {/* Sidebar toggle button and logo */}
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

          {/* Marquee for welcome message */}
          <div className="items-center justify-center hidden overflow-hidden lg:flex grow">
            <marquee behavior="" direction="left" className="text-sm font-normal text-blue-800 md:text-base font-khmer">
              <span className="">
                <img src="/Cambodia-m.gif" alt="logo" className="inline w-6 h-6 mx-2" />
              </span>
              <span className='ml-2 text-sm'>សូមស្វាគមន៍មកកាន់គេហទំព័រគ្រប់គ្រងទិន្នន័យរបស់​ ក.ស.ភ. យើងរីករាយវត្តមានរបស់អ្នកនៅទីនេះ</span>
            </marquee>
          </div>

          {/* Notifications and user profile */}
          <div className='relative flex items-center ms-3'>
            <button 
              className="relative mr-5 text-gray-600 hover:text-gray-800" 
              onClick={handleNotificationsToggle}
              ref={notificationsRef}
            >
              <BiBell size={24} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">3</span>
            </button>

            {isNotificationsOpen && (
              <div className="absolute z-50 mt-2 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg w-72 right-16 top-full font-khmer">
                <div className="px-5 py-3 bg-gray-100 border-b border-gray-200">
                  <p className="flex items-center font-medium text-gray-900">
                    <BiBell size={20} className="mr-2 text-indigo-500" />
                    សារជូនដំណឹង
                  </p>
                </div>

                <ul className="divide-y divide-gray-200">
                  {/* Sample notifications */}
                  {["New employee added", "System update available", "Server backup completed"].map((notification, index) => (
                    <li key={index} className="flex items-center px-4 py-3 transition-colors hover:bg-gray-50">
                      <div className="flex-shrink-0 w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
                      <div className="ml-3 text-sm text-gray-700">
                        {notification}
                        <p className="text-xs text-gray-500 mt-0.5">Just now</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

<div className="relative">
  <button 
    type="button" 
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
    aria-expanded={isDropdownOpen ? "true" : "false"} 
    onClick={handleDropdownToggle}
    aria-label="Open user menu"
  >
    <img 
      src="/blank-profile-picture.png" 
      className="w-full h-full rounded-full object-cover" 
      alt="User Photo" 
    />
  </button>

  {isDropdownOpen && (
    <div className="absolute right-0 z-50 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="px-4 py-3">
        <span className="block text-sm font-medium text-gray-800">Hello, {userName || 'Guest'}!</span>
        <span className="block text-sm text-gray-500 truncate">{userName ? `${userName}@example.com` : 'user@example.com'}</span>
      </div>
      <div className="py-2">
        <button 
          onClick={handleEditProfile} 
          className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition duration-200 ease-in-out"
        >
          Edit Profile
        </button>
        <button 
          onClick={handleLogout} 
          className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition duration-200 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  )}
</div>

          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
      <h2 className="text-lg font-semibold text-gray-800">Edit Profile Picture</h2>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files[0])}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full cursor-pointer hover:border-blue-500 focus:border-blue-500 focus:outline-none"
        />
      </div>
      
      {/* Image Preview */}
      {profilePicture && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(profilePicture)}
            alt="Profile Preview"
            className="w-full h-32 object-cover rounded-md border border-gray-200"
          />
        </div>
      )}
      
      <div className="flex justify-end mt-6">
        <button 
          onClick={() => setIsModalOpen(false)} 
          className="mr-3 text-gray-500 hover:text-gray-700 transition duration-200"
        >
          Cancel
        </button>
        <button 
          onClick={handleSaveChanges} 
          className="bg-blue-600 text-white rounded px-4 py-2 transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Upload
        </button>
      </div>
    </div>
  </div>
)}


    </nav>
  );
};

export default HeaderPage;
