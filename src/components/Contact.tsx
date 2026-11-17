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
  MessageSquare,
  ArrowUp
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact, personal } = portfolioData;

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState('Digital Marketing');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const services = ['Digital Marketing', 'Web Development', 'SEO & Paid Ads', 'AI Integration'];

  const contactMethods = [
    {
      id: 'phone',
      label: 'Direct Call',
      value: contact.phone,
      href: contact.phoneLink,
      icon: <Phone size={19} />,
      isExternal: false
    },
    {
      id: 'email',
      label: 'Email Address',
      value: contact.email,
      href: contact.emailLink,
      icon: <Mail size={19} />,
      isExternal: false
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Network',
      value: 'Connect on LinkedIn',
      href: contact.linkedinUrl,
      icon: <Linkedin size={19} />,
      isExternal: true
    },
    {
      id: 'location',
      label: 'Location',
      value: contact.location,
      href: null,
      icon: <MapPin size={19} />,
      isExternal: false
    }
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
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
    <section id="contact" className="pt-24 sm:pt-32 bg-[#F2F1EC] relative border-t border-[#E8E6E1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10 mb-20 sm:mb-28">
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E24]/10 border border-[#8B1E24]/20 text-xs font-semibold text-[#8B1E24] uppercase tracking-widest mb-4">
            <MessageSquare size={13} className="text-[#8B1E24]" />
            <span>06 / Direct Inquiries</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Let's <span className="font-playfair italic font-normal text-[#8B1E24]">Collaborate</span>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base max-w-xl mt-3 font-light">
            Ready to design high-converting marketing campaigns, build an e-commerce platform, or implement full-stack web solutions? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards with Zero Text Overflow */}
          <div className="lg:col-span-5 space-y-4">
            {contactMethods.map((m) => (
              <div
                key={m.id}
                className="bg-white border border-[#E8E6E1] rounded-3xl p-5 sm:p-6 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#8B1E24]/40 transition-all"
              >
                {m.href ? (
                  <a
                    href={m.href}
                    target={m.isExternal ? '_blank' : undefined}
                    rel={m.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 flex-1 min-w-0"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] flex-shrink-0">
                      {m.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] text-[#6B7280] uppercase tracking-wider block font-mono font-medium">{m.label}</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#8B1E24] truncate flex items-center gap-1 transition-colors">
                        {m.value}
                        {m.isExternal && <ArrowUpRight size={13} className="text-[#8B1E24]" />}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-11 h-11 rounded-2xl bg-[#8B1E24]/10 flex items-center justify-center text-[#8B1E24] flex-shrink-0">
                      {m.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] text-[#6B7280] uppercase tracking-wider block font-mono font-medium">{m.label}</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#111111] truncate block">{m.value}</span>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => handleCopy(m.id === 'linkedin' ? contact.linkedinUrl : m.value, m.id)}
                  title={`Copy ${m.label}`}
                  className="p-2 rounded-xl bg-[#F8F7F4] border border-[#E8E6E1] hover:bg-neutral-100 text-[#4B5563] hover:text-[#111111] transition-colors flex-shrink-0 ml-2"
                >
                  {copiedKey === m.id ? <Check size={15} className="text-green-600" /> : <Copy size={15} />}
                </button>
              </div>
            ))}
          </div>

          {/* Right Column: Inquiry Form with Service Chips */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E8E6E1] rounded-3xl p-7 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] tracking-tight mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] mb-6 font-light">Select your area of interest and share details about your inquiry.</p>

              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#374151] block mb-2.5">Service of Interest</span>
                <div className="flex flex-wrap gap-2">
                  {services.map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => setSelectedService(svc)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedService === svc ? 'bg-[#8B1E24] text-white shadow-sm' : 'bg-[#F8F7F4] text-[#4B5563] border border-[#E8E6E1] hover:bg-neutral-100'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F8F7F4] border border-[#E8E6E1] text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#8B1E24] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Check size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-2">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto mb-6 font-light">
                    Thank you, {formData.name || 'there'}! Your message regarding <span className="font-semibold text-[#111111]">{selectedService}</span> has been sent. I will respond to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono font-semibold text-[#374151] mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8F7F4] border border-[#E8E6E1] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#8B1E24] focus:bg-white transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono font-semibold text-[#374151] mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8F7F4] border border-[#E8E6E1] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#8B1E24] focus:bg-white transition-all text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono font-semibold text-[#374151] mb-1.5">Message & Scope</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Tell me about your ${selectedService} needs or campaign objectives...`}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8F7F4] border border-[#E8E6E1] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#8B1E24] focus:bg-white transition-all text-xs sm:text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-2xl bg-[#8B1E24] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#70161b] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-[#8B1E24]/30 active:scale-[0.99] cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? <span>Sending inquiry...</span> : (<><span>Submit Inquiry</span><Send size={15} /></>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Dark Editorial Footer */}
      <footer className="bg-[#0D0D0D] text-white pt-16 pb-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff">
                  <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
                </svg>
                <span className="font-playfair italic text-2xl font-semibold text-white">{personal.brandName}</span>
              </div>
              <p className="text-xs text-white/60 font-light">Digital Marketer & Web Developer • Mysore, Karnataka, India</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-mono text-white/70">
              {portfolioData.navigation.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-white transition-colors">{item.label}</a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white/80 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
            <div>© 2026 {personal.name} ({personal.brandName}). All rights reserved.</div>
            <div className="font-mono text-[11px] text-white/30">Crafted with React 18, Vite, TypeScript & Tailwind CSS</div>
          </div>
        </div>
      </footer>
    </section>
  );
};
