import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "../styles/Form.css";

function Form() {
  let flex = {
    display: "flex",
    flexDirection: "column"
  }

  let image = {
    width: "32px"
  }

  let formImageContainer = {
    display: "flex",
    overflow: "hidden",
    borderRadius: "28px"
  }

  let formImage = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }

  return (
    <div className='Block'>
      <p className="heading section"><span>Let's Connect</span> and Ignite Success</p>
      <p className='desc block'>Ready to take the next step? Contact us today to explore how our innovative strategies can propel your business forward. Our team is here to turn your vision into a reality.</p>

      <div className="formLinks">
        <a href="mailto:artyom.agadzhanyan250@gmail.com">
          <div>
            <img src="./pages/contact1.svg" alt="image" style={image} />
          </div>
          <p className='case-head' style={{color: "#356905"}}>Drop Us a Line</p>
          <p className='case-desc form' style={{color: '#003800'}}>Reach out and let's begin the dialogue</p>
        </a>
        <a href="https://calendly.com/" target='_blank'>
          <div>
            <img src="./pages/contact2.svg" alt="image" style={image} />
          </div>
          <p className='case-head' style={{color: "#356905"}}>Book a Call</p>
          <p className='case-desc form' style={{color: '#003800'}}>Schedule consultation in our Calendly</p>
        </a>

        <form>
          <p className='case-head' style={{color: "#e1ffc7"}}>Connect with Ease</p>
          <p className='case-desc' style={{color: "#e1ffc7"}}>Your inquiries, ideas, and collaboration opportunities are just a click away. Let's start the conversation.</p>
          <div className="formInputs">
            <div style={flex}>
              <span>Name</span>
              <input type="text" placeholder='John Anderson' required />
            </div>
            <div style={flex}>
              <span>Email Address</span>
              <input type="email" placeholder='john.anderson@gmail.com' required />
            </div>
            <div style={flex}>
              <span>Question</span>
              <input type="text" placeholder='How can we help you?' required />
            </div>
            <button type='submit' className="link button">Send a Question</button>
          </div>
        </form>
        
        <div className="formImage" style={formImageContainer}>
          <img src="./pages/contact3.jpg" alt="image" style={formImage} />
        </div>
      </div>

      <div className="footerBtm formFooter">
        <div className="footerFlex">
          <a href="#" className='logo'>
            <img src="./logo.svg" alt="logo" />
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

export default Form