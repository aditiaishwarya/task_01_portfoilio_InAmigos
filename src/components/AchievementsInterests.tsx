import { motion } from 'motion/react';
import { BookOpen, Trophy, Sparkles, Code, CheckCircle2, ChevronRight, Heart } from 'lucide-react';
import { personalInterests } from '../data';

export default function AchievementsInterests() {
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Code2':
        return <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />;
    }
  };

  return (
    <section id="achievements-interests" className="py-20 bg-white dark:bg-black scroll-mt-10 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
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
            V. Hobbies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tight"
          >
            Hobbies & Interests
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mt-4 mx-auto rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-6"
          >
            <div className="flex items-center space-x-2 text-indigo-650 dark:text-indigo-400">
              <Heart className="w-5 h-5 animate-pulse fill-current text-indigo-500" />
              <span className="text-xs sm:text-sm font-bold font-mono uppercase tracking-wider">What keeps me energized & creative</span>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-350 leading-relaxed font-sans">
              Beyond engineering and university curriculum, these personal interests and hobbies fuel my inspiration,and creativity:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {personalInterests.map((interest) => (
                <div
                  key={interest.name}
                  className="flex items-center space-x-3.5 bg-white dark:bg-black p-4 rounded-xl border border-neutral-200 dark:border-neutral-850 hover:bg-indigo-50/20 dark:hover:bg-neutral-950 hover:translate-x-1 hover:border-indigo-600/30 dark:hover:border-indigo-400/30 transition-all duration-200 group cursor-default"
                >
                  <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shrink-0">
                    {getInterestIcon(interest.iconName)}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold font-sans text-neutral-800 dark:text-neutral-250 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                      {interest.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
