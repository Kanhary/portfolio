import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { UserIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const RoleSettingForm = () => {
  const [role, setRole] = useState('User');
  const [selectAll, setSelectAll] = useState(false);
  const [categories, setCategories] = useState({
    Dashboard: false,
    Computer: false,
    Employee: false,
    'Setting User': false,
    Setting: false,
    Report: false,
    Help: false,
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [permissions, setPermissions] = useState({
    view: false,
    update: false,
    delete: false,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setCategories(prevCategories => {
      const updatedCategories = { ...prevCategories, [name]: checked };
      const updatedSelectedCategories = checked 
        ? [...selectedCategories, name]
        : selectedCategories.filter(category => category !== name);

      setSelectedCategories(updatedSelectedCategories);
      return updatedCategories;
    });
  };

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    setCategories(prevCategories => {
      const updatedCategories = Object.keys(prevCategories).reduce((acc, category) => {
        acc[category] = checked;
        return acc;
      }, {});
      setSelectedCategories(checked ? Object.keys(prevCategories) : []);
      return updatedCategories;
    });
  };

  const handlePermissionChange = (e) => {
    setPermissions({
      ...permissions,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Handle apply action here
      console.log({ role, selectedCategories, permissions });
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
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">កំណត់តួនាទីសម្រាប់អ្នកប្រើប្រាស់</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">ជ្រើសរើសតួនាទី</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="User">អ្នកប្រើប្រាស់</option>
              <option value="Admin">អ្នកគ្រប់គ្រង</option>
            </select>
          </div>

          {/* Description Label */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">ការពិពណ៌នាអំពីតួនាទី</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="សូមសរសេរពិពណ៌នារបស់អ្នកនៅទីនេះ..."
            ></textarea>
          </div>

          {/* Dropdown Menu with Checkboxes */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full md:w-auto"
            >
              ជ្រើសរើសប្រភេទ
              <svg className="w-3.5 h-3.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <Transition
              show={dropdownOpen}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-lg"
            >
              <ul className="p-3 space-y-2 text-sm text-gray-700">
                <li>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900">ជ្រើសរើសទាំងអស់</label>
                  </div>
                </li>
                {Object.keys(categories).map((category) => (
                  <li key={category}>
                    <div className="flex items-center">
                      <input
                        id={`checkbox-${category}`}
                        type="checkbox"
                        name={category}
                        checked={categories[category]}
                        onChange={handleCategoryChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`checkbox-${category}`} className="ml-2 text-sm font-medium text-gray-900">{category}</label>
                    </div>
                  </li>
                ))}
              </ul>
            </Transition>
          </div>

          {/* Permissions Checkboxes */}
          <div>
            <label className="block text-gray-600 mb-2">សិទ្ធិ</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="view"
                  checked={permissions.view}
                  onChange={handlePermissionChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">មើល</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="update"
                  checked={permissions.update}
                  onChange={handlePermissionChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">អាប់ដេត</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="delete"
                  checked={permissions.delete}
                  onChange={handlePermissionChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">លុប</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
            >
              បោះបង់
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
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
