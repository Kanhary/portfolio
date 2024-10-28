import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaBuilding } from 'react-icons/fa';
import { FaLaptop, FaUserFriends, FaCog } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define the menu structure
const menuItems = [
  {
    text: "តារាងបង្ហាញទិន្នន័យ",
    to: "/main-dashboard/dashboard",
    icon: <AiFillHome />,
    submenu: [],
  },
  {
    text: "តារាងទិន្នន័យកុំព្យូទ័រ",
    to: "/main-dashboard/computer",
    icon: <FaLaptop />,
    submenu: [],
  },
  {
    text: "តារាងក្រុមហ៊ុន",
    icon: <FaBuilding />,
    submenu: [
      {
        text: "សាខា",
        to: "/main-dashboard/company/branch",
      },
      {
        text: "នាយកដ្ឋាន",
        to: "/main-dashboard/company/department",
      },
      {
        text: "ការិយាល័យ",
        to: "/main-dashboard/company/office",
      },
      {
        text: "ក្រុមហ៊ុន",
        to: "/main-dashboard/company/company-list",
      },
    ],
  },
  {
    text: "តារាងបុគ្គលិក",
    icon: <FaUserFriends />,
    submenu: [
      {
        text: "តារាងបញ្ជីមុខតំណែង",
        to: "/main-dashboard/employee/position-list",
      },
      {
        text: "តារាងបញ្ញីភេទបុគ្គលិក",
        to: "/main-dashboard/employee/gender-list",
      },
      {
        text: "តារាងបញ្ចូលព័ត៌មានបុគ្គលិក",
        to: "/main-dashboard/employee/employee-information",
      },
    ],
  },
  {
    text: "ការកំណត់ប្រព័ន្ធ",
    icon: <FaCog />,
    submenu: [
      {
        text: "អ្នកប្រើប្រាស់",
        to: "/main-dashboard/system-setting/user",
      },
      {
        text: "Group Master",
        to: "/main-dashboard/system-setting/group-master",
      },
      {
        text: "ការអនុញ្ញាតអ្នកប្រើប្រាស់",
        to: "/main-dashboard/system-setting/item-permission",
      },
      {
        text: "ព័ត៌មានលម្អិតនៅក្នុងក្រុម",
        to: "/main-dashboard/system-setting/group-details",
      },
    ],
  },
  {
    text: "ការថែទាំ",
    to: "/main-dashboard/maintenance",
    icon: <FaScrewdriverWrench />,
    submenu: [],
  },
  {
    text: "របាយកាណ៍",
    to: "/main-dashboard/report",
    icon: <HiChartBar />,
    submenu: [],
  },
  {
    text: "ជំនួយ",
    to: "/main-dashboard/help",
    icon: <BsFillQuestionCircleFill />,
    submenu: [],
  },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState('');
  const [submenuStates, setSubmenuStates] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleSubmenu = (index) => {
    setSubmenuStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLinkClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg transition-transform z-40 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full' 
      } md:translate-x-0 md:w-64`}
    >
      <nav className="flex flex-col h-full overflow-y-auto" data-aos='fade-right' data-aos-delay='200'>
        <ul className="flex flex-col px-3 mt-20 space-y-1 font-khmer ">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <NavItem 
                icon={item.icon} 
                text={item.text} 
                to={item.to} 
                onClick={() => {
                  if (item.submenu.length > 0) {
                    toggleSubmenu(index);
                  } else {
                    handleLinkClick(item.text);
                  }
                }} 
                isActive={activeItem === item.text} 
                dropdownIcon={item.submenu.length > 0 ? (submenuStates[index] ? <FaChevronUp /> : <FaChevronDown />) : null}
              />
              {item.submenu.length > 0 && (
                <div
                  style={{ height: submenuStates[index] ? 'auto' : '0px' }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <ul className="ml-8 space-y-1 list-disc">
                    {item.submenu.map((subitem, subIndex) => (
                      <SubmenuItem 
                        key={subIndex} 
                        text={subitem.text} 
                        to={subitem.to} 
                        onClick={() => handleLinkClick(subitem.text)} 
                        isActive={activeItem === subitem.text} 
                      />
                    ))}
                  </ul>
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const NavItem = ({ icon, text, onClick, to, isActive, dropdownIcon }) => {
  return (
    <li
      className={`flex items-center justify-between px-4 py-3 transition-colors duration-200 cursor-pointer hover:bg-white/10 rounded-md ${isActive ? 'bg-white/10' : ''}`}
      onClick={onClick ? onClick : null}
    >
      <Link to={to} className="flex items-center w-full" >
        <span className="text-xl">{icon}</span>
        <span className="ml-3 text-base font-normal">{text}</span>
      </Link>
      {dropdownIcon && <span>{dropdownIcon}</span>}
    </li>
  );
};

const SubmenuItem = ({ text, to, onClick, isActive }) => {
  return (
    <li className={`flex items-center px-6 py-2 transition-colors duration-200 rounded-md cursor-pointer ${isActive ? 'text-sky-300' : ''}`}>
      <Link to={to} className="w-full text-[13px]" onClick={onClick}>
        {text}
      </Link>
    </li>
  );
};

export default Sidebar;
