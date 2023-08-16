import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


