import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaLaptop, FaUserFriends, FaCog } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Sidebar = ({ isSidebarOpen }) => {
  const [isEmployeeMenuOpen, setEmployeeMenuOpen] = useState(false);

  const toggleEmployeeMenu = () => {
    setEmployeeMenuOpen(prevState => !prevState);
  };

  return (
    <aside
      className={`sidebar fixed left-0 h-full bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out z-40 Kantumruy${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 md:w-64`}
    >
      <nav className="flex flex-col h-full">
        <ul className="flex flex-col mt-6 space-y-1">
          <NavItem icon={<AiFillHome />} text="Dashboard" to="/dashboard" />
          <NavItem icon={<FaLaptop />} text="Computer" to="/computer" />
          <NavItem
            icon={<FaUserFriends />}
            text="Employee"
            onClick={toggleEmployeeMenu}
            isOpen={isEmployeeMenuOpen}
          />
          {isEmployeeMenuOpen && (
            <ul className="ml-4 space-y-1">
              <SubmenuItem text="Employee Position List" to="/employee/position-list" />
              <SubmenuItem text="Gender List" to="/employee/gender-list" />
            </ul>
          )}
          <NavItem icon={<FaScrewdriverWrench />} text="Maintenance" to="/maintenance" />
          <NavItem icon={<FaCog />} text="Settings" to="/settings" />
          <NavItem icon={<HiChartBar />} text="Report" to="/report" />
          <NavItem icon={<BsFillQuestionCircleFill />} text="Help" to="/help" />
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
const SubmenuItem = ({ text, to }) => {
  return (
    <li className="flex items-center px-6 py-2 transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-700">
      <Link to={to} className="w-full text-sm">
        {text}
      </Link>
    </li>
  );
};

export default Sidebar;
