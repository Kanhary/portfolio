// Tabs.jsx
import React, { useState } from 'react';
import LongCourse from './LongCourse'; // Adjust the import path as needed

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <div className="p-4">Content for Tab 2</div>;
      case 'tab2':
        return <LongCourse/>
      case 'tab3':
        return <div className="p-4">Content for Tab 3</div>;
      default:
        return <div className="p-4">Default Content</div>;
    }
  };

  return (
    <div>
      <div className="flex border-b">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'tab1' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('tab1')}
        >
          Tab 1
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'tab2' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('tab2')}
        >
          Tab 2
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'tab3' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('tab3')}
        >
          Tab 3
        </button>
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabMenu;
