import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      description: 'Validated foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
      skills: ['Cloud Computing', 'Microsoft Azure', 'Cloud Security'],
    },
    {
      title: 'Deep Learning Certification',
      issuer: 'Skillup / Simplilearn',
      description: 'Acquired foundational skills in Neural Networks, Deep Learning concepts, and ML model workflows.',
      skills: ['Deep Learning', 'Neural Networks', 'Artificial Intelligence'],
    },
    {
      title: 'Critical Thinking in AI',
      issuer: 'Academic / Professional Course',
      description: 'Explored ethical frameworks, cognitive biases, evaluation strategies, and rational decision-making methodologies in artificial intelligence applications.',
      skills: ['Ethics in AI', 'Critical Thinking', 'Problem Solving'],
    },
  ];

  return (
    <section id="certifications" className="space-y-10">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Certifications & Credentials
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Professional courses and standardized cloud/AI certifications I have earned.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <span className="p-2 rounded-xl bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400">
                  <Award size={24} />
                </span>
                <span className="inline-flex items-center space-x-1 text-xs font-semibold text-green-600 dark:text-green-450 bg-green-50 dark:bg-green-950/30 px-2 py-0.5 rounded-full">
                  <CheckCircle size={12} className="text-green-500" />
                  <span>Verified</span>
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-450 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Issued by {cert.issuer}
                </p>
                <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-350 rounded text-[11px] font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
