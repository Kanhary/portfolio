import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header_page from './Components/Header_page'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Dashboard from './Components/content_page/Dashboard'
import Computer from './Components/content_page/Computer';
import EmployeePositionList from './Components/content_page/EmployeePositionList';
import GenderList from './Components/content_page/GenderList';
import Maintenance from './Components/content_page/Maintenance';
import Setting from './Components/content_page/Setting';
import Report from './Components/content_page/Report';
import Help from './Components/content_page/Help';


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };
  return (
    <Router>
      <div className='flex flex-col h-screen '>
        <Header_page toggleSidebar={toggleSidebar} />
        <div className='flex flex-1'>
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <main className='flex-1 p-6 overflow-y-auto bg-gray-100'>
            <Routes>
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/computer' element={<Computer/>} />
              <Route path='/employee/position-list'element={<EmployeePositionList/>} />
              <Route path='/employee/gender-list' element={<GenderList/>} />
              <Route path='/maintenance' element={<Maintenance/>} />
              <Route path='/setting' element={<Setting/>} />
              <Route path='/report' element={<Report/>} />
              <Route path='/help' element={<Help/>} />
            </Routes>
          </main>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
