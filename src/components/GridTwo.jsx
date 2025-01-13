import React from 'react';

// CSS
import "../styles/GridTwo.css";

function GridTwo() {
  return (
    <div className='Block'>
        <p className="heading section"><span>Standing Out</span> in Digital Arena</p>
        <p className='desc block'>Our advantages aren't just features, they're the reasons why we stand out from the crowd. We're redefining the digital marketing landscape and driving success.</p>

        <div className="gridTwo">
            <div>
                <img src="./pages/g1.svg" alt="image" />
                <p className="case-head">Expertise in Modern Solutions for Success</p>
                <p className="case-desc" style={{color: '#979f90'}}>Our team's expertise lies in crafting customized strategies that precisely target your audience, ensuring maximum impact and return on investment.</p>
            </div>
            <div>
                <img src="./pages/g2.svg" alt="image" />
                <p className="case-head">Using Innovation to Drive Your Growth</p>
                <p className="case-desc" style={{color: '#979f90'}}>We stay ahead of the curve by leveraging the latest technologies and innovative techniques to propel your brand forward.</p>
            </div>
            <div>
                <img src="./pages/g3.svg" alt="image" />
                <p className="case-head">Empowering Your Business with Data</p>
                <p className="case-desc" style={{color: '#979f90'}}>We leverage data analytics to inform decision-making, analyzing metrics and insights to optimize marketing strategies and maximize ROI.</p>
            </div>
        </div>
    </div>
  )
}

export default GridTwo