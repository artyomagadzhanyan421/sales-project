import React from 'react';
import { Link } from 'react-router-dom';

// Boxicons
import "boxicons";

// CSS
import "../styles/Sidebar.css";

function Sidebar({ sidebar, click }) {
  return (
    <div className={sidebar ? "Sidebar show" : "Sidebar"}>
        <div className="top">
            <Link to="/" className='logo' onClick={click}>
                <img src="/logo.svg" alt="logo" />
            </Link>     
            <i><box-icon onClick={click} name='x-circle' size="24px" color="#f1fbe8"></box-icon></i>
        </div>
        <ul>
            <li><Link to="/" onClick={click}>Home</Link></li>
            <li><Link to="/about" onClick={click}>About Us</Link></li>
            <li><Link to="/services" onClick={click}>Services</Link></li>
            <li><Link to="/casestudies" onClick={click}>Case Studies</Link></li>
            <li><Link to="/contact" onClick={click}>Contact Us</Link></li>
        </ul>
        <div className="bottom">
            <div className="bottomSocials">
                <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target='_blank'><box-icon type='logo' size="24px" name='facebook-circle'></box-icon></a>
                <a href="https://www.linkedin.com/" target='_blank'><box-icon type='logo' size="24px" name='linkedin-square'></box-icon></a>
                <a href="https://x.com/?lang=en" target='_blank'><box-icon type='logo' size="24px" name='twitter'></box-icon></a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar