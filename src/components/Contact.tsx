import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact, personal } = portfolioData;

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F2F1EC] relative border-t border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <MessageSquare size={13} className="text-[#8B1E24]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Let's <span className="font-playfair italic font-normal text-[#8B1E24]">Collaborate</span>
          </h2>
          <p className="text-[#4B5563] text-base max-w-xl mt-3 font-light">
            Whether you need high-performing digital marketing campaigns, an e-commerce platform, or a responsive modern web application, I'm here to build it.
          </p>
        </div>

        {/* Main Grid: Contact Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          {/* Left Column: Direct Clickable Contact Cards with Copy Buttons */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-5 sm:p-6 flex items-center justify-between group hover:border-[#8B1E24]/40 hover:shadow-md transition-all duration-300">
              <a
                href={contact.phoneLink}
                className="flex items-center gap-4 flex-1 min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#6B7280] uppercase tracking-wider block font-mono font-medium">Phone / Call</span>
                  <span className="text-base font-semibold text-[#111111] hover:text-[#8B1E24] hover:underline truncate block transition-colors">
                    {contact.phone}
                  </span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(contact.phone, 'phone')}
                title="Copy phone number"
                className="p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E0] hover:bg-neutral-100 text-[#4B5563] hover:text-[#111111] transition-colors flex-shrink-0 ml-3"
              >
                {copiedKey === 'phone' ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-5 sm:p-6 flex items-center justify-between group hover:border-[#8B1E24]/40 hover:shadow-md transition-all duration-300">
              <a
                href={contact.emailLink}
                className="flex items-center gap-4 flex-1 min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#6B7280] uppercase tracking-wider block font-mono font-medium">Email Address</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#8B1E24] hover:underline truncate block transition-colors">
                    {contact.email}
                  </span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(contact.email, 'email')}
                title="Copy email address"
                className="p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E0] hover:bg-neutral-100 text-[#4B5563] hover:text-[#111111] transition-colors flex-shrink-0 ml-3"
              >
                {copiedKey === 'email' ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-5 sm:p-6 flex items-center justify-between group hover:border-[#8B1E24]/40 hover:shadow-md transition-all duration-300">
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 flex-1 min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#6B7280] uppercase tracking-wider block font-mono font-medium">LinkedIn Profile</span>
                  <span className="text-sm font-semibold text-[#111111] hover:text-[#8B1E24] hover:underline truncate block flex items-center gap-1 transition-colors">
                    Connect on LinkedIn <ArrowUpRight size={13} className="text-[#8B1E24]" />
                  </span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(contact.linkedinUrl, 'linkedin')}
                title="Copy LinkedIn URL"
                className="p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E0] hover:bg-neutral-100 text-[#4B5563] hover:text-[#111111] transition-colors flex-shrink-0 ml-3"
              >
                {copiedKey === 'linkedin' ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-5 sm:p-6 flex items-center justify-between group hover:border-[#8B1E24]/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] border border-[#8B1E24]/20 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#6B7280] uppercase tracking-wider block font-mono font-medium">Location Base</span>
                  <span className="text-sm font-semibold text-[#111111] truncate block">
                    {contact.location}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(contact.location, 'location')}
                title="Copy Location"
                className="p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E0] hover:bg-neutral-100 text-[#4B5563] hover:text-[#111111] transition-colors flex-shrink-0 ml-3"
              >
                {copiedKey === 'location' ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm">
              <h3 className="text-2xl font-semibold text-[#111111] tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-[#4B5563] mb-6 font-light">
                Fill out the details below and I'll get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E0] text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#8B1E24] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Check size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-[#111111] mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#4B5563] max-w-md mx-auto mb-6 font-light">
                    Thank you for reaching out. I have received your message and will reply to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-sm font-medium hover:bg-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono font-medium text-[#374151] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E0] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#8B1E24] focus:bg-white transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono font-medium text-[#374151] mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E0] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#8B1E24] focus:bg-white transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono font-medium text-[#374151] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, campaign goals, or inquiry..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E0] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#8B1E24] focus:bg-white transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-2xl bg-[#8B1E24] text-white font-semibold text-sm hover:bg-[#70161b] transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-[#8B1E24]/30 active:scale-[0.99] cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-[#E5E5E0] flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#6B7280] font-normal">
          <div className="flex items-center gap-3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 256 256"
              fill="#8B1E24"
            >
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
            </svg>
            <span className="font-playfair italic text-[#111111] text-base font-semibold">
              {personal.brandName}
            </span>
          </div>

          <div className="text-center sm:text-right">
            © 2026 {personal.name} ({personal.brandName}). All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};
