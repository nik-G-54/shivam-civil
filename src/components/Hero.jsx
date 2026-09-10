import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[620px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-[-6%] animate-kenburns">
        <img 
          src="/images/c19d0e4020579ca7135e3d398b422be8.jpg" 
          alt="Infrastructure Project" 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Dark overlay scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/32 to-black/80" />

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-center text-paper-3 max-w-[1180px] mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="inline-block text-xs font-bold tracking-widest uppercase border border-paper-3/55 px-3 py-1.5 mb-5 w-fit">
            Government Approved · Est. 1991
          </span>
          
          {/* H1 */}
          <h1 className="font-heading text-[clamp(2.1rem,7vw,3rem)] md:text-[clamp(2.4rem,5vw,4.4rem)] max-w-[16ch] font-extrabold leading-[0.98]">
            Building Infrastructure That Moves Communities Forward.
          </h1>
          
          {/* Paragraph lede */}
          <p className="text-lg max-w-[48ch] mt-5 opacity-95 font-medium">
            We undertake government and private infrastructure projects — water supply, pipelines, civil construction, and Jal Jeevan Mission works across Uttar Pradesh.
          </p>
          
          {/* CTAs div */}
          <div className="flex gap-3.5 mt-8 flex-wrap">
            <a href="tel:+919889556111" className="bg-rust border border-rust text-paper-3 px-6 py-4 font-semibold hover:bg-rust-dark transition rounded">
              Call +91 98895 56111
            </a>
            <a href="#contact" className="bg-transparent border border-paper-3 text-paper-3 px-6 py-4 font-semibold hover:bg-paper-3 hover:text-ink transition rounded">
              Request a Site Visit
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-0 right-0 z-10 flex justify-center text-paper-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-6 h-6 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-kenburns {
          animation: kenburns 20s ease-out infinite alternate;
        }
      `}} />
    </section>
  );
};

export default Hero;
