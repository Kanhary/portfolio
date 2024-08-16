import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header_page from './Header_page';
import Sidebar from './Sidebar';
import Dashboard from './content_page/Dashboard';
import Computer from './content_page/Computer';
import EmployeePositionList from './content_page/EmployeePositionList';
import GenderList from './content_page/GenderList';
import Maintenance from './content_page/Maintenance';
import Setting from './content_page/Setting';
import Help from './content_page/Help';
import Report from './content_page/Report';

function MainDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header_page toggleSidebar={toggleSidebar} />
      <div className='flex flex-1'>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className='flex-1 p-6 overflow-y-auto bg-gray-100'>
          <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='computer' element={<Computer />} />
            <Route path='employee/position-list' element={<EmployeePositionList />} />
            <Route path='employee/gender-list' element={<GenderList />} />
            <Route path='maintenance' element={<Maintenance />} />
            <Route path='setting' element={<Setting />} />
            <Route path='report' element={<Report />} />
            <Route path='help' element={<Help />} />
            <Route path='*' element={<NotFound />} /> {/* Handle unmatched routes */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

function NotFound() {
  return <div>Page Not Found</div>;
}

export default MainDashboard;
