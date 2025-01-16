import React from 'react';

// CSS
import "../styles/Opportunities.css";

function Opportunities() {
  return (
    <div className='Block'>
      <center><p className="heading section">Transform challenges into <span>opportunities </span></p></center>

      <div className="opps">
        <div className="opps-text">
          <div>
            <p className="grid-head" style={{ color: "#f1fbe8" }}>Precision in Targeted Audience Engagement</p>
            <p className="grid-desc" style={{ color: "#f1fbe8" }}>We tailor each interaction to resonate with your audience's unique interests and preferences, ensuring a profound and lasting connection.</p>
          </div>
        </div>
        <div className="opps-text" style={{ background: "#ffe27d" }}>
          <p className="grid-head" style={{ color: '#564801' }}>Mastering Creativity in Campaign Craftsmanship</p>
          <p className="grid-desc" style={{ color: "#090d06" }}>Our campaigns are not just created, they are meticulously crafted, each element designed to tell a compelling story and leave an indelible mark on your audience.</p>
        </div>
        <div className="opps-text" style={{ background: "#ffc295" }}>
          <p className="grid-head" style={{ color: '#602606' }}>Setting Trends and Shaping Futures Through Campaign Innovation</p>
          <p className="grid-desc" style={{ color: "#090d06" }}>Our campaigns are not just about advertising, they're a testament to our commitment to set trends, shape futures, and redefine industry standards.</p>
        </div>
        <div className="opps-text">
          <div>
            <p className="grid-head" style={{ color: "#f1fbe8" }}>Seamlessly Connecting Across Channels</p>
            <p className="grid-desc" style={{ color: "#f1fbe8" }}>Our approach ensures that your brand message resonates consistently across diverse platforms, creating a unified and powerful presence.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opportunities