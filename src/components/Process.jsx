import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { title: "Survey", desc: "Inspect the ground, study the site and understand requirements." },
    { title: "Planning", desc: "Prepare drawings, resource plans and project timeline." },
    { title: "Resources", desc: "Arrange manpower, machinery, pipes and materials." },
    { title: "Execution", desc: "Construction, pipeline installation, tank and civil work." },
    { title: "Quality Check", desc: "Inspect work against project specifications." },
    { title: "Testing", desc: "Test pipelines, water systems and infrastructure." },
    { title: "Handover", desc: "Complete documentation and deliver the finished project." }
  ];

  return (
    <div id="process" className="relative overflow-hidden border-b border-line">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/69d097735e70dc91395caa33c17135f3.jpg" 
          alt="Process background" 
          className="w-full h-[120%] object-cover" 
        />
      </div>
      
      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-black/74"></div>

      {/* Content */}
      <div className="relative z-10 py-[100px] max-md:py-16">
        <div className="max-w-[1180px] mx-auto px-7 text-paper-3">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-10 items-end mb-[54px] max-md:grid-cols-1"
          >
            <h2 className="font-heading text-[clamp(2rem,2.4vw+1rem,2.8rem)] font-extrabold text-paper-3">
              From Drawing to Delivery
            </h2>
            <p className="text-paper-3/90 text-[1.02rem] max-w-[44ch]">
              The same disciplined process, whether it's one borewell or a multi-site government contract.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-paper-3/30" />
            
            <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-5 gap-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative"
                >
                  <div className="w-[52px] h-[52px] rounded-full bg-ink border-2 border-water-soft text-paper-3 font-heading font-extrabold text-[1.3rem] flex items-center justify-center relative z-10 mb-4 mx-auto lg:mx-0">
                    {index + 1}
                  </div>
                  <h3 className="text-[1.1rem] font-bold mb-2 text-paper-3 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-paper-3/78 text-[0.92rem] text-center lg:text-left">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Process;
