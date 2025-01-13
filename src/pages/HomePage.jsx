import React from 'react';
import { useEffect } from 'react';

// Components
import Hero from '../components/Hero';
import GridOne from '../components/GridOne';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Banner from '../components/Banner';
import Stories from '../components/Stories';
import Opportunities from '../components/Opportunities';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    document.title = "Forge | Official Website";
  }, []);

  return (
    <div>
      <Hero />
      <GridOne />
      <Services />
      <CaseStudies />
      <Banner />
      <Stories />
      <Opportunities />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home