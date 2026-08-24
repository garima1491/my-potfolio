import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      // Simulate form submission
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="space-y-10">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Feel free to reach out for collaborations, project discussions, or inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Info Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <a
                href="mailto:garimatiwari1491@gmail.com"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <span className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-violet-50 dark:group-hover:bg-violet-950/30 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  <Mail size={18} />
                </span>
                <span className="text-sm font-semibold">garimatiwari1491@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/garima-tiwari-532064381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <span className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-violet-50 dark:group-hover:bg-violet-950/30 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  <Linkedin size={18} />
                </span>
                <span className="text-sm font-semibold">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/garima1491/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <span className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-violet-50 dark:group-hover:bg-violet-950/30 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  <Github size={18} />
                </span>
                <span className="text-sm font-semibold">GitHub Profile</span>
              </a>

              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                <span className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <MapPin size={18} />
                </span>
                <span className="text-sm font-semibold">GLA University, Mathura, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
                <div className="p-3 bg-green-100 dark:bg-green-950/50 rounded-full text-green-600 dark:text-green-400 animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                  Thank you for reaching out, Garima will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/25 focus:border-violet-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/25 focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Garima, I'd like to talk to you about..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/25 focus:border-violet-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all dark:bg-violet-500 dark:hover:bg-violet-600 shadow-md shadow-violet-500/10"
                >
                  <span>Send Message</span>
                  <Send size={14} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
