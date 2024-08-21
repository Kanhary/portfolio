import React, { useState } from 'react';
import { FaPen, FaTrashAlt } from "react-icons/fa";

const EmployeeInformation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [photoName, setPhotoName] = useState('');
  
  // const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      photo: files[0],
    }));
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

  const employees = [
    // Sample data, replace with your actual data
    { id: 1, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 2, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 3, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 4, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 5, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 6, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 7, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 8, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 9, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 10, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 11, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 12, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 13, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 14, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 15, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 16, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 17, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 18, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 19, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 20, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 21, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 22, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 23, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 24, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 25, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 26, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 27, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 28, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 29, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 30, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 31, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },
    { id: 32, code: '001', fullname: 'សែម ភក្តី', lastname: 'Sem Pheakdey', gender: 'Male', height: '185cm', weight: '75kg', birthdate: '1990-01-01', nation: 'khmer',nationality: 'khmer', region: 'Cambodia', birthdate_address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', address: 'សង្កាត់ស្រះចក,ខណ្ឌឬស្សីកែវ,រាជធានីភ្នំពេញ', phone_number: '0123456789', email: 'johndoe@example.com', special_number: '010 444 152', marital_status: 'Single', company: 'Phnom Penh AutonomousPort', branch: 'TS3', department: 'នាយកដ្ឋានរដ្ឋបាល', office: 'ការិយាល័យព័ត៌មានវិទ្យា', position: 'Manager', last_modified_by: 'Admin', last_modified_date: '2024-08-21' },

    // Add more sample data as needed
  ];

  const filteredEmployees = employees.filter(employee =>
    employee.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.code.includes(searchTerm)
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
    <section className='mt-10 font-khmer'>
      <h1 className='text-2xl font-medium text-blue-800 text-center'>តារាងបង្ហាញព័ត៌មានបុគ្គលិក</h1>
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
                    className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 '
                    placeholder='Search'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
              <button type='button' className='flex items-start justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 duration-300' onClick={() => setIsAddModalOpen(true)}>
              <svg className="h-3.5 w-3.5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                <p className='font-normal text-base'> បញ្ចូលព័ត៌មានបុគ្គលិក</p>
              </button>
            </div>
          </div>
          
          <div className='w-full overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope="col" className="px-4 py-3 bg-gray-50 mr-3">Action</th>
                  <th scope="col" className="px-4 py-3">ID</th>
                  <th scope="col" className="px-4 py-3">Code</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Full Name</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px' }}>Latan name</th>
                  <th scope="col" className="px-4 py-3">Gender</th>
                  <th scope="col" className="px-4 py-3">Height</th>
                  <th scope="col" className="px-4 py-3">Weight</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '120px' }}>Birthdate</th>
                  <th scope="col" className="px-4 py-3">Nation</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '120px' }}>Nationality</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '120px' }}>Region</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '270px' }}>Birthdate Address</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '270px' }}>Address</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '150px'}}>Phone Number</th>
                  <th scope="col" className="px-4 py-3" style={{ minWidth: '200px' }}>Email</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '150px' }}>Special Number</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '140px' }}>Marital Status</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '250px' }}>Company</th>
                  <th scope="col" className="px-4 py-3">Branch</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '150px' }}>Department</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '170px' }}>Office</th>
                  <th scope="col" className="px-4 py-3">Position</th>
                  <th scope="col" className="px-4 py-30"style={{ minWidth: '200px' }}>Last Modified By</th>
                  <th scope="col" className="px-4 py-3"style={{ minWidth: '200px' }}>Last Modified Date</th>
                </tr>
              </thead>
              <tbody>
                {currentEmployees.map(employee => (
                  <tr key={employee.id} className='transition-colors duration-200 border border-b-gray-200 hover:bg-indigo-50'>
                    <td className='flex px-6 py-4 mt-2'>
                      <input type="checkbox" className="mr-3 action-checkbox" />
                      <FaPen className="text-blue-500 cursor-pointer hover:text-blue-700" />
                      <FaTrashAlt className="ml-3 text-red-500 cursor-pointer hover:text-red-700" />
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
                    <td className='px-4 py-3               '>{employee.last_modified_by}</td>
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
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative w-full max-w-4xl bg-white rounded-md  shadow-lg overflow-auto max-h-[90vh] mt-14 ml-52 h-[550px] modal-scrollbar">
      <div className="bg-gray-100 p-4 mb-6 flex items-center justify-between w-full sticky top-0 border-b border-dashed border-gray-300">
        <h2 className="text-2xl font-medium text-blue-800 font-khmer flex-1 ml-3">
          បញ្ចូលព័ត៌មានបុគ្គលិក
        </h2>
        <button
          type="button"
          onClick={closeEmployeeModal}
          className="text-gray-500 hover:text-gray-700 bg-gray-100 px-2 py-2 rounded-md ring-1 ring-gray-400 mr-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <form>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 py-6 px-8">
          {[
            { id: 'code', label: 'អត្ថលេខ', type: 'text' },
            { id: 'fullname', label: 'គោត្តនាម/នាម', type: 'text' },
            { id: 'lastname', label: 'អក្សរឡាតាំង', type: 'text' },
            { id: 'height', label: 'កម្ពស់', type: 'text' },
            { id: 'weight', label: 'ទម្ងន់', type: 'text' },
            { id: 'birthdate', label: 'ថ្ងៃខែឆ្នាំកំណើត', type: 'date' },
            { id: 'birthaddress', label: 'ទីកន្លែងកំណើត', type: 'text' },
            { id: 'address', label: 'អាស័យដ្ឋានបច្ចុប្បន្ន', type: 'text' },
            { id: 'phone', label: 'លេខទូរសព្ទ', type: 'text' },
            { id: 'email', label: 'អ៊ីម៉ែល', type: 'email' },
            { id: 'specialNumber', label: 'លេខទូរសព្ទក្រុមហ៊ុន', type: 'text' }
          ].map(({ id, label, type }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                id={id}
                value={formData[id] || ''}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1"
              />
            </div>
          ))}
          
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="text-sm font-medium text-gray-700">ភេទ</label>
            <select
              id="gender"
              value={formData.gender || ''}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1 text-gray-500"
            >
              <option value="">ជ្រើសរើស</option>
              <option value="male">ប្រុស</option>
              <option value="female">ស្រី</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="family" className="text-sm font-medium text-gray-700">ស្ថានភាពគ្រួសារ</label>
            <select
              id="family"
              value={formData.family || ''}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1 text-gray-500"
            >
              <option value="">ជ្រើសរើស</option>
              <option value="single">មួយ</option>
              <option value="married">មានគូរស្វាមី</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="region" className="text-sm font-medium text-gray-700">ប្រទេស</label>
            <select
              id="region"
              value={formData.region || ''}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1 text-gray-500"
            >
              <option value="">ជ្រើសរើស</option>
              <option value="cambodia">កម្ពុជា</option>
              <option value="thailand">ថៃ</option>
              <option value="vietnam">វៀតណាម</option>
              {/* Add more regions as needed */}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="nation" className="text-sm font-medium text-gray-700">ជនជាតិ</label>
            <input
              type="text"
              id="nation"
              value={formData.nation || ''}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="nationality" className="text-sm font-medium text-gray-700">សញ្ជាតិ</label>
            <input
              type="text"
              id="nationality"
              value={formData.nationality || ''}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="department" className="text-sm font-medium text-gray-700">នាយកដ្ឋាន</label>
            <select
              id="department"
              value={formData.department || ''}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1 text-gray-500"
            >
              <option value="">ជ្រើសរើស</option>
              <option value="hr">Human Resources</option>
              <option value="it">IT</option>
              {/* Add more departments as needed */}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="office" className="text-sm font-medium text-gray-700">ការិយាល័យ</label>
            <select
              id="office"
              value={formData.office || ''}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1 text-gray-500"
            >
              <option value="">ជ្រើសរើស</option>
              <option value="main">Main Office</option>
              <option value="branch">Branch Office</option>
              {/* Add more offices as needed */}
            </select>
          </div>
          
          {[
            { id: 'company', label: 'ក្រុមហ៊ុន', type: 'text' },
            { id: 'position', label: 'តួនាទី', type: 'text' }
          ].map(({ id, label, type }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                id={id}
                value={formData[id] || ''}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none focus:ring-1"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 p-6 gap-5">
          <button
            type="button"
            onClick={handleSaveEmployee}
            className="px-8 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            <p className='font-normal text-base'>រក្សាទុក</p>
          </button>
          <button
            type="button"
            onClick={closeEmployeeModal}
            className="px-6 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 border-dashed"
          >
            <p className='font-normal text-base'>ចាកចេញ</p>
          </button>
        </div>
      </form>
    </div>
  </div>
)}







    </section>
  );
};

export default EmployeeInformation;
