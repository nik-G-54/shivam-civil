import React, { useRef, useEffect, useState } from 'react';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { motion } from 'framer-motion';

const HARDOI_COORDS = [80.1293, 27.3957]; // [longitude, latitude]

export default function GlobeMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [currentZoom, setCurrentZoom] = useState(1.8);
  const [currentPitch, setCurrentPitch] = useState(0);
  const [currentBearing, setCurrentBearing] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [cameraMode, setCameraMode] = useState('globe'); // 'globe' | 'hardoi'

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // High-resolution satellite tiles (Esri World Imagery) with dark space background
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {
          'esri-satellite': {
            type: 'raster',
            tiles: [
              'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            ],
            tileSize: 256,
            attribution: 'Esri, Maxar, Earthstar Geographics'
          }
        },
        layers: [
          {
            id: 'satellite-tiles',
            type: 'raster',
            source: 'esri-satellite',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      center: HARDOI_COORDS,
      zoom: 1.8,
      pitch: 0,
      bearing: 0,
      maxPitch: 75,
      canvasContextAttributes: { antialias: true }
    });

    mapRef.current = map;

    // Set 3D Globe Projection on load
    map.on('style.load', () => {
      try {
        if (typeof map.setProjection === 'function') {
          map.setProjection({ type: 'globe' });
        }
      } catch (err) {
        console.warn('3D Globe projection setup notice:', err);
      }
    });

    // Custom Glassmorphism Popup for Hardoi
    const popup = new maplibregl.Popup({ 
      offset: 28, 
      closeButton: false,
      className: 'hardoi-custom-popup'
    }).setHTML(`
      <div style="padding: 10px 14px; font-family: 'Poppins', sans-serif; background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(8px); color: #ffffff; border-radius: 12px; border: 1.5px solid #F5B301; box-shadow: 0 12px 30px rgba(0,0,0,0.6); min-width: 200px;">
        <div style="font-size: 10px; font-weight: 800; color: #F5B301; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px;">
          TEJAS CONSTRUCTION &amp; INFRASTRUCTURE
        </div>
        <h4 style="margin: 0; font-size: 15px; font-weight: 900; color: #ffffff;">Hardoi, Uttar Pradesh</h4>
        <p style="margin: 3px 0 0; font-size: 11px; color: #94a3b8;">PIN: 241001 · Central Equipment Yard</p>
        <p style="margin: 2px 0 0; font-size: 10px; font-family: monospace; color: #F5B301;">27.3957° N, 80.1293° E</p>
        <div style="margin-top: 6px; font-size: 11px; font-weight: 700; color: #10b981; display: flex; align-items: center; gap: 5px;">
          <span style="width: 7px; height: 7px; border-radius: 50%; background: #10b981; display: inline-block; box-shadow: 0 0 8px #10b981;"></span>
          Primary Operations Hub (Active)
        </div>
      </div>
    `);

    // Custom Glowing Radar Marker Element
    const el = document.createElement('div');
    el.className = 'hardoi-marker-pin';
    el.innerHTML = `
      <div class="radar-pulse-ring"></div>
      <div class="radar-center-dot"></div>
      <div class="hardoi-pill-badge">📍 HARDOI, UP</div>
    `;

    el.onclick = () => {
      flyToHardoi();
      popup.addTo(map);
    };

    // Attach Marker to Map
    const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
      .setLngLat(HARDOI_COORDS)
      .setPopup(popup)
      .addTo(map);

    markerRef.current = marker;

    // Open popup initially when zoomed
    map.on('move', () => {
      const zoom = map.getZoom();
      setCurrentZoom(zoom);
      setCurrentPitch(Math.round(map.getPitch()));
      setCurrentBearing(Math.round(map.getBearing()));
    });

    // Auto-rotation engine
    let userInteracting = false;
    map.on('mousedown', () => { userInteracting = true; });
    map.on('dragstart', () => { userInteracting = true; });
    map.on('touchstart', () => { userInteracting = true; });

    const rotateGlobe = () => {
      if (mapRef.current && isAutoRotating && !userInteracting && mapRef.current.getZoom() < 3.5) {
        const center = mapRef.current.getCenter();
        center.lng += 0.2;
        mapRef.current.easeTo({ center, duration: 100, easing: (n) => n });
      }
      animationFrameRef.current = requestAnimationFrame(rotateGlobe);
    };

    rotateGlobe();

    // Map controls: Navigation & scale
    map.addControl(new maplibregl.NavigationControl({ showCompass: true, showZoom: true }), 'bottom-right');

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      map.remove();
    };
  }, []);

  // 1. Cinematic Zoom-In: Fly from Space down to Hardoi street/district level (Zoom 13.5)
  const flyToHardoi = () => {
    if (!mapRef.current) return;
    setIsAutoRotating(false);
    setCameraMode('hardoi');

    mapRef.current.flyTo({
      center: HARDOI_COORDS,
      zoom: 13.5,
      pitch: 40,
      bearing: -10,
      duration: 2800,
      essential: true
    });

    // Open popup after arrival
    setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.togglePopup();
      }
    }, 2800);
  };

  // 2. Cinematic Zoom-Out: Reset camera back to full 3D Earth Globe view (Zoom 1.8)
  const resetToGlobe = () => {
    if (!mapRef.current) return;
    setCameraMode('globe');

    mapRef.current.flyTo({
      center: HARDOI_COORDS,
      zoom: 1.8,
      pitch: 0,
      bearing: 0,
      duration: 2400,
      curve: 1.4,
      essential: true
    });

    setTimeout(() => {
      setIsAutoRotating(true);
    }, 2500);
  };

  // 3. Toggle 3D Pitch View (45 deg angle)
  const togglePitch = () => {
    if (!mapRef.current) return;
    const newPitch = mapRef.current.getPitch() > 20 ? 0 : 50;
    mapRef.current.easeTo({ pitch: newPitch, duration: 1000 });
  };

  return (
    <div className="relative rounded-[24px] bg-[#030712] border-2 border-[#F5B301] shadow-2xl overflow-hidden text-white">
      
      {/* Top Header HUD Bar */}
      <div className="relative z-20 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F5B301] text-[#1A1A1A] flex items-center justify-center font-bold shadow-md flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div>
            <div className="font-heading font-black text-sm uppercase tracking-wider text-[#F5B301] flex items-center gap-2">
              <span>3D SATELLITE GLOBE // MAPLIBRE GL</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[0.72rem] text-white/70 font-mono">
              REAL GPS: HARDOI, UTTAR PRADESH · [80.1293° E, 27.3957° N]
            </div>
          </div>
        </div>

        {/* Primary Action Buttons (Desktop & Mobile Friendly) */}
        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
          <button
            onClick={flyToHardoi}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
              cameraMode === 'hardoi'
                ? 'bg-[#F5B301] text-[#1A1A1A] shadow-[#F5B301]/30 scale-105'
                : 'bg-[#F5B301] text-[#1A1A1A] hover:bg-[#E8A800]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1A1A1A] animate-ping" />
            <span>Fly to Hardoi Site</span>
          </button>

          <button
            onClick={resetToGlobe}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
              cameraMode === 'globe'
                ? 'bg-white/20 text-[#F5B301] border-[#F5B301]'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
            }`}
          >
            <span>Reset 3D Globe</span>
            <span>↺</span>
          </button>

          <button
            onClick={togglePitch}
            className="hidden sm:flex px-3 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase transition-colors"
            title="Toggle 3D Horizon Tilt"
          >
            {currentPitch > 20 ? '2D Top' : '3D Tilt'}
          </button>
        </div>
      </div>

      {/* MapLibre GL 3D Globe Viewport */}
      <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px] bg-[#030712] overflow-hidden">
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* Floating Quick Navigation for Mobile Users */}
        <div className="sm:hidden absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
          <div className="pointer-events-auto bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#F5B301]/50 text-[0.68rem] font-mono text-[#F5B301] shadow-lg">
            📍 Hardoi Hub · {currentZoom > 10 ? 'Street View' : 'Orbital View'}
          </div>

          <button
            onClick={cameraMode === 'hardoi' ? resetToGlobe : flyToHardoi}
            className="pointer-events-auto bg-[#F5B301] text-[#1A1A1A] px-3.5 py-1.5 rounded-full font-heading font-bold text-[0.7rem] uppercase tracking-wider shadow-lg flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <span>{cameraMode === 'hardoi' ? 'Orbit ↺' : 'Zoom In 🔍'}</span>
          </button>
        </div>

        {/* Real-time Telemetry HUD (Bottom Left) */}
        <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-[0.7rem] font-mono text-white/80 shadow-lg">
          <div>
            <span className="text-[#F5B301]">ZOOM:</span> {currentZoom.toFixed(1)}x
          </div>
          <span className="text-white/30">•</span>
          <div>
            <span className="text-[#F5B301]">PITCH:</span> {currentPitch}°
          </div>
          <span className="text-white/30">•</span>
          <div>
            <span className="text-[#F5B301]">BEARING:</span> {currentBearing}°
          </div>
          <span className="text-white/30">•</span>
          <div className="text-emerald-400 font-bold">
            ESRI 3D PLANET
          </div>
        </div>
      </div>

      {/* Bottom Hardoi Operational Card */}
      <div className="relative z-20 p-4 sm:p-5 bg-[#0a0e1a] border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[0.65rem] font-mono font-bold bg-[#F5B301] text-[#1A1A1A] px-2 py-0.5 rounded uppercase">
              OPERATIONAL HUB
            </span>
            <span className="text-xs text-white/60 font-mono">
              TEJAS CONSTRUCTION &amp; INFRASTRUCTURE PVT. LTD.
            </span>
          </div>
          <h4 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-wide m-0">
            Hardoi Central Equipment Yard &amp; Workshop
          </h4>
          <div className="text-xs text-white/75 mt-0.5">
            Central District Yard, Hardoi, Uttar Pradesh 241001 · GPS: [80.1293° E, 27.3957° N]
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href="tel:+916307041852"
            className="btn-primary text-xs tracking-wider py-2.5 px-5 flex-1 sm:flex-none text-center justify-center"
          >
            <span>Call +91 63070 41852</span>
          </a>

          <button
            onClick={flyToHardoi}
            className="btn-dark text-xs tracking-wider py-2.5 px-4 flex-1 sm:flex-none text-center justify-center"
          >
            <span>Fly There ✈</span>
          </button>
        </div>
      </div>

      {/* Custom Marker Styling & Radar Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .hardoi-marker-pin {
          position: relative;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .radar-pulse-ring {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(245, 179, 1, 0.25);
          border: 1.5px solid #F5B301;
          animation: radarPulse 1.8s ease-out infinite;
        }

        .radar-center-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #F5B301;
          border: 2px solid #ffffff;
          box-shadow: 0 0 12px #F5B301, 0 0 24px #F5B301;
          position: relative;
          z-index: 2;
        }

        .hardoi-pill-badge {
          position: absolute;
          top: -26px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.95);
          color: #F5B301;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid #F5B301;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.6);
          pointer-events: none;
        }

        @keyframes radarPulse {
          0% {
            transform: scale(0.6);
            opacity: 1;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        .maplibregl-popup-content {
          padding: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        .maplibregl-popup-anchor-bottom .maplibregl-popup-tip {
          border-top-color: #F5B301 !important;
        }
      `}} />
    </div>
  );
}
