import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="./">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav me-auto">
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Manage Visitors
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="./create_visitor">
            Add Visitor
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./update_visitor">
            Edit Visitor
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./delete_visitor">
            Remove Visitor
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./searchv">
            Search Visitor
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item">
              <a className="nav-link active" onClick={goToDashboard}>
                Dashboard
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link active" href="./actionh">
                Action of Host
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="./getall">All Visitors</a>
            </li>
          </ul>
          <form className="d-flex ms-auto">
          <button 
         className="btn btn-danger" 
         type="button" 
           onClick={() => window.location.href = "./"}>
           Logout
           </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
