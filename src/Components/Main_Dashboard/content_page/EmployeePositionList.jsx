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
  const recordsPerPage = 7;
  const totalPages = Math.ceil(employees.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentEmployees = employees.slice(indexOfFirstRecord, indexOfLastRecord);

  const getPaginationItems = () => {
    let pages = [];
    if (totalPages <= 7) {
      pages = [...Array(totalPages)].map((_, index) => index + 1);
    } else {
      pages = [1, 2, 3, '...', totalPages];
      if (currentPage < 4) {
        pages = [1, 2, 3, 4, 5, '...', totalPages];
      } else if (currentPage > totalPages - 3) {
        pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }
    return pages;
  };

  return (
    <section className='p-3 mt-10 bg-gray-50 dark:bg-gray-900 sm:p-5 font-khmer'>
      <h1 className='text-2xl font-semibold text-center'>Employee Position List</h1>
      <div className='max-w-screen-xl px-4 mx-auto lg:px-12'>
        <div className='relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg'>
          {/* Search and Action Buttons */}
          <div className='flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
            {/* Search Form */}
            <div className='w-full md:w-1/2'>
              <form className='flex items-center'>
                <label htmlFor='simple-search' className='sr-only'>Search</label>
                <div className='relative w-full'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <input type='text' id='simple-search' className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='Search' required='' />
                </div>
              </form>
            </div>
            {/* Action Buttons */}
            <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
              <button type='button' className='flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>
                <svg className='h-3.5 w-3.5 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path clipRule='evenodd' fillRule='evenodd' d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z' />
                </svg>
                Add Position
              </button>
              <div className='relative'>
                <button
                  id='actionDropdownBtn'
                  onClick={toggleDropdown}
                  className='flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border rounded-lg md:w-auto focus:outline-none-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus-ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  type='button'
                >
                  Action
                </button>
                {isDropdownOpen && (
                  <div
                    id='actionDropdown'
                    className='absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                  >
                    <ul className='py-1 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='actionDropdownBtn'>
                      <li>
                        <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Edit</a>
                      </li>
                    </ul>
                    <div className='py-1'>
                      <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Delete all</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
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
          <div className='flex items-center justify-between p-4'>
            <span className='text-sm text-gray-700 dark:text-gray-400'>
              Showing {indexOfFirstRecord + 1} to {Math.min(indexOfLastRecord, employees.length)} of {employees.length} results
            </span>
            <nav className='flex items-center'>
              <ul className='inline-flex space-x-2'>
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-primary-800'
                  >
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                      <path fillRule='evenodd' d='M7.293 14.293a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414L12.414 10l-3.707 3.707a1 1 0 01-1.414 0z' clipRule='evenodd' />
                    </svg>
                  </button>
                </li>
                {getPaginationItems().map((page, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 text-sm font-medium ${page === currentPage ? 'text-blue-600 bg-blue-100' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-primary-800`}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-primary-800'
                  >
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                      <path fillRule='evenodd' d='M12.707 14.293a1 1 0 010-1.414L9.414 10l3.293-3.707a1 1 0 10-1.414-1.414L7.586 10l3.707 3.707a1 1 0 001.414 0z' clipRule='evenodd' />
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
