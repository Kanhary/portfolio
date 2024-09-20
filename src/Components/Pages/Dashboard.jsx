import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  TimeScale,
} from 'chart.js';
import { FiMonitor, FiUsers, FiActivity } from 'react-icons/fi';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  TimeScale
);

const Dashboard = () => {
  const computerData = {
    labels: ['Active', 'Inactive', 'Pending Repairs'],
    datasets: [
      {
        label: 'Computers',
        data: [110, 10, 5],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(239, 68, 68, 0.7)',
          'rgba(234, 179, 8, 0.7)',
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(234, 179, 8, 1)',
        ],
        borderWidth: 2,
        borderRadius: 12,
        hoverBackgroundColor: [
          'rgba(99, 102, 241, 0.9)',
          'rgba(239, 68, 68, 0.9)',
          'rgba(234, 179, 8, 0.9)',
        ],
      },
    ],
  };

  const computerTrendData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Active Computers',
        data: [100, 105, 107, 110, 115, 120],
        fill: false,
        backgroundColor: 'rgba(99, 102, 241, 1)',
        borderColor: 'rgba(99, 102, 241, 1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#4B5563',
          font: {
            size: 14,
            family: 'Inter, sans-serif',
            weight: '500',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 55, 0.9)',
        titleFont: {
          size: 16,
          family: 'Inter, sans-serif',
          weight: '600',
        },
        bodyFont: {
          size: 14,
          family: 'Inter, sans-serif',
          weight: '400',
        },
        padding: 12,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderRadius: 8,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
            weight: '500',
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
            weight: '500',
          },
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.5)',
          dash: [5, 5],
        },
      },
    },
  };

  const recentActivities = [
    {
      id: 1,
      icon: <FiMonitor className="text-indigo-500" size={20} />,
      activity: '5 new computers added to the inventory.',
      time: '2 hours ago',
    },
    {
      id: 2,
      icon: <FiUsers className="text-green-500" size={20} />,
      activity: 'John Doe was promoted to Senior Developer.',
      time: '5 hours ago',
    },
    {
      id: 3,
      icon: <FiActivity className="text-yellow-500" size={20} />,
      activity: 'Scheduled maintenance completed successfully.',
      time: '1 day ago',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen py-6 mt-5 font-sans bg-gray-100 font-khmer">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Computers Card */}
        <motion.div
          className="flex items-center justify-between p-6 transition-transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-xl"
          whileHover={{ scale: 1.02, rotateX: 8, rotateY: 8, perspective: 800 }}
        >
          <div className="flex flex-col">
            <p className="text-sm text-white">Total Computers</p>
            <p className="text-3xl font-semibold text-white">125</p>
            <div className="text-sm text-white">+10 this month</div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded-full">
            <FiMonitor className="text-blue-700" size={30} />
          </div>
        </motion.div>

        {/* Active Computers Card */}
        <motion.div
          className="flex items-center justify-between p-6 transition-transform rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-teal-500 hover:shadow-xl"
          whileHover={{ scale: 1.02, rotateX: 8, rotateY: -8, perspective: 800 }}
        >
          <div className="flex flex-col">
            <p className="text-sm text-white">Active Computers</p>
            <p className="text-3xl font-semibold text-white">110</p>
            <div className="text-sm text-white">+5 this month</div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-green-200 rounded-full">
            <FiMonitor className="text-green-700" size={30} />
          </div>
        </motion.div>

        {/* Total Employees Card */}
        <motion.div
          className="flex items-center justify-between p-6 transition-transform rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl"
          whileHover={{ scale: 1.02, rotateX: -8, rotateY: 8, perspective: 800 }}
        >
          <div className="flex flex-col">
            <p className="text-sm text-white">Total Employees</p>
            <p className="text-3xl font-semibold text-white">80</p>
            <div className="text-sm text-white">+4 this month</div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-purple-200 rounded-full">
            <FiUsers className="text-purple-700" size={30} />
          </div>
        </motion.div>

        {/* Active Employees Card */}
        <motion.div
          className="flex items-center justify-between p-6 transition-transform rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:shadow-xl"
          whileHover={{ scale: 1.02, rotateX: -8, rotateY: -8, perspective: 800 }}
        >
          <div className="flex flex-col">
            <p className="text-sm text-white">Active Employees</p>
            <p className="text-3xl font-semibold text-white">70</p>
            <div className="text-sm text-white">+8 this month</div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-teal-200 rounded-full">
            <FiUsers className="text-teal-700" size={30} />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-2">
        {/* Computer Trends Chart */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Computer Trends</h3>
          <Line data={computerTrendData} options={chartOptions} />
        </div>

        {/* Employee Trends Chart */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Employee Trends</h3>
          <Line data={computerTrendData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
