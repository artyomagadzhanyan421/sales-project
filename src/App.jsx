import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Routes
import HomePage from "./pages/HomePage";
import ServicesPage from './pages/ServicesPage';
import CaseStudiesList from './pages/CaseStudiesList';
import CaseStudy from './pages/CaseStudy';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarFunction = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <Sidebar sidebar={sidebar} click={sidebarFunction} />
      <Navbar click={sidebarFunction} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/casestudies" element={<CaseStudiesList />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
