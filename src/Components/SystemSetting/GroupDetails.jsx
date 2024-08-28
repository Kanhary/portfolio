import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes, FaPlus } from 'react-icons/fa';

// FunctionCodeCheckboxes Component
const FunctionCodeCheckboxes = ({ permissions, onChange, isEditing, functionCode }) => {
    return (
        <div className="overflow-x-auto font-khmer">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-4 text-left text-gray-700">Function Code</th>
                        <th className="p-4 text-left text-gray-700">View</th>
                        <th className="p-4 text-left text-gray-700">Update</th>
                        <th className="p-4 text-left text-gray-700">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(permissions).map((code) => (
                        <tr
                            key={code}
                            className={`border-t ${functionCode !== code ? 'bg-gray-50' : 'bg-white'}`}
                        >
                            <td className="p-4 text-gray-800">{code}</td>
                            <td className="p-4">
                                <label className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        checked={permissions[code].view} 
                                        onChange={() => onChange(code, 'view')}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        disabled={!isEditing || functionCode !== code}
                                    />
                                </label>
                            </td>
                            <td className="p-4">
                                <label className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        checked={permissions[code].update} 
                                        onChange={() => onChange(code, 'update')}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        disabled={!isEditing || functionCode !== code}
                                    />
                                </label>
                            </td>
                            <td className="p-4">
                                <label className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        checked={permissions[code].delete} 
                                        onChange={() => onChange(code, 'delete')}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        disabled={!isEditing || functionCode !== code}
                                    />
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// AddNewModal Component
const FunctionCodeTable = ({ functionCodes, selectedFunctionCodes, onChange }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-4 text-left text-gray-700">Function Code</th>
                        <th className="p-4 text-left text-gray-700">View</th>
                        <th className="p-4 text-left text-gray-700">Update</th>
                        <th className="p-4 text-left text-gray-700">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {functionCodes.map(code => (
                        <tr key={code} className="border-t">
                            <td className="p-4 text-gray-800">{code}</td>
                            <td className="p-4">
                                <label className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedFunctionCodes[code]?.view || false}
                                        onChange={(e) => onChange(code, 'view', e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </label>
                            </td>
                            <td className="p-4">
                                <label className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedFunctionCodes[code]?.update || false}
                                        onChange={(e) => onChange(code, 'update', e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </label>
                            </td>
                            <td className="p-4">
                                <label className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedFunctionCodes[code]?.delete || false}
                                        onChange={(e) => onChange(code, 'delete', e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const AddNewModal = ({ isOpen, onClose, onAdd }) => {
    const [selectedRole, setSelectedRole] = useState('Admin');
    const [selectedFunctionCodes, setSelectedFunctionCodes] = useState({});

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleFunctionCodeChange = (code, action, isChecked) => {
        setSelectedFunctionCodes(prev => ({
            ...prev,
            [code]: {
                ...prev[code],
                [action]: isChecked
            }
        }));
    };

    const handleSubmit = () => {
        const functionCodesList = Object.keys(selectedFunctionCodes);
        onAdd(selectedRole, selectedFunctionCodes);
        onClose();
    };

    const functionCodes = [
        'Dashboard', 'Computer', 'Employee Position List', 'Gender List',
        'Employee Information', 'User', 'Group Master', 'Item Permission',
        'Group Details', 'Report', 'Help'
    ];

    return isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className=" overflow-auto bg-white rounded-lg shadow-lg h-[550px] max-h-[90vh] w-full lg:w-3/4">
                <div className="sticky top-0 flex items-center justify-between w-full p-2 mb-6 bg-gray-100 border-b border-gray-300 border-dashed">
                    <h2 className="flex-1 ml-3 text-2xl font-medium text-blue-800 font-khmer">
                        Add New
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-2 py-2 mr-2 text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 ring-1 ring-gray-400"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="px-6 mb-4">
                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-700">Select Role</label>
                    <select
                        id="role"
                        value={selectedRole}
                        onChange={handleRoleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                    >
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="User">User</option>
                    </select>
                </div>

                <div className="px-6 mb-4">
                    <h3 className="mb-2 text-lg font-medium">Select Function Codes</h3>
                    <FunctionCodeTable
                        functionCodes={functionCodes}
                        selectedFunctionCodes={selectedFunctionCodes}
                        onChange={handleFunctionCodeChange}
                    />
                </div>

                <div className="flex justify-end gap-4 px-6 pb-4">
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700"
                    >
                        <FaSave /> <span>Save</span>
                    </button>
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700"
                    >
                        <FaTimes /> <span>Cancel</span>
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

// PermissionsPage Component
const PermissionsPage = () => {
    const [selectedRole, setSelectedRole] = useState('Admin');
    const [permissions, setPermissions] = useState({
        Admin: {
            Dashboard: { view: true, update: true, delete: true },
            Computer: { view: true, update: true, delete: true },
            'Employee Position List': { view: true, update: true, delete: true },
            'Gender List': { view: true, update: true, delete: true },
            'Employee Information': { view: true, update: true, delete: true },
            User: { view: true, update: true, delete: true },
            'Group Master': { view: true, update: true, delete: true },
            'Item Permission': { view: true, update: true, delete: true },
            'Group Details': { view: true, update: true, delete: true },
            Report: { view: true, update: true, delete: true },
            Help: { view: true, update: true, delete: true }
        },
        Editor: {
            Dashboard: { view: true, update: true, delete: false },
            Computer: { view: true, update: true, delete: false },
            'Employee Position List': { view: true, update: true, delete: false },
            'Gender List': { view: true, update: true, delete: false },
            'Employee Information': { view: true, update: true, delete: false },
            User: { view: true, update: false, delete: false },
            'Group Master': { view: true, update: false, delete: false },
            'Item Permission': { view: true, update: false, delete: false },
            'Group Details': { view: true, update: false, delete: false },
            Report: { view: true, update: false, delete: false },
            Help: { view: true, update: false, delete: false }
        },
        User: {
            Dashboard: { view: true, update: false, delete: false },
            Computer: { view: true, update: false, delete: false },
            'Employee Position List': { view: true, update: false, delete: false },
            'Gender List': { view: true, update: false, delete: false },
            'Employee Information': { view: true, update: false, delete: false },
            User: { view: true, update: false, delete: false },
            'Group Master': { view: false, update: false, delete: false },
            'Item Permission': { view: false, update: false, delete: false },
            'Group Details': { view: false, update: false, delete: false },
            Report: { view: false, update: false, delete: false },
            Help: { view: true, update: false, delete: false }
        }
    });
    const [isEditing, setIsEditing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckboxChange = (functionCode, action) => {
        setPermissions(prev => {
            const updatedPermissions = { ...prev };
            const currentPermissions = updatedPermissions[selectedRole];
            currentPermissions[functionCode] = {
                ...currentPermissions[functionCode],
                [action]: !currentPermissions[functionCode][action]
            };
            return updatedPermissions;
        });
    };

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleAddNewClick = () => {
        setIsModalOpen(true);
    };

    const handleAddNew = (role, functionCodes) => {
        setPermissions(prev => {
            const updatedPermissions = { ...prev };
            const newPermissions = {};
            functionCodes.forEach(code => {
                newPermissions[code] = { view: false, update: false, delete: false };
            });
            updatedPermissions[role] = {
                ...updatedPermissions[role],
                ...newPermissions
            };
            return updatedPermissions;
        });
    };

    return (
        <div className="min-h-screen p-6 mt-10 space-y-6 bg-gray-50 font-khmer">
            <h1 className="mb-6 text-4xl font-bold text-gray-900">Permissions Management</h1>
            
            <div>
                {/* Role Selection */}
            <div className="mb-6">
                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-700">Select Role</label>
                <select
                    id="role"
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className="w-1/4 p-3 transition-shadow bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md"
                >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="User">User</option>
                </select>
            </div>

            {/* Global Edit and Add New Buttons */}
            <div className="flex gap-4 mb-6">
                {!isEditing && (
                    <>
                        <button
                            onClick={handleEditClick}
                            className="flex items-center gap-3 px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                            <FaEdit /> <span className="font-medium">Edit Permissions</span>
                        </button>
                        <button
                            onClick={handleAddNewClick}
                            className="flex items-center gap-3 px-6 py-3 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
                        >
                            <FaPlus /> <span className="font-medium">Add New</span>
                        </button>
                    </>
                )}
            </div>
            </div>

            {/* Permissions Management */}
            <FunctionCodeCheckboxes
                permissions={permissions[selectedRole]}
                onChange={handleCheckboxChange}
                isEditing={isEditing}
            />

            {/* Save/Cancel Buttons */}
            {isEditing && (
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-3 px-6 py-3 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
                    >
                        <FaSave /> <span className="font-medium">Save</span>
                    </button>
                    <button
                        onClick={handleCancel}
                        className="flex items-center gap-3 px-6 py-3 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        <FaTimes /> <span className="font-medium">Cancel</span>
                    </button>
                </div>
            )}

            {/* Add New Modal */}
            <AddNewModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddNew}
            />
        </div>
    );
};

export default PermissionsPage;
