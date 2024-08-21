import React from 'react';
import { motion } from 'framer-motion';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';
import { FiMonitor, FiUsers } from 'react-icons/fi';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const computerData = {
    labels: ['Active', 'Inactive', 'Pending Repairs'],
    datasets: [
      {
        label: 'Computers',
        data: [110, 10, 5],
        backgroundColor: [
          'rgba(72, 187, 120, 0.7)',
          'rgba(248, 113, 113, 0.7)',
          'rgba(250, 204, 21, 0.7)',
        ],
        borderColor: [
          'rgba(72, 187, 120, 1)',
          'rgba(248, 113, 113, 1)',
          'rgba(250, 204, 21, 1)',
        ],
        borderWidth: 2,
        borderRadius: 15,
        hoverBackgroundColor: [
          'rgba(72, 187, 120, 1)',
          'rgba(248, 113, 113, 1)',
          'rgba(250, 204, 21, 1)',
        ],
      },
    ],
  };

  const employeeData = {
    labels: ['Active', 'On Leave', 'New Hires'],
    datasets: [
      {
        label: 'Employees',
        data: [70, 5, 10],
        backgroundColor: [
          'rgba(96, 165, 250, 0.7)',
          'rgba(251, 146, 60, 0.7)',
          'rgba(192, 132, 252, 0.7)',
        ],
        borderColor: [
          'rgba(96, 165, 250, 1)',
          'rgba(251, 146, 60, 1)',
          'rgba(192, 132, 252, 1)',
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          'rgba(96, 165, 250, 1)',
          'rgba(251, 146, 60, 1)',
          'rgba(192, 132, 252, 1)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
          font: {
            size: 14,
            family: 'Poppins, sans-serif',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 16,
          family: 'Poppins, sans-serif',
        },
        bodyFont: {
          size: 14,
          family: 'Poppins, sans-serif',
        },
        padding: 10,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
          font: {
            size: 12,
            family: 'Poppins, sans-serif',
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#fff',
          font: {
            size: 12,
            family: 'Poppins, sans-serif',
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <div className="min-h-screen p-6 mt-5 bg-gray-100 dashboard-container">
      {/* Content */}
      <div className="content">
        <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
          {/* Computer Overview Card */}
          <div className="p-6 text-white shadow-lg overview-card bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
            <h2 className="mb-4 text-2xl font-bold">Computer Overview</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="stat">
                <h3 className="text-lg font-semibold">Total Computers</h3>
                <p className="text-3xl font-bold">120</p>
              </div>
              <div className="stat">
                <h3 className="text-lg font-semibold">Active Computers</h3>
                <p className="text-3xl font-bold">110</p>
              </div>
              <div className="stat">
                <h3 className="text-lg font-semibold">Inactive Computers</h3>
                <p className="text-3xl font-bold">10</p>
              </div>
              <div className="stat">
                <h3 className="text-lg font-semibold">Pending Repairs</h3>
                <p className="text-3xl font-bold">5</p>
              </div>
            </div>
          </div>

          {/* Employee Overview Card */}
          <div className="p-6 text-white shadow-lg overview-card bg-gradient-to-r from-green-400 to-blue-500 rounded-xl">
            <h2 className="mb-4 text-2xl font-bold">Employee Overview</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="stat">
                <h3 className="text-lg font-semibold">Total Employees</h3>
                <p className="text-3xl font-bold">75</p>
              </div>
              <div className="stat">
                <h3 className="text-lg font-semibold">Active Employees</h3>
                <p className="text-3xl font-bold">70</p>
              </div>
              <div className="stat">
                <h3 className="text-lg font-semibold">On Leave</h3>
                <p className="text-3xl font-bold">5</p>
              </div>
              <div className="stat">
                <h3 className="text-lg font-semibold">New Hires</h3>
                <p className="text-3xl font-bold">10</p>
              </div>
            </div>
          </div>
        </div>
        {/* Detailed Sections */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Computer Details Section */}
          <motion.div
            className="relative p-8 overflow-hidden text-white shadow-xl bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brick-wall.png')]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <FiMonitor size={24} className="mr-2" />
                <h2 className="text-2xl font-extrabold">Computer Details</h2>
              </div>
              <p className="mb-4 text-sm">Overview of computer statuses, activities, and maintenance schedules.</p>
              <Bar data={computerData} options={options} />
            </div>
          </motion.div>

          {/* Employee Details Section */}
          <motion.div
            className="relative p-8 overflow-hidden text-white shadow-xl bg-gradient-to-tr from-teal-400 to-green-500 rounded-3xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brick-wall.png')]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <FiUsers size={24} className="mr-2" />
                <h2 className="text-2xl font-extrabold">Employee Details</h2>
              </div>
              <p className="mb-4 text-sm">Overview of employee performance, attendance, and new hires.</p>
              <Pie data={employeeData} options={options} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
