import React, { useState } from 'react';

const RoleSettingForm = () => {
  const [groupCode, setGroupCode] = useState('User');
  const [selectAll, setSelectAll] = useState(false);
  const [functionCode, setFunctionCode] = useState({
    Dashboard: { view: false, update: false, delete: false },
    Computer: { view: false, update: false, delete: false },
    'Employee Position List': { view: false, update: false, delete: false },
    'Gender List': { view: false, update: false, delete: false },
    'Employee Information': { view: false, update: false, delete: false },
    User: { view: false, update: false, delete: false },
    'Group Master': { view: false, update: false, delete: false },
    'Item Permission': { view: false, update: false, delete: false },
    'Group Details': { view: false, update: false, delete: false },
    Report: { view: false, update: false, delete: false },
    Help: { view: false, update: false, delete: false },
  });
  const [selectAllPermissions, setSelectAllPermissions] = useState({
    view: false,
    update: false,
    delete: false,
  });
  const [loading, setLoading] = useState(false);

  const handleFunctionChange = (e, func, perm) => {
    const { checked } = e.target;
    setFunctionCode((prevFunctionCode) => ({
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
    setFunctionCode((prevFunctionCode) => {
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
    setSelectAllPermissions((prev) => {
      const updated = { ...prev, [name]: checked };
      setFunctionCode((prevFunctionCode) => {
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
      console.log({ groupCode, functionCode });
      await new Promise((res) => setTimeout(res, 2000));
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
    <div className="flex items-center justify-center min-h-screen mt-10 bg-gray-100">
      <div className="w-full p-10 bg-white shadow-md rounded-xl">
        <h2 className="mb-8 text-4xl font-semibold text-gray-800">Role Setting Form</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Select Group Code</label>
              <select
                value={groupCode}
                onChange={(e) => setGroupCode(e.target.value)}
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-600">Group Code Description</label>
              <textarea
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your description here..."
              ></textarea>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Function Codes</label>
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">Select All</label>
              </div>

              {Object.keys(functionCode).map((func) => (
                <div key={func} className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                  <div className="mb-2 text-lg font-semibold text-gray-700">{func}</div>
                  <div className="flex space-x-4">
                    {['view', 'update', 'delete'].map((perm) => (
                      <label key={perm} className="flex items-center p-2 space-x-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                        <input
                          type="checkbox"
                          checked={functionCode[func][perm]}
                          onChange={(e) => handleFunctionChange(e, func, perm)}
                          className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span className="text-sm font-medium text-gray-700 capitalize">{perm}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center space-x-2">
                  <span className="inline-block w-5 h-5 border-4 border-t-2 border-white border-solid rounded-full animate-spin"></span>
                  <span>Submitting...</span>
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleSettingForm;
