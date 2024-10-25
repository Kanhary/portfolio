import React, { useState } from 'react';
import { FaSearch, FaEye, FaTrash, FaPlus, FaEdit } from 'react-icons/fa';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi2";
import 'aos/dist/aos.css';
const ReportPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [reportType, setReportType] = useState('');
    const [reports, setReports] = useState([
        { id: 1, title: 'Monthly Staff Report', date: '2024-09-01', type: 'Staff', content: 'Details about the monthly staff report...', comments: [] },
        { id: 2, title: 'Hardware Maintenance Schedule', date: '2024-07-15', type: 'Computer', content: 'Details about the hardware Maintenance Schedule...', comments: [] },
        { id: 3, title: 'Monthly Staff Report', date: '2024-01-30', type: 'Staff', content: 'Details about the annual performance review...', comments: [] },
        { id: 4, title: 'Monthly Staff Report', date: '2024-09-01', type: 'Staff', content: 'Details about the monthly staff report...', comments: [] },
        { id: 5, title: 'Hardware Maintenance Schedule', date: '2024-07-15', type: 'Computer', content: 'Details about the hardware Maintenance Schedule...', comments: [] },
        { id: 6, title: 'Monthly Staff Report', date: '2024-01-30', type: 'Staff', content: 'Details about the annual performance review...', comments: [] },
        { id: 7, title: 'Monthly Staff Report', date: '2024-09-01', type: 'Staff', content: 'Details about the monthly staff report...', comments: [] },
        { id: 8, title: 'Hardware Maintenance Schedule', date: '2024-07-15', type: 'Computer', content: 'Details about the hardware Maintenance Schedule...', comments: [] },
        { id: 9, title: 'Monthly Staff Report', date: '2024-01-30', type: 'Staff', content: 'Details about the annual performance review...', comments: [] },
        { id: 10, title: 'Monthly Staff Report', date: '2024-09-01', type: 'Staff', content: 'Details about the monthly staff report...', comments: [] },
        { id: 11, title: 'Hardware Maintenance Schedule', date: '2024-07-15', type: 'Computer', content: 'Details about the hardware Maintenance Schedule...', comments: [] },
        { id: 12, title: 'Monthly Staff Report', date: '2024-01-30', type: 'Staff', content: 'Details about the annual performance review...', comments: [] },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newReport, setNewReport] = useState({ title: '', date: '', type: '', tags: '', status: 'Draft' });
    const [viewReport, setViewReport] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [editReport, setEditReport] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [notification, setNotification] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredReports = reports.filter(report => 
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!startDate || new Date(report.date) >= new Date(startDate)) &&
        (!reportType || report.type === reportType)
    );
    const reportsPerPage = 5; 
    const totalReports = filteredReports.length;
    const totalPages = Math.ceil(totalReports / reportsPerPage);
    

    
    const getCurrentReports = () => {
        const startIndex = (currentPage - 1) * reportsPerPage;
        return filteredReports.slice(startIndex, startIndex + reportsPerPage);
    };

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Generate pagination items
    const getPaginationItems = () => {
        const items = [];
        for (let i = 1; i <= totalPages; i++) {
            items.push(i);
        }
        return items;
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReport({ ...newReport, [name]: value });
        console.log(setNewReport);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reportToAdd = { id: reports.length + 1, ...newReport, content: 'No additional details available.', comments: [] };
        setReports([...reports, reportToAdd]);
        setNewReport({ title: '', date: '', type: '', tags: '', status: 'Draft' });
        setShowModal(false);
        setNotification('Report added successfully!');
    };

    const handleViewReport = (report) => {
        setViewReport(report);
        setShowViewModal(true);
    };

    const handleDeleteReport = (id) => {
        if (window.confirm('Are you sure you want to delete this report?')) {
            setReports(reports.filter(report => report.id !== id));
            setNotification('Report deleted successfully!');
        }
    };

    const handleEditReport = (report) => {
        setEditReport(report);
        setShowEditModal(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedReports = reports.map(report => report.id === editReport.id ? { ...editReport } : report);
        setReports(updatedReports);
        setShowEditModal(false);
        setNotification('Report updated successfully!');
    };

    return (
        <div className="min-h-screen mt-10 font-khmer">
            <h1 className="flex space-x-3 text-xl font-medium text-blue-800">
                <HiChartBar className="text-blue-600" />
                <span>របាយកាណ៍</span>
            </h1>
            <div className="mt-2 border-b border-gray-300"></div>
            {notification && <div className="mb-4 text-green-600">{notification}</div>}

            {/* Search and Filters */}
            <div className="flex flex-col mt-4 mb-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4" data-aos='fade-up'>
                <input
                    type="text"
                    placeholder="Search reports..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md"
                />
                <select
                    value={reportType}
                    onChange={e => setReportType(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md">
                    <option value="">All Types</option>
                    <option value="Staff">Staff</option>
                    <option value="Computer">Computer</option>
                </select>
                {/* <button className="flex items-center p-3 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700">
                    <FaSearch />
                </button> */}
            </div>

            {/* Report Overview */}
            <div className="bg-white rounded-lg shadow-lg " data-aos='fade-right'>
                <div className="flex items-center justify-between p-4 mb-4">
                    <h2 className="text-base font-semibold text-blue-600 sm:text-xl ">Generated Reports</h2>
                    <button 
                        onClick={() => setShowModal(true)} 
                        className='flex items-center justify-center px-5 py-2 text-lg font-medium text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:scale-105 active:scale-95'
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        បន្ថែម
                    </button>
                </div>

            {filteredReports.length === 0 ? (
                <p className="mt-2 text-gray-600">No reports found. Please adjust your search.</p>
            ) : (
                <div className='w-full overflow-x-auto'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-100 border-t-2'>
                            <tr>
                                <th scope="col" className="sticky left-0 px-4 py-3 bg-gray-100 border-r border-t">Actions</th>
                                <th scope="col" className="px-4 py-3 border-r border-t">ID</th>
                                <th scope="col" className="px-4 py-3 border-r border-t" style={{ minWidth: '200px' }}>Title</th>
                                <th scope="col" className="px-4 py-3 border-r border-t" style={{ minWidth: '150px' }}>Date</th>
                                <th scope="col" className="px-4 py-3 border-r border-t" style={{ minWidth: '150px' }}>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getCurrentReports().map(report => (
                                <tr key={report.id} className='transition-colors duration-200 border border-b-gray-200 hover:bg-indigo-50'>
                                    <td className='sticky left-0 flex px-6 py-4 bg-white border-r'>
                                        <FaEye className="ml-2 text-indigo-500 cursor-pointer hover:text-indigo-700" onClick={() => handleViewReport(report)} />
                                        <FaPen className="ml-3 text-blue-500 cursor-pointer hover:text-blue-700" onClick={() => handleEditReport(report)} />
                                        <FaTrashAlt className="ml-3 text-red-500 cursor-pointer hover:text-red-700" onClick={() => handleDeleteReport(report.id)} />
                                    </td>
                                    <td className='px-4 py-3 border-r'>{report.id}</td>
                                    <td className='px-4 py-3 border-r' style={{ minWidth: '250px' }}>{report.title}</td>
                                    <td className='px-4 py-3 border-r' style={{ minWidth: '150px' }}>{report.date}</td>
                                    <td className='px-4 py-3 border-r' style={{ minWidth: '160px' }}>{report.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="flex flex-col items-center justify-between p-4 md:flex-row">
                <span className="mb-4 text-sm text-gray-600 md:mb-0">
                Page {currentPage} of {totalPages}
                </span>

                <nav className="flex items-center p-4 space-x-2 md:space-x-3">
                    <ul className="inline-flex items-center p-2 space-x-2 overflow-x-auto">
                        {/* Previous Page Button */}
                        <li>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-gradient-to-r from-gray-200 to-gray-300 border rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                            <span className="flex items-center justify-center px-3 py-2 text-gray-500 border rounded-lg shadow-md bg-gradient-to-r from-gray-200 to-gray-300">
                                ...
                            </span>
                            </li>
                        ) : (
                            <li key={index}>
                            <button
                                onClick={() => handlePageChange(page)}
                                className={`flex items-center justify-center py-2 px-3 border rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ${currentPage === page ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-600 shadow-lg' : 'text-gray-500 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400'}`}
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
                                className={`flex items-center justify-center py-2 px-3 text-gray-500 bg-gradient-to-r from-gray-200 to-gray-300 border rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 010-1.414L11.586 10 7.707 6.121a1 1 0 111.414-1.414l4.293 4.293a1 1 010 1.414l-4.293 4.293a1 1 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* <button
                    className="fixed flex items-center px-5 py-5 space-x-2 text-white transition-colors bg-blue-500 rounded-full shadow-md bottom-10 right-10 hover:bg-blue-600"
                    onClick={() => setShowModal(true)}
                >
                    <FaPlus />
        
                </button> */}


            {/* Modal for Adding New Report */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-11/12 p-6 bg-white rounded-lg shadow-lg sm:w-1/3">
                        <h2 className="mb-4 text-2xl font-semibold">Add New Report</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newReport.title}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={newReport.date}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Type:</label>
                                <select
                                    name="type"
                                    value={newReport.type}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required>
                                    <option value="">Select Type</option>
                                    <option value="Staff">Staff</option>
                                    <option value="Computer">Computer</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Tags:</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={newReport.tags}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                type="submit"
                                className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
                                >
                                    Save
                                </button>
                                <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 text-gray-700 transition-colors bg-gray-300 rounded-md hover:bg-gray-400"
                                >
                                Cancel
                                </button>
                                
                            </div>
                            {/* <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                    Add Report
                                </button>
                            </div> */}
                        </form>
                    </div>
                </div>
            )}

            {/* Modal for Viewing Report */}
            {showViewModal && viewReport && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full max-w-2xl p-8 overflow-hidden bg-white rounded-lg shadow-lg">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowViewModal(false)}
                            className="absolute text-gray-400 top-4 right-4 hover:text-gray-600 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Header */}
                        <h2 className="mb-6 text-2xl font-semibold text-gray-900">View Report</h2>

                        {/* Report Title */}
                        <h3 className="mb-4 text-xl font-bold text-indigo-600">
                            {viewReport.title}
                        </h3>

                        {/* Content Section */}
                        <div className="mb-6 text-gray-800">
                            <p className="mb-4 text-base leading-relaxed">
                                {viewReport.content}
                            </p>

                            {/* Additional Information */}
                            {/* <h4 className="mb-2 text-lg font-semibold text-gray-700">Additional Information:</h4>
                            <ul className="pl-5 mb-4 list-disc">
                                <li className="mb-1">Additional information 1</li>
                                <li className="mb-1">Additional information 2</li>
                                <li className="mb-1">Additional information 3</li>
                            </ul> */}
                            
                            {/* Placeholder for Visual Data */}
                            <div className="pt-4 mt-4 border-t border-gray-300">
                                <h4 className="text-lg font-semibold text-gray-700">Visual Data:</h4>
                                <p className="text-gray-600">Charts or graphs can be integrated here for a visual representation of the data.</p>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={() => setShowViewModal(false)}
                                className="px-5 py-2 font-medium text-white transition duration-200 bg-indigo-600 rounded-md shadow hover:bg-indigo-500 focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {/* Modal for Editing Report */}
            {/* Modal for Editing Report */}
            {showEditModal && editReport && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-11/12 p-6 bg-white rounded-lg shadow-lg sm:w-1/3">
                        <h2 className="mb-4 text-2xl font-semibold">Edit Report</h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={editReport.title}
                                    onChange={(e) =>
                                        setEditReport({ ...editReport, title: e.target.value })
                                    }
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={editReport.date}
                                    onChange={(e) =>
                                        setEditReport({ ...editReport, date: e.target.value })
                                    }
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Type:</label>
                                <select
                                    name="type"
                                    value={editReport.type}
                                    onChange={(e) =>
                                        setEditReport({ ...editReport, type: e.target.value })
                                    }
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                >
                                    <option value="">Select Type</option>
                                    <option value="Staff">Staff</option>
                                    <option value="Computer">Computer</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Tags:</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={editReport.tags}
                                    onChange={(e) =>
                                        setEditReport({ ...editReport, tags: e.target.value })
                                    }
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowEditModal(false)}
                                    className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ReportPage;

