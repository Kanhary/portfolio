import React, { useState } from 'react';

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
    setCurrentPage(pageNumber);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentEmployees = employees.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <section className='p-3 bg-gray-50 dark:bg-gray-900 sm:p-5 font-khmer'>
      <h1 className='mb-4 text-2xl font-semibold text-center'>Employee Position List</h1>
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
              <button  type='button' className='flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'> 
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
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='sticky left-0 py-3 pl-4 pr-0 bg-gray-50'></th>
                  <th scope='col' className='py-3 pl-4 pr-0'>Code</th>
                  <th scope='col' className='px-4 py-3 '>Position</th>
                  <th scope='col' className='px-4 py-3'>Last By</th>
                  <th scope='col' className='px-4 py-3'>Last Date</th>
                  <th scope='col' className='px-4 py-3'>
                    <span className='sr-only'>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentEmployees.map(employee => (
                  <tr key={employee.code}>
                    <td className='sticky left-0 px-4 py-3 bg-gray-50'>
                      <input type='checkbox' className='w-4 h-4 border-gray-300 rounded form-checkbox text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-primary-400' />
                    </td>
                    <th scope='row' className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{employee.code}</th>
                    <td className='px-4 py-3'>{employee.position}</td>
                    <td className='px-4 py-3'></td>
                    <td className='px-4 py-3'></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <nav className='flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0' aria-label='Table navigation'>
            <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
              Showing 
              <span className='font-semibold text-gray-900 dark:text-white'> {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, employees.length)} </span>
              of 
              <span className='font-semibold text-gray-900 dark:text-white'> {employees.length} </span>
            </span>
            <ul className='inline-flex items-stretch -space-x-px'>
              <li>
                <button
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <button
                    className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === index + 1 ? 'text-primary-600 bg-primary-50 border border-gray-300 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default EmployeePositionList;
