import React from 'react';
import { useEffect } from 'react'

// CSS
import "../styles/Page.css";

// Components
import Form from '../components/Form';

function ContactPage() {
  useEffect(() => {
    document.title = "Forge | Contact";
  }, []);

  return (
    <div>
      <div style={{
        padding: "70px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
        <p className="heading"><span>Let's Make</span> Things Happen Together</p>
        <p className="desc">Ready to embark on a journey of innovation? Contact us today to explore how we can collaborate and bring your ideas to life.</p>
      </div>
     
      <div id="pageMedia" style={{marginBottom: 125}}>
        <img src="./pages/contact.webp" alt="image" />
      </div>

      <Form />
    </div>
  )
}

export default ContactPage