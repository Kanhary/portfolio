import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
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
    // Add more tasks if needed
  ]);
 
  const [showAllTasks, setShowAllTasks] = useState(false); // New state to track visibility of all tasks

  // ... (other existing functions)

  const toggleShowAllTasks = () => {
    setShowAllTasks(!showAllTasks);
  };
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: null,
    title: '',
    description: '',
    date: new Date(),
    status: 'Pending',
    priority: 'Low',
  });

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

  return (
    <div className="min-h-screen p-8 mt-5 bg-gray-100" >
      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4" data-aos='fade-up'>
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
            <p className="mb-4 text-gray-600">{task.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{task.date.toLocaleDateString()}</span>
              <div className="flex space-x-2">
                <FaEdit
                  className="text-blue-500 transition-colors cursor-pointer hover:text-blue-700"
                  onClick={() => handleEditTask(task)}
                />
                <FaTrashAlt
                  className="text-red-500 transition-colors cursor-pointer hover:text-red-700"
                  onClick={() => handleDeleteTask(task.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Tasks Button */}
      {tasks.length > 3 && (
        <div className="mt-4">
          <button
            onClick={toggleShowAllTasks}
            className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
          >
            {showAllTasks ? 'See Less Tasks' : 'See All Tasks'}
          </button>
        </div>
      )}

      {/* Add/Edit Task Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 p-6 bg-white rounded-lg shadow-lg sm:w-1/3">
            <h2 className="mb-4 text-2xl font-semibold">{currentTask.id ? 'Edit Task' : 'Add New Task'}</h2>
            <form onSubmit={handleSaveTask}>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={currentTask.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Description:</label>
                <textarea
                  name="description"
                  value={currentTask.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-500"
                  rows="3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Date:</label>
                <DatePicker
                  selected={currentTask.date}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="submit"
                  className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  {currentTask.id ? 'Update' : 'Save'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 transition-colors bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                
              </div>
            </form>
          </div>
        </div>
      )}

  

      <div className="p-6 mt-6 bg-white rounded-lg shadow-lg" data-aos='fade-right'>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Completed Tasks</h2>
        {tasks.filter((task) => task.status === 'Completed').length === 0 ? (
          <p className="mt-2 text-gray-600">No completed tasks found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="text-white bg-blue-600">
                <tr>
                  <th className="px-2 py-3 text-sm text-left">Title</th>
                  <th className="px-2 py-3 text-sm text-left">Description</th>
                  <th className="px-2 py-3 text-sm text-left">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tasks
                  .filter((task) => task.status === 'Completed')
                  .map((task) => (
                    <tr
                      key={task.id}
                      className="transition duration-150 hover:bg-gray-100"
                    >
                      <td className="px-2 py-3 text-sm font-medium">{task.title}</td>
                      <td className="px-2 py-3 text-sm">{task.description}</td>
                      <td className="px-2 py-3 text-sm">
                        {new Date(task.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>


      {/* Add Task Button */}
      <button
        className="fixed flex items-center px-5 py-5 space-x-2 text-white transition-colors bg-blue-500 rounded-full shadow-md bottom-10 right-10 hover:bg-blue-600"
        onClick={() => setShowModal(true)}
      >
        <FaPlus />
        
      </button>
    </div>
  );
};

export default Maintenance;
