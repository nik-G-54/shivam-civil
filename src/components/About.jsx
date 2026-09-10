import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const StatCounter = ({ end, suffix = '', isDecimal = false, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const frameRate = 16;
          const totalFrames = duration / frameRate;
          const increment = end / totalFrames;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, frameRate);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export default function About() {
  const features = [
    {
      title: "SITE SURVEY & DESIGN",
      desc: "Complete geotechnical soil survey, depth determination & blueprint planning."
    },
    {
      title: "100% OWN MACHINERY",
      desc: "Owned drilling rigs, cranes, pipeline equipment — no third party subcontracting."
    },
    {
      title: "JAL JEEVAN MISSION",
      desc: "Overhead tanks, underground reservoirs & multi-kilometer pipeline networks."
    },
    {
      title: "GOVERNMENT APPROVED",
      desc: "Class-certified contractor status for road, water and utility infrastructure."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2DCD0]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        {/* Equirt Style Grid: Image with Yellow Accent Box + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image Card with Yellow Geometric Badge (Equirt Image 1 middle slide) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Background Yellow Offset Box */}
            <div className="relative rounded-[24px] bg-[#F8F6F0] p-4 border border-[#E2DCD0] shadow-xl">
              
              {/* Image Container with Rounded Corners - Full Uncropped View */}
              <div className="relative rounded-[20px] overflow-hidden bg-[#FAF8F5] p-2 flex items-center justify-center min-h-[420px] shadow-inner">
                <img 
                  src="/images/650047a8f4260231218333be145a8204.jpg" 
                  alt="Tejas Construction Engineering and Infrastructure" 
                  className="w-full h-auto max-h-[480px] object-contain rounded-xl block mx-auto transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Yellow Angular Tag Label (theme.md) */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="tag-label shadow-md">
                    CONSTRUCTION &amp; WATER INFRASTRUCTURE
                  </span>
                </div>

                {/* Equirt Yellow Badge with Crossed Hammers */}
                <div className="absolute bottom-4 right-4 z-20 bg-[#F5B301] p-3 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] text-[#F5B301] flex items-center justify-center font-bold">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-extrabold text-xs text-[#1A1A1A] uppercase tracking-wider">
                      GOVERNMENT VERIFIED
                    </div>
                    <div className="text-[0.68rem] text-[#1A1A1A]/80 font-semibold">
                      Class-A Infrastructure Contractor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Typography & 4-Item Feature Grid (Equirt Style) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301]" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#6B6B6B]">
                ABOUT TEJAS CONSTRUCTION &amp; INFRASTRUCTURE PVT. LTD.
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading font-black text-[clamp(2.2rem,4vw,3.6rem)] uppercase tracking-tight text-[#1A1A1A] leading-[1.05] mb-5">
              LIFTING YOUR PROJECT TO <span className="text-[#F5B301]">NEW HEIGHTS</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[#6B6B6B] text-base sm:text-[1.05rem] leading-relaxed mb-8">
              Founded in 1991 in Lucknow, Tejas Construction &amp; Infrastructure Pvt. Ltd. has grown into a major infrastructure contracting entity across Uttar Pradesh. We execute water-supply systems, heavy pipeline laying, overhead tanks, and civil works for both government initiatives and private industrial clients.
            </p>

            {/* 4 Feature Boxes (from Equirt image 1 middle card) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feat, index) => (
                <div 
                  key={index}
                  className="bg-[#F8F6F0] p-4 rounded-xl border border-[#E2DCD0] flex items-start gap-3.5 hover:border-[#F5B301] transition-all hover:shadow-md"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide text-[#1A1A1A] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-[0.82rem] text-[#6B6B6B] leading-snug m-0">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Equirt Style Yellow Stat Bar (theme.md Pattern C) */}
            <div className="rounded-2xl bg-[#F5B301] p-6 shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="border-r border-[#1A1A1A]/15 last:border-r-0">
                  <div className="font-heading font-black text-3xl sm:text-4xl text-[#1A1A1A]">
                    <StatCounter end={33} duration={2000} />+
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]/80 mt-1">
                    Years Experience
                  </div>
                </div>

                <div className="border-r border-[#1A1A1A]/15 last:border-r-0">
                  <div className="font-heading font-black text-3xl sm:text-4xl text-[#1A1A1A]">
                    <StatCounter end={1991} duration={2000} />
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]/80 mt-1">
                    Established
                  </div>
                </div>

                <div className="border-r border-[#1A1A1A]/15 last:border-r-0">
                  <div className="font-heading font-black text-3xl sm:text-4xl text-[#1A1A1A]">
                    <StatCounter end={4.6} isDecimal={true} suffix="★" duration={2000} />
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]/80 mt-1">
                    Public Rating
                  </div>
                </div>

                <div>
                  <div className="font-heading font-black text-3xl sm:text-4xl text-[#1A1A1A]">
                    <StatCounter end={92} suffix="%" duration={2000} />
                  </div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]/80 mt-1">
                    Recommend Rate
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
