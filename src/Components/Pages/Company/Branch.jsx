import React, { useState } from 'react';
import { FaPen, FaTrashAlt, FaEye } from 'react-icons/fa';

const Branch = () => {
  const INITIAL_FORM_DATA = {
    CompanyCode: '',
    BranchCode: '',
    Branch: '',
    LastBy: '',
    LastDate: '',
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [editingBranch, setEditingBranch] = useState(null);

  

  const branchList = [
    {
      CompanyCode: 'PPAP',
      BranchCode: 'branch-1',
      Branch: 'នាយកដ្ឋានសាខា',
      LastBy: 'John Doe',
      LastDate: '2024-10-10',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const filteredBranches = branchList.filter(branch =>
    branch.Branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.BranchCode.includes(searchTerm)
  );
  const totalPages = Math.ceil(filteredBranches.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentBranches = filteredBranches.slice(indexOfFirstRecord, indexOfLastRecord);

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSave = () => {
    if (!formData.CompanyCode || !formData.BranchCode || !formData.Branch || !formData.LastBy || !formData.LastDate) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingBranch) {
      // Update existing branch logic
    } else {
      // Add new branch logic
    }

    setFormData(INITIAL_FORM_DATA);
    setIsEditModalOpen(false);
  };

  const openAddModal = () => {
    setFormData(INITIAL_FORM_DATA);  // Reset the form data before opening the Add Modal
    setIsAddModalOpen(true);
  };
  const openEditModal = (branchCode) => {
    const branchToEdit = branchList.find(branch => branch.BranchCode === branchCode);
    if (branchToEdit) {
      setFormData(branchToEdit);  // Set form data for editing
      setEditingBranch(branchCode);
      setIsEditModalOpen(true);
    }
  };

  const openViewModal = (branchCode) => {
    const branchToView = branchList.find(branch => branch.BranchCode === branchCode);
    if (branchToView) {
      setFormData(branchToView);
      setIsViewModalOpen(true);
    }
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingBranch(null);
    setFormData(INITIAL_FORM_DATA);
  };

  const deleteBranch = (branchCode) => {
    const confirmed = window.confirm('Are you sure you want to delete this branch?');
    if (confirmed) {
      // Remove branch logic
    }
  };

  return (
    <section className='mt-16'>
      <h1 className='text-xl font-medium text-blue-800'>សាខា</h1>
      <div className='mt-3 border'></div>
      <div className='w-full mt-4'>
        <div className='relative w-full overflow-hidden bg-white shadow-md sm:rounded-lg'>
          <div className='flex flex-col items-center justify-between p-4 space-x-4 space-y-3 md:flex-row md:space-y-0'>
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
                    className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                  <th scope="col" className="px-4 py-3">Company Code</th>
                  <th scope="col" className="px-4 py-3">Branch Code</th>
                  <th scope="col" className="px-4 py-3">Branch Name</th>
                  <th scope="col" className="px-4 py-3">Last By</th>
                  <th scope="col" className="px-4 py-3">Last Date</th>
                </tr>
              </thead>
              <tbody>
  {currentBranches.map((branch, index) => (
    <tr
      key={index}
      className='transition-colors duration-200 border border-b-gray-200 hover:bg-indigo-50'
    >
      <td className="sticky left-0 px-4 py-2">
        <div className='flex gap-2'>
          {/* Checkbox */}
          <input type="checkbox" className="mr-2" />


          {/* Edit Button */}
          <button onClick={() => openEditModal(branch.BranchCode, branch.Branch)}>
            <FaPen className='text-blue-600 hover:text-blue-800' />
          </button>

          {/* View Button */}
          <button onClick={() => openViewModal(branch.BranchCode)}>
              <FaEye className='text-green-600 hover:text-green-800' />
          </button>

          {/* Delete Button */}
          <button onClick={() => deleteBranch(branch.BranchCode)}>
            <FaTrashAlt className='text-red-600 hover:text-red-800' />
          </button>
        </div>
      </td>
      <td className="px-4 py-2">{branch.CompanyCode}</td>
      <td className="px-4 py-2">{branch.BranchCode}</td>
      <td className="px-4 py-2">{branch.Branch}</td>
      <td className="px-4 py-2">{branch.LastBy}</td>
      <td className="px-4 py-2">{branch.LastDate}</td>
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

      {/* Modal for Adding and Editing Branch */}
      {isAddModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="relative w-full max-w-xl sm:max-w-5xl md:max-w-4xl lg:max-w-2xl bg-white rounded-md shadow-lg overflow-auto max-h-[90vh] h-[73vh] sm:h-[550px] md:h-[450px] modal-scrollbar mt-14 sm:ml-52 md:ml-0" data-aos='zoom-in'>
      <div className="sticky top-0 z-50 flex items-center justify-between w-full p-4 py-4 mb-6 bg-gray-100 border-b-2 border-gray-300 border-dashed">
        <h2 className="flex-1 ml-3 text-xl font-medium text-blue-800 sm:text-2xl md:text-2xl font-khmer leading-2">
          បញ្ចូលព័ត៌មានសាខា
        </h2>
        <button
          type="button"
          onClick={() => setIsAddModalOpen(false)} // Close modal function
          className="px-2 py-2 mr-2 text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 ring-1 ring-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div className="px-4">
        <form className="space-y-4" onSubmit={handleSave}> {/* Add onSubmit to form */}
          {/* Company Code Dropdown */}
          <div className='mb-4'>
            <label htmlFor="CompanyCode" className='block text-sm font-medium text-gray-700'>Company Code</label>
            <select 
              id='CompanyCode'
              name="CompanyCode" // Added name attribute for form data
              value={formData.CompanyCode} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
              required
            >
              <option value="" disabled>Select a Company Code</option>
              <option value="PPAP">PPAP</option>
              <option value="XYZ">XYZ</option>
              <option value="ABC">ABC</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Branch Code Input */}
          <div className='mb-4'>
            <label htmlFor="BranchCode" className='block text-sm font-medium text-gray-700'>Branch Code</label>
            <input 
              type="text" 
              id='BranchCode'
              name="BranchCode" // Added name attribute for form data
              value={formData.BranchCode} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
              required
            />
          </div>

          {/* Branch Name Input */}
          <div className='mb-4'>
            <label htmlFor="Branch" className='block text-sm font-medium text-gray-700'>Branch Name</label>
            <input 
              type="text" 
              id='Branch'
              name="Branch" // Added name attribute for form data
              value={formData.Branch} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
              required
            />
          </div>

          <div className="flex justify-center gap-5 p-6 mt-4">
            <button
              type="submit" // Keep onSubmit in form
              className="px-8 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              <p className='text-base font-normal'>រក្សាទុក</p>
            </button>
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)} // Close modal function
              className="px-6 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 border-dashed rounded-lg shadow-sm hover:bg-gray-100"
            >
              <p className='text-base font-normal'>ចាកចេញ</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

{isEditModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="relative w-full max-w-xl sm:max-w-5xl md:max-w-4xl lg:max-w-2xl bg-white rounded-md shadow-lg overflow-auto max-h-[90vh] h-[73vh] sm:h-[550px] md:h-[450px] modal-scrollbar mt-14 sm:ml-52 md:ml-0" data-aos='zoom-in'>
      <div className="sticky top-0 z-50 flex items-center justify-between w-full p-4 py-4 mb-6 bg-gray-100 border-b-2 border-gray-300 border-dashed">
        <h2 className="flex-1 ml-3 text-xl font-medium text-blue-800 sm:text-2xl md:text-2xl font-khmer leading-2">
          កែប្រែព័ត៌មានសាខា
        </h2>
        <button
          type="button"
          onClick={() => setIsEditModalOpen(false)} // Close modal function
          className="px-2 py-2 mr-2 text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 ring-1 ring-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div className="px-4">
        <form className="space-y-4" onSubmit={handleSave}> {/* Add onSubmit to form */}
          {/* Company Code Dropdown */}
          <div className='mb-4'>
            <label htmlFor="CompanyCode" className='block text-sm font-medium text-gray-700'>Company Code</label>
            <select 
              id='CompanyCode'
              name='CompanyCode' // Added name attribute for handling form data
              value={formData.CompanyCode} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
              required
            >
              <option value="" disabled>Select a Company Code</option>
              <option value="PPAP">PPAP</option>
              <option value="XYZ">XYZ</option>
              <option value="ABC">ABC</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Branch Code Input */}
          <div className='mb-4'>
            <label htmlFor="BranchCode" className='block text-sm font-medium text-gray-700'>Branch Code</label>
            <input 
              type="text" 
              id='BranchCode'
              name='BranchCode' // Added name attribute for handling form data
              value={formData.BranchCode} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
              required
            />
          </div>

          {/* Branch Name Input */}
          <div className='mb-4'>
            <label htmlFor="Branch" className='block text-sm font-medium text-gray-700'>Branch Name</label>
            <input 
              type="text" 
              id='Branch'
              name='Branch' // Added name attribute for handling form data
              value={formData.Branch} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
              required
            />
          </div>

          <div className="flex justify-center gap-5 p-6 mt-4">
            <button
              type="submit" // Submit button to save data
              className="px-8 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              <p className='text-base font-normal'>រក្សាទុក</p>
            </button>
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)} // Close modal function
              className="px-6 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 border-dashed rounded-lg shadow-sm hover:bg-gray-100"
            >
              <p className='text-base font-normal'>ចាកចេញ</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}
      {isViewModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="relative w-full max-w-xl sm:max-w-5xl md:max-w-4xl lg:max-w-2xl bg-white rounded-md shadow-lg overflow-auto max-h-[90vh] h-[73vh] sm:h-[550px] md:h-[450px] modal-scrollbar mt-14 sm:ml-52 md:ml-0" data-aos='zoom-in'>
      <div className="sticky top-0 z-50 flex items-center justify-between w-full p-4 py-4 mb-6 bg-gray-100 border-b-2 border-gray-300 border-dashed">
        <h2 className="flex-1 ml-3 text-xl font-medium text-blue-800 sm:text-2xl md:text-2xl font-khmer leading-2">
          មើលព័ត៌មានសាខា
        </h2>
        <button
          type="button"
          onClick={() => setIsViewModalOpen(false)} // Close view modal
          className="px-2 py-2 mr-2 text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 ring-1 ring-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div className="px-4">
        <form className="space-y-4"> 
          {/* Company Code (Read-Only) */}
          <div className='mb-4'>
            <label htmlFor="CompanyCode" className='block text-sm font-medium text-gray-700'>Company Code</label>
            <input 
              type="text" 
              id="CompanyCode" 
              value={formData.CompanyCode} 
              readOnly
              className='block w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
            />
          </div>

          {/* Branch Code (Read-Only) */}
          <div className='mb-4'>
            <label htmlFor="BranchCode" className='block text-sm font-medium text-gray-700'>Branch Code</label>
            <input 
              type="text" 
              id="BranchCode" 
              value={formData.BranchCode} 
              readOnly
              className='block w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
            />
          </div>

          {/* Branch Name (Read-Only) */}
          <div className='mb-4'>
            <label htmlFor="Branch" className='block text-sm font-medium text-gray-700'>Branch Name</label>
            <input 
              type="text" 
              id="Branch" 
              value={formData.Branch} 
              readOnly
              className='block w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1'
            />
          </div>

          <div className="flex justify-center gap-5 p-6 mt-4">
            <button
              type="button"
              onClick={() => setIsViewModalOpen(false)} // Close modal function
              className="px-6 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 border-dashed rounded-lg shadow-sm hover:bg-gray-100"
            >
              <p className='text-base font-normal'>បិទ</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Branch;
