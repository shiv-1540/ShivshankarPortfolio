import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Project';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import "./tailwind.css"
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Sidebar/>
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
