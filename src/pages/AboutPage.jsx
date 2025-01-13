import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// CSS
import "../styles/Page.css";

// Components
import GridOne from "../components/GridOne";
import GridTwo from '../components/GridTwo';
import Footer from "../components/Footer";

function AboutPage() {
  useEffect(() => {
    document.title = "Forge | About Us";
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
        <p className="heading"><span>Discover the Heart </span>Behind Forge</p>
        <p className="desc">
          Learn about our passion for innovation, dedication to excellence, and commitment to exceeding expectations.
        </p>
      </div>

      <div id="pageMedia" style={{marginBottom: 125}}>
        <img src="./pages/about.webp" alt="page" />
      </div>

      <div className="Block">
        <div className="pageGrid">
          <div>
            <p className="pageHead">Who We Are</p>
            <p className="heading section">Discover Our <span>Marketing Story</span></p>
            <p className="page-desc">We're storytellers, strategists, and innovators on a mission to redefine success. Our journey began with a simple belief, that every brand has a unique story waiting to be told, and we're here to help them share it with the world. With a blend of creativity, expertise, and unwavering dedication, we craft solutions that captivate audiences, drive growth, and elevate brands to heights. <br /><br />
            From our humble beginnings to our current standing as industry leaders, our commitment to excellence remains steadfast. Join us as we continue to push boundaries, challenge norms, and shape the future of marketing.</p>
            <Link to="/contact" className='link'>Contact Us</Link>
          </div>
          <div className="gridImage">
            <img src="./pages/about2.webp" alt="image" />
          </div>
        </div>
      </div>

      <GridOne />
      <GridTwo />
      <Footer />
    </div>
  )
}

export default AboutPage