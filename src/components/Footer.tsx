import { useEffect, useState, MouseEvent } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="footer-root" className="bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-neutral-900 py-12 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright section */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm font-bold font-sans text-neutral-900 dark:text-white uppercase tracking-wider">
              Aditi Aishwarya
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-450 font-mono">
              &copy; {new Date().getFullYear()} Aditi Aishwarya. All rights reserved.
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              id="footer-link-about"
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="text-xs font-bold font-mono uppercase text-neutral-500 dark:text-neutral-450 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              id="footer-link-skills"
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, '#skills')}
              className="text-xs font-bold font-mono uppercase text-neutral-500 dark:text-neutral-450 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              id="footer-link-projects"
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="text-xs font-bold font-mono uppercase text-neutral-500 dark:text-neutral-450 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              id="footer-link-education"
              href="#education"
              onClick={(e) => handleSmoothScroll(e, '#education')}
              className="text-xs font-bold font-mono uppercase text-neutral-500 dark:text-neutral-450 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Education
            </a>
            <a
              id="footer-link-contact"
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="text-xs font-bold font-mono uppercase text-neutral-500 dark:text-neutral-450 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons direct links */}
          <div className="flex items-center space-x-3">
            <a
              id="footer-social-mail"
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl text-neutral-500 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-505/30 hover:scale-105 duration-200 shadow-sm"
              aria-label="Email Address"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
            <a
              id="footer-social-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer referrer"
              className="p-2.5 rounded-xl text-neutral-500 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-505/30 hover:scale-105 duration-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              id="footer-social-github"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer referrer"
              className="p-2.5 rounded-xl text-neutral-505 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-505/30 hover:scale-105 duration-200 shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Floated Back to Top Trigger Button with customized style */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-24 p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 cursor-pointer shadow-lg text-white border border-transparent z-50 group hover:-translate-y-1 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
