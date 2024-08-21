import React, { useState } from 'react';
import { FaPen, FaTrashAlt } from "react-icons/fa";

const GenderList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({ code: '', position: '' });
  const [editingGender, setEditingGender] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const genderList = [
    { code: 'F', gender: 'ស្រី' },
    { code: 'M', gender: 'ប្រុស' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const filteredGender = genderList.filter(gender =>
    gender.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gender.code.includes(searchTerm)
  );
  const totalPages = Math.ceil(filteredGender.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentGenders = filteredGender.slice(indexOfFirstRecord, indexOfLastRecord);

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
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (code, gender) => {
    setEditingGender({ code, gender });
    setFormData({ code, gender });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingGender(null);
    setFormData({ code: '', gender: '' });
    setIsEditModalOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSaveNew = () => {
    console.log('Save & New clicked', formData);
    setFormData({ code: '', gender: '' });
  };

  const handleSave = () => {
    console.log('Save clicked', formData);
    closeAddModal();
  };

  const handleUpdate = () => {
    console.log('Update clicked', formData);
    closeEditModal();
  };

  const deleteGender = (code) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      // Your delete logic here...
    }
  };

  return (
    <section className='mt-10 font-khmer'>
      <h1 className='text-2xl font-semibold text-center'>Gender</h1>
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
                    className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
              <button type='button' className='flex items-start justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300' onClick={openAddModal}>
                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                Add Gender
              </button>
            </div>
          </div>
          
          <div className='w-full overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope="col" className="sticky left-0 px-4 py-3 bg-gray-50">Action</th>
                  <th scope="col" className="px-4 py-3">Code</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '200px' }}>Gender</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Last By</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Last Date</th>
                </tr>
              </thead>
              <tbody>
                {currentGenders.map((gender, index) => (
                    <tr key={index} className='transition-colors duration-200 border border-b-gray-200 hover:bg-indigo-50'>
                      <td className='sticky left-0 flex px-6 py-4 bg-white'>
                        <input type="checkbox" className="mr-3 action-checkbox" />
                        <FaPen className="text-blue-500 cursor-pointer hover:text-blue-700" onClick={() => openEditModal(gender.code, gender.gender)} />
                        <FaTrashAlt className="ml-3 text-red-500 cursor-pointer hover:text-red-700" onClick={() => deleteGender(gender.code)} />
                      </td>
                      <td className='px-4 py-3'>{gender.code}</td>
                      <td className='px-4 py-3' style={{ minWidth: '250px' }}>{gender.gender}</td>
                      <td className='px-4 py-3' style={{ minWidth: '150px' }}>Last Edited By</td>
                      <td className='px-4 py-3' style={{ minWidth: '160px' }}>Last Edited Date</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center justify-center p-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className='px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800'>First</button>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800'>Previous</button>
            {getPaginationItems().map((page, index) =>
              page === '...' ? (
                <span key={index} className='px-4 py-2 text-sm font-medium text-gray-700'>...</span>
              ) : (
                <button key={index} onClick={() => handlePageChange(page)} className={`px-4 py-2 text-sm font-medium rounded-lg ${page === currentPage ? 'bg-primary-700 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`}>
                  {page}
                </button>
              )
            )}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className='px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800'>Next</button>
            <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className='px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800'>Last</button>
          </div>
        </div>
      </div>

      {/* Add Gender Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-500 bg-opacity-75">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
            <div className="px-4 py-3 border-b">
              <h2 className="text-xl font-semibold">Add Gender</h2>
              <button onClick={closeAddModal} className="absolute text-gray-500 top-2 right-2 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-3">
              <form>
                <div className="mb-4">
                  <label htmlFor="code" className="block text-gray-700">Code</label>
                  <input type="text" id="code" value={formData.code} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="gender" className="block text-gray-700">Gender</label>
                  <input type="text" id="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={handleSaveNew} className="px-4 py-2 text-white rounded-lg bg-primary-700 hover:bg-primary-800">Save & New</button>
                  <button type="button" onClick={handleSave} className="px-4 py-2 text-white rounded-lg bg-primary-700 hover:bg-primary-800">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Gender Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-500 bg-opacity-75">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
            <div className="px-4 py-3 border-b">
              <h2 className="text-xl font-semibold">Edit Gender</h2>
              <button onClick={closeEditModal} className="absolute text-gray-500 top-2 right-2 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-3">
              <form>
                <div className="mb-4">
                  <label htmlFor="code" className="block text-gray-700">Code</label>
                  <input type="text" id="code" value={formData.code} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="gender" className="block text-gray-700">Gender</label>
                  <input type="text" id="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={handleUpdate} className="px-4 py-2 text-white rounded-lg bg-primary-700 hover:bg-primary-800">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GenderList;
