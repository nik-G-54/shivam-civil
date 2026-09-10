import React from 'react';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] p-3 border-t-2 border-[#F5B301] shadow-2xl flex gap-3">
      <a 
        href="tel:+916307041852" 
        className="flex-1 bg-[#F5B301] text-[#1A1A1A] py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span>Call 63070 41852</span>
      </a>

      <a 
        href="https://wa.me/916307041852" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 bg-[#25D366] text-white py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow"
      >
        <span>WhatsApp</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
