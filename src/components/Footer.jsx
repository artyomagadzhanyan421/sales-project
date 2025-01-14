import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "../styles/Footer.css";

// Boxicons
import "boxicons";

function Footer() {
  return (
    <div className='Block'>
      <footer>
        <center><p className="heading section"><span>Let's Connect </span>and Create Together</p></center>
        <center><p className='desc block'>We're here to collaborate and craft innovative solutions tailored to your needs. Reach out today and let's embark on a journey of creativity and success!</p></center>
        <center><Link to="/contact" className='link linkFooter'>Contact Us</Link></center>
      </footer>
      <div className="footerBtm">
        <div className="footerFlex">
          <a href="#" className='logo'>
            <img src="/logo.svg" alt="logo" />
          </a>

          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/casestudies">Case Studies</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

          <div className="socials">
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target='_blank'><box-icon type='logo' name='facebook-circle' size="20px"></box-icon></a>
            <a href="https://www.linkedin.com/" target='_blank'><box-icon name='linkedin-square' type='logo' size="20px"></box-icon></a>
            <a href="https://x.com/?lang=en" target='_blank'><box-icon name='twitter' type='logo' size="20px"></box-icon></a>
          </div>
        </div>
        <div className="footerFlex" id='footerTwo'> 
          <p>© Forge 2025, All Rights Reserved</p>
          <span>Lisencing</span>
        </div>
      </div>
    </div>
  )
}

export default Footer