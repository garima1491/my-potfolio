import React from 'react';
import { Terminal, Database, Globe, Cloud, Code } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="text-violet-500" size={24} />,
      skills: ['C', 'Java', 'Python', 'SQL', 'JavaScript'],
    },
    {
      title: 'Web Development',
      icon: <Globe className="text-blue-500" size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    },
    {
      title: 'Databases & Systems',
      icon: <Database className="text-green-500" size={24} />,
      skills: ['DBMS', 'SQL Queries', 'Relational Databases'],
    },
    {
      title: 'Cloud & Domain Knowledge',
      icon: <Cloud className="text-sky-500" size={24} />,
      skills: ['Cloud Computing', 'Artificial Intelligence', 'Machine Learning'],
    },
  ];

  return (
    <section id="skills" className="space-y-10">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Skills & Technical Expertise
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Technologies and domains I have worked with.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4"
          >
            <div className="flex items-center space-x-3">
              <span className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                {category.icon}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-violet-50 dark:hover:bg-violet-950/30 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 rounded-lg text-sm font-semibold border border-slate-200/55 dark:border-slate-800/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
