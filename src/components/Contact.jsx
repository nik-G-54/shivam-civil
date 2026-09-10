import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlobeMap from './GlobeMap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Water Infrastructure & Pipelines',
    location: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Project Enquiry: ${formData.service}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0ALocation: ${formData.location}%0D%0AService: ${formData.service}%0D%0ADetails: ${formData.details}`;
    window.location.href = `mailto:tejasconstruction111@gmail.com?subject=${subject}&body=${body}`;
  };

  const services = [
    "Water Infrastructure & Pipelines",
    "Civil Construction & Roadways",
    "Overhead Water Tanks & Reservoirs",
    "Government Infrastructure Contracts",
    "Tubewell & Deep Borewell Drilling",
    "Jal Jeevan Mission Works",
    "Other Commercial / Industrial Requirement"
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F6F0] bg-grid-pattern">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301]" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#6B6B6B]">
                TEJAS CONSTRUCTION &amp; INFRASTRUCTURE PVT. LTD.
              </span>
            </div>
            <h2 className="font-heading font-black text-[clamp(2.2rem,4vw,3.6rem)] uppercase tracking-tight text-[#1A1A1A] leading-[1.05]">
              GET IN TOUCH &amp; <span className="text-[#F5B301]">LOCATE US</span>
            </h2>
          </div>
          <p className="text-[#6B6B6B] max-w-[42ch] text-base leading-relaxed m-0">
            Call our direct desk at <span className="font-bold text-[#1A1A1A]">+91 63070 41852</span> or explore our operations on the interactive 3D satellite globe.
          </p>
        </div>

        {/* 3D CINEMATIC GLOBE SHOWCASE - Replaces old static iframe */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <GlobeMap />
        </motion.div>

        {/* Contact Information & Specification Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Direct Contact Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Phone Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2DCD0] shadow-sm flex items-center gap-4 hover:border-[#F5B301] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-[#6B6B6B] tracking-wider">Direct Calling Number</div>
                <a href="tel:+916307041852" className="font-heading font-black text-xl text-[#1A1A1A] hover:text-[#F5B301] transition-colors">
                  +91 63070 41852
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2DCD0] shadow-sm flex items-center gap-4 hover:border-[#F5B301] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.546 1.761.815 2.796.815 3.183 0 5.768-2.587 5.769-5.766.001-3.181-2.584-5.767-5.769-5.767zm0 10.428c-.902 0-1.783-.243-2.55-.703l-.183-.109-1.897.498.507-1.85-.12-.191c-.503-.799-.768-1.724-.767-2.673.001-2.617 2.13-4.746 4.75-4.746 2.617 0 4.746 2.129 4.747 4.746 0 2.618-2.13 4.748-4.75 4.748z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-[#6B6B6B] tracking-wider">WhatsApp Engineering Support</div>
                <a href="https://wa.me/916307041852" target="_blank" rel="noopener noreferrer" className="font-heading font-extrabold text-base text-[#1A1A1A] hover:text-[#25D366] transition-colors">
                  Message +91 63070 41852 →
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#E2DCD0] shadow-sm flex items-center gap-4 hover:border-[#F5B301] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] text-[#F5B301] flex items-center justify-center font-bold flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-[#6B6B6B] tracking-wider">Official Tenders &amp; Proposals</div>
                <a href="mailto:tejasconstruction111@gmail.com" className="font-heading font-extrabold text-sm text-[#1A1A1A] hover:text-[#F5B301] transition-colors">
                  tejasconstruction111@gmail.com
                </a>
              </div>
            </div>

            {/* Head Office Card */}
            <div className="bg-[#1A1A1A] text-white p-5 rounded-2xl shadow-lg border border-white/10">
              <div className="text-xs font-bold uppercase tracking-widest text-[#F5B301] mb-1">
                REGISTERED OFFICE &amp; WORKSHOP
              </div>
              <div className="font-heading font-black text-base uppercase text-white mb-1">
                Tejas Construction &amp; Infrastructure Pvt. Ltd.
              </div>
              <div className="text-xs text-white/75 leading-relaxed">
                Chand Ganj Garden, Kapoorthala, Lucknow, Uttar Pradesh 226024
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Specification Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-10 border border-[#E2DCD0] shadow-xl"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F5B301]">
                SPECIFICATION FORM
              </span>
              <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-[#1A1A1A] mt-1">
                Tell Us About Your Site Requirements
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-[#E2DCD0] bg-[#F8F6F0] text-[#1A1A1A] focus:outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition-all" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 63070 41852"
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-[#E2DCD0] bg-[#F8F6F0] text-[#1A1A1A] focus:outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition-all" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Service Required
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-[#E2DCD0] bg-[#F8F6F0] text-[#1A1A1A] focus:outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition-all"
                  >
                    {services.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Site Location / District
                  </label>
                  <input 
                    type="text" 
                    name="location" 
                    placeholder="e.g. Lucknow / Hardoi / Kanpur"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-[#E2DCD0] bg-[#F8F6F0] text-[#1A1A1A] focus:outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                  Project Details / Scope
                </label>
                <textarea 
                  name="details" 
                  rows="3"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Mention site type (domestic, farm, government Jal Jeevan Mission), bore depth, pipeline length, or water reservoir capacity..."
                  className="w-full font-body text-sm px-4 py-3 rounded-xl border border-[#E2DCD0] bg-[#F8F6F0] text-[#1A1A1A] focus:outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition-all resize-y" 
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="btn-primary w-full justify-center text-sm tracking-wider py-4"
                >
                  <span>Submit Project Enquiry</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <p className="text-center text-xs text-[#6B6B6B] mt-2.5">
                  ✓ Directly routed to Tejas Construction site engineering desk. Prompt response within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
