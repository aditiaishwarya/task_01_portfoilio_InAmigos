import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [wasSimulated, setWasSimulated] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setWasSimulated(false);

    // Client-side quick validations
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      setSubmitStatus('error');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setSubmitStatus('error');
      return;
    }
    if (formData.message.trim().length <= 1) {
      setErrorMessage('Type Something');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    const metaEnv = (import.meta as any).env || {};
    const serviceId = metaEnv.VITE_EMAILJS_SERVICE_ID;
    const templateId = metaEnv.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = metaEnv.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Graceful local mode warning / simulation if env variables are not defined in AI Studio settings
      console.warn('EmailJS credentials not fully configured in your environment. Simulating dispatch...');
      setTimeout(() => {
        setIsSubmitting(false);
        setWasSimulated(true);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1200);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Aditi',
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          setIsSubmitting(false);
          setWasSimulated(false);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setIsSubmitting(false);
          setErrorMessage(error?.text || 'Failed to dispatch email. Please check your credentials.');
          setSubmitStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black scroll-mt-10 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
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
            VI. Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tight"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mt-4 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-sans text-neutral-900 dark:text-white tracking-tight leading-snug">
                Let's collaborate.
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed font-sans">
              Get in touch.
              </p>
            </div>

            <div className="space-y-4">
              {/* Mail Detail */}
              <a
                id="contact-mail-link"
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900/40 dark:hover:bg-neutral-900 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-300 group shadow-xs"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-black text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-950/50 group-hover:scale-105 duration-200 shadow-sm shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">Write An Email</p>
                  <p className="text-xs sm:text-sm font-bold font-mono text-neutral-800 dark:text-neutral-250 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn Detail */}
              <a
                id="contact-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center space-x-4 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900/40 dark:hover:bg-neutral-900 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-300 group shadow-xs"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-black text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-950/50 group-hover:scale-105 duration-200 shadow-sm shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">Connect on LinkedIn</p>
                  <p className="text-xs sm:text-sm font-bold font-mono text-neutral-800 dark:text-neutral-255 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                    linkedin.com/in/aditi-aishwarya-184640336/
                  </p>
                </div>
              </a>

              {/* GitHub Detail */}
              <a
                id="contact-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center space-x-4 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900/40 dark:hover:bg-neutral-900 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-300 group shadow-xs"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-black text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-950/50 group-hover:scale-105 duration-200 shadow-sm shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">Follow GitHub Repositories</p>
                  <p className="text-xs sm:text-sm font-bold font-mono text-neutral-800 dark:text-neutral-255 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                    https://github.com/aditiaishwarya
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                // SUCCESS STATE
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center mx-auto border border-emerald-100 dark:border-emerald-900/40 shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-black font-sans text-neutral-950 dark:text-white tracking-tight">
                    Message Sent!
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Aditi has received your message and will get back to you shortly.
                  </p>
                  {wasSimulated && (
                    <div className="p-3.5 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-250/20 dark:border-amber-900/30 rounded-xl max-w-md mx-auto text-left space-y-1 mt-2">
                      <p className="text-[10px] font-bold font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest flex items-center space-x-1.5">
                        <span>⚠️ Developer Setup Guide</span>
                      </p>
                      <p className="text-[11px] font-sans leading-relaxed text-neutral-600 dark:text-neutral-400">
                        EmailJS is successfully integrated! To receive live messages directly in your inbox, add your three credentials (<code>VITE_EMAILJS_SERVICE_ID</code>, <code>VITE_EMAILJS_TEMPLATE_ID</code>, and <code>VITE_EMAILJS_PUBLIC_KEY</code>) inside the AI Studio secrets configuration menu.
                      </p>
                    </div>
                  )}
                  <button
                    id="contact-reset-btn"
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-750 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs font-bold font-mono uppercase tracking-wider rounded-lg cursor-pointer transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                // FORM INPUT STATE
                <motion.form
                  key="input-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-5"
                >
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="text-xs font-bold font-mono text-neutral-500 dark:text-neutral-450 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Aditi Aishwarya"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-505 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="text-xs font-bold font-mono text-neutral-500 dark:text-neutral-450 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-505 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="text-xs font-bold font-mono text-neutral-500 dark:text-neutral-450 uppercase tracking-wide">
                      Your Message
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 text-sm rounded-xl bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-505 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors resize-none mb-2"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Validation Error banner - customized for style */}
                  {errorMessage && (
                    <div className="flex items-center space-x-2.5 p-3.5 bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/35 text-red-655 dark:text-red-400 rounded-xl font-mono text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span className="font-bold">{errorMessage}</span>
                    </div>
                  )}

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-650 hover:bg-indigo-750 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-bold font-mono uppercase tracking-widest rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
