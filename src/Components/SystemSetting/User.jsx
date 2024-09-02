import React, { useState, useEffect } from 'react';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
// import { AddUser, GetUser } from '../../api/user.js';
import { AddUser, GetUser, GetEmp } from '@/api/user.js';

const User = () => {
  const INITIAL_FORM_DATA = { 
    userCode: '', 
    userName: '', 
    firstName: '', 
    lastName: '', 
    phone: '', 
    email: '', 
    password: '', 
    cardId: '', 
    staffCode: '', 
    picture: null 
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [employees, setEmployees] = useState([]); // State to store employee data
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const recordsPerPage = 8;

  // Filter users based on search term
  const filteredUser = users.filter(user =>
    (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.userCode && user.userCode.includes(searchTerm))
  );

  const totalPages = Math.ceil(filteredUser.length / recordsPerPage);

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

  const handleSaveNew = async () => {
    const validationErrors = {};
    
    // Check required fields
    if (!formData.userCode) validationErrors.userCode = 'User Code is required';
    if (!formData.userName) validationErrors.userName = 'User Name is required';
    if (!formData.firstName) validationErrors.firstName = 'First Name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (!formData.cardId) validationErrors.cardId = 'Card ID is required';
    if (!formData.selectedOption) validationErrors.staffCode = 'Staff code is required';
    
    // If there are validation errors, set the errors state and do not proceed with the save
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    try {
      const res = await AddUser(formData); // Ensure AddUser is correctly implemented
    
      if (res.data.code === '200') {
        Swal.fire({
          text: 'Done',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
        setFormData(INITIAL_FORM_DATA); // Reset form for new entry
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong while saving.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to connect to the server.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  
  
  const handleSave = async () => {
    // Reset previous errors
    const validationErrors = {};
  
    // Check required fields
    if (!formData.userCode) validationErrors.userCode = 'User Code is required';
    if (!formData.userName) validationErrors.userName = 'User Name is required';
    if (!formData.firstName) validationErrors.firstName = 'First Name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (!formData.cardId) validationErrors.cardId = 'Card ID is required';
    if (!selectedOption) validationErrors.staffCode = 'Staff Code is required';
    
    if (Object.keys(validationErrors).length > 0) {
      console.log('Validation errors:', validationErrors); 
      setErrors(validationErrors);
      return;
    }
  
    // Update formData with selectedOption
    const updatedFormData = { ...formData, staffCode: selectedOption };
    setFormData(updatedFormData);
    
    setIsLoading(true);
    try {
      console.log('Submitting formData:', updatedFormData); // Debugging
      const res = await AddUser(updatedFormData); 
      if (res.data.code === '200') {
        Swal.fire({
          text: 'Done',
          icon: 'success',
          confirmButtonText: 'Okay'
        }).then(() => {
          closeAddModal();
        });
      } 
    } catch (error) {
      console.error('Error:', error); // Debugging
      Swal.fire({
        title: 'Error!',
        text: 'Failed to connect to the server.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    } 
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

  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, picture: file });
      setUploadSuccess(true);  // Show success message
    }
  };

  // Fetch users and employees
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await GetUser();  
        setUsers(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } 
    };

    const fetchEmployees = async () => {
      try {
        const response = await GetEmp();
        setEmployees(response.data.data)
      } catch (err) {
        setError(err.message || 'An error occurred');
      }
    };
    
    

    fetchUsers();
    fetchEmployees();
  }, [currentPage]);

  const handleChangeSelection = (e) => {
    setSelectedOption(e.target.value);
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
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>User Code</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Username</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>First Name</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Last Name</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Phone Number</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Email</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Password</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Card ID</th>
                  <th scope='col' className='px-4 py-3' style={{ minWidth: '150px' }}>Employee ID</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Last By</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Last Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
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
                    <td className='px-4 py-3'>{user.cardId}</td>
                    <td className='px-4 py-3'>{user.staffCode}</td>
                    <td className='px-4 py-3'>{user.lastBy}</td>
                    <td className='px-4 py-3'>{user.lastDate}</td>
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
          <div className="relative w-full mx-auto overflow-auto transition-all transform bg-white shadow-2xl lg:w-2/3 rounded-xl h-2/3 lg:h-5/6">
            <header className="sticky top-0 flex items-center justify-between px-6 py-4 shadow-lg bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 rounded-t-xl">
              <h2 className="text-xl font-bold text-white md:text-2xl">បន្ថែមអ្នកប្រើប្រាស់</h2>
              <button onClick={closeAddModal} className="text-2xl text-white transition duration-200 hover:text-gray-300 md:text-3xl">
                &times;
              </button>
            </header>
            <form className="flex flex-col px-6 py-6 space-y-6 md:flex-row md:space-x-6">
              {/* Left Side: Form Inputs */}
              <div className="w-full space-y-6 md:w-3/4">
                <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                  {/* Input for Code */}
                  <div className="w-full md:w-1/2">
                    <label htmlFor="userCode" className="block mb-2 text-sm font-semibold text-gray-700">User Code</label>
                    <input
                      type="text"
                      id="userCode"
                      value={formData.userCode}
                      onChange={handleChange}
                      className={`block w-full px-4 py-2 text-sm text-gray-800 border ${errors.userCode ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200`}
                    />
                    {errors.userCode && <p className="mt-1 text-xs text-red-500">{errors.userCode}</p>}
                  </div>
                  {/* Input for Username */}
                  <div className="w-full md:w-1/2">
                    <label htmlFor="userName" className="block mb-2 text-sm font-semibold text-gray-700">Username</label>
                    <input
                      type="text"
                      id="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                      autoComplete="username"
                    />
                    {errors.userName && <p className="mt-1 text-xs text-red-500">{errors.userName}</p>}
                  </div>

                </div>
                <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                  {/* Input for First Name */}
                  <div className="w-full md:w-1/2">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-semibold text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`block w-full px-4 py-2 text-sm text-gray-800 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200`}
                    />
                    {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                  </div>
                  {/* Input for Last Name */}
                  <div className="w-full md:w-1/2">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-semibold text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`block w-full px-4 py-2 text-sm text-gray-800 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200`}
                    />
                    {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                  {/* Input for Phone Number */}
                  <div className="w-full md:w-1/2">
                    <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="staffCode" className="block mb-2 text-sm font-semibold text-gray-700">Employee ID</label>
                    <select
                      value={selectedOption}
                      onChange={handleChangeSelection}
                      className="block w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                    >
                      <option value="">Select Employee ID</option>
                      {
                        employees.map((employee, index) => (
                          <option key={`${employee.staffCode}-${index}`} value={employee.staffCode}>
                            {employee.staffCode} - {employee.laTanName}
                          </option>
                        ))
                      }
                    </select>
                    {error && <div className="text-red-600">{error}</div>}
                  </div>
                </div>
                <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                  {/* Input for Card ID */}
                  <div className="w-full md:w-1/2">
                    <label htmlFor="cardId" className="block mb-2 text-sm font-semibold text-gray-700">Card ID</label>
                    <input
                      type="text"
                      id="cardId"
                      value={formData.cardId}
                      onChange={handleChange}
                      className={`block w-full px-4 py-2 text-sm text-gray-800 border ${errors.cardId ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200`}
                    />
                    {errors.cardId && <p className="mt-1 text-xs text-red-500">{errors.cardId}</p>}
                  </div>
                  {/* Input for Password */}
                  <div className="w-full md:w-1/2">
                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full px-4 py-2 text-sm text-gray-800 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200`}
                      autoComplete="current-password"
                    />
                    {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                  </div>

                </div>
                <div className="w-full">
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

              {/* Right Side: Picture Upload */}
              <div className="flex items-center w-full space-y-4 justify-evenly lg:justify-center lg:flex-col md:w-1/4">
                <div className="relative flex items-center justify-center w-32 h-32 overflow-hidden bg-gray-100 rounded-lg shadow-md">
                  {formData.picture ? (
                    <img
                      src={URL.createObjectURL(formData.picture)}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  )}
                </div>
                <input
                  type="file"
                  id="picture"
                  accept="image/*"
                  onChange={handlePictureChange}
                  className="hidden"
                />
                <label
                  htmlFor="picture"
                  className="px-4 py-2 text-sm font-semibold text-center text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none"
                >
                {formData.picture ? "Change Picture" : "Upload Picture"}
                </label>
              </div>
            </form>

            <footer className="flex flex-col items-center justify-end px-6 py-4 space-y-3 space-y-reverse bg-gray-100 rounded-b-xl md:flex-row md:space-x-3 md:space-y-0">
                    
              <button onClick={handleSave} className="w-full px-5 py-2 mb-3 text-sm font-medium text-white transition duration-200 transform rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg hover:scale-105 md:w-auto lg:mb-0">
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
