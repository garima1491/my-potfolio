import React from 'react';
import { ExternalLink, Github, FileText, Image, Calendar, Briefcase, Cpu } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI Resume Generator',
      description: 'An intelligent web-based application designed to take user parameters and automatically generate polished, ATS-friendly resumes using AI algorithms.',
      tech: ['React', 'Python', 'Tailwind CSS', 'Generative AI APIs'],
      icon: <Cpu size={24} className="text-violet-500" />,
      github: 'https://github.com/garima1491',
      demo: '#',
    },
    {
      title: 'Simple Image Gallery',
      description: 'A responsive grid-based gallery application that supports dynamic loading, filtering, search capabilities, and a smooth lightbox preview mode.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      icon: <Image size={24} className="text-blue-500" />,
      github: 'https://github.com/garima1491',
      demo: '#',
    },
    {
      title: 'Calendar Web Application',
      description: 'A scheduling tool featuring interactive monthly/weekly views, custom task creation, event reminders, and persistent user settings.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      icon: <Calendar size={24} className="text-green-500" />,
      github: 'https://github.com/garima1491',
      demo: '#',
    },
    {
      title: 'First Job Project',
      description: 'A structural application demonstrating core backend software patterns, database connections, and business logic execution.',
      tech: ['Java', 'SQL', 'DBMS', 'JDBC'],
      icon: <Briefcase size={24} className="text-sky-500" />,
      github: 'https://github.com/garima1491',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="space-y-10">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Projects
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          A selection of projects I've built during my academic and self-learning journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                  {project.icon}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
              <a
                href={project.demo}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
