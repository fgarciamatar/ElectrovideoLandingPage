import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Zap } from 'lucide-react';
import logoImg from '../assets/Logo.png';

export default function PowerSplash({ onPowerOn }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);
  const containerRef = useRef(null);

  // 3D Parallax Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configure smooth springs for 3D tilts
  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalize coordinates between -0.5 and 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Reset tilt smoothly
    mouseX.set(0);
    mouseY.set(0);
  };

  // Synthesize realistic physical switch "click" sound using HTML5 Web Audio API
  const playClickSound = (isTurningOn) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      
      // Node 1: Mechanical contact heavy low frequency thump
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(isTurningOn ? 180 : 140, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(15, ctx.currentTime + 0.07);
      
      gain1.gain.setValueAtTime(0.4, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
      
      // Node 2: Spring snap high frequency click
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(isTurningOn ? 1400 : 1100, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.03);
      
      gain2.gain.setValueAtTime(0.2, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      
      osc1.start();
      osc2.start();
      
      osc1.stop(ctx.currentTime + 0.07);
      osc2.stop(ctx.currentTime + 0.03);
    } catch (e) {
      console.warn("Audio Context blocked by browser safety policies.", e);
    }
  };

  const handleToggle = () => {
    if (isFlipped) return; // Prevent double trigger
    
    setIsFlipped(true);
    
    // Play satisfying mechanical audio click
    playClickSound(true);

    // Trigger fluorescent startup flicker
    setTimeout(() => {
      setIsFlickering(true);
      // The user wants it to last exactly 3 seconds (3000ms)
      setTimeout(() => {
        onPowerOn();
      }, 3000);
    }, 450);
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full z-50 bg-[#070708] flex flex-col items-center justify-center overflow-hidden"
      style={{
        // Realistic plaster wall texture behind the plate
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}
    >
      
      {/* Dynamic Background Ambient Glow (Visible only before flickering) */}
      {!isFlickering && (
        <div className={`absolute w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none z-0 transition-all duration-1000 ${
          isFlipped ? 'bg-electric-red/12 scale-110' : 'bg-electric-red/4 scale-95'
        }`}></div>
      )}

      {/* 1. INITIAL DARK STAGE: Brand Logo Header, Rocker Casing, and Guidance */}
      {!isFlickering && (
        <>
          {/* Brand Logo Header above switch */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8 z-10 px-4 flex flex-col items-center select-none"
          >
            <div className="relative bg-white px-5 py-2 rounded-2xl border border-slate-200 shadow-[0_4px_15px_rgba(255,255,255,0.1)] mb-4 flex items-center justify-center transform hover:scale-102 transition-transform duration-300">
              <img 
                src={logoImg} 
                alt="Electro Video Logo" 
                className="h-10 sm:h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-slate-500 font-sans text-[9px] uppercase tracking-[0.25em] font-extrabold">
              Materiales Eléctricos • Concepción Tucumán
            </p>
          </motion.div>

          {/* 3D PARALLAX SWITCH PLATE CONTAINER */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative py-4 px-4 flex items-center justify-center z-10 cursor-pointer"
            style={{ perspective: 1000 }}
          >
            {/* Outer 3D Beveled Plastic Wall Plate (Single Gang style) */}
            <motion.div
              whileHover={{
                borderColor: 'rgba(211, 47, 47, 0.4)',
                boxShadow: '0 45px 110px rgba(0,0,0,0.7), 0 20px 45px rgba(211,47,47,0.25), inset 0 2px 3px rgba(255,255,255,1), inset 0 -4px 10px rgba(0,0,0,0.05)'
              }}
              className="relative w-60 h-88 rounded-[2.5rem] bg-gradient-to-tr from-slate-200 via-white to-slate-50 p-6.5 flex flex-col items-center justify-center select-none border border-slate-300/40 transition-colors duration-300"
              style={{
                boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 15px 35px rgba(0,0,0,0.25), inset 0 2px 3px rgba(255,255,255,1), inset 0 -4px 10px rgba(0,0,0,0.05)',
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Subtle plastic highlight & inner frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[2.5rem] pointer-events-none z-10"></div>
              <div className="absolute inset-1 rounded-[2.3rem] border border-white pointer-events-none shadow-[inset_0_2px_2px_rgba(255,255,255,0.85),_inset_0_-2px_4px_rgba(0,0,0,0.03)] z-10"></div>

              <div 
                className="w-full h-full bg-gradient-to-b from-slate-200/90 via-slate-100/90 to-slate-200/90 rounded-2xl p-2 shadow-[inset_0_3px_10px_rgba(0,0,0,0.15)] border border-slate-300/50 flex items-center justify-center relative transition-colors duration-300 group-hover:border-electric-red/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Single Large Central Rocker Switch Key */}
                <div
                  onClick={handleToggle}
                  className="w-full h-44 rounded-xl relative cursor-pointer group active:scale-[0.98] transition-all overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 600
                  }}
                >
                  <motion.div
                    animate={{
                      rotateY: isFlipped ? 13 : -13,
                      skewY: isFlipped ? 1 : -1,
                      x: isFlipped ? 1 : -1
                    }}
                    whileHover={{ scale: 1.015, filter: 'brightness(1.02)' }}
                    transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                    className="w-full h-full rounded-xl bg-gradient-to-r from-white via-slate-50 to-white border border-slate-200 flex items-center justify-between px-6 relative"
                    style={{
                      transformOrigin: 'center center',
                      boxShadow: isFlipped 
                        ? 'inset 22px 0 30px rgba(0,0,0,0.08), inset -3px 0 5px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.04)'
                        : 'inset -22px 0 30px rgba(0,0,0,0.08), inset 3px 0 5px rgba(255,255,255,0.8), -2px 2px 4px rgba(0,0,0,0.04)'
                    }}
                  >
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-slate-300/30 shadow-sm pointer-events-none"></div>

                    <span className={`text-[13px] font-black font-sans tracking-wide transition-all duration-300 pointer-events-none ${
                      isFlipped ? 'text-slate-400/50 scale-90' : 'text-slate-950 scale-110'
                    }`}>
                      OFF
                    </span>

                    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-3 h-10 rounded-[3px] bg-slate-200 border border-slate-300 shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] flex flex-col justify-between py-1.5 px-[2px] pointer-events-none">
                      <div className="w-full h-[1px] bg-slate-400"></div>
                      <div className="w-full h-[1px] bg-slate-400"></div>
                      <div className="w-full h-[1px] bg-slate-400"></div>
                      <div className="w-full h-[1px] bg-slate-400"></div>
                    </div>

                    {isFlipped && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-[14px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"
                      />
                    )}

                    <span className={`text-[13px] font-black font-sans tracking-wide transition-all duration-300 mr-10 pointer-events-none ${
                      isFlipped ? 'text-slate-950 scale-120' : 'text-slate-400/50 scale-90'
                    }`}>
                      ON
                    </span>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-1.5 right-6 select-none opacity-45 z-10 pointer-events-none">
                <span className="font-display font-extrabold text-[8px] tracking-[0.25em] text-slate-400 uppercase">
                  EV JELUZ
                </span>
              </div>
            </motion.div>
          </div>

          {/* Guidance below the switch */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mt-8 z-10 px-4 select-none"
          >
            <p className="text-[10px] text-slate-500 font-sans font-black uppercase tracking-[0.2em] animate-pulse">
              Hacé clic en ON para encender
            </p>
          </motion.div>
        </>
      )}

      {/* 2. CINEMATIC FLICKERING OVERLAY (3 Seconds Startup Stage) */}
      <AnimatePresence>
        {isFlickering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#070708] z-40 flex flex-col items-center justify-center px-6"
          >
            {/* Steady central light/spotlight pointing to the logo (never turns off) */}
            <div className="absolute w-[400px] h-[400px] bg-white/[0.08] rounded-full blur-[90px] pointer-events-none z-10"></div>
            <div className="absolute w-[180px] h-[180px] bg-white/[0.12] rounded-full blur-[45px] pointer-events-none z-10"></div>

            {/* Flickering ambient room light (background flashes) */}
            <motion.div
              animate={{ 
                opacity: [0.05, 0.45, 0.08, 0.65, 0.12, 0.85, 0.2, 0.95, 0.15, 0.4, 0.05, 0.7, 0.1, 1] 
              }}
              transition={{ 
                duration: 3, // Lasts exactly 3 seconds
                ease: "linear",
                times: [0, 0.08, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.72, 0.8, 0.85, 0.9, 0.95, 1]
              }}
              className="absolute inset-0 bg-white/10 pointer-events-none z-0"
            />

            {/* Core illuminated content (high legibility) */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-7 text-center select-none max-w-lg relative z-20"
            >
              {/* Logo Container (steady light makes it completely readable) */}
              <div className="bg-white/95 backdrop-blur-sm px-7 py-3.5 rounded-2xl border border-white shadow-[0_10px_30px_rgba(255,255,255,0.15)] flex items-center justify-center">
                <img 
                  src={logoImg} 
                  alt="Electro Video Logo" 
                  className="h-12 sm:h-16 w-auto object-contain" 
                />
              </div>

              {/* Tagline showing up inside the light flicker */}
              <div className="space-y-2">
                <p className="font-display font-black text-white text-xl sm:text-2xl leading-tight uppercase tracking-wide">
                  "Con Electro Video tus proyectos
                </p>
                <p className="font-display font-black text-electric-yellow text-xl sm:text-2xl leading-tight uppercase tracking-wide animate-pulse">
                  nunca se quedan a oscuras"
                </p>
              </div>

              {/* Guidance / Status indicator */}
              <div className="flex items-center gap-2.5 mt-3 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 shadow-inner">
                <Zap className="w-4 h-4 text-electric-yellow animate-bounce fill-current" />
                <span className="text-[10px] sm:text-xs uppercase font-display font-black tracking-widest text-slate-300">
                  ENERGIZANDO SISTEMA...
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
