import React, { useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

const GroupDetails = () => {
  const [employees, setEmployees] = useState([
    { id: 1, positionName: 'Software Engineer', description: 'Develops software', status: 'Active' },
    { id: 2, positionName: 'Product Manager', description: 'Manages products', status: 'Inactive' },
    { id: 3, positionName: 'UX Designer', description: 'Designs user experiences', status: 'Active' },
    // Add more example data as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(employees.length / 10); // Example total pages based on 10 items per page
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPosition, setNewPosition] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Active');
  const [permissions, setPermissions] = useState({
    dashboard: false,
    computer: false,
    employee: false,
    view: false,
    update: false,
    delete: false,
  });

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openEditModal = (id) => {
    console.log(`Edit modal for employee ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete employee ID: ${id}`);
  };

  const handleAddPosition = () => {
    console.log('Add Position:', { newPosition, description, status, permissions });
    // Add logic to handle adding new position here
    setIsModalOpen(false);
  };

  const handlePermissionChange = (e) => {
    setPermissions({
      ...permissions,
      [e.target.name]: e.target.checked,
    });
  };

  const filteredEmployees = employees.filter(employee =>
    employee.positionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedEmployees = filteredEmployees.slice((currentPage - 1) * 10, currentPage * 10);

  const getPaginationItems = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section className='mt-14 font-khmer'>
      <h1 className='text-xl font-medium text-blue-800'>តារាងបង្ហាញព័ត៌មានបុគ្គលិក</h1>
      <div className='mt-3 border'></div>
      <div className='w-full mt-4'>
        <div className='relative w-full overflow-hidden bg-white shadow-md sm:rounded-lg'>
          {/* Search and Add Button */}
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
                    id='simple-search'
                    className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-300 focus:border-primary-00 focus:outline-none focus:ring-1'
                    placeholder='Search by Position Name or Description'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
              <button type='button' className='flex items-start justify-center px-4 py-2 text-sm font-medium text-white duration-300 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300' onClick={() => setIsModalOpen(true)}>
                <svg className="h-3.5 w-3.5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                <p className='text-base font-normal'>បញ្ចូលព័ត៌មានបុគ្គលិក</p>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className='w-full overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope="col" className="px-4 py-3">No</th>
                  <th scope="col" className="px-4 py-3">Position Name</th>
                  <th scope="col" className="px-4 py-3">Description</th>
                  <th scope="col" className="px-4 py-3">Status</th>
                  <th scope="col" className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEmployees.length > 0 ? (
                  paginatedEmployees.map((employee, index) => (
                    <tr key={employee.id} className='transition-transform duration-300 ease-in-out transform border border-b-gray-200 hover:bg-gray-100 hover:shadow-2xl hover:translate-y-[-4px]'>
                      <td className='px-4 py-3'>{(currentPage - 1) * 10 + index + 1}</td>
                      <td className='px-4 py-3'>{employee.positionName}</td>
                      <td className='px-4 py-3'>{employee.description}</td>
                      <td className='px-4 py-3'>
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-medium leading-none rounded-full ${employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {employee.status}
                        </span>
                      </td>
                      <td className='flex px-6 py-4 mt-2'>
                        <FaPen
                          className="text-blue-500 cursor-pointer hover:text-blue-700"
                          onClick={() => openEditModal(employee.id)}
                        />
                        <FaTrashAlt className="ml-3 text-red-500 cursor-pointer hover:text-red-700" onClick={() => handleDelete(employee.id)} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className='px-4 py-3 text-center text-gray-500'>No employees found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center justify-between p-4 md:flex-row">
            <span className="mb-4 text-sm text-gray-600 md:mb-0">
              Page {currentPage} of {totalPages}
            </span>

            <nav className="flex items-center p-4 space-x-2 md:space-x-3">
              <ul className="inline-flex items-center space-x-2 overflow-x-auto">
                {/* Previous Page Button */}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-white border rounded-lg shadow-sm hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fillRule="evenodd" d="M14.707 10.707a1 1 0 01-1.414 0L10 8.414 6.707 11.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>

                {/* Page Numbers */}
                {getPaginationItems().map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`flex items-center justify-center py-2 px-3 text-sm font-medium border rounded-lg shadow-sm ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      {page}
                    </button>
                  </li>
                ))}

                {/* Next Page Button */}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-white border rounded-lg shadow-sm hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 10.707a1 1 0 001.414 0L10 8.414l3.293 3.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Add Position Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
            <div className="flex">
              {/* Left Side: Input Fields */}
              <div className="w-1/2 p-4">
                <h2 className="text-lg font-semibold mb-4">Add New Position</h2>
                <div className="mb-4">
                  <label htmlFor="positionName" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="positionName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={newPosition}
                    onChange={(e) => setNewPosition(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    id="description"
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    id="status"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleAddPosition}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* Right Side: Permissions */}
              <div className="w-1/2 p-4 border-l border-gray-200">
                <h2 className="text-lg font-semibold mb-4">Select Permissions</h2>
                <div className="mb-4">
                  <h3 className="text-md font-medium text-gray-700 mb-2">Basic Permissions</h3>
                  {['dashboard', 'computer', 'employee'].map((perm) => (
                    <div key={perm} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={perm}
                        name={perm}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={permissions[perm]}
                        onChange={handlePermissionChange}
                      />
                      <label htmlFor={perm} className="ml-2 text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-md font-medium text-gray-700 mb-2">Advanced Permissions</h3>
                  {['view', 'update', 'delete'].map((perm) => (
                    <div key={perm} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={perm}
                        name={perm}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={permissions[perm]}
                        onChange={handlePermissionChange}
                      />
                      <label htmlFor={perm} className="ml-2 text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GroupDetails;
