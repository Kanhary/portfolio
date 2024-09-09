import React, { useState } from 'react';

const TabMenu = ({
  formData,
  // errors,
  handleChange,
  // handleSaveEmployee,
  closeEmployeeModal,
  disabled
}) => {
  const [activeTab, setActiveTab] = useState('tab1'); // Track the active tab
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  // const [formData, setFormData] = useState({
  //   id: '',
  //   code: '',
  //   fullname: '',
  //   lastname: '',
  //   gender: '',
  //   height: '',
  //   weight: '',
  //   birthdate: '',
  //   nationality: '',
  //   region: '',
  //   birthaddress: '',
  //   address: '',
  //   phone: '',
  //   email: '',
  //   specialNumber: '',
  //   maritalStatus: '',
  //   company: '',
  //   branch: '',
  //   department: '',
  //   office: '',
  //   position: '',
  //   photo: null,
  // });

  const [newCourse, setNewCourse] = useState({
    from: '',
    to: '',
    course: '',
    organize: '',
    inCountry: true,
    lastBy: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  // const closeEmployeeModal = () => {
  //   setIsAddModalOpen(false);
  // };
  
  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsDropdownOpen(false); // Close dropdown on tab change
  };

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [id]: value
  //   }));
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(newCourse);
  };

  const handleSaveEmployee = () => {
    const validationErrors = {};
  
    // Define required fields and their respective error messages
    if (!formData.code) validationErrors.code = 'Code is required';
    if (!formData.fullname) validationErrors.fullname = 'Full Name is required';
    if (!formData.lastname) validationErrors.lastname = 'Last Name is required';
    if (!formData.gender) validationErrors.gender = 'Gender is required';
    if (!formData.family) validationErrors.family = 'Family Status is required';
    if (!formData.region) validationErrors.region = 'Region is required';
    if (!formData.nation) validationErrors.nation = 'Nation is required';
    if (!formData.nationality) validationErrors.nationality = 'Nationality is required';
    if (!formData.department) validationErrors.department = 'Department is required';
    if (!formData.office) validationErrors.office = 'Office is required';
    if (!formData.company) validationErrors.company = 'Company is required';
    if (!formData.position) validationErrors.position = 'Position is required';
  
    // If validation errors exist, stop and display the errors
    if (Object.keys(validationErrors).length > 0) {
      console.log('Validation errors:', validationErrors);
      setErrors(validationErrors);
      return;
    }
  
    // Handle save logic here
    console.log('Saving employee data:', formData);
    setIsAddModalOpen(false);
  };
  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <div className="p-4 -mb-8">
          <div className='overflow-auto '>
          <form>
              <div className="grid grid-cols-1 gap-6 px-8 py-6 sm:grid-cols-2">
              {[
                    { id: 'code', label: 'អត្ថលេខ', type: 'text', required: true },
                    { id: 'fullname', label: 'គោត្តនាម/នាម', type: 'text', required: true },
                    { id: 'lastname', label: 'អក្សរឡាតាំង', type: 'text', required: true },
                    { id: 'height', label: 'កម្ពស់', type: 'text' },
                    { id: 'weight', label: 'ទម្ងន់', type: 'text' },
                    { id: 'birthdate', label: 'ថ្ងៃខែឆ្នាំកំណើត', type: 'date' },
                    { id: 'birthdate_address', label: 'ទីកន្លែងកំណើត', type: 'text' },
                    { id: 'address', label: 'អាស័យដ្ឋានបច្ចុប្បន្ន', type: 'text' },
                    { id: 'phone_number', label: 'លេខទូរសព្ទ', type: 'text' },
                    { id: 'email', label: 'អ៊ីម៉ែល', type: 'email' },
                    { id: 'special_number', label: 'លេខទូរសព្ទក្រុមហ៊ុន', type: 'text' }
                  ].map(({ id, label, type, options }) => (
                    <div key={id} className="flex flex-col gap-2">
                      <label htmlFor={id} className="flex gap-1 text-sm font-medium text-gray-700">
                        {errors[id] && <p className="text-sm text-red-600">*</p>}
                        {label}
                      </label>
                      {type === 'select' ? (
                        <select
                          id={id}
                          value={formData[id] || ''}
                          onChange={handleChange}
                          className={`block w-full p-2 text-gray-500 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1 ${errors[id] ? 'border-red-500' : ''}`}
                        >
                          <option value="">Select {label}</option>
                          {options.map(option => (
                            <option key={option} value={option.toLowerCase()}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={type}
                          id={id}
                          value={formData[id] || ''}
                          onChange={handleChange}
                          disabled={disabled ? true : undefined}
                          className={`block w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1 ${errors[id] ? 'border-red-500' : ''}`}
                        />
                      )}
                      {errors[id] && <p className="mt-1 text-xs text-red-500">{errors[id]}</p>}
                    </div>
                  ))}
                <div className="flex flex-col gap-2">
                  <label htmlFor="gender" className="flex gap-1 text-sm font-medium text-gray-70">{!formData.gender && <p className="text-sm text-red-600">*</p>}ភេទ</label>
                  <select
                    id="gender"
                    value={formData.gender || ''}
                    onChange={handleChange}
                    required
                    className="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                  >
                    <option value="">ជ្រើសរើស</option>
                    <option value="male">ប្រុស</option>
                    <option value="female">ស្រី</option>
                  </select>
                  {/* {!formData.gender && <p className="text-sm text-red-600">This field is required</p>} */}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="family" className="flex gap-1 text-sm font-medium text-gray-700">{!formData.family && <p className="text-sm text-red-600">*</p>}ស្ថានភាពគ្រួសារ</label>
                  <select
                    id="family"
                    value={formData.family || ''}
                    onChange={handleChange}
                    required
                    
                    className="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                  >
                    <option value="">ជ្រើសរើស</option>
                    <option value="single">លីវ</option>
                    <option value="married">មានគូរស្វាមី</option>
                  </select>
                  {/* {!formData.family && <p className="text-sm text-red-600">This field is required</p>} */}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="region" className="flex gap-1 text-sm font-medium text-gray-700">{!formData.region && <p className="text-sm text-red-600">*</p>}ប្រទេស</label>
                  <select
                    id="region"
                    value={formData.region || ''}
                    onChange={handleChange}
                    required
                    className="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                  >
                    <option value="">ជ្រើសរើស</option>
                    <option value="cambodia">កម្ពុជា</option>
                    <option value="thailand">ថៃ</option>
                    <option value="vietnam">វៀតណាម</option>
                    {/* Add more regions as needed */}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nation" className="flex gap-1 text-sm font-medium text-gray-700">{!formData.nation && <p className="text-sm text-red-600">*</p>}ជនជាតិ</label>
                  <input
                    type="text"
                    id="nation"
                    value={formData.region || ''}
                    onChange={handleChange}
                    disabled={disabled ? true : undefined}
                    className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nationality" className="flex gap-1 text-sm font-medium text-gray-700">{!formData.nationality && <p className="text-sm text-red-600">*</p>}សញ្ជាតិ</label>
                  <input
                    type="text"
                    id="nationality"
                    value={formData.nationality || ''}
                    onChange={handleChange}
                    disabled={disabled ? true : undefined}
                    className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="department" className="flex gap-1 text-sm font-medium text-gray-700">{!formData.department && <p className="text-sm text-red-600 ">*</p>}នាយកដ្ឋាន</label>
                  <select
                    id="department"
                    value={formData.department || ''}
                    onChange={handleChange}
                    className="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                  >
                    <option value="">ជ្រើសរើសនាយកដ្ឋាន</option>
                    <option value="hr">នាយកដ្ខានរដ្ឋបាល</option>
                    <option value="it">នាយកដ្ឋាននាវាចរណ៍</option>
                    <option value="pa">នាយកដ្ឋានប្រតិបត្តិការណ៍ផែ</option>
                    <option value="nr">នាយកដ្ឋានគណនេយ្យ/ហិរញ្ញវត្ថុ</option>
                    {/* Add more departments as needed */}
                  </select>
                  {/* {!formData.department && <p className="text-sm text-red-600">This field is required</p>} */}

                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="office" className="flex gap-1 text-sm font-medium text-gray-700">{!formData.office && <p className="text-sm text-red-600">*</p>}ការិយាល័យ</label>
                  <select
                    id="office"
                    value={formData.office || ''}
                    onChange={handleChange}
                    className="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                  >
                    <option value="">ជ្រើសរើសការិយាល័យ</option>
                    <option value="department">ការិយាល័យរដ្ឋបាល</option>
                    <option value="it">ការិយាល័យព័ត៌មានវិទ្យា</option>
                    <option value="accounting">ការិយាល័យគណនេយ្យ</option>
                    {/* Add more offices as needed */}
                  </select>
                  {/* {!formData.office && <p className="text-sm text-red-600">This field is required</p>} */}

                </div>

                {[
                  { id: 'company', label: 'ក្រុមហ៊ុន', type: 'text' },
                  // { id: 'position', label: 'តួនាទី', type: 'text' }
                ].map(({ id, label, type }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="flex gap-1 text-sm font-medium text-gray-700">{!formData.company && <p className="text-sm text-red-600">*</p>}{label}</label>
                    
                    <input
                      type={type}
                      id={id}
                      value={formData[id] || ''}
                      onChange={handleChange}
                      disabled={disabled ? true : undefined}
                      className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                    />
                  </div>
                ))}

      {[
                  // { id: 'company', label: 'ក្រុមហ៊ុន', type: 'text' },
                  { id: 'position', label: 'តួនាទី', type: 'text' }
                ].map(({ id, label, type }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="flex gap-1 text-sm font-medium text-gray-700">{!formData.position && <p className="text-sm text-red-600">*</p>}{label}</label>
                    
                    <input
                      type={type}
                      id={id}
                      value={formData[id] || ''}
                      onChange={handleChange}
                      disabled={disabled ? true : undefined}
                      className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1"
                    />
                  </div>
                ))}
              </div>
              

              {/* <div className="flex justify-center gap-5 p-6 mt-4">
                <button
                  type="submit"
                  onClick={handleSaveEmployee}
                  className="px-8 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                  <p className='text-base font-normal'>រក្សាទុក</p>
                </button>
                <button
                  type="button"
                  onClick={closeEmployeeModal}
                  className="px-6 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 border-dashed rounded-lg shadow-sm hover:bg-gray-100"
                >
                  <p className='text-base font-normal'>ចាកចេញ</p>
                </button>
              </div> */}
            </form>
          </div>
        </div>;

      case 'tab2':
        return (
          <div className="p-4">
            <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* From Date Input */}
                <div>
                  <label htmlFor="from" className="block text-sm font-medium text-gray-800">ចាប់ផ្តើម</label>
                  <input
                    type="date"
                    id="from"
                    className="block w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={newCourse.from}
                    onChange={(e) => setNewCourse((prev) => ({ ...prev, from: e.target.value }))}
                    required
                  />
                </div>

                {/* To Date Input */}
                <div>
                  <label htmlFor="to" className="block text-sm font-medium text-gray-800">ដល់</label>
                  <input
                    type="date"
                    id="to"
                    className="block w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={newCourse.to}
                    onChange={(e) => setNewCourse((prev) => ({ ...prev, to: e.target.value }))}
                    required
                  />
                </div>

                {/* Course Input */}
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-800">វគ្គសិក្សា</label>
                  <input
                    type="text"
                    id="course"
                    className="block w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={newCourse.course}
                    onChange={(e) => setNewCourse((prev) => ({ ...prev, course: e.target.value }))}
                    required
                  />
                </div>

                {/* Organize Input */}
                <div>
                  <label htmlFor="organize" className="block text-sm font-medium text-gray-800">ក្រុមហ៊ុន</label>
                  <input
                    type="text"
                    id="organize"
                    className="block w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={newCourse.organize}
                    onChange={(e) => setNewCourse((prev) => ({ ...prev, organize: e.target.value }))}
                    required
                  />
                </div>

                {/* Location Radio Buttons */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-800">Location</label>
                  <div className="flex items-center mt-2 space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        checked={newCourse.inCountry}
                        onChange={() => setNewCourse((prev) => ({ ...prev, inCountry: true }))}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm font-normal text-gray-800">In Country</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        checked={!newCourse.inCountry}
                        onChange={() => setNewCourse((prev) => ({ ...prev, inCountry: false }))}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-800">Out of Country</span>
                    </label>
                  </div>
                </div>

                {/* Last Modified By Input */}
                {/* <div className="md:col-span-2">
                  <label htmlFor="lastBy" className="block text-sm font-semibold text-gray-800">Last Modified By</label>
                  <input
                    type="text"
                    id="lastBy"
                    className="block w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={newCourse.lastBy}
                    onChange={(e) => setNewCourse((prev) => ({ ...prev, lastBy: e.target.value }))}
                    required
                  />
                </div> */}
              </div>

              {/* Form Actions */}
              {/* <div className="flex justify-center gap-5 p-6 mt-4">
                <button
                  type="submit"
                  className="px-8 py-2 text-base font-normal text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                  រក្សាទុក
                </button>
                <button
                  type="button"
                  className="px-6 py-4 text-base font-normal text-gray-700 bg-white border border-gray-300 border-dashed rounded-lg shadow-sm hover:bg-gray-100"
                  onClick={() => setActiveTab('tab1')} // Navigate back to Tab 1
                >
                  បោះបង់
                </button>
              </div> */}
            </form>
          </div>
        );
      case 'tab3':
        return <div className="p-4 -mb-8">Content for Tab 3</div>;
      default:
        return <div className="p-4 -mb-8">Default Content</div>;
    }
  };

  return (
        <div className="relative">
              {/* Dropdown Menu for Small Screens */}
              <div className="md:hidden sticky top-[75px]">
                <button
                  onClick={handleDropdownToggle}
                  className="flex items-center justify-between px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 ml-3 border border-gray-300 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <span>
                    {activeTab === 'tab1' && 'បញ្ចូលព័ត៌មានបុគ្គលិក'}
                    {activeTab === 'tab2' && 'បញ្ចូលវគ្គសិក្សារយៈពេលវែង'}
                    {activeTab === 'tab3' && 'បញ្ចូលវគ្គសិក្សារយៈពេលខ្លី'}
                  </span>
                  <svg className="w-4 h-4 ml-2 text-blue-800 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex justify-center w-48 mt-1 ml-3 bg-white border border-gray-300 rounded-lg">
                    <div className="px-2 py-2 font-normal">
                      <button
                        className={`block px-3 py-1 text-sm font-medium  text-left ${activeTab === 'tab1' ? 'bg-blue-100 text-blue-600 rounded-lg' : 'text-gray-700 hover:bg-blue-100 rounded-lg'}`}
                        onClick={() => handleTabChange('tab1')}
                      >
                        បញ្ចូលព័ត៌មានបុគ្គលិក
                      </button>
                      <button
                        className={`block px-3 py-1 text-sm font-medium text-left ${activeTab === 'tab2' ? 'bg-blue-100 text-blue-600 rounded-lg' : 'text-gray-700 hover:bg-blue-100 rounded-lg'}`}
                        onClick={() => handleTabChange('tab2')}
                      >
                        បញ្ចូលវគ្គសិក្សារយៈពេលវែង
                      </button>
                      {/* <button
                        className={`block px-3 py-1 text-sm font-medium text-left ${activeTab === 'tab3' ? 'bg-blue-100 text-blue-600 rounded-lg' : 'text-gray-700 hover:bg-blue-100 rounded-lg'}`}
                        onClick={() => handleTabChange('tab3')}
                      >
                        បញ្ចូលវគ្គសិក្សារយៈពេលខ្លី
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>



              {/* Tabs for Larger Screens */}
              <div className="hidden md:flex top-[180px] z-50 transition-all ease-in-out overflow-x-auto mt-3 w-full">
                <button
                  className={`px-4 py-2 font-medium text-sm sm:text-sm md:text-sm flex-grow sm:flex-grow-0 sm:px-6 ${activeTab === 'tab1' ? 'text-blue-800' : 'text-black'}`}
                  onClick={() => handleTabChange('tab1')}
                >
                  បញ្ចូលព័ត៌មានបុគ្គលិក
                  <span
                    className={`block h-[2px] mt-2 transition-all duration-300 ${activeTab === 'tab1' ? 'w-full bg-gradient-to-r from-blue-800 to-blue-600' : 'w-0 bg-transparent'}`}
                    style={{ borderRadius: '9999px' }}
                  />
                </button>
                <button
                  className={`px-4 py-2 font-medium text-xs sm:text-sm md:text-sm flex-grow sm:flex-grow-0 sm:px-6 ${activeTab === 'tab2' ? 'text-blue-800' : 'text-black'}`}
                  onClick={() => handleTabChange('tab2')}
                >
                  បញ្ចូលវគ្គសិក្សារយៈពេលវែង
                  <span
                    className={`block h-[2px] mt-2 transition-all duration-300 ${activeTab === 'tab2' ? 'w-full bg-gradient-to-r from-blue-800 to-blue-600' : 'w-0 bg-transparent'}`}
                    style={{ borderRadius: '9999px' }}
                  />
                </button>
                {/* <button
                  className={`px-4 py-2 font-medium text-xs sm:text-sm md:text-sm flex-grow sm:flex-grow-0 sm:px-6 ${activeTab === 'tab3' ? 'text-blue-800' : 'text-black'}`}
                  onClick={() => handleTabChange('tab3')}
                >
                  បញ្ចូលវគ្គសិក្សារយៈពេលខ្លី
                  <span
                    className={`block h-[2px] mt-2 transition-all duration-300 ${activeTab === 'tab3' ? 'w-full bg-gradient-to-r from-blue-800 to-blue-600' : 'w-0 bg-transparent'}`}
                    style={{ borderRadius: '9999px' }}
                  />
                </button> */}
              </div>

              {/* Content */}
              <div className="mt-4">
                {renderContent()}
              </div>
              <div className="flex justify-center gap-5 p-6 mt-4">
                <button
                  type="submit"
                  onClick={handleSaveEmployee}
                  className="px-8 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                  <p className='text-base font-normal'>រក្សាទុក</p>
                </button>
                <button
                  type="button"
                  onClick={closeEmployeeModal}
                  className="px-6 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 border-dashed rounded-lg shadow-sm hover:bg-gray-100"
                >
                  <p className='text-base font-normal'>ចាកចេញ</p>
                </button>
              </div>
        </div>
  );
};

export default TabMenu;
