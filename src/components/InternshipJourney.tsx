import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Award, Star, ThumbsUp } from 'lucide-react';

export default function InternshipJourney() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <section id="why-built" className="py-12 bg-neutral-50/50 dark:bg-zinc-950/20 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Toggle / Switch Control Container */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-800 dark:text-white uppercase tracking-wider font-mono">
                Project Motivation
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-450">Why was this portfolio built?</p>
            </div>
          </div>

          {/* iOS / Modern Custom Toggle Switch Button */}
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400">
              {showMessage ? "Showing Journey Story" : "Story Hidden"}
            </span>
            <button
              id="internship-journey-switch"
              onClick={() => setShowMessage(!showMessage)}
              className={`relative inline-flex h-6.5 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                showMessage ? 'bg-indigo-600' : 'bg-neutral-300 dark:bg-neutral-800'
              }`}
              aria-label="Toggle Project Story"
            >
              <span
                className={`pointer-events-none inline-block h-5.5 w-5.5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  showMessage ? 'translate-x-5.5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Story details display with nice spacing, typography, and background card */}
        <AnimatePresence initial={false}>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="overflow-hidden mt-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/50 via-white to-emerald-50/20 dark:from-indigo-950/20 dark:via-zinc-900 dark:to-emerald-950/10 border border-neutral-250/60 dark:border-neutral-800/80 shadow-md">
                
                {/* Visual Top Highlight */}
                <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
                  <Star className="w-4 h-4 fill-indigo-600 dark:fill-indigo-400" />
                  <span>Internship Appreciation</span>
                  <span className="h-px bg-indigo-100 dark:bg-indigo-900/60 flex-1 ml-2"></span>
                </div>

                <div className="space-y-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans tracking-tight">
                  <p className="first-letter:text-4xl first-letter:font-black first-letter:text-indigo-600 dark:first-letter:text-indigo-400 first-letter:mr-2 first-letter:float-left">
                    This portfolio was developed as part of my internship journey. I would like to express my sincere gratitude to the founder and the entire team for providing me with this valuable opportunity to learn, build, and grow as a developer.
                  </p>

                  <p>
                    Working on this project has allowed me to strengthen my technical skills, explore new technologies, and gain practical experience in creating modern web applications. The guidance, support, and learning environment provided throughout this internship have been truly motivating.
                  </p>

                  <p className="font-medium text-neutral-805 dark:text-neutral-250">
                    I am excited to continue this journey, take on upcoming challenges, and contribute to the remaining tasks with enthusiasm, dedication, and a commitment to continuous improvement.
                  </p>
                </div>

                {/* Closing signature footer */}
                <div className="mt-8 pt-6 border-t border-neutral-150 dark:border-neutral-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                      Mentored & Driven
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-indigo-650 dark:text-indigo-400 font-mono font-black">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ADITI AISHWARYA</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
