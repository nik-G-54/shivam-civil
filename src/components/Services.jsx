import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: '01',
    title: 'Water Infrastructure & Pipeline',
    image: '/images/69d097735e70dc91395caa33c17135f3.jpg',
    description: 'Pipeline installation, water distribution networks, and Jal Jeevan Mission projects — sized and built to site conditions, connecting communities to clean water supply.',
    tags: ['Pipeline', 'Jal Jeevan Mission', 'Water Supply'],
    flipped: false,
  },
  {
    id: '02',
    title: 'Civil Construction',
    image: '/images/bb662e01144043aabe59741d141e408e.jpg',
    description: 'Roads, drainage systems, RCC structures, foundations and site development — built to government specification with our own crew and equipment on every job.',
    tags: ['Roads', 'Drainage', 'RCC Structures'],
    flipped: true,
  },
  {
    id: '03',
    title: 'Overhead Tank & Reservoir Construction',
    image: '/images/650047a8f4260231218333be145a8204.jpg',
    description: 'Water storage built to hold pressure and years of weather — overhead tanks, ground-level reservoirs, sized against daily draw. Built, cured and waterproofed on site.',
    tags: ['RCC Tanks', 'Reservoirs', 'Waterproofing'],
    flipped: false,
  },
  {
    id: '04',
    title: 'Government Infrastructure Projects',
    image: '/images/c19d0e4020579ca7135e3d398b422be8.jpg',
    description: 'Road, water-supply, telecom and Jal Jeevan Mission contract work carried out to government specification and timeline — under our Government Approved contractor status.',
    tags: ['Jal Jeevan', 'Roads', 'Water Supply', 'Telecom'],
    flipped: true,
  },
  {
    id: '05',
    title: 'Tubewell & Borewell Drilling',
    image: '/images/1d7b8a8c8b65abb79bd5405adc383d2f.jpg',
    description: 'Bores for homes, farms and factories, drilled to the depth the site actually needs. Domestic, industrial and agricultural connections, handled start to finish by our own rigs.',
    tags: ['Domestic', 'Agricultural', 'Industrial'],
    flipped: false,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-[100px] max-md:py-16 border-b border-line bg-paper">
      <div className="max-w-[1180px] mx-auto px-7">
        
        {/* Section Header */}
        <div className="grid grid-cols-2 gap-10 items-end mb-[54px] max-md:grid-cols-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-[clamp(2rem,2.4vw+1rem,2.8rem)] font-extrabold text-ink leading-tight"
          >
            What we do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ink-soft text-[1.02rem] max-w-[44ch]"
          >
            Five services built around infrastructure: getting water where it needs to go, building structures that hold up, and delivering government projects on spec.
          </motion.p>
        </div>

        {/* Services List */}
        <div>
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-[60px] items-center mb-[88px] last:mb-0 max-md:grid-cols-1 max-md:gap-[26px] max-md:mb-[60px]"
            >
              {/* Image Side */}
              <div 
                className={`photo-container relative overflow-hidden aspect-[4/3] border border-line ${
                  service.flipped ? 'lg:order-2 max-md:order-[-1]' : 'max-md:order-[-1]'
                }`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Side */}
              <div className={`${service.flipped ? 'lg:order-1' : ''}`}>
                <div className="font-heading font-extrabold text-[0.95rem] text-water tracking-wide">
                  {service.id}
                </div>
                <h3 className="font-heading font-extrabold text-[2rem] text-ink mt-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-ink-soft text-[1.02rem] mt-3.5 max-w-[52ch]">
                  {service.description}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[0.78rem] font-semibold border border-line px-[11px] py-[5px] text-ink-soft bg-paper-2/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
