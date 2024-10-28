import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import { GetUserLogin } from '../../api/user'; 
import { FaUpload } from 'react-icons/fa'; // Import the upload icon
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FiUser, FiLogOut } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCamera } from "react-icons/fa";

const HeaderPage = ({ toggleSidebar }) => {
  const [showImageRemovalAlert, setShowImageRemovalAlert] = useState(false); // New state for removal alert
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState(null);
  const navigate = useNavigate();
  const [currentProfileImage, setCurrentProfileImage] = useState(avatar); // Replace with actual image URL
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  
  const notificationsRef = useRef(null);

  
  useEffect(() => {
    GetUserLogin()
      .then(res => {
        setUsername(res.data.data.username);
        setAvatar(res.data.data.avatar);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

    const handleRemoveProfileImage = () => {
    setProfileImage(null); // Clear the uploaded image from state
    setNewProfileImage(null); // Clear the new image file
    document.getElementById("file-input").value = ""; // Reset the file input
    localStorage.removeItem('profileImage'); // Remove the image from local storage
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleNotificationsToggle = () => {
    setIsNotificationsOpen(prev => !prev);
  };

  const handleEditProfile = (e) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
  };

  const handleSaveProfileImage = () => {
    if (newProfileImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(newProfileImage);
      
      // Close the edit modal and show success alert
      setIsEditModalOpen(false);
      setShowSuccessAlert(true);
      
      // Hide alert after 3 seconds
      setTimeout(() => setShowSuccessAlert(false), 3000);
      
    } else {
      // Handle case when the image is removed
    setProfileImage(null);
    localStorage.removeItem('profileImage'); // Remove image from local storage
    setIsEditModalOpen(false);
    setShowImageRemovalAlert(true); // Show alert for image removal

    // Hide alert after 3 seconds
    setTimeout(() => setShowImageRemovalAlert(false), 3000);
    }
  };
  

  const handleImageChange = (e) => {
    setNewProfileImage(e.target.files[0]);
  };
  const handleLogout = (e) => {
    e.stopPropagation(); 
    localStorage.removeItem("userToken"); 
    navigate("/");
  };

  return (
    <div>
      <nav className='fixed top-0 z-50 w-full bg-white border border-b-gray-200'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          {/* Sidebar Toggle Button */}
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

          {/* Notifications and Profile */}
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
                <div className="px-5 py-3 bg-gray-100 border-b border-gray-200">
                  <p className="flex items-center font-medium text-gray-900">
                    <BiBell size={20} className="mr-2 text-indigo-500" />
                    Notification
                  </p>
                </div>

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

            {/* Profile Dropdown */}
            <button 
              type='button' 
              className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 transition ease-in-out duraiton-300' 
              aria-expanded={isDropdownOpen ? "true" : "false"} 
              onClick={handleDropdownToggle}
            >
              <span className='sr-only'>Open user menu</span>
              <img src={avatar || "/blank-profile-picture.png"} className="w-8 h-8 rounded-full sm:w-12 sm:h-10 md:w-8 md:h-8 lg:w-8 lg:h-8 border border-blue-600" alt="User Photo" />
            </button>

            {isDropdownOpen && (
              <div 
              className='absolute right-0 z-50 w-64 mt-2 text-base list-none bg-white border  divide-gray-300 rounded shadow-lg top-full font-khmer '>
                <div className='flex items-center px-4 py-3'>
                      <button 
                        type='button' 
                        className='flex items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 transition-all ease-in-out duration-300' 
                        aria-expanded={isDropdownOpen ? "true" : "false"} 
                        onClick={handleDropdownToggle}
                      >
                        <span className='sr-only'>Open user menu</span>
                        <img src={avatar || "/blank-profile-picture.png"} className="w-8 h-8 rounded-full sm:w-12 sm:h-10 md:w-8 md:h-8 lg:w-8 lg:h-8 border border-blue-600" alt="User Photo" />
                        
                        {/* // Alert message Uload Profile Image// */}
                        {showSuccessAlert && (
                          <div 
                          data-aos="slide-left" 
                          className="fixed top-4 right-4 bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded-lg shadow-md transition-opacity duration-300 ease-in-out">
                            <span className="font-medium">Success!</span> Your Profile Upload Success!
                          </div>
                        )}

                        {/* //Alert message Remove Profile Image// */}
                        {showImageRemovalAlert && (
                          <div 
                            data-aos="slide-left" 
                            className="fixed top-4 right-4 bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-2 rounded-lg shadow-md transition-opacity duration-300 ease-in-out">
                            <span className="font-medium">Success!</span> Your Profile Image Has Been Removed!
                          </div>
                        )}
                      </button>
                      <div className='ml-3 mt-2'>
                        <p className='font-normal text-gray-900 text-[14px]'>Welcome, {username}!</p>
                        {/* <p className='py-1 text-sm font-medium text-gray-400 truncate'>{userEmail}</p> */}
                      </div>
                </div>

                <hr className='w-52 mx-auto' />

                <ul className="py-1">
                    <li>
                      <div className='flex justify-center'>
                      <button className="flex items-center w-52 px-4 py-2 text-sm rounded-lg duration-300 text-blue-700 hover:bg-blue-50" onClick={handleEditProfile}>
                        <FiUser className="mr-2" /> Edit Profile
                      </button>
                      </div>
                    </li>
                    <li>
                      <div className='flex justify-center'> 
                      <button className="flex items-center w-52 px-4 py-2 text-sm rounded-lg duration-300 text-red-600 hover:bg-red-50" onClick={handleLogout}>
                        <FiLogOut className="mr-2" /> Sign Out
                      </button>
                      </div>
                    </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
    {isEditModalOpen && (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60 transition-all ease-in-out duration-300"
  >
    <div 
      className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl transform transition-all"
      data-aos="fade-right"
    >
      <h3 className="mb-4 text-2xl font-semibold text-gray-800 flex justify-center">Edit Image</h3>

      {/* Display Profile Image (Current or New) */}
      <div className="relative mb-4 flex justify-center items-center">
      {/* Profile Image with Icon */}
        <div className="w-52 h-52 rounded-full border-2 border-dashed border-blue-500 shadow-md flex items-center justify-center overflow-hidden flex-col">
            {newProfileImage ? (
              <img 
                src={URL.createObjectURL(newProfileImage)}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <FaCamera className="text-gray-500 text-5xl" />  {/* Display icon if no image is uploaded */}
                <p className='mt-4 text-sm text-gray-600'>Upload Image <br />
                (PNG or JPEG)</p> {/* Display text only if no image is uploaded */}
              </>
            )}
          </div>
      </div>

      {/* Upload and Remove Buttons */}
      <div className="flex flex-col items-center space-y-2">
        {/* Upload Button */}
        <label 
          htmlFor="file-input"
          className="inline-flex items-center w-full py-2 px-4 text-sm text-green-600  rounded-lg cursor-pointer hover:bg-green-200 duration-300 border-2 border-dashed border-green-500"
        >
          <div className='flex justify-center mx-auto'>
          <p className=''>Upload Image</p>
          <FaUpload className="ml-2 mt-1" />
          </div>
        </label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="hidden" 
          id="file-input"
        />

        {/* Remove Button */}
        <span
          className="inline-flex items-center w-full py-2 px-4 text-sm text-yellow-600 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 duration-300 border-2 border-dashed border-yellow-500"
          onClick={handleRemoveProfileImage}
        >
          <p className='mx-auto'>Remove Image</p>
        </span>
      </div>

      {/* Action Buttons */}
      <div className="relative">
      {/* Success Alert */}
      {/* {showSuccessAlert && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded-lg shadow-md transition-opacity duration-300 ease-in-out">
          <span className="font-medium">Success!</span> Your Profile Upload Success!
        </div>
      )} */}

      {/* Save and Cancel Buttons */}
      <div className="flex justify-end space-x-3 mt-8">
        <button 
          className="px-5 py-2 text-sm font-normal text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300"
          onClick={handleSaveProfileImage}
        >
          Save
        </button>
        <button 
          className="px-5 py-2 text-sm font-normal text-red-600 bg-red-50 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 duration-300"
          onClick={() => setIsEditModalOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
    </div>
  </div>
)}
    </div>
  );
};

export default HeaderPage;
