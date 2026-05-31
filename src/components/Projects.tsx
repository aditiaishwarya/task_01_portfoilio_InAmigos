import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code, Network, Sparkles, FolderDot, ArrowUpRight } from 'lucide-react';
import { projectsList } from '../data';

export default function Projects() {
  const renderProjectIcon = (category: string, isFuture?: boolean) => {
    if (isFuture) return <Sparkles className="w-5 h-5 text-emerald-500" />;
    
    switch (category) {
      case 'web':
        return <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'dsa':
        return <Network className="w-5 h-5 text-indigo-650 dark:text-indigo-400" />;
      default:
        return <FolderDot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-zinc-950 scroll-mt-10 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
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
            III. Practical Labs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tight"
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mt-4 mx-auto rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {projectsList.map((project, idx) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between hover:shadow-lg hover:bg-neutral-50/10 dark:hover:bg-neutral-850/10 transition-all duration-300 group relative overflow-hidden ${
                  project.isFuture
                    ? 'border-dashed border-emerald-400/70 dark:border-emerald-500/50'
                    : 'border-neutral-200 dark:border-neutral-800 shadow-sm'
                }`}
              >
                {/* Subtle top decoration */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  project.isFuture 
                    ? 'from-emerald-400/80 to-transparent' 
                    : 'from-indigo-500 to-indigo-600'
                }`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-neutral-50 dark:bg-black rounded-xl border border-neutral-100 dark:border-neutral-800">
                      {renderProjectIcon(project.category, project.isFuture)}
                    </div>
                    
                    {/* Status Badge */}
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                      project.isFuture
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/40'
                        : 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/40'
                    }`}>
                      {project.isFuture ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-sans text-neutral-950 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                    <span>{project.title}</span>
                    {!project.isFuture && <ArrowUpRight className="w-4 h-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-350 mt-2.5 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* future_Scope Bullet List */}
                  {project.future_Scope && (
                    <ul className="mt-4 space-y-1.5 border-t border-neutral-100 dark:border-neutral-800 pt-4">
                      {project.future_Scope.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start text-xs text-neutral-500 dark:text-neutral-400 leading-normal font-sans">
                          <span className={`mr-2 shrink-0 ${project.isFuture ? 'text-emerald-500' : 'text-indigo-500'}`}>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer and tags/link row */}
                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold text-neutral-600 dark:text-neutral-350 bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    {project.codeUrl && (
                      <a
                        id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}-github`}
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer referrer"
                        className="flex items-center space-x-1.5 text-xs font-bold font-mono uppercase tracking-wide text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <Github className="w-4 h-4 text-neutral-500" />
                        <span>Repository</span>
                      </a>
                    )}
                    {project.demoUrl && !project.isFuture && (
                      <a
                        id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}-demo`}
                        href={project.demoUrl}
                        onClick={(e) => project.demoUrl === '#' && e.preventDefault()}
                        className="flex items-center space-x-1.5 text-xs font-bold font-mono uppercase tracking-wide text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
