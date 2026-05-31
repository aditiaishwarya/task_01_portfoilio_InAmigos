import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Terminal, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import aditi from '../assets/aditi.png';

// Custom typewriter typing hooks/loops
function useTypewriter(words: string[], speed = 100, delay = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const word = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => word.slice(0, prev.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return currentText;
}

export default function Hero() {
  const words = ['Jack of all trades', 'Web Developer', 'Problem Solver', 'CS Student'];
  const typedText = useTypewriter(words, 100, 2000);

  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem('user_profile_image') || 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=600';
  });

  const [imageFilter, setImageFilter] = useState<string>(() => {
    return localStorage.getItem('user_profile_filter') || 'none';
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem('user_profile_image', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultImg = 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=600';
    setProfileImage(defaultImg);
    localStorage.removeItem('user_profile_image');
  };

  const updateFilter = (filter: string) => {
    setImageFilter(filter);
    localStorage.setItem('user_profile_filter', filter);
  };

  const getFilterClass = (filter: string) => {
    switch (filter) {
      case 'monochrome':
        return 'grayscale contrast-125';
      default:
        return 'contrast-100';
    }
  };

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 min-h-screen flex items-center bg-white dark:bg-black overflow-hidden"
    >
      {/* Decorative premium radial gradients instead of harsh circles */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-150 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-400 rounded-lg text-xs font-mono font-bold uppercase tracking-wider"
            >
              <Terminal className="w-4 h-4 text-indigo-650 dark:text-indigo-400 animate-pulse" />
              <span>Developer Workspace</span>
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white tracking-tight leading-none"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200 flex items-center min-h-[40px] h-auto font-mono"
              >
                <span>A&nbsp;</span>
                <span className="text-indigo-650 dark:text-indigo-400 border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 py-0.5 animate-pulse">
                  {typedText}
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-350 max-w-xl leading-relaxed font-sans"
            >
              Turning Ideas into Interactive Experiences. Crafting responsive web applications and intuitive digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-contact-btn"
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold font-mono uppercase tracking-wider rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-650 cursor-pointer shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_24px_rgba(99,102,241,0.35)] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span>Connect With Me</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <button
                id="hero-skills-btn"
                onClick={() => handleScroll('#skills')}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-200 dark:border-neutral-800 text-sm font-bold font-mono uppercase tracking-wider rounded-xl text-neutral-800 dark:text-neutral-200 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Code className="mr-2 w-4 h-4 text-indigo-500" />
                <span>View Skills Matrix</span>
              </button>
            </motion.div>
          </div>

          {/* Upgraded visual image container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[4/5] rounded-3xl bg-neutral-50 dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800 shadow-[0_20px_50px_rgba(99,102,241,0.12)] dark:shadow-[0_20px_50px_rgba(99,102,241,0.08)] flex flex-col justify-between overflow-hidden group">
              
              {/* macOS window header controls */}
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
                <div className="flex items-center space-x-1.5 animate-pulse">
                  <span className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.2)]" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-500/90 shadow-[0_0_8px_rgba(234,179,8,0.2)]" />
                  <span className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-500/90 shadow-[0_0_8px_rgba(34,197,94,0.2)]" />
                </div>
                <div className="text-[10px] font-mono font-bold text-neutral-450 dark:text-neutral-500">aditi_aishwarya.tsx</div>
              </div>

              {/* Picture frame with beautiful developer graphic overlay */}
              <label 
                htmlFor="profile-upload" 
                className="relative flex-1 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-4 bg-neutral-100 dark:bg-neutral-950 cursor-pointer group/image block"
                title="Click to upload your own photo"
              >
                <input
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <img
                  src={aditi}
                  alt="Aditi Aishwarya"
                  className={`w-full h-full object-cover transition-all duration-500 group-hover/image:scale-105 ${getFilterClass(imageFilter)}`}
                  referrerPolicy="no-referrer"
                />
                
                {/* Upload Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-2 z-10">
                  <div className="p-3 bg-indigo-600/90 rounded-full shadow-lg transform scale-90 group-hover/image:scale-100 transition-transform duration-300">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-indigo-900/85 px-2.5 py-1 rounded border border-indigo-400/20">
                    Upload Custom Photo
                  </span>
                </div>

                {/* Modern visual gradient overlay instead of heavy red tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent pointer-events-none" />
                
                {/* Reset button only if custom image is set */}
                {profileImage !== 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=600' && (
                  <button
                    onClick={handleResetImage}
                    title="Reset to default image"
                    className="absolute top-3 left-3 bg-red-650/90 text-white font-mono hover:bg-red-700 hover:scale-105 border border-red-500/20 text-[9px] font-bold px-2 py-1 rounded-md flex items-center space-x-1 z-20 pointer-events-auto"
                  >
                    <span>✕ Reset</span>
                  </button>
                )}

                {/* Tech floating widgets/badges */}
                <span className="absolute bottom-3 left-3  bg-neutral-950/80  backdrop-blur-md text-emerald-400 border border-neutral-800 text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-md flex items-center space-x-1.5">
                  Learner
                </span>

                <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md text-emerald-400 border border-neutral-800 text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-md flex items-center space-x-1.5 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE_SHELL</span>
                </div>
              </label>

              {/* Artistic Filters row inside the card */}
              <div className="flex items-center justify-between gap-1.5 mb-3 bg-neutral-100/50 dark:bg-neutral-950/40 p-1.5 rounded-xl border border-neutral-100 dark:border-neutral-850">
                <span className="text-[9px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase px-1">Artistic Effects:</span>
                <div className="flex gap-1">
                  {[
                    { id: 'none', label: 'Default' },
                    { id: 'monochrome', label: 'B&W' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => updateFilter(f.id)}
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                        imageFilter === f.id
                          ? 'bg-indigo-600 text-white dark:bg-indigo-500 shadow-xs'
                          : 'text-neutral-500 dark:text-neutral-450 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom microstatus workspace badge */}
              <div className="flex justify-between items-center bg-indigo-50/50 dark:bg-neutral-950/60 p-2.5 rounded-xl border border-indigo-100/50 dark:border-neutral-800">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-600 dark:text-neutral-450">Internship Ready</span>
                </div>
                <div className="text-[10px] text-indigo-650 dark:text-indigo-400 font-mono font-black tracking-wide uppercase">
                  ACTIVE
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
