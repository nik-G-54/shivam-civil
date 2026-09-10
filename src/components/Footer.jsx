import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-24 md:pb-16 border-t-4 border-[#F5B301]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#F5B301] flex items-center justify-center rounded-lg shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4L14 12L4 20V4Z" fill="#1A1A1A" />
                  <path d="M12 4L20 12L12 20V4Z" fill="#1A1A1A" fillOpacity="0.4" />
                </svg>
              </div>
              <div>
                <div className="font-heading font-black text-xl tracking-wider text-white">
                  TEJAS CONSTRUCTION
                </div>
                <div className="text-[0.68rem] text-[#F5B301] uppercase font-bold tracking-widest">
                  &amp; Infrastructure Pvt. Ltd.
                </div>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-[44ch] leading-relaxed mb-6">
              Registered Government Approved contractor established in 1991. Undertaking high-capacity drinking water pipelines, overhead RCC tanks, civil works, and Jal Jeevan Mission execution across Uttar Pradesh.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F5B301]" />
                UP GOVT APPROVED
              </span>
              <span>•</span>
              <span>EST. 1991</span>
              <span>•</span>
              <span>LUCKNOW &amp; HARDOI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-[#F5B301] mb-4">
              CAPABILITIES
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75 p-0 m-0 list-none">
              <li><a href="#services" className="hover:text-[#F5B301] transition-colors">Water Pipeline Networks</a></li>
              <li><a href="#services" className="hover:text-[#F5B301] transition-colors">Civil Construction &amp; Roads</a></li>
              <li><a href="#services" className="hover:text-[#F5B301] transition-colors">Overhead RCC Tanks &amp; Reservoirs</a></li>
              <li><a href="#services" className="hover:text-[#F5B301] transition-colors">Jal Jeevan Mission Projects</a></li>
              <li><a href="#services" className="hover:text-[#F5B301] transition-colors">Deep Tubewell &amp; Rotary Drilling</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-[#F5B301] mb-4">
              DIRECT DESK
            </h4>
            <div className="space-y-3 text-sm text-white/75">
              <div>
                <div className="text-xs text-white/50 uppercase">Phone Calling</div>
                <a href="tel:+916307041852" className="font-heading font-bold text-base text-white hover:text-[#F5B301] transition-colors">
                  +91 63070 41852
                </a>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase">Registered Office</div>
                <div className="text-xs text-white/80 mt-0.5">
                  Chand Ganj Garden, Kapoorthala, Lucknow, UP
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {currentYear} Tejas Construction &amp; Infrastructure Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-[#F5B301] transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
