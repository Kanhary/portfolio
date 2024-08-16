import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const GenderList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ code: '', position: '' });
    const [employees, setEmployees] = useState([
        { code: '1', position: 'អង្គនាយក' },
        { code: '2', position: 'អង្គនាយករង​ រដ្ឋបាល/ហិរញ្ញវត្ថុ' },
        { code: '3', position: 'អង្គនាយករង បច្ចេកទេស' },
        { code: '4', position: 'អង្គនាយករង កិច្ចការផែ' },
        { code: '5', position: 'អង្គនាយករង​​ អាជីវកម្ម/ប្រតិបត្តិការផែ' },
        { code: '6', position: 'ប្រធាននាយកដ្ឋាន រដ្ឋបាល' },
        { code: '7', position: 'ប្រធាននាយកដ្ឋាន​ បុគ្គលិក/ធនធានមនុស្ស' },
    ]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSaveNew = () => {
        console.log('Save & New clicked', formData);
        setFormData({ code: '', position: '' });
    };

    const handleSave = () => {
        console.log('Save clicked', formData);
        closeModal();
    };

    const editEmployee = (code, position) => {
        openModal();
        setFormData({ code, position });
    };

    const deleteEmployee = (code) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            setEmployees(employees.filter(emp => emp.code !== code));
        }
    };

    return (
        <div>
            <h1 className='mb-8 text-3xl font-extrabold text-center text-gray-800 font-kantumruy'>Employee Position List</h1>
            <div className='flex justify-end'>
                <button
                    id='addPositionbtn'
                    className='flex px-6 py-2 text-white rounded-lg shadow bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 focus:outline-none focus:ring-4 focus:ring-blue-300'
                    onClick={openModal}
                >
                    <FaPlus className='mr-2' /> Add Position
                </button>
            </div>

            <div className='mx-4 mt-6 overflow-x-auto rounded-lg shadow-inner max-h-96 font-khmer'>
                <table className='min-w-full table-auto'>
                    <thead className={`text-xs text-gray-600 uppercase ${isModalOpen ? 'bg-white' : 'sticky top-0 z-30 bg-indigo-100'}`}>
                        <tr>
                            <th className='sticky left-0 px-6 py-3 font-semibold text-left bg-indigo-100'>Code</th>
                            <th className='px-6 py-3 font-semibold text-left'>Position</th>
                            <th className='px-6 py-3 font-semibold text-left'>Last By</th>
                            <th className='px-6 py-3 font-semibold text-left'>Last Date</th>
                            <th className='px-6 py-3 font-semibold text-left'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-700'>
                        {employees.map(employee => (
                            <tr key={employee.code} className='transition-colors duration-200 border border-b-gray-200 hover:bg-indigo-50'>
                                <td className='sticky left-0 px-6 py-4 bg-white'>{employee.code}</td>
                                <td className='px-6 py-4'>{employee.position}</td>
                                <td className='px-6 py-4'></td>
                                <td className='px-6 py-4'></td>
                                <td className='px-6 py-4'>
                                    <button
                                        className="mr-2 text-blue-500 hover:underline"
                                        onClick={() => editEmployee(employee.code, employee.position)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => deleteEmployee(employee.code)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 top-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-70"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span
                            className="absolute text-2xl text-gray-500 cursor-pointer top-2 right-2"
                            onClick={closeModal}
                        >
                            &times;
                        </span>
                        <h2 className='mb-6 text-2xl font-bold text-center text-gray-900'>Add New Position</h2>
                        <form id='addForm'>
                            <div className='mb-4'>
                                <label htmlFor="code" className='block mb-2 font-medium text-gray-700'>Code</label>
                                <input
                                    type="text"
                                    id='code'
                                    value={formData.code}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="position" className='block mb-2 font-medium text-gray-700'>Position</label>
                                <input
                                    type="text"
                                    id='position'
                                    value={formData.position}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                />
                            </div>
                            <div className='flex justify-end space-x-4'>
                                <button
                                    type='button'
                                    onClick={handleSaveNew}
                                    className='px-6 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-300'
                                >
                                    Save & New
                                </button>
                                <button
                                    type='button'
                                    onClick={handleSave}
                                    className='px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300'
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GenderList;
