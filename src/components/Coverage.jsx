import React from 'react';
import { motion } from 'framer-motion';

const Coverage = () => {
  const areas = [
    { name: "Lucknow", tag: "Head office" },
    { name: "Hardoi", tag: "Base district" },
    { name: "Kanpur & nearby", tag: "On request" },
    { name: "Statewide UP", tag: "Government contracts" }
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="area" className="py-[100px] max-md:py-16 border-b border-line">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-2 gap-[60px] items-center max-md:grid-cols-1">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
          >
            <div className="text-xs font-bold tracking-widest uppercase text-rust mb-2.5">Coverage</div>
            <h2 className="font-heading text-[clamp(2rem,2.4vw+1rem,2.7rem)] font-extrabold m-0">
              Where we work
            </h2>
            <p className="mt-3.5 text-ink-soft max-w-[44ch]">
              Based out of Lucknow and Hardoi, with crews that travel across Uttar Pradesh for larger contracts and government projects.
            </p>
            <ul className="list-none m-0 p-0 mt-6">
              {areas.map((area, index) => (
                <li key={index} className="flex justify-between py-3.5 border-t border-line font-semibold last:border-b">
                  <span>{area.name}</span>
                  <span className="text-water font-semibold text-[0.85rem]">{area.tag}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="photo-container aspect-[4/5] border border-line max-md:order-[-1] max-md:aspect-video"
          >
            <img 
              src="/images/bb662e01144043aabe59741d141e408e.jpg" 
              alt="Infrastructure project on architectural blueprint"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
