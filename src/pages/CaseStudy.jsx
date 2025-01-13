import React from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCaseStudies } from "../hooks/useCaseStudies";

// Components
import Footer from "../components/Footer";

function CaseStudy() {
  const caseStudies = useCaseStudies();
  
  useEffect(() => {
    document.title = "Forge | Case Study";
  }, []);

  const randomCaseStudies = useMemo(() => {
    const shuffled = [...caseStudies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, [caseStudies]);

  return (
    <div>
      <div style={{
        padding: "70px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}> 
        <div className='caseFlex'>
          <p className="pageHead caseType">Content Marketing</p>  
          <p className="pageHead caseType">2024</p>   
        </div>
        <p className="heading"><span>TechLift Strategy</span></p>
        <p className="desc">TechLift Strategy is a dynamic technology consulting firm specializing in providing innovative solutions</p>
      </div>

      <div id="pageMedia" style={{marginBottom: 125}}>
        <img src="./case/c1.jpg" alt="page" />
      </div>

      <div className="Block">
        <div className="caseData">
          <p className="case-head" style={{color: "#a9ff5c"}}>Overview</p>
          <p className="case-desc data" style={{color: "#979f90"}}>TechLift Strategy is a dynamic technology consulting firm specializing in providing innovative solutions to businesses across various industries. With a focus on enhancing efficiency and driving growth, TechLift Strategy serves as a trusted partner for companies seeking to navigate the rapidly evolving digital landscape.</p>
        </div>
        <div className="caseData">
          <p className="case-head" style={{color: "#a9ff5c"}}>Challenge</p>
          <p className="case-desc data" style={{color: "#979f90"}}>Before partnering with our agency, TechLift Strategy faced the challenge of limited online visibility and struggled to effectively reach their target audience. Despite offering cutting-edge solutions, they were unable to showcase their expertise and differentiate themselves in a crowded market.</p>
        </div>
        <div className="caseData">
          <p className="case-head" style={{color: "#a9ff5c"}}>Strategy</p>
          <p className="case-desc data" style={{color: "#979f90"}}>To address TechLift Strategy's challenges, we developed a comprehensive digital marketing strategy tailored to their unique needs. Our approach included content marketing. This strategy aimed to drive engagement, and nurture leads.</p>
        </div>
        <div className="caseData">
          <p className="case-head" style={{color: "#a9ff5c"}}>Results</p>
          <p className="case-desc data" style={{color: "#979f90"}}>The implementation of our digital marketing strategies yielded impressive results for TechLift Strategy. Organic traffic to the website increased by 75% within the first six months of the campaign, lead generation and conversion rates improved by 50%, social media engagement doubled, and brand mentions soared across digital channels. This enhanced online presence and strategic marketing efforts led to a notable uptick in sales inquiries and business opportunities, resulting in a substantial increase in revenue.</p>
        </div>
      </div>

      <div className="Block">
        <center>
          <p className="heading section">You May <span>Also Like</span></p>
        </center>
        <center>
          <p className="desc block">Dive deeper into topics similar to what you're viewing and uncover more valuable insights and information.</p>
        </center>
        <div className="case-grid">
          {randomCaseStudies.map((caseStudy) => (
            <Link to="/casestudy" className="case" key={caseStudy.id}>
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
  )
}

export default CaseStudy