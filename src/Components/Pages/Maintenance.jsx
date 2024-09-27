import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import { FaScrewdriverWrench } from "react-icons/fa6";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is configured

const Maintenance = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Server Maintenance',
      description: 'Routine server checks and updates.',
      date: new Date('2024-09-10'),
      status: 'Completed',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Software Update',
      description: 'Update the accounting software to the latest version.',
      date: new Date('2024-09-20'),
      status: 'Pending',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Database Backup',
      description: 'Backup all database files to secure storage.',
      date: new Date('2024-09-15'),
      status: 'Pending',
      priority: 'Low',
    },
    {
      id: 4,
      title: 'System Checkup',
      description: 'Check system health and performance.',
      date: new Date('2024-09-18'),
      status: 'Pending',
      priority: 'Medium',
    },
    {
      id: 5,
      title: 'Network Security Review',
      description: 'Assess network security protocols and systems.',
      date: new Date('2024-09-25'),
      status: 'Completed',
      priority: 'High',
    },
    {
      id: 6,
      title: 'Software License Renewal',
      description: 'Renew licenses for all software applications.',
      date: new Date('2024-09-30'),
      status: 'Completed',
      priority: 'Medium',
    },
    {
      id: 7,
      title: 'Hardware Upgrade',
      description: 'Upgrade RAM and storage in all systems.',
      date: new Date('2024-10-05'),
      status: 'Completed',
      priority: 'High',
    },
    {
      id: 8,
      title: 'Firewall Configuration',
      description: 'Configure and update firewall settings.',
      date: new Date('2024-10-10'),
      status: 'Completed',
      priority: 'Low',
    },
    {
      id: 9,
      title: 'Performance Review',
      description: 'Evaluate system performance metrics.',
      date: new Date('2024-10-15'),
      status: 'Completed',
      priority: 'Medium',
    },
    {
      id: 10,
      title: 'Compliance Audit',
      description: 'Conduct a compliance audit for all systems.',
      date: new Date('2024-10-20'),
      status: 'Completed',
      priority: 'High',
    },
    {
      id: 11,
      title: 'User Feedback Collection',
      description: 'Collect feedback from users regarding system performance.',
      date: new Date('2024-10-25'),
      status: 'Completed',
      priority: 'Low',
    },
    // Add more tasks if needed
  ]);

  const [showAllTasks, setShowAllTasks] = useState(false); // New state to track visibility of all tasks
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: null,
    title: '',
    description: '',
    date: new Date(),
    status: 'Pending',
    priority: 'Low',
  });

  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const tasksPerPage = 10; // Number of tasks to display per page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setCurrentTask((prev) => ({ ...prev, date }));
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    if (currentTask.id) {
      setTasks((prev) =>
        prev.map((task) => (task.id === currentTask.id ? currentTask : task))
      );
    } else {
      setTasks((prev) => [...prev, { ...currentTask, id: tasks.length + 1 }]);
    }
    setShowModal(false);
    resetCurrentTask();
  };

  const resetCurrentTask = () => {
    setCurrentTask({
      id: null,
      title: '',
      description: '',
      date: new Date(),
      status: 'Pending',
      priority: 'Low',
    });
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  const handleCompleteTask = (task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, status: 'Completed' } : t))
    );
  };

  const handleToggleStatus = (task) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' }
          : t
      )
    );
  };

  const toggleShowAllTasks = () => {
    setShowAllTasks(!showAllTasks);
  };

  // Calculate the tasks for the current page
  const completedTasks = tasks.filter((task) => task.status === 'Completed');
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = completedTasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen p-8 mt-5 bg-gray-100">
      <h1 className="flex items-center space-x-3 text-xl font-medium text-blue-800">
        <FaScrewdriverWrench className="text-blue-600" />
        <span>ការថែទាំ</span>
      </h1>
      <div className="mt-2 border-b border-gray-300"></div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 gap-6 mt-5 mb-8 sm:grid-cols-2 lg:grid-cols-4" data-aos='fade-up'>
        {[ 
          { title: 'Pending', count: tasks.filter((t) => t.status === 'Pending').length, color: 'bg-blue-500' },
          { title: 'Completed', count: tasks.filter((t) => t.status === 'Completed').length, color: 'bg-green-500' },
          { title: 'Upcoming', count: tasks.filter((t) => t.status === 'Pending' && new Date(t.date) > new Date()).length, color: 'bg-yellow-500' },
        ].map((item, index) => (
          <div key={index} className={`flex items-center p-5 rounded-lg shadow-lg ${item.color} text-white`}>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-2xl font-bold">{item.count}</p>
            </div>
            <FaCalendarAlt className="ml-auto text-4xl" />
          </div>
        ))}
      </div>

      {/* Task Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos='fade-right'>
        {tasks.slice(0, showAllTasks ? tasks.length : 3).map((task) => (
          <div
            key={task.id}
            className={`p-5 bg-white rounded-lg shadow-lg border-l-4 transition-all hover:shadow-xl`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
              <button
                onClick={() => handleToggleStatus(task)}
                className={`px-3 py-1 text-xs rounded-full font-bold ${
                  task.status === 'Completed' ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'
                }`}
              >
                {task.status}
              </button>
            </div>
            <p className="text-gray-600">{task.description}</p>
            <p className="mt-2 text-sm text-gray-500">Due: {task.date.toLocaleDateString()}</p>
            <div className="flex justify-between mt-4">
              <button onClick={() => handleEditTask(task)} className="text-blue-600 hover:underline">
                <FaEdit />
              </button>
              <button onClick={() => handleDeleteTask(task.id)} className="text-red-600 hover:underline">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button onClick={toggleShowAllTasks} className="mt-5 text-blue-600 hover:underline">
        {showAllTasks ? 'Show Less' : 'Show All Tasks'}
      </button>

      {/* Completed Tasks Table */}
      <div className="mt-10" data-aos='fade-right'>
        <h2 className="text-xl font-bold">Completed Tasks</h2>
        <table className="w-full mt-4 text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Title</th>
              <th className="p-2">Description</th>
              <th className="p-2">Date</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.map((task) => (
              <tr key={task.id} className="border-b">
                <td className="p-2">{task.title}</td>
                <td className="p-2">{task.description}</td>
                <td className="p-2">{task.date.toLocaleDateString()}</td>
                <td className="p-2">
                  <button onClick={() => handleDeleteTask(task.id)} className="text-red-600 hover:underline">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className="px-4 py-2 text-white bg-blue-600 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">
            Page {currentPage} of {Math.ceil(completedTasks.length / tasksPerPage)}
          </span>
          <button
            disabled={currentPage === Math.ceil(completedTasks.length / tasksPerPage)}
            onClick={() => paginate(currentPage + 1)}
            className="px-4 py-2 text-white bg-blue-600 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <button
                    className="fixed flex items-center px-5 py-5 space-x-2 text-white transition-colors bg-blue-500 rounded-full shadow-md bottom-10 right-10 hover:bg-blue-600"
                    onClick={() => setShowModal(true)}
                >
                    <FaPlus />
        
                </button>

      {/* Modal for Adding/Editing Tasks */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 p-5 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{currentTask.id ? 'Edit Task' : 'Add Task'}</h2>
            <form onSubmit={handleSaveTask}>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={currentTask.title}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={currentTask.description}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <DatePicker
                  selected={currentTask.date}
                  onChange={handleDateChange}
                  className="block w-full mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mt-4">
                <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 ml-2 text-gray-700 bg-gray-300 rounded"
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

export default Maintenance;
