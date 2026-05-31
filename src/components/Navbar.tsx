import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data';

const leftLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

const rightLinks = [
  { name: 'Education', href: '#education' },
  { name: 'Interest', href: '#achievements-interests' },
  { name: 'Contact', href: '#contact' },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [isNameHovered, setIsNameHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Determine active section by evaluating offsets
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'achievements-interests', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset for natural viewing threshold

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="navbar-root"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm border-b border-neutral-200 dark:border-neutral-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Centered-Brand Layout */}
        <div className="hidden lg:grid grid-cols-3 items-center h-16 w-full">
          {/* Left Links */}
          <div className="flex space-x-4 justify-start items-center">
            {leftLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs font-bold font-mono tracking-wide transition-colors uppercase rounded-md group ${
                    isActive
                      ? 'text-indigo-650 dark:text-indigo-400'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-250 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Center Brand */}
          <div className="flex justify-center items-center">
            <a
              id="nav-logo"
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="flex items-center space-x-2 group focus:outline-none"
              onMouseEnter={() => setIsNameHovered(true)}
              onMouseLeave={() => setIsNameHovered(false)}
            >
              <div className="w-49 h-6 overflow-hidden flex items-center justify-center text-center">
                <AnimatePresence mode="wait">
                  {isNameHovered ? (
                    <motion.span
                      key="hindi"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.18 }}
                      className="font-semibold text-l tracking-wide text-indigo-600 dark:text-indigo-400 font-sans text-center w-full"
                    >
                      अदिति ऐश्वर्या
                    </motion.span>
                  ) : (
                    <motion.span
                      key="english"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="font-display font-bold text-base sm:text-lg tracking-widest uppercase transition-colors text-text-main hover:opacity-80 text-center w-full"
                    >
                      {personalInfo.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </a>
          </div>

          {/* Right Links + Theme */}
          <div className="flex space-x-4 justify-end items-center">
            <div className="flex space-x-4">
              {rightLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`relative px-3 py-1.5 text-xs font-bold font-mono tracking-wide transition-colors uppercase rounded-md group ${
                      isActive
                        ? 'text-indigo-655 dark:text-indigo-400'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-250 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </div>
            <div className="border-l border-neutral-200 dark:border-neutral-800 h-6 pl-4 flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile View Layout */}
        <div className="flex lg:hidden items-center justify-between h-16 w-full">
          <a
            id="nav-logo-mobile"
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="flex items-center space-x-2 group focus:outline-none"
            onMouseEnter={() => setIsNameHovered(true)}
            onMouseLeave={() => setIsNameHovered(false)}
          >
            <div className="w-49 h-6 overflow-hidden flex items-center justify-center text-center">
              <AnimatePresence mode="wait">
                {isNameHovered ? (
                  <motion.span
                    key="hindi-mob"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.18 }}
                    className="font-semibold text-sm tracking-wide text-indigo-600 dark:text-indigo-400 text-center w-full"
                  >
                    अदिति ऐश्वर्या
                  </motion.span>
                ) : (
                  <motion.span
                    key="english-mob"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                      className="font-display font-bold text-base sm:text-lg tracking-widest uppercase transition-colors text-text-main hover:opacity-80"
                  >
                    {personalInfo.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </a>

          <div className="flex items-center">
            <ThemeToggle />
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-neutral-900 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-neutral-950 border-b border-light-200 dark:border-neutral-800 px-4 pt-2 pb-4 space-y-1 shadow-inner"
          >
            {allLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`block px-3 py-2.5 rounded-md text-sm font-bold font-mono uppercase tracking-wide transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400'
                      : 'text-neutral-700 dark:text-neutral-350 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
