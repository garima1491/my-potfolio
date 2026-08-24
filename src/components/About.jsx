import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'B.Tech in Computer Science (Specialization in AI & ML)',
      institution: 'GLA University',
      location: 'Mathura, India',
      duration: 'Present',
      status: 'First Year Completed',
      highlight: 'Developing foundational coding, data structure, and basic AI/ML skills.',
    },
    {
      degree: 'Senior Secondary Education (Class XII)',
      institution: 'High School Board',
      location: 'India',
      duration: 'Completed',
      status: 'Secondary Schooling',
      highlight: 'Focused on Science and Mathematics.',
    },
    {
      degree: 'Secondary School Education (Class X)',
      institution: 'High School Board',
      location: 'India',
      duration: 'Completed',
      status: 'Secondary Schooling',
      highlight: 'Built a strong foundation in general science and math.',
    }
  ];

  return (
    <section id="about" className="space-y-10">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          About & Education
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          My academic background and journey so far.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Award className="text-violet-500" size={20} />
              <span>Academic Status</span>
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400">Current Program</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">B.Tech CS (AI/ML)</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400">University</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">GLA University</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400">Progress</span>
                <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 text-xs font-semibold">
                  Year 1 Done
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-violet-50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/30 shadow-sm">
            <h3 className="text-lg font-bold text-violet-900 dark:text-violet-300">My Motivation</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              I am fascinated by how Artificial Intelligence and Machine Learning can solve complex, real-world problems. 
              My goal is to combine robust software engineering principles with cutting-edge intelligent algorithms.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10">
                {/* Timeline node */}
                <span className="absolute -left-[13px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-950 ring-4 ring-slate-50 dark:ring-slate-950">
                  <GraduationCap size={14} className="text-violet-600 dark:text-violet-400" />
                </span>
                
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold whitespace-nowrap self-start md:self-auto">
                      <Calendar size={12} className="mr-1" />
                      {edu.duration}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{edu.institution}</span>
                    <span className="flex items-center"><MapPin size={12} className="mr-1" /> {edu.location}</span>
                  </div>
                  
                  {edu.status && (
                    <span className="inline-block mt-3 px-2 py-0.5 bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 rounded text-xs font-semibold">
                      {edu.status}
                    </span>
                  )}
                  
                  <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {edu.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
