import React from "react";
import { useEffect } from 'react';
import useServices from "../hooks/useServices"; 

// CSS
import "../styles/Page.css";

// Componenets
import Faq from "../components/Faq";
import Footer from "../components/Footer";

function ServicesPage() {
  const services = useServices();

  useEffect(() => {
    document.title = "Forge | Our Services";
  }, []);
  
  return (
    <div>
        <div
            style={{
            padding: "70px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            }}
        >
            <p className="heading">
            Elevate Your Brand with <span>Our Services</span>
            </p>
            <p className="desc">
            From strategic planning to flawless execution, we offer tailored
            solutions that drive results and exceed expectations.
            </p>
        </div>
        
        <div id="pageMedia" style={{marginBottom: 125}}>
            <img src="./pages/services.webp" alt="image" />
        </div>
        
        <div className="Block">
            <center>
                <p className="heading section">
                    Innovative <span>Solutions </span>Hub
                </p>
            </center>
            <center>
                <p className="desc bllock">
                    From strategic consulting to seamless execution, we're your partners
                    in unlocking unparalleled success. Elevate your business experience
                    with our dynamic services.
                </p>
            </center>

            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service">
                        <div className="service-img">
                            <img src={service.imgSrc} alt={service.title} />
                        </div>
                        <center>
                            <p className="service-head">{service.title}</p>
                        </center>
                        <center>
                            <p className="service-desc">{service.description}</p>
                        </center>
                    </div>
                ))}
            </div>
        </div>

        <Faq />
        <Footer />
    </div>
  );
}

export default ServicesPage;