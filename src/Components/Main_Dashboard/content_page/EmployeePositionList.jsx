import React, { useState } from 'react';
import { FaPen, FaTrashAlt } from "react-icons/fa";

const EmployeePositionList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const employees = [
    { code: '1', position: 'អង្គនាយក' },
    { code: '2', position: 'អង្គនាយករង​ រដ្ឋបាល/ហិរញ្ញវត្ថុ' },
    { code: '3', position: 'អង្គនាយករង បច្ចេកទេស' },
    { code: '4', position: 'អង្គនាយករង កិច្ចការផែ' },
    { code: '5', position: 'អង្គនាយករង​​ អាជីវកម្ម/ប្រតិបត្តិការផែ' },
    { code: '6', position: 'ប្រធាននាយកដ្ឋាន រដ្ឋបាល' },
    { code: '7', position: 'ប្រធាននាយកដ្ឋាន​ បុគ្គលិក/ធនធានមនុស្ស' },
    { code: '8', position: 'នាយក' },
    { code: '9', position: 'នាយករង' },
    { code: '10', position: 'អ្នកគ្រប់គ្រង' },
    { code: '11', position: 'អង្គនាយក' },
    { code: '12', position: 'អង្គនាយករង​ រដ្ឋបាល/ហិរញ្ញវត្ថុ' },
    { code: '13', position: 'អង្គនាយករង បច្ចេកទេស' },
    { code: '14', position: 'អង្គនាយករង កិច្ចការផែ' },
    { code: '15', position: 'អង្គនាយករង​​ អាជីវកម្ម/ប្រតិបត្តិការផែ' },
    { code: '16', position: 'ប្រធាននាយកដ្ឋាន រដ្ឋបាល' },
    { code: '17', position: 'ប្រធាននាយកដ្ឋាន​ បុគ្គលិក/ធនធានមនុស្ស' },
    { code: '18', position: 'នាយក' },
    { code: '19', position: 'នាយករង' },
    { code: '20', position: 'អ្នកគ្រប់គ្រង' },
    { code: '21', position: 'អង្គនាយក' },
    { code: '22', position: 'អង្គនាយករង​ រដ្ឋបាល/ហិរញ្ញវត្ថុ' },
    { code: '23', position: 'អង្គនាយករង បច្ចេកទេស' },
    { code: '24', position: 'អង្គនាយករង កិច្ចការផែ' },
    { code: '25', position: 'អង្គនាយករង​​ អាជីវកម្ម/ប្រតិបត្តិការផែ' },
    { code: '26', position: 'ប្រធាននាយកដ្ឋាន រដ្ឋបាល' },
    { code: '27', position: 'ប្រធាននាយកដ្ឋាន​ បុគ្គលិក/ធនធានមនុស្ស' },
    { code: '28', position: 'នាយក' },
    { code: '29', position: 'នាយករង' },
    { code: '30', position: 'អ្នកគ្រប់គ្រង' },
    { code: '31', position: 'អង្គនាយក' },
    { code: '32', position: 'អង្គនាយករង​ រដ្ឋបាល/ហិរញ្ញវត្ថុ' },
    { code: '33', position: 'អង្គនាយករង បច្ចេកទេស' },
    { code: '34', position: 'អង្គនាយករង កិច្ចការផែ' },
    { code: '35', position: 'អង្គនាយករង​​ អាជីវកម្ម/ប្រតិបត្តិការផែ' },
    { code: '36', position: 'ប្រធាននាយកដ្ឋាន រដ្ឋបាល' },
    { code: '37', position: 'ប្រធាននាយកដ្ឋាន​ បុគ្គលិក/ធនធានមនុស្ស' },
    { code: '38', position: 'នាយក' },
    { code: '39', position: 'នាយករង' },
    { code: '40', position: 'អ្នកគ្រប់គ្រង' },
    { code: '41', position: 'អង្គនាយក' },
    { code: '42', position: 'អង្គនាយករង​ រដ្ឋបាល/ហិរញ្ញវត្ថុ' },
    { code: '43', position: 'អង្គនាយករង បច្ចេកទេស' },
    { code: '44', position: 'អង្គនាយករង កិច្ចការផែ' },
    { code: '45', position: 'អង្គនាយករង​​ អាជីវកម្ម/ប្រតិបត្តិការផែ' },
    { code: '46', position: 'ប្រធាននាយកដ្ឋាន រដ្ឋបាល' },
    { code: '47', position: 'ប្រធាននាយកដ្ឋាន​ បុគ្គលិក/ធនធានមនុស្ស' },
    { code: '48', position: 'នាយក' },
    { code: '49', position: 'នាយករង' },
    { code: '50', position: 'អ្នកគ្រប់គ្រង' },
    { code: '51', position: 'អង្គនាយក' },
    { code: '52', position: 'អង្គនាយករង​ រដ្ឋបាល/ហិរញ្ញវត្ថុ' },
    { code: '53', position: 'អង្គនាយករង បច្ចេកទេស' },
    { code: '54', position: 'អង្គនាយករង កិច្ចការផែ' },
    { code: '55', position: 'អង្គនាយករង​​ អាជីវកម្ម/ប្រតិបត្តិការផែ' },
    { code: '56', position: 'ប្រធាននាយកដ្ឋាន រដ្ឋបាល' },
    { code: '57', position: 'ប្រធាននាយកដ្ឋាន​ បុគ្គលិក/ធនធានមនុស្ស' },
    { code: '58', position: 'នាយក' },
    { code: '59', position: 'នាយករង' },
    { code: '60', position: 'អ្នកគ្រប់គ្រង' },
    { code: '61', position: 'អង្គនាយក' },
    { code: '62', position: 'អង្គនាយករង​ រដ្ឋបាល/ហិរញ្ញវត្ថុ' },
    { code: '63', position: 'អង្គនាយករង បច្ចេកទេស' },
    { code: '64', position: 'អង្គនាយករង កិច្ចការផែ' },
    { code: '65', position: 'អង្គនាយករង​​ អាជីវកម្ម/ប្រតិបត្តិការផែ' },
    { code: '66', position: 'ប្រធាននាយកដ្ឋាន រដ្ឋបាល' },
    { code: '67', position: 'ប្រធាននាយកដ្ឋាន​ បុគ្គលិក/ធនធានមនុស្ស' },
    { code: '68', position: 'នាយក' },
    { code: '69', position: 'នាយករង' },
    { code: '70', position: 'អ្នកគ្រប់គ្រង' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const totalPages = Math.ceil(employees.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentEmployees = employees.slice(indexOfFirstRecord, indexOfLastRecord);

  const getPaginationItems = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };
  

  return (
    <section className='p-3 mt-10 bg-gray-50 dark:bg-gray-900 sm:p-5 font-khmer'>
      <h1 className='text-2xl font-semibold text-center'>Employee Position List</h1>
      <div className='max-w-screen-xl px-4 mx-auto lg:px-12'>
        <div className='relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg'>
          {/* Table */}
          <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500 table-fixed dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='sticky left-0 py-3 pl-4 pr-0 bg-gray-50'>Action</th>
                  <th scope='col' className='py-3 pl-4 pr-0'>Code</th>
                  <th scope='col' className='px-4 py-3'>Position</th>
                  <th scope='col' className='px-4 py-3'>Last By</th>
                  <th scope='col' className='px-4 py-3'>Last Date</th>
                </tr>
              </thead>
              <tbody>
                {currentEmployees.map(employee => (
                  <tr key={employee.code}>
                    <td className='sticky left-0 py-3 pl-4 bg-gray-50'>
                      <input type='checkbox' className='w-4 h-4 mx-2 border-gray-300 rounded form-checkbox text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-primary-400' />
                      <button type='button' className='p-2 mr-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400'><FaPen /></button>
                      <button type='button' className='p-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400'><FaTrashAlt /></button>
                    </td>
                    <td className='px-4 py-2'>{employee.code}</td>
                    <td className='px-4 py-2'>{employee.position}</td>
                    <td className='px-4 py-2'>{employee.lastBy}</td>
                    <td className='px-4 py-2'>{employee.lastDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between p-4">
          <span className="hidden text-sm text-gray-600 sm:inline dark:text-gray-400">
            Showing {indexOfFirstRecord + 1} to {Math.min(indexOfLastRecord, employees.length)} of {employees.length} results
          </span>
          <nav className="flex items-center">
            <ul className="inline-flex space-x-1">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 border border-transparent rounded-lg ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
              </li>
              {getPaginationItems().map((page, index) => (
                <li key={index}>
                  <button
                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                    className={`px-3 py-2 text-sm font-medium ${
                      page === currentPage
                        ? 'text-white bg-blue-600 rounded-lg shadow-sm'
                        : 'text-gray-500 bg-white dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                    } border border-gray-300 dark:border-transparent`}
                  >
                    {page}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 border border-transparent rounded-lg ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EmployeePositionList;
