import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "../styles/Hero.css";

function Error404() {
  return (
    <div style={{
      padding: "70px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}>
      <p className="heading"><span>Error 404</span></p>
      <p className='desc'>Sorry, but unfortunately we are unable to load your page. Please try again...</p>
      <Link to="/" className='link'>Back to Home</Link>
    </div>
  )
}

export default Error404