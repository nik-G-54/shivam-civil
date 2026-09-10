import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    img: '/images/650047a8f4260231218333be145a8204.jpg',
    cat: 'URBAN INFRASTRUCTURE',
    title: 'Municipal Utility Development & Roadworks',
    desc: 'Turnkey execution of government roads, drainage conduits, and water-supply networks from blueprint to reality.'
  },
  {
    img: '/images/c19d0e4020579ca7135e3d398b422be8.jpg',
    cat: 'JAL JEEVAN MISSION',
    title: 'Water Supply & High-Pressure Pipeline Networks',
    desc: 'Connecting rural districts across Hardoi and Lucknow with durable, tested drinking water distribution lines.'
  },
  {
    img: '/images/1d7b8a8c8b65abb79bd5405adc383d2f.jpg',
    cat: 'HEAVY MACHINERY FLEET',
    title: 'Heavy Rotary Rigs & Earthmoving Fleet Operations',
    desc: 'Company-owned equipment executing high-capacity boring and site grading for government works.'
  },
  {
    img: '/images/bb662e01144043aabe59741d141e408e.jpg',
    cat: 'CIVIL & STORAGE',
    title: 'Engineered RCC Overhead Towers & Reservoir Tanks',
    desc: 'Cast-in-place structural concrete reservoirs built to hydraulic load and longevity standards.'
  },
  {
    img: '/images/69d097735e70dc91395caa33c17135f3.jpg',
    cat: 'HEAVY LIFTING',
    title: 'Industrial Heavy Crane & Pipeline Corridors',
    desc: 'Precision heavy lifting and culvert utility laying under strict safety parameters.'
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F8F6F0] bg-grid-pattern border-b border-[#E2DCD0]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301]" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#6B6B6B]">
                PROVEN EXECUTION ON SITE
              </span>
            </div>
            <h2 className="font-heading font-black text-[clamp(2.2rem,4vw,3.6rem)] uppercase tracking-tight text-[#1A1A1A] leading-[1.05]">
              FEATURED <span className="text-[#F5B301]">WORKS &amp; SITES</span>
            </h2>
          </div>
          <p className="text-[#6B6B6B] max-w-[42ch] text-base leading-relaxed m-0">
            Click arrows or swipe to explore our complete project archives. Images are displayed in full scale without cropping.
          </p>
        </div>

        {/* Swiper Carousel with FULL UNTOUCHED IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[24px] bg-[#1A1A1A] p-3 sm:p-5 border-2 border-[#E2DCD0] shadow-2xl overflow-hidden"
        >
          <Swiper
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={750}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            className="rounded-[20px] overflow-hidden"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                {/* Showcase Container: Adaptive Height with Object-Contain for 100% Full Image Display */}
                <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#12161D]">
                  
                  {/* Blurred Ambient Backdrop (so screen feels full, but main image stays untouched) */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
                    <img 
                      src={slide.img} 
                      alt="" 
                      className="w-full h-full object-cover blur-2xl scale-110"
                    />
                  </div>

                  {/* Top Bar with Category Tag & Counter */}
                  <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between">
                    <span className="tag-label shadow-lg">
                      {slide.cat}
                    </span>
                    <span className="font-heading font-bold text-xs uppercase tracking-widest text-white/70 bg-black/50 px-3 py-1.5 rounded-full border border-white/10">
                      PROJECT 0{index + 1} // 05
                    </span>
                  </div>

                  {/* CENTER FOREGROUND: 100% FULL IMAGE - NO CROPPING (object-contain) */}
                  <div className="relative z-10 flex-grow flex items-center justify-center p-2 sm:p-4 my-auto">
                    <img 
                      src={slide.img} 
                      alt={slide.title} 
                      className="max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] w-auto max-w-full object-contain rounded-xl shadow-2xl mx-auto block transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom Caption Box */}
                  <div className="relative z-20 bg-gradient-to-t from-black via-black/85 to-transparent p-5 sm:p-7 text-white">
                    <div className="max-w-[840px]">
                      <h3 className="font-heading font-black text-lg sm:text-2xl uppercase tracking-wide text-[#F5B301] mb-1.5 leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/85 leading-relaxed m-0">
                        {slide.desc}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
