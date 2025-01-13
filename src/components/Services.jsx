import React from "react";
import useServices from "../hooks/useServices"; 
import { Link } from "react-router-dom";

// CSS
import "../styles/Services.css";

function Services() {
    const services = useServices(); 
    
    return (
        <div className="Block">
            <center>
                <p className="heading section">
                    Innovative <span>Solutions </span>Hub
                </p>
            </center>
            <center>
                <p className="desc block">
                    From strategic consulting to seamless execution, we're your partners
                    in unlocking unparalleled success. Elevate your business experience
                    with our dynamic services.
                </p>
            </center>

            <div className="services-grid">
                {services.slice(0, 3).map((service) => (
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

            <center>
                <Link to="/services" className="link linkTop">View All Services</Link>
            </center>
        </div>
    );
}

export default Services;