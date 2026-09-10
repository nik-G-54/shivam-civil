import React from 'react';

const MobileCTA = () => {
  return (
    <div className="hidden max-md:flex fixed bottom-0 left-0 right-0 z-70 bg-ink p-2.5 gap-2.5 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:+919889556111" 
        className="flex-1 text-center py-3 no-underline font-bold text-[0.9rem] bg-rust text-paper-3 rounded-sm active:bg-rust-dark transition-colors"
      >
        Call Now
      </a>
      <a 
        href="https://wa.me/919889556111" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 text-center py-3 no-underline font-bold text-[0.9rem] bg-water text-paper-3 rounded-sm active:bg-water-soft transition-colors"
      >
        WhatsApp
      </a>
    </div>
  );
};

export default MobileCTA;
