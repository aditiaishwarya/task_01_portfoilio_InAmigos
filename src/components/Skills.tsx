import { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { skillCategories } from '../data';

// Helper to pull the correct icon from lucide-react dynamically
const renderSkillIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName] || Icons.Code;
  return <IconComponent className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />;
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoriesList = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-neutral-50 dark:bg-zinc-950 scroll-mt-10 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2"
          >
            II. Technical Base
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tight"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mt-4 mx-auto rounded-full"
          />
        </div>

        {/* Filter Navigation - Beautiful capsule design */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categoriesList.map((category) => (
            <button
              key={category}
              id={`skills-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold font-mono uppercase tracking-wider rounded-xl border cursor-pointer transition-all focus:outline-none ${
                activeCategory === category
                  ? 'bg-indigo-600 border-indigo-700 text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)]'
                  : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Container - Re-engineered Cards with progress meters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              layout
              key={cat.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-sm sm:text-base font-bold font-mono text-black dark:text-white flex items-center space-x-2 border-b border-neutral-100 dark:border-neutral-800 pb-3 mb-5">
                <span className="w-1.5 h-3.5 bg-indigo-650 dark:bg-indigo-500 rounded-sm inline-block" />
                <span>{cat.category}</span>
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group flex items-center space-x-2 px-3 py-1.5 bg-neutral-50 dark:bg-zinc-950 rounded-xl border border-neutral-100 dark:border-neutral-800/80 hover:border-indigo-500/40 dark:hover:border-indigo-400/30 hover:bg-white dark:hover:bg-neutral-900/60 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(99,102,241,0.06)] dark:hover:shadow-[0_4px_12px_rgba(99,102,241,0.12)] transition-all duration-300 cursor-default select-none"
                  >
                    <div className="p-1 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shrink-0 group-hover:border-indigo-500/20 group-hover:bg-indigo-50/20 dark:group-hover:bg-indigo-950/20 transition-all duration-300">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold font-sans text-neutral-800 dark:text-neutral-200 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
