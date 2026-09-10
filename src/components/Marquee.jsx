import React from 'react';

const items = [
  "PIPELINE INSTALLATION", 
  "WATER INFRASTRUCTURE", 
  "JAL JEEVAN MISSION", 
  "CIVIL CONSTRUCTION", 
  "OVERHEAD TANKS", 
  "GOVERNMENT PROJECTS", 
  "BOREWELL DRILLING", 
  "EST. 1991 · LUCKNOW & HARDOI, UP"
];

const Marquee = () => {
  return (
    <div className="relative z-20 bg-ink text-paper-3 overflow-hidden py-4 border-b border-line/40 shadow-inner">
      {/* Side gradient fades for smooth industrial ticker look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-ink to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-ink to-transparent z-10" />

      {/* Inner div with continuous animation */}
      <div className="flex w-max animate-marquee">
        {/* Content spans repeated twice for seamless loop */}
        {[...Array(2)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="flex items-center px-6 sm:px-8 font-heading font-bold text-[1.05rem] sm:text-[1.15rem] tracking-wider whitespace-nowrap text-paper-3/95">
                  {item}
                </span>
                <span className="text-rust flex items-center justify-center font-bold text-lg">
                  •
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Marquee;
