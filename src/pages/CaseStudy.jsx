import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCaseStudies } from "../hooks/useCaseStudies";

// Pages
import Error404 from '../pages/Error404';

// Components
import Footer from "../components/Footer";

function CaseStudy() {
  const { id } = useParams();
  const caseStudies = useCaseStudies();

  const caseStudy = caseStudies.find(cs => cs.id === parseInt(id));

  const randomCaseStudies = useMemo(() => {
    const shuffled = [...caseStudies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, [caseStudies]);

  if (caseStudy) {
    { document.title = `Forge | ${caseStudy.title}`; }

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
            <p className="pageHead caseType">{caseStudy.category}</p>
            <p className="pageHead caseType">{caseStudy.year}</p>
          </div>
          <p className="heading"><span>{caseStudy.title}</span></p>
          <p className="desc">{caseStudy.description}</p>
        </div>

        <div id="pageMedia" style={{ marginBottom: 125 }}>
          <img src={caseStudy.imgSrc} alt="page" />
        </div>

        <div className="Block">
          <div className="caseData">
            <p className="case-head" style={{ color: "#a9ff5c" }}>Overview</p>
            <p className="case-desc data" style={{ color: "#979f90" }}>{caseStudy.overview}</p>
          </div>
          <div className="caseData">
            <p className="case-head" style={{ color: "#a9ff5c" }}>Challenge</p>
            <p className="case-desc data" style={{ color: "#979f90" }}>{caseStudy.challenge}</p>
          </div>
          <div className="caseData">
            <p className="case-head" style={{ color: "#a9ff5c" }}>Strategy</p>
            <p className="case-desc data" style={{ color: "#979f90" }}>{caseStudy.strategy}</p>
          </div>
          <div className="caseData">
            <p className="case-head" style={{ color: "#a9ff5c" }}>Results</p>
            <p className="case-desc data" style={{ color: "#979f90" }}>{caseStudy.results}</p>
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
        </div>

        <Footer />
      </div>
    )
  } else {
    return <Error404 />
  }
}

export default CaseStudy