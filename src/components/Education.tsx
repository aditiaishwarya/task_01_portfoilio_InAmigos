import { motion } from 'motion/react';
import { Calendar, GraduationCap, Award, BookOpenCheck, Network, Cpu, Database } from 'lucide-react';
import { educationTimeline } from '../data';

export default function Education() {
  const continuousLearningSubjects = [
    { 
      title: 'Data Structures & Algorithms', 
      desc: 'Active solving on tree, graph recursion pathways in C++', 
      icon: Network, 
      color: 'text-indigo-650 dark:text-indigo-450 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-150' 
    },
    { 
      title: 'Object-Oriented Programming', 
      desc: 'Principles of modular encapsulation, polymorphism, and class architectures in C++', 
      icon: Cpu, 
      color: 'text-emerald-655 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-150' 
    },
    { 
      title: 'Database Architectures', 
      desc: 'Relational logic, joins, transactions, and MongoDB non-relational document query states', 
      icon: Database, 
      color: 'text-indigo-650 dark:text-indigo-450 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-150' 
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-black scroll-mt-10 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
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
            IV. Academic Path
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tight"
          >
            Education & Roadmap
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mt-4 mx-auto rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto w-full">
          
          {/* Vertical Timeline Centered Column */}
          <div className="space-y-8">
            <h3 className="text-base sm:text-lg font-bold font-mono text-black dark:text-white uppercase flex items-center justify-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Academic Degrees</span>
            </h3>

            <div className="relative border-l border-neutral-200 dark:border-neutral-800 pl-6 sm:pl-8 ml-3 space-y-12">
              {educationTimeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Point Dot with glowing Indigo ring */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-black bg-indigo-600 dark:bg-indigo-400 ring-4 ring-indigo-50 dark:ring-indigo-950/45 flex items-center justify-center transition-all group-hover:scale-115" />

                  <div className="bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 border-b border-neutral-205 dark:border-neutral-800 pb-3">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold font-sans text-neutral-900 dark:text-white leading-tight">
                          {item.degree}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-indigo-650 dark:text-indigo-450 mt-1">
                          {item.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 bg-white dark:bg-black px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-805 self-start sm:self-center shrink-0">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-indigo-600 dark:text-indigo-400" />
                        <span>{item.duration || item.year}</span>
                      </div>
                    </div>

                    {(item.gpa || item.percentage) && (
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-650 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 rounded text-xs font-mono font-bold mb-4">
                        <Award className="w-3.5 h-3.5 text-indigo-555" />
                        <span>{item.gpa || `Percentage: ${item.percentage}`}</span>
                      </div>
                    )}

                    {item.details && item.details.length > 0 && (
                      <ul className="space-y-2.5">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start text-xs sm:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed font-sans">
                            <span className="text-indigo-500 mr-2 shrink-0 mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
