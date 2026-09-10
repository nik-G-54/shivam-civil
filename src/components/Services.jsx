import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: '01',
    category: 'WATER PIPELINES',
    title: 'Water Infrastructure & Distribution',
    image: '/images/69d097735e70dc91395caa33c17135f3.jpg',
    description: 'High-volume drinking water pipelines, distribution networks, pumping stations, and Jal Jeevan Mission connections engineered to strict government specifications.',
    tags: ['Pipelines', 'Jal Jeevan', 'Distribution']
  },
  {
    id: '02',
    category: 'CIVIL WORKS',
    title: 'Civil Construction & Roads',
    image: '/images/bb662e01144043aabe59741d141e408e.jpg',
    description: 'RCC foundation works, utility drainage corridors, access roadways, and structural concrete engineering executed with our own site teams and heavy machinery.',
    tags: ['Roads', 'RCC Structures', 'Drainage']
  },
  {
    id: '03',
    category: 'STORAGE TANKS',
    title: 'Overhead Tanks & Ground Reservoirs',
    image: '/images/650047a8f4260231218333be145a8204.jpg',
    description: 'Engineered reinforced concrete water towers and underground reservoirs built to withstand weather and hydraulic pressure. Cast, cured, and waterproofed on-site.',
    tags: ['Overhead Tanks', 'Reservoirs', 'Waterproofing']
  },
  {
    id: '04',
    category: 'GOVERNMENT CONTRACTS',
    title: 'Government Infrastructure Projects',
    image: '/images/c19d0e4020579ca7135e3d398b422be8.jpg',
    description: 'Public-sector road, municipal water-supply, telecom ducting, and rural infrastructure under verified Government Approved contractor status.',
    tags: ['Tenders', 'Public Works', 'Jal Jeevan']
  },
  {
    id: '05',
    category: 'DRILLING & RIGS',
    title: 'Tubewell & Deep Borewell Drilling',
    image: '/images/1d7b8a8c8b65abb79bd5405adc383d2f.jpg',
    description: 'Deep rotary & DTH drilling for farms, industrial units, and residential clusters. Tested for flow-rate, casing alignment, and sustainable yield.',
    tags: ['Industrial', 'Agricultural', 'Domestic']
  },
  {
    id: '06',
    category: 'REHABILITATION',
    title: 'Borewell Cleaning & Recharging Pits',
    image: '/images/0dadd9456dbd2cff60ab03a936f1ffeb.jpg',
    description: 'Compressor cleaning, desilting of choked bores, yield revival, and groundwater recharge harvesting pits designed to maximize rainwater capture.',
    tags: ['Desilting', 'Rainwater', 'Revival']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F6F0] bg-grid-pattern border-b border-[#E2DCD0]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        {/* Section Header (Cakrawala Powerful Services Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301]" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#6B6B6B]">
                OUR CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-heading font-black text-[clamp(2.2rem,4vw,3.6rem)] uppercase tracking-tight text-[#1A1A1A] leading-[1.05]">
              POWERFUL <span className="text-[#F5B301]">SERVICES</span> FOR INFRASTRUCTURE
            </h2>
          </div>
          <p className="text-[#6B6B6B] max-w-[42ch] text-base leading-relaxed m-0">
            End-to-end capabilities backed by company-owned machinery, skilled site engineers, and 33+ years of ground expertise.
          </p>
        </div>

        {/* 6 Card Grid (Cakrawala Pattern C with Angular Tag Labels) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-[20px] overflow-hidden border border-[#E2DCD0] shadow-sm hover:shadow-xl hover:border-[#F5B301] transition-all flex flex-col"
            >
              {/* Card Image with Angular Flag Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Angular Tag Label from theme.md */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="tag-label shadow-md">
                    {service.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-[#1A1A1A]/80 text-[#F5B301] flex items-center justify-center font-heading font-bold text-xs">
                  {service.id}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1A1A1A] uppercase tracking-wide group-hover:text-[#F5B301] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-4 border-t border-[#F0E8D5] flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {service.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex} 
                        className="text-[0.68rem] font-bold uppercase tracking-wider bg-[#F8F6F0] text-[#1A1A1A] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="#contact" 
                    className="w-8 h-8 rounded-full bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-[#F5B301] transition-colors flex-shrink-0"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
