import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, Sparkles, Code2, GraduationCap, Mail, Info } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  isNotice?: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Hello! 👋 I'm Aditi's virtual portfolio assistant. Ask me anything about her skills, projects, studies, or click one of the quick topics below!",
      timestamp: formatTime(new Date()),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasShownLimitAdvice, setHasShownLimitAdvice] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  function formatTime(date: Date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const quickPrompts = [
    { label: '🚀 Projects', type: 'projects', query: 'Show me your projects.' },
    { label: '💻 Skills', type: 'skills', query: 'What are your technical skills?' },
    { label: '🎓 Education', type: 'education', query: 'Where do you study currently?' },
    { label: '✉️ Contact', type: 'contact', query: 'How can I contact you?' },
  ];

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // 1. Add user message
    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: textToSend,
      timestamp: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // 2. Delayed simulated bot response
    setTimeout(() => {
      setIsTyping(false);
      let responseText = '';
      const lower = textToSend.toLowerCase();

      if (lower.includes('project') || lower.includes('grumble')) {
        responseText = "Aditi is building **Grumble: A Complaint Management System**. It replaces offline paper logs at college hostels with digital status tracking (Pending, In-Progress, Resolved) using Node.js, Express, and MongoDB.";
      } else if (lower.includes('skill') || lower.includes('develop') || lower.includes('language') || lower.includes('code')) {
        responseText = "She specializes in **C++, JavaScript, React.js, Python, Java, Node.js, Express, and MongoDB**, alongside core computer science concepts like Data Structures & Algorithms and OOPs.";
      } else if (lower.includes('education') || lower.includes('study') || lower.includes('nit') || lower.includes('college')) {
        responseText = "Aditi is currently pursuing her **Integrated Master & Bachelor of Technology** in Computer Science at the **National Institute of Technology (NIT), Patna** (2024 - Present) with an impressive 7.6 Cumulative GPA.";
      } else if (lower.includes('contact') || lower.includes('mail') || lower.includes('reach')) {
        responseText = "You can drop an email directly to **aditiaishwarya003@gmail.com** or connect on GitHub and LinkedIn. Links are available on the bottom contact cards!";
      } else {
        responseText = "This full-length interactive chat feature is currently **under progress** as an exciting future improvement! For now, you can ask about my **projects**, **skills**, **education**, or **contact** details, or click on the Quick Topics tags below directly.";
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseText,
        timestamp: formatTime(new Date()),
      };

      // 3. Append simulated bot response along with future improvements notice
      setMessages((prev) => {
        const next = [...prev, botMsg];
        
        // Show the future improvement banner after the first user exchange
        if (!hasShownLimitAdvice) {
          next.push({
            id: `notice-${Date.now()}`,
            sender: 'bot',
            isNotice: true,
            text: "🔮 **Future Integration Notice**\nThis portfolio bot is operating on client-side simulation. Connecting this to an active Express.js API proxy and Google Gemini is a high-priority future improvement to deliver full generative conversations!",
            timestamp: formatTime(new Date()),
          });
          setHasShownLimitAdvice(true);
        }
        return next;
      });
    }, 900);
  };

  return (
    <>
      {/* Floating trigger CTA icon */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        <button
          id="chatbot-floating-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 rounded-full bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-indigo-400/20 shadow-indigo-650/40 cursor-pointer group"
          title="Chat with portfolio bot"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-slate-950"></span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Floating Dialogue Widget Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-widget-dialog"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 w-[340px] sm:w-[380px] h-[500px] bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col font-sans transition-colors duration-300"
          >
            {/* Header section with brand and user styling */}
            <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-200/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-xs font-bold text-neutral-800 dark:text-white uppercase tracking-wider font-mono">
                      Aditi's AI Bot
                    </h4>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-[10px] text-neutral-550 dark:text-neutral-450 font-mono">Simulated Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-250 hover:bg-neutral-100 dark:hover:bg-neutral-850 p-1.5 rounded-lg transition-colors cursor-pointer"
                title="Close chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Feed Panel */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
              {messages.map((msg) => {
                if (msg.isNotice) {
                  return (
                    <div key={msg.id} className="p-3.5 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl space-y-1">
                      <div className="flex items-start space-x-2">
                        <Info className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <div className="text-[11px] leading-relaxed text-neutral-650 dark:text-neutral-300 font-sans">
                          <p className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide text-[9px] font-mono mb-1">Future System Upgrade</p>
                          <p>
                            This chatbot is currently operating in local query-response mode. A live backend powered by Express + Google Gemini API is marked for a future developmental build!
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }

                const isBot = msg.sender === 'bot';
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-end space-x-2`}
                  >
                    {isBot && (
                      <div className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center shrink-0 border border-indigo-150">
                        <Bot className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                      </div>
                    )}
                    <div className="max-w-[80%] flex flex-col">
                      <div
                        className={`px-3 py-2 rounded-2xl text-xs leading-relaxed font-sans ${
                          isBot
                            ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-850 dark:text-neutral-200 rounded-bl-none'
                            : 'bg-indigo-600 text-white dark:bg-indigo-500 rounded-br-none font-medium'
                        }`}
                      >
                        {msg.text.split('**').map((chunk, index) => {
                          if (index % 2 === 1) {
                            return <strong key={index} className="font-bold text-indigo-700 dark:text-indigo-300 underline underline-offset-2 decoration-indigo-500/20">{chunk}</strong>;
                          }
                          return chunk;
                        })}
                      </div>
                      <span className={`text-[8px] font-mono mt-1 text-neutral-400 ${!isBot && 'self-end'}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Bot Loading Dots Indicator */}
              {isTyping && (
                <div className="flex justify-start items-end space-x-2">
                  <div className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center shrink-0 border border-indigo-150">
                    <Bot className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-900 px-3.5 py-2.5 rounded-2xl rounded-bl-none">
                    <div className="flex space-x-1 items-center h-2.5">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-75" />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.35s]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts list above the input control */}
            <div className="px-4 py-2 border-t border-neutral-150 dark:border-neutral-850/80 bg-neutral-50/20 dark:bg-black/20">
              <p className="text-[9px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1.5 px-0.5">Quick Topics</p>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((p) => (
                  <button
                    key={p.type}
                    onClick={() => handleSendMessage(p.query)}
                    className="text-[10px] font-medium font-sans px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-350 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/20 transition-all duration-200 cursor-pointer"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Form input control */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask something about Aditi..."
                className="flex-1 text-xs bg-white dark:bg-zinc-950 border border-neutral-250 dark:border-neutral-800 rounded-xl px-3 py-2 text-neutral-800 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className={`p-2 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white transition-all transform duration-150 cursor-pointer ${
                  inputText.trim()
                    ? 'hover:scale-105 active:scale-95 hover:bg-indigo-700 dark:hover:bg-indigo-600 opacity-100'
                    : 'opacity-40 cursor-not-allowed'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
