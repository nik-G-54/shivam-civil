import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#E2DCD0]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        
        {/* Brand Logo - Tejas Construction & Infrastructure Pvt. Ltd. */}
        <a href="#top" className="flex items-center gap-3 no-underline group">
          <div className="w-10 h-10 bg-[#F5B301] flex items-center justify-center rounded-lg shadow-sm group-hover:bg-[#E8A800] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4L14 12L4 20V4Z" fill="#1A1A1A" />
              <path d="M12 4L20 12L12 20V4Z" fill="#1A1A1A" fillOpacity="0.4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl text-[#1A1A1A] tracking-wider leading-none">
              TEJAS CONSTRUCTION
            </span>
            <span className="text-[0.6rem] font-bold text-[#6B6B6B] tracking-widest uppercase mt-0.5">
              &amp; Infrastructure Pvt. Ltd.
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-[#1A1A1A] font-heading font-semibold text-[0.88rem] tracking-wider uppercase hover:text-[#F5B301] transition-colors">
            About
          </a>
          <a href="#process" className="text-[#1A1A1A] font-heading font-semibold text-[0.88rem] tracking-wider uppercase hover:text-[#F5B301] transition-colors">
            Our Story
          </a>
          <a href="#services" className="text-[#1A1A1A] font-heading font-semibold text-[0.88rem] tracking-wider uppercase hover:text-[#F5B301] transition-colors">
            Services
          </a>
          <a href="#work" className="text-[#1A1A1A] font-heading font-semibold text-[0.88rem] tracking-wider uppercase hover:text-[#F5B301] transition-colors">
            Projects
          </a>
          <a href="#why" className="text-[#1A1A1A] font-heading font-semibold text-[0.88rem] tracking-wider uppercase hover:text-[#F5B301] transition-colors">
            Why Us
          </a>
          <a href="#contact" className="text-[#1A1A1A] font-heading font-semibold text-[0.88rem] tracking-wider uppercase hover:text-[#F5B301] transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button with updated number 63070 41852 */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="tel:+916307041852" className="btn-primary text-xs tracking-wider">
            <span>Call 63070 41852</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <button 
          className="lg:hidden text-[#1A1A1A] p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E2DCD0] px-6 py-5 flex flex-col gap-3 shadow-lg">
          <a href="#about" onClick={() => setIsOpen(false)} className="font-heading font-bold text-sm tracking-wider uppercase py-2 border-b border-gray-100">About</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="font-heading font-bold text-sm tracking-wider uppercase py-2 border-b border-gray-100">Our Story</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="font-heading font-bold text-sm tracking-wider uppercase py-2 border-b border-gray-100">Services</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="font-heading font-bold text-sm tracking-wider uppercase py-2 border-b border-gray-100">Projects</a>
          <a href="#why" onClick={() => setIsOpen(false)} className="font-heading font-bold text-sm tracking-wider uppercase py-2 border-b border-gray-100">Why Us</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="font-heading font-bold text-sm tracking-wider uppercase py-2 border-b border-gray-100">Contact</a>
          <a href="tel:+916307041852" className="btn-primary text-center justify-center mt-2">
            Call +91 63070 41852
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
