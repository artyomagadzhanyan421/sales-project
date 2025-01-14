import React from "react";
import { Link } from "react-router-dom";
import { useCaseStudies } from "../hooks/useCaseStudies";

// CSS
import "../styles/CaseStudies.css";

function CaseStudies() {
  const caseStudies = useCaseStudies();

  return (
    <div className="Block">
      <center>
        <p className="heading section">
          Our <span>Success </span>Marketing Stories
        </p>
      </center>
      <center>
        <p className="desc block">
          Delve into our case studies to uncover the strategies, creativity, and
          meticulous execution that have propelled brands to new heights.
        </p>
      </center>

      <div className="case-grid">
        {caseStudies.slice(0, 2).map((caseStudy) => (
          <Link to={`/casestudy/${caseStudy.id}`} className="case" key={caseStudy.id}>
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

      <center>
        <Link to="/casestudies" className="link linkTop">View All Case Studies</Link>
      </center>
    </div>
  );
}

export default CaseStudies;