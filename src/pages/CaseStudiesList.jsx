import React from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCaseStudies } from "../hooks/useCaseStudies";

// CSS
import "../styles/Page.css";

// Components
import Footer from "../components/Footer";

function CaseStudiesList() {
    const caseStudies = useCaseStudies();

    useEffect(() => {
        document.title = "Forge | Case Studies";
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
            }}>
                <p className="heading"><span>Stories </span>Unveiling Our Triumphs</p>
                <p className="desc">
                    Collection of illuminating case studies, where expert strategy
                    seamlessly intersects with tangible, impactful results.
                </p>
            </div>

            <div id="pageMedia" style={{marginBottom: 125}}>
                <img src="./pages/casestudies.webp" alt="page" />
            </div>

            <div className="Block">
                <center>
                    <p className="heading section">Our <span>Success </span>Marketing Stories</p>
                </center>
                <center>
                    <p className="desc block">
                        Delve into our case studies to uncover the strategies, creativity,
                        and meticulous execution that have propelled brands to new heights.
                    </p>
                </center>

                <div className="case-grid">
                    {caseStudies.map((caseStudy) => (
                        <Link to='/casestudy' className="case" key={caseStudy.id}>
                            <img src={caseStudy.imgSrc} alt="case" />
                            <div className="case-text-two">
                                <p>{caseStudy.category}</p>
                                <p>{caseStudy.year}</p>
                            </div>
                            <div className="case-text">
                                <p className="case-head">{caseStudy.title}</p>
                                <p className="case-desc">{caseStudy.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CaseStudiesList;