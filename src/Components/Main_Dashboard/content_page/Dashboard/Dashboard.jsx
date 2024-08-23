import React from 'react';
import { motion } from 'framer-motion';
import { Bar, Pie, Line } from 'react-chartjs-2';
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
import {
  FiMonitor,
  FiUsers,
  FiActivity,
} from 'react-icons/fi';

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

  const employeeData = {
    labels: ['Active', 'On Leave', 'New Hires'],
    datasets: [
      {
        label: 'Employees',
        data: [70, 5, 10],
        backgroundColor: [
          'rgba(16, 185, 129, 0.7)',
          'rgba(251, 146, 60, 0.7)',
          'rgba(139, 92, 246, 0.7)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(251, 146, 60, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          'rgba(16, 185, 129, 0.9)',
          'rgba(251, 146, 60, 0.9)',
          'rgba(139, 92, 246, 0.9)',
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

  const employeeTrendData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Active Employees',
        data: [65, 66, 68, 70, 72, 75],
        fill: false,
        backgroundColor: 'rgba(16, 185, 129, 1)',
        borderColor: 'rgba(16, 185, 129, 1)',
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
    <div className="flex flex-col min-h-screen py-6 mt-5 bg-gray-100 font-khmer">
      <h1 className='text-xl font-medium text-blue-800'>តារាងបង្ហាញទិន្នន័យ</h1>
      <div className='mt-3 mb-3 border'></div>
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Total Computers Card */}
        <motion.div
          className="flex items-center justify-between p-6 transition-transform bg-white rounded-lg shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Total Computers</p>
            <p className="text-3xl font-semibold text-gray-800">125</p>
            <div className="text-sm text-gray-500">+10 this month</div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
            <FiMonitor className="text-blue-500" size={30} />
          </div>
        </motion.div>

        {/* Active Computers Card */}
        <motion.div
          className="flex items-center justify-between p-6 transition-transform bg-white rounded-lg shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Active Computers</p>
            <p className="text-3xl font-semibold text-gray-800">110</p>
            <div className="text-sm text-gray-500">+5 this month</div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
            <FiMonitor className="text-green-500" size={30} />
          </div>
        </motion.div>

        {/* Total Employees Card */}
        <motion.div
          className="flex items-center justify-between p-6 transition-transform bg-white rounded-lg shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Total Employees</p>
            <p className="text-3xl font-semibold text-gray-800">80</p>
            <div className="text-sm text-gray-500">+4 this month</div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
            <FiUsers className="text-purple-500" size={30} />
          </div>
        </motion.div>

        {/* Active Employees Card */}
        <motion.div
          className="flex items-center justify-between p-6 transition-transform bg-white rounded-lg shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Active Employees</p>
            <p className="text-3xl font-semibold text-gray-800">70</p>
            <div className="text-sm text-gray-500">+8 this month</div>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
            <FiUsers className="text-teal-500" size={30} />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
        {/* Computer Trends Chart */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Computer Trends</h3>
          <Line data={computerTrendData} options={chartOptions} />
        </div>

        {/* Employee Trends Chart */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Employee Trends</h3>
          <Line data={employeeTrendData} options={chartOptions} />
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">Recent Activities</h3>
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center px-6 py-4 border-b border-gray-200 last:border-none"
          >
            <div className="p-3 bg-gray-100 rounded-full">
              {activity.icon}
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">{activity.activity}</p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default Dashboard;
