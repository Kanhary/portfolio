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
  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPosition, setNewPosition] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Active');
  const [permissions, setPermissions] = useState({
    dashboard: { view: false, update: false, delete: false },
    computer: { view: false, update: false, delete: false },
    employee: { view: false, update: false, delete: false },
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

  const handleSelectAll = (section) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [section]: {
        view: true,
        update: true,
        delete: true,
      },
    }));
  };

  const handleDeselectAll = (section) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [section]: {
        view: false,
        update: false,
        delete: false,
      },
    }));
  };

  const handlePermissionChange = (section, permission) => (e) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [section]: {
        ...prevPermissions[section],
        [permission]: e.target.checked,
      },
    }));
  };

  const filteredEmployees = employees.filter(employee =>
    employee.positionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedEmployees = filteredEmployees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPaginationItems = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section className="mt-14 font-khmer">
      <h1 className="text-xl font-medium text-blue-800">តារាងបង្ហាញទិ្នន័យគ្រុប</h1>
      <div className="mt-3 border-b"></div>
      <div className="w-full mt-4">
        <div className="relative w-full overflow-hidden bg-white shadow-md sm:rounded-lg">
          {/* Search and Add Button */}
          <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                    placeholder="Search by Position Name or Description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                onClick={() => setIsModalOpen(true)}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                បញ្ចូលមុខងារ
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">No</th>
                  <th className="px-4 py-3 text-left">Position Name</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEmployees.length > 0 ? (
                  paginatedEmployees.map((employee, index) => (
                    <tr key={employee.id} className="transition-transform duration-300 ease-in-out transform border-b hover:bg-gray-100 hover:shadow-md hover:translate-y-[-4px]">
                      <td className="px-4 py-3 text-left">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td className="px-4 py-3 text-left">{employee.positionName}</td>
                      <td className="px-4 py-3 text-left">{employee.description}</td>
                      <td className="px-4 py-3 text-left">
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-medium leading-none rounded-full ${employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {employee.status}
                        </span>
                      </td>
                      <td className="flex items-center space-x-3 px-6 py-4">
                        <FaPen
                          className="text-blue-500 cursor-pointer hover:text-blue-700"
                          onClick={() => openEditModal(employee.id)}
                        />
                        <FaTrashAlt
                          className="text-red-500 cursor-pointer hover:text-red-700"
                          onClick={() => handleDelete(employee.id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>

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
                    className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-white border rounded-lg shadow-sm hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500  ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                      <span className="flex items-center justify-center px-3 py-2 text-gray-500 bg-white border rounded-lg shadow-sm ">...</span>
                    </li>
                  ) : (
                    <li key={index}>
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`flex items-center justify-center py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500   ${currentPage === page ? 'bg-blue-500 text-white border-blue-600' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}
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
                    className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-white border rounded-lg shadow-sm hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500   ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.707 14.707a1 1 0 010-1.414L11.586 10 7.707 6.121a1 1 0 111.414-1.414l4.293 4.293a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          </div>
        </div>
      </div>

      {/* Add Position Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-10 py-4 overflow-y-auto bg-gray-900 bg-opacity-50 w-full">
    <div className="relative w-full max-w-md sm:max-w-4xl bg-white rounded-md shadow-lg overflow-auto max-h-[90vh] mt-14 sm:ml-52 h-[600px] modal-scrollbar ">
      {/* Modal Header */}
      <div className="sticky top-0 flex items-center justify-between w-full p-4 mb-6 bg-gray-100 border-b border-gray-300 border-dashed">
        <h3 className="text-2xl font-medium text-blue-800">តារាងបញ្ចូលមុខងារ</h3>
        <button
          type="button"
          className="px-2 py-2 mr-2 text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 ring-1 ring-gray-400"
          onClick={() => setIsModalOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="flex mt-4 space-x-4 gap-8 px-10">
        {/* Left Side: Form Fields */}
        <form className="w-1/2 space-y-4">
          <div>
            <label htmlFor="position-name" className="block text-base font-medium text-gray-700">ឈ្មោះរបស់មុខងារ</label>
            <input
              type="text"
              id="position-name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={newPosition}
              onChange={(e) => setNewPosition(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text- font-medium text-gray-700">ការពិព័រណនា</label>
            <textarea
              id="description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              required
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-base font-medium text-gray-700">បច្ចុប្បន្នភាព</label>
            <select
              id="status"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </form>

        {/* Right Side: Permissions Settings */}
        <div className="w-1/2 space-y-4 max-h-[400px] overflow-y-auto">
          <p className="block text-base font-medium text-gray-700 sticky top-0 bg-white ">ការអនុញ្ញាតជ្រើសរើស</p>

          <div className="flex space-x-4">
            {/* Dashboard Permissions */}
            <div className="flex-1 space-y-4">
              <p className="text-sm font-medium text-blue-700">តារាងបង្ហាញទិន្នន័យ</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="select-all-dashboard"
                  checked={Object.values(permissions.dashboard).every(Boolean)}
                  onChange={(e) => e.target.checked ? handleSelectAll('dashboard') : handleDeselectAll('dashboard')}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label htmlFor="select-all-dashboard" className="text-sm text-gray-700">Select All</label>
              </div>
              {['view', 'update', 'delete'].map((perm) => (
                <div key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`dashboard-${perm}`}
                    checked={permissions.dashboard[perm]}
                    onChange={handlePermissionChange('dashboard', perm)}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor={`dashboard-${perm}`} className="text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                </div>
              ))}
            </div>
            
            {/* Computer Permissions */}
            <div className="flex-1 space-y-4">
              <p className="text-sm font-medium text-blue-700">តារាងទិន្នន័យកុំព្យូទ័រ</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="select-all-computer"
                  checked={Object.values(permissions.computer).every(Boolean)}
                  onChange={(e) => e.target.checked ? handleSelectAll('computer') : handleDeselectAll('computer')}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label htmlFor="select-all-computer" className="text-sm text-gray-700">Select All </label>
              </div>
              {['view', 'update', 'delete'].map((perm) => (
                <div key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`computer-${perm}`}
                    checked={permissions.computer[perm]}
                    onChange={handlePermissionChange('computer', perm)}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor={`computer-${perm}`} className="text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                </div>
              ))}
            </div>
            
          </div>

          <div className="flex space-x-4">
            {/* Dashboard Permissions */}
            <div className="flex-1 space-y-4">
              <p className="text-sm font-medium text-blue-700">តារាងបុគ្គលិក</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="select-all-employee"
                  checked={Object.values(permissions.dashboard).every(Boolean)}
                  onChange={(e) => e.target.checked ? handleSelectAll('employee') : handleDeselectAll('employee')}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label htmlFor="select-all-employee" className="text-sm text-gray-700">Select All</label>
              </div>
              {['view', 'update', 'delete'].map((perm) => (
                <div key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`employee-${perm}`}
                    checked={permissions.dashboard[perm]}
                    onChange={handlePermissionChange('employee', perm)}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor={`employee-${perm}`} className="text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                </div>
              ))}
            </div>
            
            {/* Computer Permissions */}
            <div className="flex-1 space-y-4">
              <p className="text-sm font-medium text-blue-700">ការកំណត់ប្រព័ន្ធ</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="select-all-computer"
                  checked={Object.values(permissions.computer).every(Boolean)}
                  onChange={(e) => e.target.checked ? handleSelectAll('computer') : handleDeselectAll('computer')}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label htmlFor="select-all-computer" className="text-sm text-gray-700">Select All</label>
              </div>
              {['view', 'update', 'delete'].map((perm) => (
                <div key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`computer-${perm}`}
                    checked={permissions.computer[perm]}
                    onChange={handlePermissionChange('computer', perm)}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor={`computer-${perm}`} className="text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            {/* Dashboard Permissions */}
            <div className="flex-1 space-y-4">
              <p className="text-sm font-medium text-blue-700">ការថែទាំប្រព័ន្ធ</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="select-all-dashboard"
                  checked={Object.values(permissions.dashboard).every(Boolean)}
                  onChange={(e) => e.target.checked ? handleSelectAll('dashboard') : handleDeselectAll('dashboard')}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label htmlFor="select-all-dashboard" className="text-sm text-gray-700">Select All</label>
              </div>
              {['view', 'update', 'delete'].map((perm) => (
                <div key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`dashboard-${perm}`}
                    checked={permissions.dashboard[perm]}
                    onChange={handlePermissionChange('dashboard', perm)}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor={`dashboard-${perm}`} className="text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                </div>
              ))}
            </div>
            
            {/* Computer Permissions */}
            <div className="flex-1 space-y-4">
              <p className="text-sm font-medium text-blue-700">របាយការណ៍</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="select-all-computer"
                  checked={Object.values(permissions.computer).every(Boolean)}
                  onChange={(e) => e.target.checked ? handleSelectAll('computer') : handleDeselectAll('computer')}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label htmlFor="select-all-computer" className="text-sm text-gray-700">Select All</label>
              </div>
              {['view', 'update', 'delete'].map((perm) => (
                <div key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`computer-${perm}`}
                    checked={permissions.computer[perm]}
                    onChange={handlePermissionChange('computer', perm)}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor={`computer-${perm}`} className="text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                </div>
              ))}
            </div>
          </div>
          {/* Computer Permissions */}
          <div className="flex-1 space-y-4">
              <p className="text-sm font-medium text-blue-700">ជំនួយ</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="select-all-computer"
                  checked={Object.values(permissions.computer).every(Boolean)}
                  onChange={(e) => e.target.checked ? handleSelectAll('computer') : handleDeselectAll('computer')}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label htmlFor="select-all-computer" className="text-sm text-gray-700">Select All</label>
              </div>
              {['view', 'update', 'delete'].map((perm) => (
                <div key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`computer-${perm}`}
                    checked={permissions.computer[perm]}
                    onChange={handlePermissionChange('computer', perm)}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor={`computer-${perm}`} className="text-sm text-gray-700">{perm.charAt(0).toUpperCase() + perm.slice(1)}</label>
                </div>
              ))}
            </div>
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-5">
        <button
          type="button"
          className="px-8 py-2 text-base font-normal text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          onClick={handleAddPosition}
        >
          រក្សាទុក
        </button>
        <button
          type="button"
          className="px-6 py-4 text-base font-normal text-gray-700 bg-white border border-gray-300 border-dashed rounded-lg shadow-sm hover:bg-gray-100"
          onClick={() => setIsModalOpen(false)}
        >
          បោះបង់
        </button>
      </div>
    </div>
  </div>
)}



    </section>
  );
};

export default GroupDetails;
