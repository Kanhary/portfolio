import React, { useState } from 'react';
import { FiUser, FiLock, FiBell, FiMail, FiGlobe, FiImage } from 'react-icons/fi';

const Setting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('English');
  const [profilePicture, setProfilePicture] = useState(null);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleEmailNotifications = () => setEmailNotificationsEnabled(!emailNotificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleProfilePictureChange = (e) => setProfilePicture(URL.createObjectURL(e.target.files[0]));

  return (
    <div className={`min-h-screen p-8 mt-5 font-khmer ${darkModeEnabled ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">ការកំណត់</h1>

        {/* Profile Settings */}
        <div className="p-8 mb-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">ការកំណត់ពត៌មានផ្ទាល់ខ្លួន</h3>
          <div className="flex items-center mb-6">
            <FiImage className="w-7 h-7 mr-4 text-blue-600" />
            <input
              type="file"
              onChange={handleProfilePictureChange}
              className="w-full p-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 focus:bg-white transition-colors"
            />
            {profilePicture && (
              <img src={profilePicture} alt="Profile Preview" className="w-20 h-20 ml-4 rounded-full object-cover" />
            )}
          </div>
          <div className="flex items-center mb-6">
            <FiUser className="w-7 h-7 mr-4 text-blue-600" />
            <input
              type="text"
              placeholder="ឈ្មោះអ្នកប្រើប្រាស់"
              className="w-full p-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 focus:bg-white transition-colors"
            />
          </div>
          <div className="flex items-center mb-6">
            <FiLock className="w-7 h-7 mr-4 text-blue-600" />
            <input
              type="password"
              placeholder="ប្តូរលេខសម្ងាត់"
              className="w-full p-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 focus:bg-white transition-colors"
            />
          </div>
          <div className="flex items-center mb-6">
            <FiMail className="w-7 h-7 mr-4 text-blue-600" />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="អាសយដ្ឋានអ៊ីមែល"
              className="w-full p-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 focus:bg-white transition-colors"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save Changes</button>
        </div>

        {/* Notification Settings */}
        <div className="p-8 mb-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">ការកំណត់ការជូនដំណឹង</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg text-gray-700">បើកដំណើរការជូនដំណឹង</span>
            <div
              onClick={toggleNotifications}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                notificationsEnabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-700">ទទួលការជូនដំណឹងតាមអ៊ីមែល</span>
            <div
              onClick={toggleEmailNotifications}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                emailNotificationsEnabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  emailNotificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="p-8 mb-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">ការកំណត់បង្ហាញ</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg text-gray-700">របៀបកណ្តាលយប់</span>
            <div
              onClick={toggleDarkMode}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                darkModeEnabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkModeEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg text-gray-700">ភាសា</span>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="p-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              <option value="English">អង់គ្លេស</option>
              <option value="Khmer">ខ្មែរ</option>
              <option value="French">បារាំង</option>
              <option value="Spanish">អេស្ប៉ាញ</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
