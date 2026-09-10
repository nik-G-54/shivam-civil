import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
  {
    id: 'lucknow',
    name: 'Lucknow Headquarters',
    address: 'Chand Ganj Garden, Kapoorthala, Lucknow, UP',
    phone: '+91 63070 41852',
    lat: 26.8848,
    lng: 80.9335,
    tag: 'REGISTERED HQ & YARD',
    // cobe phi calculation: longitude to phi
    phi: 4.85,
    theta: 0.35,
    desc: 'Main administrative office, technical drafting division, logistics depot, and heavy machinery yard.'
  },
  {
    id: 'hardoi',
    name: 'Hardoi Operations Base',
    address: 'Central District Yard, Hardoi, Uttar Pradesh',
    phone: '+91 63070 41852',
    lat: 27.3957,
    lng: 80.1293,
    tag: 'ORIGIN HUB (EST. 1991)',
    phi: 4.83,
    theta: 0.36,
    desc: 'Primary agricultural drilling base, deep aquifer equipment storage, and maintenance workshop.'
  },
  {
    id: 'kanpur',
    name: 'Kanpur Project Corridor',
    address: 'Industrial Development Belt, Kanpur, UP',
    phone: '+91 63070 41852',
    lat: 26.4499,
    lng: 80.3319,
    tag: 'MUNICIPAL PIPELINES',
    phi: 4.86,
    theta: 0.34,
    desc: 'Heavy pipeline laying site camp, booster pumping stations, and municipal water corridors.'
  }
];

export default function GlobeMap() {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [targetPhi, setTargetPhi] = useState(4.85);
  const [targetTheta, setTargetTheta] = useState(0.35);

  const phiRef = useRef(4.85);
  const thetaRef = useRef(0.35);

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    let currentPhi = phiRef.current;
    let currentTheta = thetaRef.current;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2 || 800,
      height: width * 2 || 800,
      phi: 4.85,
      theta: 0.35,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 4,
      baseColor: [0.12, 0.14, 0.18],
      markerColor: [0.96, 0.7, 0.0], // Brand Yellow #F5B301
      glowColor: [0.96, 0.7, 0.0],
      markers: [
        { location: [26.8848, 80.9335], size: 0.12 }, // Lucknow
        { location: [27.3957, 80.1293], size: 0.09 }, // Hardoi
        { location: [26.4499, 80.3319], size: 0.09 }  // Kanpur
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          // If a location is targeted, smoothly interpolate to target angle
          currentPhi += (targetPhi - currentPhi) * 0.06;
          currentTheta += (targetTheta - currentTheta) * 0.06;
        } else {
          currentPhi += 0.005;
        }
        state.phi = currentPhi;
        state.theta = currentTheta;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [targetPhi, targetTheta]);

  // Handle clicking on a location to trigger cinematic rotation & auto zoom
  const handleSelectLocation = (loc) => {
    setActiveLocation(loc);
    setTargetPhi(loc.phi);
    setTargetTheta(loc.theta);
    setIsZoomed(true);
  };

  return (
    <div className="relative rounded-[24px] bg-[#12161D] border-2 border-[#E2DCD0] shadow-2xl overflow-hidden p-4 sm:p-6 text-white">
      
      {/* Top Header HUD Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10 relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center font-bold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div>
            <div className="font-heading font-black text-sm uppercase tracking-wider text-[#F5B301]">
              3D CINEMATIC SATELLITE GLOBE
            </div>
            <div className="text-[0.68rem] text-white/60 font-mono">
              CLICK ANY OPERATIONAL HUB TO AUTO-ROTATE &amp; ZOOM
            </div>
          </div>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex gap-2 flex-wrap">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => handleSelectLocation(loc)}
              className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeLocation.id === loc.id
                  ? 'bg-[#F5B301] text-[#1A1A1A] shadow-md scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeLocation.id === loc.id ? 'bg-[#1A1A1A]' : 'bg-[#F5B301]'}`} />
              <span>{loc.id}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Globe Stage */}
      <div className="relative aspect-square sm:aspect-[16/11] flex items-center justify-center overflow-hidden my-2">
        
        {/* Animated Globe Canvas */}
        <motion.div
          animate={{ scale: isZoomed ? 1.18 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[560px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              setTargetPhi(phiRef.current + delta * 0.005);
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              setTargetPhi(phiRef.current + delta * 0.005);
            }
          }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full opacity-95 transition-opacity"
            style={{ width: '100%', height: '100%', maxWidth: '100%', aspectRatio: 1 }}
          />

          {/* USER'S CUSTOM LOCATION PIN LOADER OVERLAY */}
          {/* Exact CSS provided by the user with pulse animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex flex-col items-center">
            <div className="location-pulse-loader" />
            <div className="mt-2 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#F5B301]/60 text-[0.68rem] font-mono text-[#F5B301] shadow-lg whitespace-nowrap">
              TARGET // {activeLocation.lat.toFixed(4)}°N, {activeLocation.lng.toFixed(4)}°E
            </div>
          </div>
        </motion.div>

        {/* Ambient Glow behind the globe */}
        <div className="absolute inset-0 bg-radial from-[#F5B301]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Cinematic Location Details Card Below */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLocation.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="relative z-20 bg-[#1A1A1A] p-4 sm:p-5 rounded-xl border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[0.68rem] font-mono font-bold bg-[#F5B301] text-[#1A1A1A] px-2 py-0.5 rounded uppercase">
                {activeLocation.tag}
              </span>
              <span className="text-xs text-white/50 font-mono">
                TEJAS CONSTRUCTION &amp; INFRASTRUCTURE PVT. LTD.
              </span>
            </div>
            <h4 className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-wide m-0">
              {activeLocation.name}
            </h4>
            <div className="text-xs text-white/80 mt-1 flex items-center gap-2">
              <span>📍 {activeLocation.address}</span>
            </div>
            <p className="text-xs text-white/60 mt-1 max-w-[52ch] m-0">
              {activeLocation.desc}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end gap-2.5 flex-shrink-0 w-full sm:w-auto">
            <a 
              href={`tel:${activeLocation.phone.replace(/\s+/g, '')}`} 
              className="btn-primary text-xs tracking-wider py-2 px-4 flex-1 sm:flex-none text-center justify-center w-full"
            >
              <span>Call {activeLocation.phone}</span>
            </a>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocation.address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-[#F5B301] hover:underline flex items-center gap-1 font-bold uppercase tracking-wider"
            >
              <span>Open in Google Maps</span>
              <span>↗</span>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* USER'S EXACT LOCATION LOADER CSS FROM PROMPT */}
      <style dangerouslySetInnerHTML={{__html: `
        .location-pulse-loader {
          width: 44.8px;
          height: 44.8px;
          position: relative;
          transform: rotate(45deg);
        }

        .location-pulse-loader:before,
        .location-pulse-loader:after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50% 50% 0 50%;
          background: #0000;
          background-image: radial-gradient(circle 11.2px at 50% 50%, #0000 94%, #ff4747);
        }

        .location-pulse-loader:after {
          animation: pulse-ytk0dhmd 1s infinite;
          transform: perspective(336px) translateZ(0px);
        }

        @keyframes pulse-ytk0dhmd {
          to {
            transform: perspective(336px) translateZ(168px);
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
}
