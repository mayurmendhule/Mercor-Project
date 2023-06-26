import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../navbar/Navbar.css';
import Card from "../card/Card"
import Logo from "../Logo.jpg";
import User from "../User.png";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAddOpen, setAddOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleAddToggle = () => {
    setAddOpen(!isAddOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-brand">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="heading">Project</span>
        <i className={`bi bi-chevron-double-right ${isSidebarOpen ? 'open' : ''}`} onClick={handleSidebarToggle}></i>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-item">
          <i className="bi bi-grid"></i>
          Home
        </div>
        <div className="sidebar-item">
          <i className="bi bi-chat-square-dots"></i>
          Message
        </div>
        <div className="sidebar-item">
          <i className="bi bi-card-checklist"></i>
          Tasks
        </div>
        <div className="sidebar-item">
          <i className="bi bi-people"></i>
          Member
        </div>
        <div className="sidebar-item">
          <i className="bi bi-gear"></i>
          Settings
        </div>
        <div className="sidebar-line"></div>
        <Card />
      </div>
      <div className="search-bar">
        <input type="text" className="form-control" placeholder="Search anything..." />
        <i className="bi bi-search search-icon"></i>
      </div>
      <div className="nav-icons">
        <i className="bi bi-calendar"></i>
        <i className="bi bi-chat-square-dots"></i>
        <i className="bi bi-bell"></i>
      </div>
      <div className="user-info">
        <div className="user-details">
          <div className="username">Anima Agrawal</div>
          <div className="state">UP, India</div>
        </div>
        <div className="user-photo">
          <img src={User} alt="User Photo" className="user-photo" />
        </div>
        <i className="bi bi-chevron-down"></i>
      </div>
    </nav>
  );
};

export default Navbar;