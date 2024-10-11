import React, {useState} from 'react'
import { FaPen, FaTrashAlt } from "react-icons/fa";

const Department = () => {
  const INITIAL_FORM_DATA = { 
    CompanyCode: '', 
    DepartmentCode: '', 
    Department: '', 
    BranchCode: '',  
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [editingGender, setEditingGender] = useState(null);

  const depList = [
    {CompanyCode: 'PPAP', DepartmentCode: 'dep-1', Department: 'នាយកដ្ឋានរដ្ឋបាល', BranchCode: 'TS3'},
    
  ]

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const filteredDep = depList.filter(dep =>
    dep.Department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dep.DepartmentCode.includes(searchTerm)
  );
  const totalPages = Math.ceil(filteredDep.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentDep = filteredDep.slice(indexOfFirstRecord, indexOfLastRecord);

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
  
  return (
    <section className='mt-16'>
      <h1 className='text-xl font-medium text-blue-800'>នាយកដ្ឋាន</h1>
      <div className='mt-3 border'></div>
      <div className='w-full mt-4' >
        <div className='relative w-full overflow-hidden bg-white shadow-md sm:rounded-lg'>
            <div className='flex flex-col items-center justify-between p-4 space-x-4 space-y-3 md:flex-row md:space-y-0 md:'>
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
                                className='block w-full p-2 pl-10 text-sm text-gray-900 border rounded-lg border-gary-300 bg-gray-50 focus:ring-primary-500 focus:border-primary-500'
                            />
                        </div>
                    </form>
                </div>
                <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
                    <button
                        type='button'
                        className='flex items-center justify-center px-5 py-2 text-lg font-medium text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:scale-105 active:scale-95'
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        បន្ថែម
                    </button>
                </div>
            </div>
            <div className='w-full overflow-x-auto'>
                <table className='w-full text-sm text-left text-gray-500 '>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
                        <tr>
                            <th scope="col" className="sticky left-0 px-4 py-3 bg-gray-50 ">Action</th>
                            <th scope="col" className="px-4 py-3">Company Code</th>
                            <th scope="col" className="px-4 py-3">Department Code</th>
                            <th scope="col" className="px-4 py-3">Department Name</th>
                            <th scope="col" className="px-4 py-3">Branch Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentDep.map((dep, index) => (
                            <tr key={index} className='transition-colors duration-200 border border-b-gray-200 hover:bg-indigo-50'>
                            <td className='sticky left-0 flex px-6 py-4 bg-white'>
                                <input type="checkbox" className="mr-1 action-checkbox"/>
                                <FaPen className="ml-2 text-blue-500 cursor-pointer hover:text-blue-700" onClick={() => openEditModal(gender.code, gender.gender)} />
                                <FaTrashAlt className="ml-3 text-red-500 cursor-pointer hover:text-red-700" onClick={() => deleteGender(gender.code)} />
                            </td>
                            <td className='px-4 py-3'>{dep.CompanyCode}</td>
                            <td className='px-4 py-3' style={{ minWidth: '250px' }}>{dep.DepartmentCode}</td>
                            <td className='px-4 py-3' style={{ minWidth: '150px' }}>{dep.Department}</td>
                            <td className='px-4 py-3' style={{ minWidth: '160px' }}>{dep.BranchCode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Department
