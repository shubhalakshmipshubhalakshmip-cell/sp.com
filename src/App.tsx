import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-[#F8F7F4] text-[#111111] tracking-[-0.02em] selection:bg-[#8B1E24]/15 selection:text-[#8B1E24]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
