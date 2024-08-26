import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const RoleSettingForm = () => {
  const [groupCode, setGroupCode] = useState('User');
  const [selectAll, setSelectAll] = useState(false);
  const [functionCode, setFunctionCode] = useState({
    Dashboard: { view: false, update: false, delete: false },
    Computer: { view: false, update: false, delete: false },
    Employee: { view: false, update: false, delete: false },
    'Setting User': { view: false, update: false, delete: false },
    Setting: { view: false, update: false, delete: false },
    Report: { view: false, update: false, delete: false },
    Help: { view: false, update: false, delete: false },
  });
  const [selectAllPermissions, setSelectAllPermissions] = useState({
    view: false,
    update: false,
    delete: false,
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleFunctionChange = (e, func, perm) => {
    const { checked } = e.target;
    setFunctionCode(prevFunctionCode => ({
      ...prevFunctionCode,
      [func]: {
        ...prevFunctionCode[func],
        [perm]: checked,
      },
    }));
  };

  const handleSelectAllChange = (e) => {
    const { checked } = e.target;
    setSelectAll(checked);
    setFunctionCode(prevFunctionCode => {
      const updatedFunctionCode = Object.keys(prevFunctionCode).reduce((acc, func) => {
        acc[func] = {
          view: checked,
          update: checked,
          delete: checked,
        };
        return acc;
      }, {});
      return updatedFunctionCode;
    });
  };

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setSelectAllPermissions(prev => {
      const updated = { ...prev, [name]: checked };
      setFunctionCode(prevFunctionCode => {
        const updatedFunctionCode = Object.keys(prevFunctionCode).reduce((acc, func) => {
          acc[func] = {
            view: name === 'view' ? checked : prevFunctionCode[func].view,
            update: name === 'update' ? checked : prevFunctionCode[func].update,
            delete: name === 'delete' ? checked : prevFunctionCode[func].delete,
          };
          return acc;
        }, {});
        return updatedFunctionCode;
      });
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Handle apply action here
      console.log({ groupCode, functionCode });
      // Simulate a network request
      await new Promise(res => setTimeout(res, 2000));
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit the form.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-khmer">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
        <h2 className="mb-8 text-3xl font-semibold text-gray-900">កំណត់តួនាទីសម្រាប់អ្នកប្រើប្រាស់</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Group Code Dropdown */}
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">ជ្រើសរើសកូដក្រុម</label>
            <select
              value={groupCode}
              onChange={(e) => setGroupCode(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
            </select>
          </div>

          

          {/* Function Code Options */}
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">ជ្រើសរើសមុខងារ</label>
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-3 text-sm font-medium text-gray-900">ជ្រើសរើសទាំងអស់</label>
              </div>
              {Object.keys(functionCode).map((func) => (
                <div key={func} className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                  <div className="mb-4 text-lg font-semibold text-gray-800">{func}</div>
                  <div className="grid grid-cols-3 gap-4">
                    {['view', 'update', 'delete'].map(perm => (
                      <label key={perm} className="flex items-center p-2 border rounded-lg hover:bg-gray-100">
                        <input
                          type="checkbox"
                          checked={functionCode[func][perm]}
                          onChange={(e) => handleFunctionChange(e, func, perm)}
                          className="w-5 h-5 text-blue-600 form-checkbox"
                        />
                        <span className="ml-2 text-gray-700 capitalize">{perm}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description Label */}
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">ការពិពណ៌នាអំពីកូដក្រុម</label>
            <textarea
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="សូមសរសេរពិពណ៌នារបស់អ្នកនៅទីនេះ..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              បោះបង់
            </button>
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'ចាំមួយភ្លែត...' : 'អនុម័ត'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleSettingForm;
