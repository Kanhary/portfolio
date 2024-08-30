import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaLaptop, FaUserFriends, FaCog } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isEmployeeMenuOpen, setEmployeeMenuOpen] = useState(false);
  const [isSystemSettingMenuOpen, setSystemSettingMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [submenuHeight, setSubmenuHeight] = useState('0px');
  const [systemSubmenuHeight, setSystemSubmenuHeight] = useState('0px');

  const submenuRef = useRef(null);
  const systemSubmenuRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Adjust submenu heights based on their open/close state
    setSubmenuHeight(isEmployeeMenuOpen ? `${submenuRef.current.scrollHeight}px` : '0px');
    setSystemSubmenuHeight(isSystemSettingMenuOpen ? `${systemSubmenuRef.current.scrollHeight}px` : '0px');
  }, [isEmployeeMenuOpen, isSystemSettingMenuOpen]);

  const toggleEmployeeMenu = () => {
    setEmployeeMenuOpen(prevState => !prevState);
  };

  const toggleSystemSettingMenu = () => {
    setSystemSettingMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg transition-transform duration-300 ease-in-out z-40 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:w-64`}
    >
      <nav className="flex flex-col h-full overflow-y-auto">
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
            dropdownIcon={isEmployeeMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
          />
          <div
            ref={submenuRef}
            style={{ height: submenuHeight }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <ul className="ml-8 space-y-1 list-disc">
              <SubmenuItem 
                text="តារាងបញ្ជីបុគ្គលិក" 
                to="/main-dashboard/employee/position-list" 
                onClick={() => handleLinkClick('Employee Position List')} 
                isActive={activeItem === 'Employee Position List'} 
              />
              <SubmenuItem 
                text="តារាងបញ្ញីភេទបុគ្គលិក" 
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
            icon={<FaCog />}
            text="ការកំណត់ប្រព័ន្ធ"
            onClick={() => {toggleSystemSettingMenu(); handleLinkClick('System Setting');}}
            isActive={activeItem === 'System Setting'}
            dropdownIcon={isSystemSettingMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
          />
          <div
            ref={systemSubmenuRef}
            style={{ height: systemSubmenuHeight }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <ul className="ml-8 space-y-1 list-disc">
              <SubmenuItem 
                text="អ្នកប្រើប្រាស់" 
                to="/main-dashboard/system-setting/user" 
                onClick={() => handleLinkClick('User')} 
                isActive={activeItem === 'User'} 
              />
              <SubmenuItem 
                text="Group Master" 
                to="/main-dashboard/system-setting/group-master" 
                onClick={() => handleLinkClick('Group-Master')} 
                isActive={activeItem === 'Group-Master'} 
              />
              <SubmenuItem 
                text="Item Permission" 
                to="/main-dashboard/system-setting/item-permission" 
                onClick={() => handleLinkClick('Item-Permission')} 
                isActive={activeItem === 'Item-Permission'} 
              />
              <SubmenuItem 
                text="Group Details" 
                to="/main-dashboard/system-setting/group-details" 
                onClick={() => handleLinkClick('Group-Details')} 
                isActive={activeItem === 'Group-Details'} 
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
            icon={<HiChartBar />} 
            text="របាយកាណ៍" 
            to="/main-dashboard/report" 
            onClick={() => handleLinkClick('Report')} 
            isActive={activeItem === 'Report'} 
          />
          <NavItem 
            icon={<BsFillQuestionCircleFill />}
            text="ជំនួយ" 
            to="/main-dashboard/help" 
            onClick={() => handleLinkClick('Help')} 
            isActive={activeItem === 'Help'} 
          />
        </ul>
      </nav>
    </aside>
  );
};

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
        <span 
          className="ml-3 text-base font-normal" 
          data-aos="fade-right" 
          data-aos-delay="200"
        >
          {text}
        </span>
      </Link>
      {dropdownIcon && <span>{dropdownIcon}</span>}
    </li>
  );
};

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
