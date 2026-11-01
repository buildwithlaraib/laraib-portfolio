import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Replace 'YOUR_FORM_ID' with your Formspree form ID (e.g., 'mqknvzyw')
// You can create a free form endpoint at https://formspree.io
export const FORMSPREE_FORM_ID = 'YOUR_FORM_ID';

interface ContactProps {
  selectedServicePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedServicePreset || 'Frontend Development',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Spam honeypot check: If the hidden input is filled, silently ignore
    if (honeypot.trim()) {
      setIsSubmitting(false);
      setSubmitted(true);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // If the user hasn't added their real Formspree ID yet:
      if (!FORMSPREE_FORM_ID || FORMSPREE_FORM_ID === 'YOUR_FORM_ID') {
        // Provide clear feedback so the user knows where to set their Formspree ID
        setErrorMessage(
          'Formspree form ID is not configured yet (replace "YOUR_FORM_ID" in Contact.tsx). You can also use the direct email button below.'
        );
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setSubmitted(true);
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#38bdf8', '#2563eb', '#ffffff', '#60a5fa'],
        });
      } else {
        if (result && Array.isArray(result.errors) && result.errors.length > 0) {
          const formatted = result.errors
            .map((err: { field?: string; message: string }) => err.message)
            .join(', ');
          setErrorMessage(formatted);
        } else {
          setErrorMessage('Failed to send message via Formspree. Please check your form ID or use the email link below.');
        }
      }
    } catch {
      setErrorMessage('A network error occurred while sending your message. Please use the direct email link below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service}`);
    const body = encodeURIComponent(
      `Hi Laraib,\n\nMy name is ${formData.name || '[Your Name]'}.\n\nProject details:\n${formData.message || 'I would like to discuss a frontend project.'}\n\nBest regards,\n${formData.name || ''}\n${formData.email || ''}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-white/[0.08]">
      {/* Background ambient lighting */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/8 blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Copy & Direct Channels */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
              <span>06</span>
              <span aria-hidden="true">·</span>
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
              Have an Idea? Let's Build Something Great.
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed mb-8">
              Whether you need a responsive web app from scratch, a pixel-perfect design converted to React, or an existing interface revamped, I'm always open to discussing new freelance opportunities.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-8">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                Direct Email Contact
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-sky-400 transition-colors truncate"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Social & Professional Profiles
              </span>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/15 transition-all flex items-center justify-between text-zinc-200 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/15 transition-all flex items-center justify-between text-zinc-200 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-semibold">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#090b10] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 mb-6">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-sm text-zinc-300 max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>! Your message regarding <span className="text-sky-400 font-semibold">{formData.service}</span> has been dispatched. I'll get back to you as soon as possible.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: 'Frontend Development',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={handleDirectMailto}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>Also Open in Email App</span>
                      <Mail className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-sky-400" />
                      <span className="text-sm font-bold text-white">Project Inquiry Form</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">Formspree Enabled</span>
                  </div>

                  {/* Error State Banner */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/25 text-xs text-rose-300 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot field (hidden from real users, traps automated spam bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_gotcha">Leave this field blank</label>
                    <input
                      id="_gotcha"
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Service / Project Type
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0c0f16] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500 transition-colors cursor-pointer disabled:opacity-60"
                    >
                      <option value="Frontend Development">Frontend Development (React, Next.js, TS)</option>
                      <option value="Responsive Website Development">Responsive Website Development</option>
                      <option value="Landing Page Development">Landing Page Development</option>
                      <option value="Website UI Implementation">Website UI Implementation (Figma to Code)</option>
                      <option value="General Consultation / Other">General Collaboration / Other</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Project Details / Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      required
                      disabled={isSubmitting}
                      rows={4}
                      placeholder="Tell me about your project goals, scope, or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors resize-none disabled:opacity-60"
                    />
                  </div>

                  {/* Submit button & Mailto fallback */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3.5 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 disabled:opacity-50 rounded-lg shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectMailto}
                      className="text-xs text-zinc-400 hover:text-sky-400 transition-colors flex items-center justify-center gap-1.5 py-2 cursor-pointer"
                    >
                      <span>Or email directly from client</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
