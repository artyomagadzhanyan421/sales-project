import React from 'react';
import { Link } from 'react-router-dom';

// Boxicons
import "boxicons";

// CSS
import "../styles/Navbar.css";

function Navbar({ click }) {
  return (
    <div className="Navbar">
      <nav>
        <Link to="/" className='logo'>
          <img src="./logo.svg" alt="logo" />
        </Link>

        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/casestudies">Case Studies</Link></li>
        </ul>

        <i><box-icon onClick={click} name='grid-alt' size="24px" color="#f1fbe8"></box-icon></i>
        <Link to="/contact" className='c-link'>Contact Us</Link>
      </nav>
    </div>
  )
}

export default Navbar