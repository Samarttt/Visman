import React, { useState } from "react";
import "./Dashboard.css";
import { FaHome, FaUser, FaChartBar, FaCalendarCheck, FaSun, FaMoon } from "react-icons/fa";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`dashboard ${darkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Dashboard</h1>
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li><FaHome /> Home</li>
          <li><FaUser /> About</li>
          <li><FaChartBar /> Portfolio</li>
          <li><FaCalendarCheck /> Bookings</li>
        </ul>
      </aside>

     {/* Main Content */}
     <main className="main-content">
        <section className="card">📷 Recent Gallery Uploads</section>
        <section className="card">🖼 Album Management</section>
        <section className="card">🛠 Photo Editing Tools</section>
      </main>

      {/* Footer */}
      <footer className="footer">© 2024 My Dashboard</footer>
    </div>
  );
};

export default Dashboard;
