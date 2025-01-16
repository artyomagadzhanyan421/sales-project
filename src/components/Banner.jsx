import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "../styles/Banner.css";

// Boxicons
import "boxicons";

function Banner() {
    let relative = {
        zIndex: 1,
        position: "relative"
    }

    return (
        <div className='Block'>
            <div className="banner">
                <div className="bannerOne">
                    <a href="#faq" className="banner-flex">
                        <box-icon type='solid' name='message-square-dots' size="20px" color="#7fd136"></box-icon>
                        <span>Have Questions?</span>
                        <box-icon name='right-arrow-alt' size="20px" color="#7fd136"></box-icon>
                    </a>
                    <center><p style={relative} className="heading section">Empowering <span>Success </span>in Numbers</p></center>
                    <center><p style={relative} className='desc block'>We redefine collaboration, innovation, and success. From our unwavering commitment to excellence to our dynamic approach that adapts to your unique needs, discover why working with us is not just a choice, it's a strategic investment in your unparalleled success.</p></center>
                    <center><Link style={relative} to="/contact" className='link linkFooter'>Contact Us</Link></center>
                </div>
                <div className="bannerTwo">
                    <div>
                        <p>97%</p>
                        <p>Satisfaction rate</p>
                    </div>
                    <div>
                        <p>50+</p>
                        <p>Delivered projects</p>
                    </div>
                    <div>
                        <p>10</p>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner