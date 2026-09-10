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
    <div className="bg-ink text-paper-3 overflow-hidden py-4 border-b border-line">
      {/* Inner div with continuous animation */}
      <div className="flex w-max animate-marquee">
        {/* Content spans repeated twice for seamless loop */}
        {[...Array(2)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="flex items-center px-[22px] font-heading font-bold text-[1.05rem] tracking-wide whitespace-nowrap">
                  {item}
                </span>
                <span className="text-rust flex items-center justify-center font-bold">
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
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Marquee;
