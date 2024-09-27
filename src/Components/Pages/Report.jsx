import React, { useState } from 'react';
import { FaSearch, FaEye, FaTrash, FaPlus, FaEdit } from 'react-icons/fa';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import 'aos/dist/aos.css';
const ReportPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reportType, setReportType] = useState('');
    const [tags, setTags] = useState('');
    const [reports, setReports] = useState([
        { id: 1, title: 'Monthly Staff Report', date: '2024-09-01', type: 'Staff', content: 'Details about the monthly staff report...', comments: [] },
        { id: 2, title: 'Hardware Maintenance Schedule', date: '2024-07-15', type: 'Computer', content: 'Details about the hardware Maintenance Schedule...', comments: [] },
        { id: 3, title: 'Monthly Staff Report', date: '2024-01-30', type: 'Staff', content: 'Details about the annual performance review...', comments: [] },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newReport, setNewReport] = useState({ title: '', date: '', type: '', tags: '', status: 'Draft' });
    const [viewReport, setViewReport] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [editReport, setEditReport] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [notification, setNotification] = useState('');

    const filteredReports = reports.filter(report => 
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!startDate || new Date(report.date) >= new Date(startDate)) &&
        (!reportType || report.type === reportType)
    );
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReport({ ...newReport, [name]: value });
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
        <div className="min-h-screen p-4 sm:p-8 font-khmer">
            <h1 className='text-xl font-medium text-blue-800'>របាយការណ៍</h1>
            <div className='mt-3 border'></div>
            {notification && <div className="mb-4 text-green-600">{notification}</div>}

            {/* Search and Filters */}
            <div className="flex flex-col mt-4 mb-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 data-aos='fade-up">
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
                <button className="flex items-center p-3 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700">
                    <FaSearch />
                </button>
            </div>

            {/* Report Overview */}
            <div className="p-6 bg-white rounded-lg shadow-lg data-aos='fade-up">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl">Generated Reports</h2>
                {filteredReports.length === 0 ? (
                    <p className="mt-2 text-gray-600">No reports found. Please adjust your search.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="text-white bg-blue-600">
                                <tr>
                                    <th className="px-2 py-3 text-sm text-left sm:text-base">Actions</th>
                                    <th className="px-2 py-3 text-sm text-left sm:text-base">ID</th>
                                    <th className="px-2 py-3 text-sm text-left sm:text-base">Title</th>
                                    <th className="px-2 py-3 text-sm text-left sm:text-base">Date</th>
                                    <th className="px-2 py-3 text-sm text-left sm:text-base">Type</th>
                                    {/* <th className="px-2 py-3 text-sm text-left sm:text-base">Status</th> */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredReports.map(report => (
                                    <tr key={report.id} className="transition duration-150 hover:bg-gray-100">
                                        <td className="flex px-2 py-3 space-x-2">
                                            <FaEye className="ml-3 text-indigo-500 cursor-pointer hover:text-indigo-700" onClick={() => handleViewReport(report)}/>
                                            <FaPen className="ml-2 text-blue-500 cursor-pointer hover:text-blue-700" onClick={() => handleEditReport(report)} />
                                            <FaTrashAlt className="ml-3 text-red-500 cursor-pointer hover:text-red-700" onClick={() => handleDeleteReport(report.id)} />
                                        </td>
                                        <td className="px-2 py-3 text-sm sm:text-base">{report.id}</td>
                                        <td className="px-2 py-3 text-sm font-medium sm:text-base">{report.title}</td>
                                        <td className="px-2 py-3 text-sm sm:text-base">{report.date}</td>
                                        <td className="px-2 py-3 text-sm sm:text-base">{report.type}</td>
                                        {/* <td className="px-2 py-3 text-sm sm:text-base">{report.status}</td> */}
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <button
                    className="fixed flex items-center px-5 py-5 space-x-2 text-white transition-colors bg-blue-500 rounded-full shadow-md bottom-10 right-10 hover:bg-blue-600"
                    onClick={() => setShowModal(true)}
                >
                    <FaPlus />
        
                </button>
            </div>


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

