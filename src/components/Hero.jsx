import { motion } from 'framer-motion';
import { ArrowRight, Zap, Award, ShieldCheck, MapPin } from 'lucide-react';
import storefrontImg from '../assets/storefront.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-slate-100"
    >
      {/* Background Storefront Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={storefrontImg}
          alt="Electro Video Sucursal Concepción"
          className="w-full h-full object-cover object-[center_35%] select-none animate-fade-in"
        />
        {/* Soft light overlay that unifies the layout and ensures the classic, light-themed aesthetic */}
        <div className="absolute inset-0 bg-white/40 md:bg-white/35 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Decorative Moving Electric Sparks */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 right-[10%] w-2.5 h-2.5 rounded-full bg-electric-yellow shadow-md"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-[5%] w-3 h-3 rounded-full bg-electric-red shadow-md"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column inside a Premium Classic Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 xl:col-span-7 text-left flex flex-col items-start bg-white/95 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-3xl border border-slate-200/80 shadow-2xl"
          >
            {/* Status / Location Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-electric-red animate-pulse"></span>
              <span className="font-display text-xs font-extrabold tracking-widest text-slate-700 uppercase">
                Concepción, Tucumán
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-none mb-6"
            >
              Energía y Potencia <br />
              <span className="bg-gradient-to-r from-electric-red to-electric-yellow-dim bg-clip-text text-transparent filter drop-shadow-sm">
                Para tus Proyectos
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-xl mb-8"
            >
              En <strong>Electro Video</strong> proveemos materiales eléctricos de alta calidad para obras residenciales, comerciales e industriales. Encontrá soluciones seguras, stock inmediato y la mejor atención en el sur tucumano.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#productos"
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-electric-red hover:bg-slate-900 text-white font-display font-extrabold text-base tracking-wider transition-all duration-300 shadow-md shadow-electric-red/10 active:scale-95"
              >
                Explorar Catálogo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-display font-extrabold text-base tracking-wider transition-all duration-300 active:scale-95 shadow-sm"
              >
                <Zap className="w-5 h-5 text-electric-red fill-current" />
                Asesoramiento Técnico
              </a>
            </motion.div>

            {/* Mini Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 mt-6 border-t border-slate-200/60 w-full"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-electric-red shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Materiales Homologados</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-electric-yellow-dim shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Stock Garantizado</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Zap className="w-5 h-5 text-electric-red shrink-0 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Distribución Local</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column Spacer (Leaves space to see storefront backdrop) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5"></div>

        </div>
      </div>

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 text-slate-50 fill-current">
          <path d="M1200 120L0 120L0 0L1200 100Z"></path>
        </svg>
      </div>
    </section>
  );
}
