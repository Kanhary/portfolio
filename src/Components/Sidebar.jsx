import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaLaptop, FaUserFriends, FaCog } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isEmployeeMenuOpen, setEmployeeMenuOpen] = useState(false);

  const toggleEmployeeMenu = () => {
    setEmployeeMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) { // Close sidebar on mobile screen size
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`sidebar fixed left-0 h-full bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out z-40 mt-15 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 md:w-64`}
    >
      <nav className="flex flex-col h-full">
        <ul className="flex flex-col mt-6 space-y-1">
          <NavItem icon={<AiFillHome />} text="Dashboard" to="/dashboard" onClick={handleLinkClick} />
          <NavItem icon={<FaLaptop />} text="Computer" to="/computer" onClick={handleLinkClick} />
          <NavItem
            icon={<FaUserFriends />}
            text="Employee"
            onClick={() => {toggleEmployeeMenu(); handleLinkClick();}}
            isOpen={isEmployeeMenuOpen}
          />
          {isEmployeeMenuOpen && (
            <ul className="ml-4 space-y-1">
              <SubmenuItem text="Employee Position List" to="/employee/position-list" onClick={handleLinkClick} />
              <SubmenuItem text="Gender List" to="/employee/gender-list" onClick={handleLinkClick} />
            </ul>
          )}
          <NavItem icon={<FaScrewdriverWrench />} text="Maintenance" to="/maintenance" onClick={handleLinkClick} />
          <NavItem icon={<FaCog />} text="Settings" to="/settings" onClick={handleLinkClick} />
          <NavItem icon={<HiChartBar />} text="Report" to="/report" onClick={handleLinkClick} />
          <NavItem icon={<BsFillQuestionCircleFill />} text="Help" to="/help" onClick={handleLinkClick} />
        </ul>
      </nav>
    </aside>
  );
};

// Navigation Item Component
const NavItem = ({ icon, text, onClick, isOpen, to }) => {
  return (
    <li
      className={`flex items-center px-4 py-3 transition-colors duration-200 cursor-pointer hover:bg-gray-700 rounded-md ${
        isOpen ? 'bg-gray-700' : ''
      }`}
      onClick={onClick ? onClick : null}
    >
      <Link to={to} className="flex items-center w-full">
        <span className="text-xl">{icon}</span>
        <span className="ml-3 text-base font-medium">{text}</span>
      </Link>
    </li>
  );
};

// Submenu Item Component
const SubmenuItem = ({ text, to, onClick }) => {
  return (
    <li className="flex items-center px-6 py-2 transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-700">
      <Link to={to} className="w-full text-sm" onClick={onClick}>
        {text}
      </Link>
    </li>
  );
};

export default Sidebar;
