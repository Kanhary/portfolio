import React, { useState } from 'react';
import { FiUser, FiLock, FiBell, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

const Setting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <div className="min-h-screen p-6 mt-5 bg-gray-100 font-khmer">
      <div className="container mx-auto">
      <h1 className='text-xl font-medium text-blue-800'>ការកំណត់</h1>
      <div className='mt-3 mb-3 border'></div>

        {/* Profile Settings */}
        <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-xl font-medium text-gray-700">Profile Settings</h3>
          <div className="flex items-center mb-4">
            <FiUser className="w-6 h-6 mr-3 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center mb-4">
            <FiLock className="w-6 h-6 mr-3 text-gray-500" />
            <input
              type="password"
              placeholder="Change Password"
              className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-xl font-medium text-gray-700">Notification Settings</h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Enable Notifications</span>
            <button
              onClick={toggleNotifications}
              className="p-2 text-white bg-indigo-600 rounded-full focus:outline-none"
            >
              {notificationsEnabled ? (
                <FiToggleRight className="w-6 h-6" />
              ) : (
                <FiToggleLeft className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Display Settings */}
        <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-xl font-medium text-gray-700">Display Settings</h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Dark Mode</span>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-white bg-indigo-600 rounded-full focus:outline-none"
            >
              {darkModeEnabled ? (
                <FiToggleRight className="w-6 h-6" />
              ) : (
                <FiToggleLeft className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
