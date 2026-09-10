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
  return (
    <section id="about" className="py-[100px] max-md:py-16 border-b border-line bg-paper">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-2 gap-[60px] items-center max-md:grid-cols-1">
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-rust mb-2.5 block">
              About the company
            </span>
            <h2 className="font-heading text-[clamp(2rem,2.6vw+1rem,2.8rem)] font-extrabold mb-[22px] text-ink leading-tight">
              A construction outfit built on water infrastructure and government projects.
            </h2>
            <div className="space-y-4 text-ink-soft text-[1.03rem]">
              <p>
                Sonam Sales Corporation started in 1991 as a small tubewell-drilling operation around Lucknow and Hardoi. Over three decades, the company has grown into a full-scale construction and infrastructure contractor — taking on government water-supply projects, pipeline installations, civil construction, and Jal Jeevan Mission works across Uttar Pradesh.
              </p>
              <p>
                The company holds Government Approved status, allowing it to bid on and execute public infrastructure work. From pipeline networks to overhead tanks, from road construction to borewell drilling — every project is handled start to finish by our own crew, using equipment the company owns and operates.
              </p>
              <p>
                We serve domestic households, industrial units, agricultural land, and government bodies. Public listings on Justdial and Facebook put the company at 4.6/5 rating and 92% recommendation score.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-5 mt-9 max-md:grid-cols-2">
              <div className="border-t-2 border-rust pt-3">
                <div className="font-heading font-extrabold text-[2.1rem] text-ink leading-none">
                  <StatCounter end={33} duration={2000} />
                </div>
                <div className="text-[0.8rem] text-ink-soft mt-1">Years in business</div>
              </div>
              <div className="border-t-2 border-rust pt-3">
                <div className="font-heading font-extrabold text-[2.1rem] text-ink leading-none">
                  <StatCounter end={1991} duration={2000} />
                </div>
                <div className="text-[0.8rem] text-ink-soft mt-1">Established</div>
              </div>
              <div className="border-t-2 border-rust pt-3">
                <div className="font-heading font-extrabold text-[2.1rem] text-ink leading-none">
                  <StatCounter end={4.6} isDecimal={true} suffix="★" duration={2000} />
                </div>
                <div className="text-[0.8rem] text-ink-soft mt-1">Public rating</div>
              </div>
              <div className="border-t-2 border-rust pt-3">
                <div className="font-heading font-extrabold text-[2.1rem] text-ink leading-none">
                  <StatCounter end={92} suffix="%" duration={2000} />
                </div>
                <div className="text-[0.8rem] text-ink-soft mt-1">Recommend</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="photo-container aspect-[4/5] border border-line max-md:order-[-1] max-md:aspect-video relative overflow-hidden"
          >
            <img 
              src="/images/650047a8f4260231218333be145a8204.jpg" 
              alt="Construction and infrastructure planning visualization" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
