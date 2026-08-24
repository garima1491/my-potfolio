import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-start pt-10">
      <div className="relative w-full">
        {/* Decorative background gradients */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:bg-violet-900 dark:opacity-20"></div>
        <div className="absolute top-10 right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 dark:bg-indigo-900 dark:opacity-20"></div>
        
        <div className="relative space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 text-sm font-semibold">
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Aspiring AI/ML & Software Engineer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-300">
              Garima Tiwari
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-400">
            B.Tech CS Student specializing in Artificial Intelligence & Machine Learning
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Currently pursuing my B.Tech at <strong>GLA University, Mathura</strong>. 
            I am highly interested in technology, Artificial Intelligence, and Machine Learning, 
            and I'm passionate about developing clean web interfaces, mastering technical skills, 
            and building practical systems in this domain.
          </p>

          {/* Call to action */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 shadow-lg shadow-violet-500/20 transition-all dark:bg-violet-500 dark:hover:bg-violet-600"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 pt-6">
            <a
              href="https://github.com/garima1491/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/garima-tiwari-532064381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:garimatiwari1491@gmail.com"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
