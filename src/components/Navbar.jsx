import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/icono-pequeño.svg" alt="App Icon" className="navbar-icon" />
          <span className="navbar-title">Harmonically</span>
        </div>
        
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    );
  };

export default Navbar;
