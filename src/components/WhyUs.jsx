import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "33 years on the ground",
      desc: "In business since 1991 — long enough to know how water tables and site conditions behave."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Government approved",
      desc: "Approved status for road, water, telecom and Jal Jeevan Mission infrastructure work."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      title: "Our own rigs & crew",
      desc: "Nothing is subcontracted — the crew that surveys your site is the crew that finishes the job."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
      ),
      title: "Every sector served",
      desc: "Domestic, industrial, agricultural and government bodies — all to the same standard."
    }
  ];

  const reviews = [
    { score: "4.6 / 5", source: "Public rating on Justdial (16 reviews)" },
    { score: "92% recommend", source: "Public rating on Facebook (14 reviews)" },
    { score: "33+ years", source: "Same ownership, no name changes" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="why" className="py-[100px] max-md:py-16 border-b border-line">
      <div className="max-w-[1180px] mx-auto px-7">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="grid grid-cols-2 gap-10 items-end mb-[54px] max-md:grid-cols-1"
        >
          <div>
            <h2 className="font-heading font-extrabold text-[clamp(2rem,2.4vw+1rem,2.7rem)]">
              Why clients keep calling us back
            </h2>
          </div>
          <p className="text-ink-soft max-w-[44ch] m-0">
            No subcontracted work, no guesswork on depth or specification, and documentation that holds up for government tenders.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-4 gap-[26px] max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants} className="border border-line p-[26px_22px] bg-paper-3">
              <div className="w-[34px] h-[34px] text-rust mb-3.5">
                {card.icon}
              </div>
              <h3 className="text-[1.12rem] font-bold mb-2">{card.title}</h3>
              <p className="text-ink-soft text-[0.92rem] m-0">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-5 mt-11 flex-wrap max-md:flex-col"
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants} className="flex-1 min-w-[220px] border border-line bg-paper-3 p-[22px]">
              <div className="text-ochre text-[1.1rem] tracking-[2px]">★★★★★</div>
              <div className="font-heading font-extrabold text-[1.6rem] mt-1.5">{review.score}</div>
              <div className="text-[0.82rem] text-ink-soft mt-1">{review.source}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
