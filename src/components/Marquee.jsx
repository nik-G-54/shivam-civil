import React from 'react';

const items = [
  "HEAVY EQUIPMENT SOLUTIONS", 
  "WATER PIPELINE NETWORKS", 
  "JAL JEEVAN MISSION", 
  "CIVIL INFRASTRUCTURE", 
  "OVERHEAD WATER TANKS", 
  "GOVERNMENT PROJECTS", 
  "TUBEWELL & BOREWELL DRILLING", 
  "EST. 1991 · LUCKNOW & HARDOI, UP"
];

const Marquee = () => {
  return (
    <div className="relative bg-[#1A1A1A] text-white overflow-hidden py-4 border-y-2 border-[#F5B301] shadow-md">
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

      {/* Inner div with continuous animation */}
      <div className="flex w-max animate-marquee">
        {[...Array(2)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex items-center">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="flex items-center px-6 sm:px-8 font-heading font-bold text-sm sm:text-base uppercase tracking-widest whitespace-nowrap text-white">
                  {item}
                </span>
                <span className="text-[#F5B301] flex items-center justify-center font-black text-xl">
                  •
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
