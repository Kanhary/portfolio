import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header_page from './Header_page';
import Sidebar from './Sidebar';
import Computer from './content_page/Computer';
import EmployeePositionList from './content_page/EmployeePositionList';
import GenderList from './content_page/GenderList';
import Maintenance from './content_page/Maintenance';
import Setting from './content_page/Setting';
import Help from './content_page/Help';
import Report from './content_page/Report';
import Loader from './commons/Loader';
import EmployeeInformation from './content_page/EmployeeInformation';
import Dashboard from './content_page/Dashboard/Dashboard';

function MainDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Start with sidebar open for better UX
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className='flex h-screen overflow-hidden'>
      <Header_page toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`flex-1 p-6 overflow-y-auto bg-gray-100 transition-all duration-300 ${
          isSidebarOpen ? 'md:ml-64' : 'md:ml-0' // Adjust margin on medium screens and up
        }`}
      >
        <Routes>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='computer' element={<Computer />} />
          <Route path='employee/position-list' element={<EmployeePositionList />} />
          <Route path='employee/gender-list' element={<GenderList />} />
          <Route path='employee/employee-information' element={<EmployeeInformation />} />
          <Route path='maintenance' element={<Maintenance />} />
          <Route path='setting' element={<Setting />} />
          <Route path='report' element={<Report />} />
          <Route path='help' element={<Help />} />
          <Route path='*' element={<NotFound />} /> {/* Handle unmatched routes */}
        </Routes>
      </main>
    </div>
  );
}

function NotFound() {
  return <div className='p-6 text-center text-gray-700'>Page Not Found</div>;
}

export default MainDashboard;
