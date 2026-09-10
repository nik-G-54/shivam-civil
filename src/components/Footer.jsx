import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-11 pb-[100px] max-md:pb-[110px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex justify-between items-start flex-wrap gap-6">
          <div>
            <div className="font-heading font-extrabold text-[1.3rem] tracking-wide">
              SONAM SALES CORPORATION
            </div>
            <p className="text-ink-soft max-w-[38ch] mt-2 m-0">
              Construction, water infrastructure & government contracting in Lucknow & Hardoi, Uttar Pradesh.
            </p>
          </div>
          
          <div className="flex gap-6 flex-wrap">
            <a href="#about" className="text-ink-soft font-semibold text-sm no-underline hover:text-rust transition-colors">About</a>
            <a href="#services" className="text-ink-soft font-semibold text-sm no-underline hover:text-rust transition-colors">Services</a>
            <a href="#work" className="text-ink-soft font-semibold text-sm no-underline hover:text-rust transition-colors">Projects</a>
            <a href="#process" className="text-ink-soft font-semibold text-sm no-underline hover:text-rust transition-colors">Process</a>
            <a href="#contact" className="text-ink-soft font-semibold text-sm no-underline hover:text-rust transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-7 pt-[18px] border-t border-line text-[0.78rem] text-ink-soft flex justify-between flex-wrap gap-2">
          <div>&copy; {currentYear} Sonam Sales Corporation. All rights reserved.</div>
          <div>Built with precision</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
