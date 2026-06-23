import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Mail, Globe, MapPin, ArrowUpRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Web Development Project",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate server communication & encryption dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "Web Development Project", message: "" });
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="relative w-full max-w-4xl bg-[#0C0C0C] border-2 border-[#D7E2EA]/30 rounded-[30px] sm:rounded-[40px] overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] md:max-h-none overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#D7E2EA] hover:text-white hover:rotate-90 bg-white/5 hover:bg-white/10 p-2 sm:p-2.5 rounded-full transition-all duration-300 z-50 cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 h-6" />
            </button>

            {/* Left Column: Creator Identity & Info (5 columns) */}
            <div className="md:col-span-5 bg-[#121212] p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#D7E2EA]/10">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-widest font-semibold block mb-1">
                    GET IN TOUCH
                  </span>
                  <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
                    ARYA CHIB
                  </h3>
                </div>

                <p className="text-[#D7E2EA]/70 text-sm sm:text-base font-light leading-relaxed">
                  Have a challenging workflow, custom system integration, or next-level web vision that needs automation or robust code? Drop me a line and let&apos;s map out an ideal solution.
                </p>

                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-3 text-sm text-[#D7E2EA]">
                    <div className="p-2 bg-white/5 rounded-lg shrink-0">
                      <Mail className="w-4 h-4 text-[#BBCCD7]" />
                    </div>
                    <span>hello@aryachib.dev</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D7E2EA]">
                    <div className="p-2 bg-white/5 rounded-lg shrink-0">
                      <MapPin className="w-4 h-4 text-[#BBCCD7]" />
                    </div>
                    <span>Delhi, India (GMT+5:30)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D7E2EA]">
                    <div className="p-2 bg-white/5 rounded-lg shrink-0">
                      <Globe className="w-4 h-4 text-[#BBCCD7]" />
                    </div>
                    <span>www.aryachib.dev</span>
                  </div>
                </div>
              </div>

              {/* Social Channels stack */}
              <div className="flex flex-col gap-2 mt-8 md:mt-12">
                <span className="text-[#D7E2EA]/30 text-xs uppercase font-medium tracking-wider">
                  PERSISTENT SOCIALS
                </span>
                <div className="flex flex-wrap gap-2">
                  {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-[#D7E2EA]/70 hover:text-white px-2.5 py-1 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                    >
                      {social}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form or Success view (7 columns) */}
            <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-transparent relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="modal-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 sm:gap-5"
                  >
                    <h4 className="text-[#D7E2EA] font-semibold text-xl sm:text-2xl uppercase tracking-wider mb-2">
                      Send a message
                    </h4>

                    {/* From Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full bg-[#141414] border border-[#D7E2EA]/20 focus:border-[#BBCCD7] rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 outline-none text-sm transition-colors focus:ring-1 focus:ring-[#BBCCD7]/20"
                      />
                    </div>

                    {/* From Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@skynet.com"
                        className="w-full bg-[#141414] border border-[#D7E2EA]/20 focus:border-[#BBCCD7] rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 outline-none text-sm transition-colors focus:ring-1 focus:ring-[#BBCCD7]/20"
                      />
                    </div>

                    {/* Project subject */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest font-medium">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#141414] border border-[#D7E2EA]/20 focus:border-[#BBCCD7] rounded-xl px-4 py-3 text-[#D7E2EA] outline-none text-sm transition-colors focus:ring-1 focus:ring-[#BBCCD7]/20 cursor-pointer"
                      >
                        <option value="Web Development Project">Web Development Project</option>
                        <option value="Automation & Scripting">Automation & Scripting</option>
                        <option value="API & System Integration">API & System Integration</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest font-medium">
                        Your Vision *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about what we are conceptualizing..."
                        className="w-full bg-[#141414] border border-[#D7E2EA]/20 focus:border-[#BBCCD7] rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 outline-none text-sm transition-colors focus:ring-1 focus:ring-[#BBCCD7]/20 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-widest text-[#0C0C0C] bg-[#D7E2EA] hover:bg-white active:scale-95 transition-all duration-200 cursor-pointer text-xs sm:text-sm py-3.5 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-[#0C0C0C] animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="modal-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center gap-5 sm:gap-6 py-6"
                  >
                    {/* Circle Success animated indicator */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <motion.svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        initial={{ strokeDasharray: 50, strokeDashoffset: 50 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    </div>

                    <div>
                      <h4 className="text-emerald-400 font-bold text-2xl uppercase tracking-wider mb-2">
                        Message Dispatched
                      </h4>
                      <p className="text-[#D7E2EA] font-normal text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        Excellent, <span className="font-semibold">{formData.name}</span>! Your brief details are secure. I will compile ideas and contact you back at <span className="font-semibold">{formData.email}</span> within 24 hours.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-4">
                      <button
                        onClick={resetForm}
                        className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                      >
                        Send Another
                      </button>
                      <button
                        onClick={onClose}
                        className="flex-1 bg-[#D7E2EA] text-[#0C0C0C] hover:bg-white rounded-full py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                      >
                        Go Back
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
