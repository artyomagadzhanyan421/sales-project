import React from 'react';

// Boxicons
import 'boxicons'

// CSS
import "../styles/Hero.css";

function Hero() {
  return (
    <div style={{
        padding: "70px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    }}>
        <a 
            href="#stories" 
            className="hero-images"
            style={{
                width: "fit-content"
            }}
        >
            <div className='flex-images' style={{display: "flex"}}>
                <img src="./hero//img1.jpg" alt="image" />
                <img src="./hero/img2.jpg" alt="image" />
                <img src="./hero/img3.jpg" alt="image" />
            </div>
            <span>What Others Say About Us</span>
            <box-icon name='right-arrow-alt' color="#e1ffc7" size="22px"></box-icon>
        </a>
        <p className="heading"><span>Boost Sales</span> With Our Strategy First Framework</p>
        <p className='desc'>Forge delivers monthly sales and marketing solutions that are strategically designed to meet your objectives.</p>
        <a href="https://calendly.com/" target='_blank' className='link'>Book a Free Consultation</a>
    </div>
  )
}

export default Hero