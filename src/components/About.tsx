import { Sparkles, GraduationCap, Code2, BookOpen, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function About() {
  const highlights = [
    {
      title: 'Education',
      desc: 'B.Tech+M.Tech in Computer Science Engineering (Cyber Security) at NIT Patna.',
      icon: GraduationCap,
      color: 'text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-150/40 dark:border-indigo-900/30'
    },
    {
      title: 'Technical Focus',
      desc: 'Web Development, Data Structures & Algorithms.',
      icon: Code2,
      color: 'text-emerald-650 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-150/40 dark:border-emerald-900/30'
    },
    {
      title: 'Interests',
      desc: 'Video Editing, Photography, Reading and Learning.',
      icon: BookOpen,
      color: 'text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-150/40 dark:border-indigo-900/30'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black scroll-mt-10 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2"
          >
            I. Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tight"
          >
            About 
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mt-4 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Biography Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 pl-0 pt-0 pb-[100px]"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug">
            Who am I ?
            </h3>
            
            <p className="text-base sm:text-lg text-neutral-650 dark:text-neutral-350 leading-relaxed font-sans">
              I am a Computer Science student passionate about software development, web technologies, and problem-solving. I enjoy building projects, learning modern technologies, and continuously improving my programming skills.
            </p>

            <div className="pt-2">
              <a
                id="about-education-btn"
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold font-mono uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer hover:translate-x-0.5 duration-200"
              >
                <span>My Education</span>
                <GraduationCap className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Clean Highlights Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-5">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-xl border border-neutral-150 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100/50 dark:hover:bg-neutral-900 hover:border-indigo-400/30 dark:hover:border-indigo-550/30 transition-all duration-350 group"
                  >
                    <div className={`p-3 rounded-xl ${item.color} self-start shrink-0 duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1 group-hover:tracking-wider duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
