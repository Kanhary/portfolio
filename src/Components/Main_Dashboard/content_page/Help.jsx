// src/HelpPage.jsx
import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen p-8 text-gray-800 bg-gradient-to-r from-blue-50 to-blue-100 ">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-2xl font-extrabold text-gray-900 ">Help Center</h1>
        <p className="text-xl text-gray-600 ">
          Find guidance and support to make the most of our application.
        </p>
      </header>

      <main className="max-w-4xl mx-auto overflow-hidden bg-white shadow-lg rounded-2xl">
        <div className="p-6 text-white bg-gradient-to-r from-indigo-500 to-blue-500">
          <h2 className="mb-4 text-4xl font-semibold">Welcome to the Help Center</h2>
          <p className="text-lg">
            Explore our comprehensive resources and get help with common tasks and troubleshooting.
          </p>
        </div>

        <section className="p-6">
          <div className="pb-4 mb-6 border-b border-gray-200">
            <h3 className="mb-2 text-3xl font-semibold text-gray-900 ">Overview</h3>
            <p className="mb-4 text-gray-700 ">
              The Help Center provides all the information you need to navigate and utilize the features of our system effectively.
            </p>
            <ul className="pl-5 text-gray-700 list-disc">
              <li>Dashboard: Overview of key metrics and data.</li>
              <li>Settings: Customize your user experience.</li>
              <li>Reports: Generate and view comprehensive reports.</li>
            </ul>
          </div>

          <div className="pb-4 mb-6 border-b border-gray-200">
            <h3 className="mb-2 text-3xl font-semibold text-gray-900">Troubleshooting</h3>
            <ul className="pl-5 text-gray-700 list-disc">
              <li>Page Not Loading: Refresh or clear your browser cache.</li>
              <li>Navigation Issues: Check browser compatibility and disable extensions.</li>
              <li>Support Contact: Reach out to <a href="mailto:support@example.com" className="text-blue-400 hover:underline">support@example.com</a>.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-3xl font-semibold text-gray-900 ">Frequently Asked Questions</h3>
            <ul className="pl-5 text-gray-700 list-disc ">
              <li>How to reset my password? Contact to ICT team.</li>
              <li>Can I customize the dashboard? Access customization options in the Settings.</li>
              <li>How to report a bug? Send details to <a href="mailto:support@example.com" className="text-blue-400 hover:underline">support@example.com</a>.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Help;
