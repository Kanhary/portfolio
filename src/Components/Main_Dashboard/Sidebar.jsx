import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaLaptop, FaUserFriends, FaCog } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing chevron icons

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isEmployeeMenuOpen, setEmployeeMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [submenuHeight, setSubmenuHeight] = useState('0px'); // State for submenu height

  const submenuRef = useRef(null);

  useEffect(() => {
    if (isEmployeeMenuOpen) {
      setSubmenuHeight(`${submenuRef.current.scrollHeight}px`);
    } else {
      setSubmenuHeight('0px');
    }
  }, [isEmployeeMenuOpen]);

  const toggleEmployeeMenu = () => {
    setEmployeeMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = (itemName) => {
    setActiveItem(itemName);
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-gradient-to-r from-blue-800 to-indigo-900  text-white shadow-lg transition-transform duration-300 ease-in-out z-40 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:w-64`}
    >
      <nav className="flex flex-col h-full overflow-y-auto ">
        <ul className="flex flex-col px-3 mt-20 space-y-1 font-khmer">
          <NavItem 
            icon={<AiFillHome />} 
            text="តារាងបង្ហាញទិន្នន័យ" 
            to="/main-dashboard/dashboard" 
            onClick={() => handleLinkClick('Dashboard')} 
            isActive={activeItem === 'Dashboard'} 
          />
          <NavItem 
            icon={<FaLaptop />} 
            text="តារាងទិន្នន័យកុំព្យូទ័រ" 
            to="/main-dashboard/computer" 
            onClick={() => handleLinkClick('Computer')} 
            isActive={activeItem === 'Computer'} 
          />
          <NavItem
            icon={<FaUserFriends />}
            text="តារាងបុគ្គលិក"
            onClick={() => {toggleEmployeeMenu(); handleLinkClick('Employee');}}
            isActive={activeItem === 'Employee'}
            dropdownIcon={isEmployeeMenuOpen ? <FaChevronUp /> : <FaChevronDown />} // Dropdown icon logic
          />
          <div
            ref={submenuRef}
            style={{ height: submenuHeight }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <ul className="ml-6 space-y-1">
              <SubmenuItem 
                text="តារាងបញ្ជីបុគ្គលិក" 
                to="/main-dashboard/employee/position-list" 
                onClick={() => handleLinkClick('Employee Position List')} 
                isActive={activeItem === 'Employee Position List'} 
              />
              <SubmenuItem 
                text="តារាងបញ្ជីភេទ" 
                to="/main-dashboard/employee/gender-list" 
                onClick={() => handleLinkClick('Gender List')} 
                isActive={activeItem === 'Gender List'} 
              />
              <SubmenuItem 
                text="តារាងបញ្ចូលព័ត៌មានបុគ្គលិក" 
                to="/main-dashboard/employee/employee-information" 
                onClick={() => handleLinkClick('Employee Information')} 
                isActive={activeItem === 'Employee Information'} 
              />
            </ul>
          </div>
          <NavItem 
            icon={<FaScrewdriverWrench />} 
            text="ការថែទាំ" 
            to="/main-dashboard/maintenance" 
            onClick={() => handleLinkClick('Maintenance')} 
            isActive={activeItem === 'Maintenance'} 
          />
          <NavItem 
            icon={<FaCog />} 
            text="Settings" 
            to="/main-dashboard/settings" 
            onClick={() => handleLinkClick('Settings')} 
            isActive={activeItem === 'Settings'} 
          />
          <NavItem 
            icon={<HiChartBar />} 
            text="របាយកាណ៍" 
            to="/main-dashboard/report" 
            onClick={() => handleLinkClick('Report')} 
            isActive={activeItem === 'Report'} 
          />
          <NavItem 
            icon={<BsFillQuestionCircleFill />}

            text="Help" 
            to="/main-dashboard/help" 
            onClick={() => handleLinkClick('Help')} 
            isActive={activeItem === 'Help'} 
          />
        </ul>
      </nav>
    </aside>
  );
};

// Navigation Item Component
const NavItem = ({ icon, text, onClick, to, isActive, dropdownIcon }) => {
  return (
    <li
      className={`flex items-center justify-between px-4 py-3 transition-colors duration-200 cursor-pointer hover:bg-white/10 rounded-md ${
        isActive ? 'bg-white/10' : ''
      }`} 
      onClick={onClick ? onClick : null}
    >
      <Link to={to} className="flex items-center w-full">
        <span className="text-xl">{icon}</span>
        <span className="ml-3 text-base font-medium">{text}</span>
      </Link>
      {dropdownIcon && <span>{dropdownIcon}</span>} {/* Dropdown icon rendered here */}
    </li>
  );
};

// Submenu Item Component
const SubmenuItem = ({ text, to, onClick, isActive }) => {
  return (
    <li className={`flex items-center px-6 py-2 transition-colors duration-200 rounded-md cursor-pointer ${isActive ? 'text-sky-300' : ''}`}>
      <Link to={to} className="w-full text-sm" onClick={onClick}>
        {text}
      </Link>
    </li>
  );
};

export default Sidebar;
