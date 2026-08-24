import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from system preference or default to light
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="mt-20 py-8 text-center text-sm border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Garima Tiwari. All rights reserved.</p>
        <p className="mt-1">Built with React, Vite, and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
