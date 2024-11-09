import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="text-2xl md:hidden focus:outline-none">
            <FaBars />
          </button>
          <h1 className="ml-4 text-lg font-bold">My Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <FaUserCircle size={30} />
          <span>John Doe</span>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? "block" : "hidden"} md:block w-64 bg-white shadow-md p-4 space-y-4`}>
          <nav>
            <ul>
              <li className="p-2 hover:bg-gray-200 rounded">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 rounded">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 rounded">
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h2>
          <p>This is the main content area. You can display dynamic content based on user interactions here.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
