import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const slides = [
    {
      img: '/images/c19d0e4020579ca7135e3d398b422be8.jpg',
      cat: 'Water Infrastructure',
      title: 'Pipeline network installation for rural water supply'
    },
    {
      img: '/images/bb662e01144043aabe59741d141e408e.jpg',
      cat: 'Civil Construction',
      title: 'RCC structure — built to blueprint specifications'
    },
    {
      img: '/images/69d097735e70dc91395caa33c17135f3.jpg',
      cat: 'Heavy Equipment',
      title: 'Crane operations for infrastructure projects'
    },
    {
      img: '/images/650047a8f4260231218333be145a8204.jpg',
      cat: 'Government Infrastructure',
      title: 'Multi-storey infrastructure development'
    },
    {
      img: '/images/1d7b8a8c8b65abb79bd5405adc383d2f.jpg',
      cat: 'Equipment & Machinery',
      title: 'Our fleet — equipment behind every project'
    }
  ];

  return (
    <section id="work" className="py-[100px] max-md:py-16 border-b border-line">
      <div className="max-w-[1180px] mx-auto px-7">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-10 items-end mb-[54px] max-md:grid-cols-1"
        >
          <h2 className="font-heading text-[clamp(2rem,2.4vw+1rem,2.8rem)] font-extrabold text-ink">
            Our work, in the field
          </h2>
          <p className="text-ink-soft text-[1.02rem] max-w-[44ch]">
            Infrastructure projects delivered across Uttar Pradesh — from pipeline networks to government water-supply systems. Drag, swipe, or use the arrows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            loop={true}
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            speed={650}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            className="pb-14"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-video max-sm:aspect-[4/5] relative">
                  <div className="photo-container w-full h-full">
                    <img 
                      src={slide.img} 
                      alt={slide.title} 
                      loading="lazy" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute left-0 right-0 bottom-0 z-10 px-[30px] py-[26px] bg-gradient-to-t from-black/78 to-transparent text-paper-3">
                    <span className="text-sm opacity-85 block mb-1">{slide.cat}</span>
                    <h4 className="font-heading text-[1.3rem] font-bold">{slide.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
