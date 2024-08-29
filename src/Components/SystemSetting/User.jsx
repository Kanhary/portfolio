import React, { useState, useEffect } from 'react';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
// import { AddUser, GetUser } from '../../api/user.js';
import { AddUser, GetUser } from '@/api/user.js';

const User = () => {
  const INITIAL_FORM_DATA = { userCode: '', userName: '', firstName: '', lastName: '', phone: '', email: '', password: '' };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;

  const filteredUser = users.filter(user =>
    (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.userCode && user.userCode.includes(searchTerm))
  );

  const totalPages = Math.ceil(filteredUser.length / recordsPerPage);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentUsers = filteredUser.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getPaginationItems = () => {
    let pages = [];
    if (totalPages <= 7) {
      pages = [...Array(totalPages)].map((_, index) => index + 1);
    } else {
      if (currentPage < 4) {
        pages = [1, 2, 3, 4, '...', totalPages];
      } else if (currentPage > totalPages - 3) {
        pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }
    return pages;
  };

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => {
    setFormData(INITIAL_FORM_DATA);
    setIsAddModalOpen(false);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setFormData(user);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingUser(null);
    setFormData(INITIAL_FORM_DATA);
    setIsEditModalOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSaveNew = () => {
    console.log('Save & New clicked', formData);
    setFormData(INITIAL_FORM_DATA);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await GetUser();  
        setUsers(response.data);
        setLoading(false);
        
      } catch (err) {
        setError(err.message || 'An error occurred');
        setLoading(false);
        console.log("fail to get api");
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handleSave = () => {
    setIsLoading(true);
    AddUser(formData).then((res) => {
      setIsLoading(false);
      if (res.data.code == '200') {
        closeAddModal();
        closeEditModal();
        Swal.fire({
          text: 'Successful',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    });
  };

  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };
  return (
    <section className='mt-10 font-khmer'>
      <h1 className='text-xl font-medium text-blue-800'>អ្នកប្រើប្រាស់</h1>
      <div className='mt-3 border'></div>
      <div className='w-full mt-4'>
        <div className='relative w-full overflow-hidden bg-white shadow-md sm:rounded-lg'>
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
                    className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 '
                    placeholder='ស្វែងរក'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
              <button
                type='button'
                className='flex items-center justify-center px-5 py-2 text-lg font-medium text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:scale-105 active:scale-95'
                onClick={openAddModal}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                បន្ថែម
              </button>
            </div>
          </div>
          
          <div className='w-full overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope="col" className="sticky left-0 px-4 py-3 bg-gray-50">Action</th>
                  <th scope="col" className="px-4 py-3">Code</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Username</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>First Name</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Last Name</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Phone Number</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Email</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Password</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Last By</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Last Date</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map(user => (
                  <tr key={`${user.userCode}-${user.userName}`} className='border-b'>
                    <td className='sticky left-0 flex items-center px-4 py-3 space-x-3 bg-white'>
                      <button
                        className='text-blue-600 hover:text-blue-800'
                        onClick={() => openEditModal(user)}
                      >
                        <FaPen />
                      </button>
                      <button
                        className='text-red-600 hover:text-red-800'
                        onClick={() => handleClick()}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td className='px-4 py-3'>{user.userCode}</td>
                    <td className='px-4 py-3'>{user.userName}</td>
                    <td className='px-4 py-3'>{user.firstName}</td>
                    <td className='px-4 py-3'>{user.lastName}</td>
                    <td className='px-4 py-3'>{user.phone}</td>
                    <td className='px-4 py-3'>{user.email}</td>
                    <td className='px-4 py-3'>{user.password}</td>
                    <td className='px-4 py-3'>{user.lastBy || '-'}</td>
                    <td className='px-4 py-3'>{user.lastDate || '-'}</td>
                  </tr>
                ))}
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
                        className={`flex items-center justify-center py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500  ${currentPage === page ? 'bg-blue-500 text-white border-blue-600' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}
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
                    className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-white border rounded-lg shadow-sm hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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

      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="relative w-1/2 mx-auto transition-all transform bg-white shadow-2xl rounded-xl">
            <header className="flex items-center justify-between px-6 py-4 shadow-lg bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 rounded-t-xl">
              <h2 className="text-xl font-bold text-white md:text-2xl">បន្ថែមអ្នកប្រើប្រាស់</h2>
              <button onClick={closeAddModal} className="text-2xl text-white transition duration-200 hover:text-gray-300 md:text-3xl">
                &times;
              </button>
            </header>
            <div className="px-6 py-6 space-y-6">
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                {/* Input for Code */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="userCode" className="block mb-2 text-sm font-semibold text-gray-700">Code</label>
                  <input
                    type="text"
                    id="userCode"
                    value={formData.userCode}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                {/* Input for Position */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="userName" className="block mb-2 text-sm font-semibold text-gray-700">Username</label>
                  <input
                    type="text"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                {/* Input for Code */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="firstName" className="block mb-2 text-sm font-semibold text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                {/* Input for Position */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="lastName" className="block mb-2 text-sm font-semibold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                {/* Input for Code */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="phoneNumber" className="block mb-2 text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                {/* Input for Position */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
              </div>
            </div>
            <footer className="flex flex-col-reverse items-center justify-end px-6 py-4 space-y-3 space-y-reverse bg-gray-100 rounded-b-xl md:flex-row md:space-x-3 md:space-y-0">
              
              <button onClick={handleSave} className="w-full px-5 py-2 text-sm font-medium text-white transition duration-200 transform rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg hover:scale-105 md:w-auto">
                Save
              </button>
              <button onClick={handleSaveNew} className="w-full px-5 py-2 text-sm font-medium text-white transition duration-200 transform rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-700 hover:shadow-lg hover:scale-105 md:w-auto">
                Save & New
              </button>
              <button onClick={closeAddModal} className="w-full px-5 py-2 text-sm font-medium text-gray-700 transition duration-200 transform bg-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 md:w-auto">
                Cancel
              </button>
            </footer>
          </div>
        </div>
      )}


      {/* Edit User Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="relative w-1/2 mx-auto transition-all transform bg-white shadow-2xl rounded-xl">
            <header className="flex items-center justify-between px-6 py-4 shadow-lg bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 rounded-t-xl">
              <h2 className="text-xl font-bold text-white md:text-2xl">កែប្រែអ្នកប្រើប្រាស់</h2>
              <button onClick={closeEditModal} className="text-2xl text-white transition duration-200 hover:text-gray-300 md:text-3xl">
                &times;
              </button>
            </header>
            <div className="px-6 py-6 space-y-6">
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                {/* Input for Code */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="userCode" className="block mb-2 text-sm font-semibold text-gray-700">Code</label>
                  <input
                    type="text"
                    id="userCode"
                    value={formData.userCode}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                    disabled
                  />
                </div>
                {/* Input for Position */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="userName" className="block mb-2 text-sm font-semibold text-gray-700">Username</label>
                  <input
                    type="text"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                {/* Input for Code */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="firstName" className="block mb-2 text-sm font-semibold text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                {/* Input for Position */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="lastName" className="block mb-2 text-sm font-semibold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                {/* Input for Code */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="phoneNumber" className="block mb-2 text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                {/* Input for Position */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  />
                </div>
              </div>
            </div>
            <footer className="flex flex-col-reverse items-center justify-end px-6 py-4 space-y-3 space-y-reverse bg-gray-100 rounded-b-xl md:flex-row md:space-x-3 md:space-y-0">
              
              <button onClick={handleSave} className="w-full px-5 py-2 text-sm font-medium text-white transition duration-200 transform rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg hover:scale-105 md:w-auto">
                Save
              </button>
              
              <button onClick={closeEditModal} className="w-full px-5 py-2 text-sm font-medium text-gray-700 transition duration-200 transform bg-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 md:w-auto">
                Cancel
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
};

export default User;
