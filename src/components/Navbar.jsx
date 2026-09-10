import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-60 bg-paper/94 backdrop-blur-sm border-b border-line">
      <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between py-4">
        {/* Brand logo & text */}
        <a href="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0">
            <rect x="4" y="4" width="24" height="24" className="fill-rust" />
            <path d="M4 28L28 4v24H4z" className="fill-ink" />
          </svg>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl text-ink leading-none">SONAM SALES CORP.</span>
            <span className="text-[0.65rem] text-ink-soft uppercase tracking-wider font-semibold mt-0.5">Construction & Water Infrastructure</span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#about" className="text-ink-soft font-semibold text-[0.92rem] hover:text-rust border-b-2 border-transparent hover:border-rust transition">About</a>
          <a href="#services" className="text-ink-soft font-semibold text-[0.92rem] hover:text-rust border-b-2 border-transparent hover:border-rust transition">Services</a>
          <a href="#work" className="text-ink-soft font-semibold text-[0.92rem] hover:text-rust border-b-2 border-transparent hover:border-rust transition">Projects</a>
          <a href="#process" className="text-ink-soft font-semibold text-[0.92rem] hover:text-rust border-b-2 border-transparent hover:border-rust transition">Process</a>
          <a href="#contact" className="text-ink-soft font-semibold text-[0.92rem] hover:text-rust border-b-2 border-transparent hover:border-rust transition">Contact</a>
          <a href="tel:+919889556111" className="bg-rust text-paper-3 px-[18px] py-[10px] font-semibold text-sm hover:bg-rust-dark transition rounded">
            Call Now
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button 
          className="md:hidden text-ink focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-0 px-7 pb-5">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-ink font-semibold py-3 border-b border-line/50">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-ink font-semibold py-3 border-b border-line/50">Services</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="text-ink font-semibold py-3 border-b border-line/50">Projects</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="text-ink font-semibold py-3 border-b border-line/50">Process</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-ink font-semibold py-3 border-b border-line/50">Contact</a>
          <a href="tel:+919889556111" className="bg-rust text-paper-3 px-[18px] py-[10px] font-semibold text-sm text-center mt-4 rounded">
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
