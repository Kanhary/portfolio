import React, { useState } from 'react';
import { FaPen, FaTrashAlt, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import TabMenu from './TabMenu';
// import LongCourse from './LongCourse';



const EmployeeInformation = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Manage the selected item to edit
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [photoName, setPhotoName] = useState('');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const nothingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const [submittedData, setSubmittedData] = useState(null);

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [id]: value
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const [formData, setFormData] = useState({
    id: '',
    code: '',
    fullname: '',
    lastname: '',
    gender: '',
    height: '',
    weight: '',
    birthdate: '',
    nationality: '',
    region: '',
    birthaddress: '',
    address: '',
    phone: '',
    email: '',
    specialNumber: '',
    maritalStatus: '',
    company: '',
    branch: '',
    department: '',
    office: '',
    position: '',
    photo: null,
  });

  

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [id]: value,
  //   }));
  // };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      photo: files[0],
    }));
  };

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
            // If confirmed, filter out the employee
            const updatedEmployees = employees.filter(employee => employee.id !== id);
            setEmployees(updatedEmployees);

            // Show success message
            Swal.fire(
                'Deleted!',
                'The employee has been deleted.',
                'success'
            );
        }
    });
};


  const handleSaveEmployee = () => {
    // Handle save logic here
    console.log('Saving employee data:', formData);
    setIsAddModalOpen(false);
  };

  const closeEmployeeModal = () => {
    setIsAddModalOpen(false);
  };
  

  const recordsPerPage = 8;
  //open edit modal
  const openEditModal = (id, code, fullname, lastname, gender, height, weight, birthdate, nation, nationality, region, birthdate_address, address, phone_number, email, special_number, marital_status, company, branch, department, office, position, last_modified_by, last_modified_date) => {
    setEditingEmployee({ id, code, fullname, lastname, gender, height, weight, birthdate, nation, nationality, region, birthdate_address, address, phone_number, email, special_number, marital_status, company, branch, department, office, position, last_modified_by, last_modified_date });
    setFormData({ id, code, fullname, lastname, gender, height, weight, birthdate, nation, nationality, region, birthdate_address, address, phone_number, email, special_number, marital_status, company, branch, department, office, position, last_modified_by, last_modified_date });
    setIsEditModalOpen(true);
  };

  
  
  //close edit modal
  const closeEditModal = () => {
    setEditingEmployee(null);
    setFormData({ id: '', code: '', fullname: '', lastname: '',gender: '', height: '', weight: '',
      birthdate: '', nation: '', nationality: '', region: '', birthdate_address: '', address: '',
      phone_number: '',email: '', specialNumber: '', marital_status: '', company: '', branch: '', 
      department: '', office: '', position: '',last_modified_by: '', last_modified_date: '' });
    setIsEditModalOpen(false);
  };
  
  //Update and Save
  const updateClick = () => {
    Swal.fire({
      position: "center",  // Change to 'center' to center the alert
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  
  

  const handleClick = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  const handleSearch = () => {
    let filteredUsers;
    if (searchType === 'username') {
      filteredUsers = users.filter(user => 
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (searchType === 'id') {
      filteredUsers = users.filter(user => 
        user.id.toString().includes(searchTerm)
      );
    }
    // Handle the display or processing of `filteredUsers`
    console.log(filteredUsers);
  };
  
  const [employees, setEmployees] = useState([

    { id: '1', code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក, ខណ្ឌឬស្សីកែវ, រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក, ខណ្ឌឬស្សីកែវ, រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'sem.pheakdey@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh Autonomous Port', branch: 'TS3', department: 'Administration', office: 'IT Department', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '2', code: '002', fullname: 'សុជឿន ជ័យនេត', lastname: 'Sokhoeun Chhaynet', gender: 'Female', height: '160cm', weight: '55kg', birthdate: '1985-05-15', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ដេក, ខណ្ឌភ្នំពេញ, រាជធានីភ្នំពេញ', address: 'សង្កាត់ដេក, ខណ្ឌភ្នំពេញ, រាជធានីភ្នំពេញ', phone_number: '0987654321', email: 'sokhoeun.chhaynet@example.com', special_number: '010 555 123', marital_status: 'Married', company: 'Phnom Penh Autonomous Port', branch: 'TS4', department: 'Finance', office: 'Engineering Office', position: 'Senior Analyst', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '3', code: '003', fullname: 'អ៊ុំ ម៉េង', lastname: 'Um Meng', gender: 'Male', height: '175cm', weight: '68kg', birthdate: '1988-07-22', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ទន្លេបត, ខណ្ឌសៀមរាប, រាជធានីសៀមរាប', address: 'សង្កាត់ទន្លេបត, ខណ្ឌសៀមរាប, រាជធានីសៀមរាប', phone_number: '0976543210', email: 'um.meng@example.com', special_number: '010 666 789', marital_status: 'Single', company: 'Phnom Penh Autonomous Port', branch: 'TS5', department: 'Technology', office: 'Research Department', position: 'IT Specialist', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '4', code: '004', fullname: 'ចន ឃឿន', lastname: 'Chan Khuon', gender: 'Female', height: '170cm', weight: '60kg', birthdate: '1992-03-10', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ផែន, ខណ្ឌព្រះសីហនុ, រាជធានីព្រះសីហនុ', address: 'សង្កាត់ផែន, ខណ្ឌព្រះសីហនុ, រាជធានីព្រះសីហនុ', phone_number: '0934567890', email: 'chan.khuon@example.com', special_number: '010 777 888', marital_status: 'Divorced', company: 'Phnom Penh Autonomous Port', branch: 'TS6', department: 'Human Resources', office: 'Administrative Office', position: 'HR Coordinator', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '5', code: '005', fullname: 'ម៉ៅ សំរៀន', lastname: 'Mao Somrien', gender: 'Male', height: '180cm', weight: '70kg', birthdate: '1980-11-30', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់បឹងកេងកង, ខណ្ឌចំការមន, រាជធានីភ្នំពេញ', address: 'សង្កាត់បឹងកេងកង, ខណ្ឌចំការមន, រាជធានីភ្នំពេញ', phone_number: '0923456789', email: 'mao.somrien@example.com', special_number: '010 888 999', marital_status: 'Widowed', company: 'Phnom Penh Autonomous Port', branch: 'TS7', department: 'Research', office: 'Data Office', position: 'Research Analyst', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '6', code: '006', fullname: 'សុខ សុជា', lastname: 'Sok Sochea', gender: 'Male', height: '170cm', weight: '65kg', birthdate: '1995-09-25', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ឬស្សីកែវ, ខណ្ឌសែនសុខ, រាជធានីភ្នំពេញ', address: 'សង្កាត់ឬស្សីកែវ, ខណ្ឌសែនសុខ, រាជធានីភ្នំពេញ', phone_number: '0956789012', email: 'sok.sochea@example.com', special_number: '010 999 000', marital_status: 'Single', company: 'Phnom Penh Autonomous Port', branch: 'TS8', department: 'Logistics', office: 'Administrative Office', position: 'Logistics Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '7', code: '007', fullname: 'ម៉ាត់ សុខសម', lastname: 'Mat Soksam', gender: 'Female', height: '162cm', weight: '58kg', birthdate: '1993-12-12', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់បឹងត្របែក, ខណ្ឌកណ្តាល, រាជធានីភ្នំពេញ', address: 'សង្កាត់បឹងត្របែក, ខណ្ឌកណ្តាល, រាជធានីភ្នំពេញ', phone_number: '0965432101', email: 'mat.soksam@example.com', special_number: '010 333 444', marital_status: 'Married', company: 'Phnom Penh Autonomous Port', branch: 'TS9', department: 'Customer Service', office: 'Support Office', position: 'Customer Service Representative', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '8', code: '008', fullname: 'ឃីម សុវណ្ណ', lastname: 'Kim Sovann', gender: 'Male', height: '178cm', weight: '72kg', birthdate: '1987-06-20', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់បឹងទំពូង, ខណ្ឌពោធិ៍សែនជ័យ, រាជធានីភ្នំពេញ', address: 'សង្កាត់បឹងទំពូង, ខណ្ឌពោធិ៍សែនជ័យ, រាជធានីភ្នំពេញ', phone_number: '0978765432', email: 'kim.sovann@example.com', special_number: '010 222 333', marital_status: 'Separated', company: 'Phnom Penh Autonomous Port', branch: 'TS10', department: 'Marketing', office: 'Strategy Office', position: 'Marketing Specialist', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '9', code: '009', fullname: 'ទូច ស្រេង', lastname: 'Touch Sreang', gender: 'Female', height: '168cm', weight: '63kg', birthdate: '1991-08-14', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ជ័យជូរ, ខណ្ឌសែនសុខ, រាជធានីភ្នំពេញ', address: 'សង្កាត់ជ័យជូរ, ខណ្ឌសែនសុខ, រាជធានីភ្នំពេញ', phone_number: '0938765432', email: 'touch.sreang@example.com', special_number: '010 444 555', marital_status: 'Single', company: 'Phnom Penh Autonomous Port', branch: 'TS11', department: 'Accounting', office: 'Finance Office', position: 'Accountant', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '10', code: '010', fullname: 'គង់ សេង', lastname: 'Kong Seng', gender: 'Male', height: '177cm', weight: '70kg', birthdate: '1982-04-05', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់កំពង់ឃុំ, ខណ្ឌឬស្សីកែវ, រាជធានីភ្នំពេញ', address: 'សង្កាត់កំពង់ឃុំ, ខណ្ឌឬស្សីកែវ, រាជធានីភ្នំពេញ', phone_number: '0945678901', email: 'kong.seng@example.com', special_number: '010 666 000', marital_status: 'Married', company: 'Phnom Penh Autonomous Port', branch: 'TS12', department: 'Legal', office: 'Legal Affairs Office', position: 'Legal Advisor', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: '11', code: '011', fullname: 'អៀង សុផល', lastname: 'Ieang Sophal', gender: 'Female', height: '155cm', weight: '50kg', birthdate: '1990-11-22', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ជ័យជោគ, ខណ្ឌសែនសុខ, រាជធានីភ្នំពេញ', address: 'សង្កាត់ជ័យជោគ, ខណ្ឌសែនសុខ, រាជធានីភ្នំពេញ', phone_number: '0955432101', email: 'ieang.sophal@example.com', special_number: '010 777 888', marital_status: 'Single', company: 'Phnom Penh Autonomous Port', branch: 'TS13', department: 'HR', office: 'Human Resources Office', position: 'HR Coordinator', last_modified_by: 'Admin', last_modified_date: '2024-08-22' },
    { id: '12', code: '012', fullname: 'យ៉ែត សំអាង', lastname: 'Yet Somang', gender: 'Male', height: '180cm', weight: '75kg', birthdate: '1984-01-19', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់បឹងកេងកង, ខណ្ឌទួលគោក, រាជធានីភ្នំពេញ', address: 'សង្កាត់បឹងកេងកង, ខណ្ឌទួលគោក, រាជធានីភ្នំពេញ', phone_number: '0967891234', email: 'yet.somang@example.com', special_number: '010 999 000', marital_status: 'Married', company: 'Phnom Penh Autonomous Port', branch: 'TS14', department: 'IT', office: 'IT Support Office', position: 'IT Specialist', last_modified_by: 'Admin', last_modified_date: '2024-08-22' },
    { id: '13', code: '013', fullname: 'ទេព សុភាព', lastname: 'Teap Sophap', gender: 'Female', height: '160cm', weight: '57kg', birthdate: '1992-07-09', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ឫស្សីកែវ, ខណ្ឌឫស្សីកែវ, រាជធានីភ្នំពេញ', address: 'សង្កាត់ឫស្សីកែវ, ខណ្ឌឫស្សីកែវ, រាជធានីភ្នំពេញ', phone_number: '0976543210', email: 'teap.sophap@example.com', special_number: '010 888 999', marital_status: 'Single', company: 'Phnom Penh Autonomous Port', branch: 'TS15', department: 'R&D', office: 'Research Office', position: 'Research Analyst', last_modified_by: 'Admin', last_modified_date: '2024-08-22' },
    { id: '14', code: '014', fullname: 'សេក ប៉ូលី', lastname: 'Sek Polley', gender: 'Male', height: '172cm', weight: '68kg', birthdate: '1986-03-25', nationality: 'Khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្វាយដល់, ខណ្ឌដង្កោ, រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្វាយដល់, ខណ្ឌដង្កោ, រាជធានីភ្នំពេញ', phone_number: '0939876543', email: 'sek.polley@example.com', special_number: '010 555 666', marital_status: 'Married', company: 'Phnom Penh Autonomous Port', branch: 'TS16', department: 'Operations', office: 'Operations Office', position: 'Operations Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-22' },

]);
  const filteredEmployees = employees.filter(employee =>
    employee.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastname.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredEmployees.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstRecord, indexOfLastRecord);

  const getPaginationItems = () => {
    let pages = [];
    if (totalPages <= 7) {
      pages = [...Array(totalPages)].map((_, index) => index + 1);
    } else {
      if (currentPage < 4) {
        pages = [1, 2, 3, '...', totalPages];
      } else if (currentPage > totalPages - 3) {
        pages = [1, '...', totalPages - 3, totalPages - 2, totalPages];
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }
    return pages;
  };

  

  return (
    <section className='mt-14 font-khmer'>
      <h1 className='text-xl font-medium text-blue-800'>តារាងបង្ហាញព័ត៌មានបុគ្គលិក</h1>
      <div className='mt-3 border' ></div>
      <div className='w-full mt-4'>
        <div className='relative w-full overflow-hidden bg-white shadow-md sm:rounded-lg'>
          <div className='flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
            <div className='w-full md:w-1/2'>
              <form className='flex items-center'>
                <label htmlFor="simple-search" className='sr-only'>Search</label>
                <div className='relative w-full'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id='simple-search'
                    className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-300 focus:border-primary-00 focus:outline-none focus:ring-1 '
                    placeholder='Search by Full Name or Code'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
              <button type='button' className='flex items-start justify-center px-4 py-2 text-sm font-medium text-white duration-300 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300' onClick={() => setIsAddModalOpen(true)}>
              <svg className="h-3.5 w-3.5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                <p className='text-base font-normal'> បញ្ចូលព័ត៌មានបុគ្គលិក</p>
              </button>
            </div>
          </div>
          
          <div className='w-full overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope="col" className="sticky left-0 px-4 py-3 mr-3 bg-gray-50">Action</th>
                  <th scope="col" className="px-4 py-3">NO</th>
                  <th scope="col" className="px-4 py-3">Code</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Full Name</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '180px' }}>Latan name</th>
                  <th scope="col" className="px-4 py-3">Gender</th>
                  <th scope="col" className="px-4 py-3">Height</th>
                  <th scope="col" className="px-4 py-3">Weight</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '120px' }}>Birthdate</th>
                  <th scope="col" className="px-4 py-3">Nation</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '120px' }}>Nationality</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '120px' }}>Region</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '330px' }}>Birthdate Address</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '330px' }}>Address</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px'}}>Phone Number</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '200px' }}>Email</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '150px' }}>Special Number</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '140px' }}>Marital Status</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '250px' }}>Company</th>
                  <th scope="col" className="px-4 py-3">Branch</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '150px' }}>Department</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '250px' }}>Office</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '300px' }}>Position</th>
                  <th scope="col" className="px-4 py-30"style={{ minWidth: '200px' }}>Last Modified By</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '200px' }}>Last Modified Date</th>
                </tr>
              </thead>
              <tbody>
                {/* Icon That can Edit, Viewd, Delete */}
  {currentEmployees.map(employee => (
    <tr key={employee.id} className='transition-transform duration-300 ease-in-out transform border border-b-gray-200 '>
      <td className='sticky left-0 flex px-6 py-4 mt-2 bg-white'>
          <input type="checkbox" className="mr-3 action-checkbox" />
          <FaPen
              className="text-blue-500 cursor-pointer hover:text-blue-700"
              onClick={() => openEditModal(employee.id, employee.code, employee.fullname, employee.lastname, employee.gender,
              employee.height, employee.weight, employee.birthdate, employee.nation, employee.nationality, employee.region,
              employee.birthdate_address, employee.address, employee.phone_number, employee.email, employee.special_number,
              employee.marital_status, employee.company, employee.branch, employee.department, employee.office, employee.position,
              employee.last_modified_by, employee.last_modified_date)}
          />
            <FaEye
                className="ml-3 text-indigo-500 cursor-pointer hover:text-indigo-700"
                onClick={() => viewDetails(employee.id)}
            />
          <FaTrashAlt className="ml-3 text-red-500 cursor-pointer hover:text-red-700" onClick={() => handleDelete(employee.id)}/>
      </td>

      <td className='px-4 py-3'>{employee.id}</td>
      <td className='px-4 py-3'>{employee.code}</td>
      <td className='px-4 py-3'>{employee.fullname}</td>
      <td className='px-4 py-3'>{employee.lastname}</td>
      <td className='px-4 py-3'>{employee.gender}</td>
      <td className='px-4 py-3'>{employee.height}</td>
      <td className='px-4 py-3'>{employee.weight}</td>
      <td className='px-4 py-3'>{employee.birthdate}</td>
      <td className='px-4 py-3'>{employee.nation}</td>
      <td className='px-4 py-3'>{employee.nationality}</td>
      <td className='px-4 py-3'>{employee.region}</td>
      <td className='px-4 py-3'>{employee.birthdate_address}</td>
      <td className='px-4 py-3'>{employee.address}</td>
      <td className='px-4 py-3'>{employee.phone_number}</td>
      <td className='px-4 py-3'>{employee.email}</td>
      <td className='px-4 py-3'>{employee.special_number}</td>
      <td className='px-4 py-3'>{employee.marital_status}</td>
      <td className='px-4 py-3'>{employee.company}</td>
      <td className='px-4 py-3'>{employee.branch}</td>
      <td className='px-4 py-3'>{employee.department}</td>
      <td className='px-4 py-3'>{employee.office}</td>
      <td className='px-4 py-3'>{employee.position}</td>
      <td className='px-4 py-3'>{employee.last_modified_by}</td>
      <td className='px-4 py-3'>{employee.last_modified_date}</td>
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
      
      {isAddModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="relative w-full max-w-md sm:max-w-4xl md:max-w-2xl bg-white rounded-md shadow-lg overflow-auto max-h-[90vh] h-[73vh] sm:h-[550px] md:h-[550px]  modal-scrollbar mt-14 sm:ml-52 md:ml-0">
      <div className="sticky top-0 z-50 flex items-center justify-between w-full p-4 py-4 mb-6 bg-gray-100 border-b-2 border-gray-300 border-dashed">
        <h2 className="flex-1 ml-3 text-xl font-medium text-blue-800 sm:text-2xl md:text-2xl font-khmer leading-2">
          បញ្ចូលព័ត៌មានបុគ្គលិក
        </h2>
        <button
          type="button"
          onClick={closeEmployeeModal}
          className="px-2 py-2 mr-2 text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 ring-1 ring-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="px-4 ">
        <TabMenu />
      </div>
      <div className="flex justify-center gap-5 p-6 mt-4">
        <button
          type="submit"
          onClick={handleSaveEmployee}
          // onClick={updateClick}
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
  </div>
)}


      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md sm:max-w-4xl bg-white rounded-md shadow-lg overflow-auto max-h-[90vh] mt-14 sm:ml-52 h-[550px] modal-scrollbar">
            <div className="sticky top-0 flex items-center justify-between w-full p-4 mb-6 bg-gray-100 border-b border-gray-300 border-dashed">
              <h2 className="flex-1 ml-3 text-2xl font-medium text-blue-800 font-khmer">
                កែប្រែព័ត៌មានបុគ្គលិក
              </h2>
              <button
                type="button"
                onClick={closeEditModal}
                className="px-2 py-2 mr-2 text-gray-500 bg-gray-100 rounded-md hover:text-gray-700 ring-1 ring-gray-400"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

            </div>
            <div>
              <TabMenu/>
            </div>
          </div>
        </div>
      )}
      {/* <div>
        
        <LongCourse/>
      </div> */}
    </section> 
  );
};

export default EmployeeInformation;
