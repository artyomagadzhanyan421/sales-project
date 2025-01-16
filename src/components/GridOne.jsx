import React from 'react';

// CSS
import "../styles/GridOne.css";

function GridOne() {
  return (
    <div className='Block'>
      <p className="heading section">Strategic <span>Sales Growth</span> Catalyst</p>
      <p className='desc block'>By seamlessly integrating data-driven insights, market intelligence, and a deep understanding of your business, we propel your sales to new heights.</p>


      <div className="gridOne">
        <div className="grid-block">
          <div className='grid-text'>
            <div className="grid-icon">
              <img src="./grid.svg" alt="image" />
            </div>
            <p className="grid-head">Fueling Progress with a Strategic Foundation for Growth</p>
            <p className="grid-desc">As a dynamic and forward-thinking powerhouse, we specialize in meticulously crafting innovative strategies that transcend conventional norms. Our commitment lies not only in meeting immediate sales objectives but in strategically positioning businesses for sustained success in the ever-evolving market landscape.</p>
          </div>
          <div className='grid-image'>
            <img src="./grid/g1.png" alt="image" />
          </div>
        </div>

        <div className="grid-block" style={{ background: "#ffc295" }}>
          <div className='grid-image'>
            <img src="./grid/g2.png" alt="image" />
          </div>
          <div className='grid-text'>
            <p className="grid-head" style={{ color: "#602606" }}>Illuminating Pathways for Business Triumphs</p>
            <p className="grid-desc">We craft success through strategies integrating data-driven insights and deep understanding of each client's unique business landscape.</p>
          </div>
        </div>

        <div className="grid-block" style={{ background: "#ffe27d" }}>
          <div className='grid-image'>
            <img src="./grid/g3.png" alt="image" />
          </div>
          <div className='grid-text'>
            <p className="grid-head" style={{ color: "#564801" }}>Elevating Achievements through Collaboration</p>
            <p className="grid-desc">We don't just work for our clients, we work with them. We thrive on collaboration, building strong partnerships to understand each business's nuances.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GridOne