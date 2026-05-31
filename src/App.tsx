/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InternshipJourney from './components/InternshipJourney';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import AchievementsInterests from './components/AchievementsInterests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div id="portfolio-app-shell" className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 selection:bg-indigo-500/20 selection:text-indigo-600 transition-colors duration-300">
      {/* Dynamic Header & Navigation */}
      <Navbar />

      {/* Main Structural Layout */}
      <main id="portfolio-main-content">
        {/* I. Hero Section with Typewriter Hook & Animated Vector Programmer Illustration */}
        <Hero />

        {/* Project Motivation Internship Journey Toggle */}
        <InternshipJourney />

        {/* II. About Me biography & Visual quick metric cards */}
        <About />

        {/* III. Visually appealing skill matrices with interactive progress indicators */}
        <Skills />

        {/* IV. Custom project portfolios with category highlights & external repos */}
        <Projects />

        {/* V. Vertical detailed chronological academic path */}
        <Education />

        {/* VI. Personal achievements and multi-faceted leisure interests */}
        <AchievementsInterests />

        {/* VII. Actionable Contact details & validated visual response form */}
        <Contact />
      </main>

      {/* Footer copyright, Quick links & Back-to-top buttons */}
      <Footer />

      {/* Interactive Chatbot */}
      <Chatbot />
    </div>
  );
}

