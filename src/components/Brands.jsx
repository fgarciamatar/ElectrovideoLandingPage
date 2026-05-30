import { motion } from 'framer-motion';
import { Award, Zap } from 'lucide-react';

const brands = [
  { name: 'Schneider', type: 'Alemania / Francia', focus: 'Térmicas y Protecciones' },
  { name: 'Sica', type: 'Argentina', focus: 'Hogar y Llaves' },
  { name: 'Prysmian', type: 'Italia', focus: 'Cables Sintenax' },
  { name: 'Philips', type: 'Países Bajos', focus: 'Iluminación LED' },
  { name: 'Kalop', type: 'Argentina', focus: 'Módulos y Caños' },
  { name: 'Jeluz', type: 'Argentina', focus: 'Llaves y Tomas' },
  { name: 'Steck', type: 'Brasil', focus: 'Tomas Industriales' },
  { name: 'Tubolectric', type: 'Argentina', focus: 'Canalización PVC' },
];

export default function Brands() {
  // Duplicate list to create seamless infinite scroll loop
  const scrollBrands = [...brands, ...brands];

  return (
    <section id="marcas" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Glow (Light Mode) */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-electric-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-red/5 border border-electric-red/20 mb-4"
          >
            <Award className="w-3.5 h-3.5 text-electric-red" />
            <span className="font-display text-[10px] font-extrabold tracking-widest text-electric-red uppercase">
              Partners
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-4xl text-slate-900"
          >
            Marcas <span className="text-electric-yellow-dim">Líderes</span> que Distribuimos
          </motion.h2>
          
          <p className="text-slate-600 font-sans text-sm font-light mt-4">
            Solo trabajamos con fabricantes prestigiosos que garantizan la máxima seguridad y durabilidad.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="w-full overflow-hidden relative flex py-4 bg-white border-y border-slate-200">
        {/* Shadow overlays on edges for smooth vignette */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        {/* Moving track */}
        <div className="flex gap-6 animate-infinite-scroll min-w-full">
          {scrollBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col justify-center px-8 py-5 rounded-xl bg-slate-50 border border-slate-200/70 shadow-sm min-w-[200px] hover:border-electric-red/30 transition-all duration-300 relative group cursor-pointer text-left"
            >
              <Zap className="absolute top-3 right-3 w-3 h-3 text-electric-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              
              <span className="font-display font-black text-lg text-slate-800 group-hover:text-electric-red transition-colors duration-300">
                {brand.name}
              </span>
              
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
                {brand.type}
              </span>
              
              <span className="text-[10px] text-slate-600 font-sans font-semibold mt-2 border-t border-slate-200 pt-2">
                {brand.focus}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
