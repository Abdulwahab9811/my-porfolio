import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import HeroSection from './componenent/Hero'; 
import AboutMeSection from './componenent/AboutMe'; 
import ProjectsSection from './componenent/Project'; 
import ContactSection from './componenent/Contact'; 
import Navbar from './componenent/Navbar'; 
import './App.css'; 
import './Hero.css';
import './Aboutme.css';
import './Project.css'; 
import './Contact.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutMeSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;










