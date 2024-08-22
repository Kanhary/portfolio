import React, { useState } from 'react';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'account':
        return <AccountSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'privacy':
        return <PrivacySettings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
          <div className="bg-white shadow-lg dark:bg-gray-800 sm:rounded-lg">
            <div className="flex">
              {/* Sidebar Navigation */}
              <nav className="w-1/4 p-4 space-y-2 bg-gray-200 dark:bg-gray-700 sm:rounded-l-lg">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-500 hover:text-white ${
                    activeTab === 'profile' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('account')}
                  className={`block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-500 hover:text-white ${
                    activeTab === 'account' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  Account
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-500 hover:text-white ${
                    activeTab === 'notifications' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-500 hover:text-white ${
                    activeTab === 'privacy' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  Privacy
                </button>
              </nav>

              {/* Main Content Area */}
              <div className="w-3/4 p-6">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Settings Section
const ProfileSettings = () => (
  <div>
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Settings</h2>
    <div className="mt-4">
      {/* Profile form fields */}
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  </div>
);

// Account Settings Section
const AccountSettings = () => (
  <div>
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Account Settings</h2>
    <div className="mt-4">
      {/* Account form fields */}
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Update Password
      </button>
    </div>
  </div>
);

// Notifications Settings Section
const NotificationSettings = () => (
  <div>
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notification Settings</h2>
    <div className="mt-4">
      {/* Notification toggles */}
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-900 dark:text-gray-200">Email Notifications</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-900 dark:text-gray-200">Push Notifications</span>
        </label>
      </div>
      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Save Settings
      </button>
    </div>
  </div>
);

// Privacy Settings Section
const PrivacySettings = () => (
  <div>
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy Settings</h2>
    <div className="mt-4">
      {/* Privacy settings */}
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-900 dark:text-gray-200">Make Profile Public</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-900 dark:text-gray-200">Enable Activity Status</span>
        </label>
      </div>
      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  </div>
);

export default Setting;
