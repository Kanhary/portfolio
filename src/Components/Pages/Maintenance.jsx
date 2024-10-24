// MaintenancePage.jsx
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaLaptop, FaHdd, FaUser, FaClock } from "react-icons/fa";
// import { FaHardDrive, FaUser, FaClock } from 'react-icons/fa'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MaintenancePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComputer, setSelectedComputer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('All');
  const [startDate, setStartDate] = useState('');
  const computersPerPage = 5;

  const maintenanceData = [
    {
      id: 1,
      computerName: 'PC-01',
      lastMaintenance: '2024-09-20',
      technician: 'Alice Johnson',
      hardwareHistory: [
        { type: 'CPU', model: 'Intel Core i7', date: '2024-06-15', notes: 'Upgraded from i5' },
        { type: 'RAM', capacity: '16GB DDR4', date: '2024-08-01', notes: 'Increased for multitasking' },
        { type: 'Storage', typeOfStorage: '512GB SSD', date: '2024-05-10', notes: 'Upgraded from 256GB SSD' },
      ],
      hardDisk: '1TB HDD',
      startDate: '2023-01-10',
      activeUser: { name: 'John Doe', 
      // role: 'Administrator', lastLogin: '2024-10-05', status: 'Active' 
    },
    },
    {
      id: 2,
      computerName: 'PC-02',
      lastMaintenance: '2024-09-25',
      technician: 'Bob Smith',
      hardwareHistory: [
        { type: 'CPU', model: 'AMD Ryzen 5', date: '2024-03-10', notes: 'Standard installation' },
        { type: 'RAM', capacity: '8GB DDR4', date: '2024-04-12', notes: 'Installed for regular usage' },
      ],
      hardDisk: '512GB SSD',
      startDate: '2023-05-15',
      activeUser: { name: 'Jane Doe', 
                    // role: 'User', lastLogin: '2024-10-06', status: 'Inactive' 
                  },
    },
    {
      id: 3,
      computerName: 'PC-03',
      lastMaintenance: '2024-09-20',
      technician: 'Alice Johnson',
      hardwareHistory: [
        { type: 'CPU', model: 'Intel Core i7', date: '2024-06-15', notes: 'Upgraded from i5' },
        { type: 'RAM', capacity: '16GB DDR4', date: '2024-08-01', notes: 'Increased for multitasking' },
        { type: 'Storage', typeOfStorage: '512GB SSD', date: '2024-05-10', notes: 'Upgraded from 256GB SSD' },
      ],
      hardDisk: '1TB HDD',
      startDate: '2023-01-10',
      activeUser: { name: 'John Doe', 
                    // role: 'Administrator', lastLogin: '2024-10-05', status: 'Active' 
                  },
    },
  ];
  

  const filteredData = maintenanceData.filter(computer => {
    const computerStartDate = new Date(computer.startDate); // Convert string date to Date object
    
    return (
      (computer.computerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
       computer.activeUser.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === 'All' || computer.status === statusFilter) &&
      (!startDate || computerStartDate >= startDate) // Compare properly as Date objects
    );
  });
  

  const indexOfLastComputer = currentPage * computersPerPage;
  const indexOfFirstComputer = indexOfLastComputer - computersPerPage;
  const currentComputers = filteredData.slice(indexOfFirstComputer, indexOfLastComputer);
  const totalPages = Math.ceil(filteredData.length / computersPerPage);

  const getPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
        items.push(i);
    }
    return items;
};

  const closeModal = () => {
    setSelectedComputer(null);
  };

  return (
    <div className="min-h-screen mt-10">
      <h1 className='text-xl font-medium text-blue-800'>ការថែទាំ</h1>
      <div className='mt-3 border'></div>
      {/* <div className="pb-2 mt-5 mb-5 border-b border-gray-300">
        <div className="flex items-center mb-6">
          
          <div className="relative w-1/3">
            <FaSearch className="absolute text-gray-400 transition duration-200 ease-in-out transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search by computer name or user name..."
              className="w-full py-2 pl-10 pr-4 transition duration-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className="p-2 ml-3 transition duration-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div> */}

      <div className='mt-4 bg-white rounded-md shadow-md'>
      <div className='flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
        <div className='w-full md:w-1/2'>
          <form className='flex items-center'>
            <label htmlFor="simple-search" className='sr-only'>Search</label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-300 focus:border-primary-300 focus:ring-3 focus:outline-none'
                placeholder='Search'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div>
          <label htmlFor="">Filter by Start Date : </label>
          <input
            type="date"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='p-2 text-white bg-blue-600 border border-gray-300 rounded-lg'
          />
          <button
            type="button"
            className="px-4 py-3 ml-2 text-sm text-white transition duration-200 bg-red-500 rounded-lg hover:bg-red-400"
            onClick={() => setSearchQuery('')}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className='text-xs text-gray-700 uppercase bg-gray-100 border-t-2'>
            <tr className="bg-gray-100 border-b">
              <th className="p-4 py-3 border-r-2">Computer Name</th>
              <th className="p-4 py-3 border-r-2">Last Maintenance</th>
              <th className="p-4 py-3 border-r-2">Technician</th>
              <th className="p-4 py-3 border-r-2">Active User</th>
              <th className="p-4 py-3 border-r-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentComputers.map((computer) => (
              <tr key={computer.id} className="transition-colors duration-200 border border-b-gray-200 hover:bg-indigo-50">
                <td className="p-4 py-3 border-r-2 font-semibold">{computer.computerName}</td>
                 
                <td className="p-4 py-3 border-r-2">{computer.lastMaintenance}</td>
                <td className="p-4 py-3 border-r-2">{computer.technician}</td>
                <td className="p-4 py-3 border-r-2">
                  <span className="font-semibold">{computer.activeUser.name}</span>
                </td>
                <td className="p-4 py-3">
                  <button
                    className="px-3 py-1 text-blue-500 transition hover:text-blue-600"
                    onClick={() => setSelectedComputer(computer)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col items-center justify-between p-4 md:flex-row">
            <span className="mb-4 text-sm text-gray-600 md:mb-0">
              Page {currentPage} of {totalPages}
            </span>

            <nav className="flex items-center p-4 space-x-2 md:space-x-3">
              <ul className="inline-flex items-center p-2 space-x-2 overflow-x-auto">
                {/* Previous Page Button */}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-gradient-to-r from-gray-200 to-gray-300 border rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.293 14.707a1 1 0 01-1.414 0L6.586 10.414a1 1 0 010-1.414l4.293-4.293a1 1 0 011.414 1.414L8.414 10l3.879 3.879a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>

                {/* Page Number Buttons */}
                {getPaginationItems().map((page, index) =>
                  page === "..." ? (
                    <li key={index}>
                      <span className="flex items-center justify-center px-3 py-2 text-gray-500 border rounded-lg shadow-md bg-gradient-to-r from-gray-200 to-gray-300">
                        ...
                      </span>
                    </li>
                  ) : (
                    <li key={index}>
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`flex items-center justify-center py-2 px-3 border rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ${currentPage === page ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-600 shadow-lg' : 'text-gray-500 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400'}`}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}

                {/* Next Page Button */}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-gradient-to-r from-gray-200 to-gray-300 border rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.707 14.707a1 1 0 010-1.414L11.586 10 7.707 6.121a1 1 0 111.414-1.414l4.293 4.293a1 1 010 1.414l-4.293 4.293a1 1 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
      </div>

      {/* details modal */}
      {selectedComputer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-sm">
          <div className="w-11/12 p-8 transition-all transform scale-100 bg-white rounded-lg shadow-xl md:w-3/4 lg:w-1/2">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <FaLaptop className="text-blue-500" size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">
                  {selectedComputer.computerName}
                </h3>
              </div>
              <button
                className="px-4 py-2 text-3xl font-semibold text-white transition-all duration-300 bg-red-500 rounded-lg shadow hover:bg-red-600 focus:outline-none"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Computer Details */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <p className="text-sm font-semibold text-gray-500">Last Maintenance:</p>
                <p className="text-lg text-gray-900">{selectedComputer.lastMaintenance}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Technician:</p>
                <p className="text-lg text-gray-900">{selectedComputer.technician}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Hard Disk:</p>
                <div className="flex items-center space-x-2">
                  <FaHdd className="text-gray-500" />
                  <p className="text-lg text-gray-900">{selectedComputer.hardDisk}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Start Date:</p>
                <p className="text-lg text-gray-900">{selectedComputer.startDate}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Active User:</p>
                <div className="flex items-center space-x-2">
                  <FaUser className="text-gray-500" />
                  <p className="text-lg text-gray-900">{selectedComputer.activeUser.name}</p>
                </div>
              </div>  
            </div>

            {/* Hardware History */}
            <h4 className="mb-4 text-xl font-semibold text-gray-800">Hardware History</h4>
            <ul className="mb-8 space-y-2 text-gray-700 list-disc list-inside">
              {selectedComputer.hardwareHistory.map((item, index) => (
                <li key={index} className="leading-relaxed transition-colors duration-200 hover:text-blue-500">
                  <span className="font-medium">{item.type}:</span> {item.model || item.capacity}
                  <span className="italic text-gray-600"> (Date: {item.date})</span> - {item.notes}
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="flex justify-end space-x-4">
              <button
                className="px-6 py-2 text-white transition-all duration-300 bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
                onClick={closeModal}
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MaintenancePage;
