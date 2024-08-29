import React, { useState, useEffect } from 'react';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const LongCourse = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [newCourse, setNewCourse] = useState({
        from: '',
        to: '',
        course: '',
        organize: '',
        inCountry: false,
        outCountry: false,
        lastBy: ''
    });
    const itemsPerPage = 10; // Set the number of items per page

    // Example data
    useEffect(() => {
        const exampleData = [
            { id: 1, from: '01/01/2024', to: '01/07/2024', course: 'JavaScript Basics', organize: 'Online', inCountry: true, outCountry: false, lastBy: 'Admin' },
            { id: 2, from: '01/02/2024', to: '01/08/2024', course: 'React.js Advanced', organize: 'Onsite', inCountry: true, outCountry: false, lastBy: 'Admin' },
            // Add more example data as needed
        ];
        setCourses(exampleData);
        setTotalPages(Math.ceil(exampleData.length / itemsPerPage));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCourses(courses.filter(course => course.id !== id));
                Swal.fire(
                    'Deleted!',
                    'The course has been deleted.',
                    'success'
                );
            }
        });
    };

    const handleEdit = (id) => {
        // Handle edit logic here
        Swal.fire('Edit', `Editing course with ID: ${id}`, 'info');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission and update the courses list
        const newCourseData = { ...newCourse, id: courses.length + 1 }; // Generate new ID
        setCourses([...courses, newCourseData]);
        setNewCourse({
            from: '',
            to: '',
            course: '',
            organize: '',
            inCountry: false,
            outCountry: false,
            lastBy: ''
        });
        setShowForm(false); // Hide form after submission
        Swal.fire('Added!', 'The course has been added.', 'success');
    };


    const filteredCourses = courses.filter(
        course =>
            course.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.id.toString().includes(searchTerm)
    );

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredCourses.slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getPaginationItems = () => {
        let items = [];
        for (let i = 1; i <= totalPages; i++) {
            items.push(i);
        }
        return items;
    };
    
    return (
        <div className='p-6'>
            <h1 className='text-xl font-medium text-blue-800 mt-8'>
                តារាងបង្ហាញព័ត៌មានវគ្គសិក្សា
            </h1>
            <div className='mt-3 border border-gray-200'></div>

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
                                        className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-300 focus:border-primary-300 focus:outline-none focus:ring-1'
                                        placeholder='Search by Course or ID'
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
                            <button
                                type='button'
                                className='flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300'
                                onClick={() => setShowForm(!showForm)}
                            >
                                <svg className="h-3.5 w-3.5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                <span className='text-base font-normal'>បញ្ចូលព័ត៌មានវគ្គសិក្សា</span>
                            </button>
                        </div>
                    </div>

                    {showForm && (
            <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75'>
              <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
              <div className='flex justify-between items-center border-b border-dashed border-gray-300 pb-2 mb-4 '>
        <h1 className='text-2xl font-medium text-blue-900'>បញ្ចូលវគ្គសិក្សាថ្មី</h1>
        <button
          type="button"
          className="px-2 py-2 mr-2 text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 ring-1 ring-gray-400"
          onClick={() => setShowForm(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
        </button>
      </div>
      
                <form onSubmit={handleFormSubmit} className='space-y-4'>
                  <div className='grid grid-cols-1 gap-4'>
                    <div>
                      <label htmlFor="from" className='block mb-1 text-sm font-medium text-gray-700'>From</label>
                      <input
                        type="date"
                        id="from"
                        className='block w-full p-2 border border-gray-300 rounded-lg'
                        value={newCourse.from}
                        onChange={(e) => setNewCourse({ ...newCourse, from: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="to" className='block mb-1 text-sm font-medium text-gray-700'>To</label>
                      <input
                        type="date"
                        id="to"
                        className='block w-full p-2 border border-gray-300 rounded-lg'
                        value={newCourse.to}
                        onChange={(e) => setNewCourse({ ...newCourse, to: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="course" className='block mb-1 text-sm font-medium text-gray-700'>Course</label>
                      <input
                        type="text"
                        id="course"
                        className='block w-full p-2 border border-gray-300 rounded-lg'
                        value={newCourse.course}
                        onChange={(e) => setNewCourse({ ...newCourse, course: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="organize" className='block mb-1 text-sm font-medium text-gray-700'>Organize</label>
                      <input
                        type="text"
                        id="organize"
                        className='block w-full p-2 border border-gray-300 rounded-lg'
                        value={newCourse.organize}
                        onChange={(e) => setNewCourse({ ...newCourse, organize: e.target.value })}
                        required
                      />
                    </div>
                    <div className='mb-4'>
  <label className='block mb-1 text-sm font-medium text-gray-700'>Location</label>
  <div className='flex items-center'>
    <label className='mr-4 flex items-center cursor-pointer'>
      <input
        type="radio"
        name="location"
        checked={newCourse.inCountry}
        onChange={() => setNewCourse({ ...newCourse, inCountry: true })}
        className='h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
      />
      <span className='ml-2 text-sm text-gray-700'>In Country</span>
    </label>
    <label className='flex items-center cursor-pointer'>
      <input
        type="radio"
        name="location"
        checked={!newCourse.inCountry}
        onChange={() => setNewCourse({ ...newCourse, inCountry: false })}
        className='h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
      />
      <span className='ml-2 text-sm text-gray-700'>Out of Country</span>
    </label>
  </div>
</div>


                    <div>
                      <label htmlFor="lastBy" className='block mb-1 text-sm font-medium text-gray-700'>Last Modified By</label>
                      <input
                        type="text"
                        id="lastBy"
                        className='block w-full p-2 border border-gray-300 rounded-lg'
                        value={newCourse.lastBy}
                        onChange={(e) => setNewCourse({ ...newCourse, lastBy: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className='flex justify-end space-x-4'>
                    <button type='button' className='px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200' onClick={() => setShowForm(false)}>
                      Cancel
                    </button>
                    <button type='submit' className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600'>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
<div className='overflow-x-auto'>
  <table className='w-full text-sm text-left text-gray-500'>
    <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
      <tr>
        <th scope="col" className='p-3'>Action</th>
        <th scope="col" className='p-3'>ID</th>
        <th scope="col" className='p-3'>From</th>
        <th scope="col" className='p-3'>To</th>
        <th scope="col" className='p-3'>Course</th>
        <th scope="col" className='p-3'>Organize</th>
        <th scope="col" className='p-3'>Location</th>
        <th scope="col" className='p-3'>Last Modified By</th>
      </tr>
    </thead>
    <tbody>
      {getCurrentPageData().map((course) => (
        <tr key={course.id} className='bg-white border-b'>
          <td className='p-3 flex items-center'>
            <input
              type="checkbox"
              className='form-checkbox h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
            />
            <div className='ml-4 flex space-x-2'>
              <button
                onClick={() => handleEdit(course.id)}
                className='text-blue-500 hover:text-blue-600'
              >
                <FaPen />
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className='text-red-500 hover:text-red-600'
              >
                <FaTrashAlt />
              </button>
            </div>
          </td>
          <td className='p-3 truncate'>{course.id}</td>
          <td className='p-3 truncate'>{course.from}</td>
          <td className='p-3 truncate'>{course.to}</td>
          <td className='p-3 truncate'>{course.course}</td>
          <td className='p-3 truncate'>{course.organize}</td>
          <td className='p-3 truncate'>{course.inCountry ? 'In Country' : 'Out of Country'}</td>
          <td className='p-3 truncate'>{course.lastBy}</td>
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
        </div>
    );
};

export default LongCourse;
