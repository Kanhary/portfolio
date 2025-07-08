import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import AuroraBackground from './Components/AuroraBackground';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const ExperienceRef =  useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) =>{
    ref.current?.scrollIntoView({ behavior: 'smooth'});
  }
  return (

    <div className="relative min-h-screen font-sans">
      {/* <AuroraBackground/> */}
      <Header
        onNavigate = {{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          skill: () => scrollToSection(skillRef),
          project: () => scrollToSection(projectRef),
          experience: () => scrollToSection(ExperienceRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
  
      <div ref={homeRef}><Home/></div>
      <div ref={aboutRef}><About/></div>
      <div ref={skillRef}><Skill/></div>
      <div ref={projectRef}><Project/></div>
      <div ref={ExperienceRef}><Experience/></div>
      <div ref={contactRef}><Contact/></div>
      
      
      
      
      
    </div>
  );
}

export default App;
