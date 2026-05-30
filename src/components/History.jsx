import { motion } from 'framer-motion';
import { History as HistoryIcon, Zap, CheckCircle2 } from 'lucide-react';

const milestones = [
  {
    year: '1998',
    title: 'Fundación en Concepción',
    description: 'Electro Video inicia sus operaciones en Concepción, Tucumán, con el objetivo de ofrecer componentes eléctricos de calidad y una atención personalizada que no existía en el sur provincial.',
    icon: Zap,
    color: 'border-electric-red text-electric-red bg-electric-red/5',
  },
  {
    year: '2005',
    title: 'Ampliación e Iluminación',
    description: 'Nos trasladamos a un salón comercial más amplio. Incorporamos una importante división de iluminación residencial y comercial, y firmamos acuerdos directos de distribución con marcas nacionales.',
    icon: CheckCircle2,
    color: 'border-electric-yellow-dim text-electric-yellow-dim bg-electric-yellow/10',
  },
  {
    year: '2014',
    title: 'Salto al Sector Industrial',
    description: 'Electro Video amplía su alcance técnico para proveer materiales eléctricos de media tensión, tableros industriales y automatización, apoyando el crecimiento de las industrias azucareras y agrícolas de Tucumán.',
    icon: Zap,
    color: 'border-slate-400 text-slate-700 bg-slate-50',
  },
  {
    year: '2021',
    title: 'Logística Express y Flota Nueva',
    description: 'Adquirimos unidades móviles de distribución para realizar envíos express de materiales directo a obra en Concepción, Aguilares, Monteros y zonas aledañas, garantizando stock sin demoras.',
    icon: CheckCircle2,
    color: 'border-electric-red text-electric-red bg-electric-red/5',
  },
  {
    year: 'Presente',
    title: 'Líderes en Materiales Eléctricos',
    description: 'Hoy somos la empresa de referencia del sector en el sur de Tucumán. Seguimos capacitándonos y expandiendo nuestro stock para conectar con seguridad cada uno de tus proyectos.',
    icon: Zap,
    color: 'border-electric-yellow-dim text-electric-yellow-dim bg-electric-yellow/10',
  },
];

export default function History() {
  return (
    <section id="historia" className="py-24 bg-white relative overflow-hidden electric-grid">
      {/* Background Subtle Glow (Light Mode) */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-yellow/10 border border-electric-yellow/30 mb-4"
          >
            <HistoryIcon className="w-3.5 h-3.5 text-electric-yellow-dim" />
            <span className="font-display text-[10px] font-extrabold tracking-widest text-electric-yellow-dim uppercase">
              Historia
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6"
          >
            Nuestra <span className="text-electric-red">Trayectoria</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-slate-600 font-sans font-light text-lg leading-relaxed"
          >
            Más de dos décadas iluminando Concepción y abasteciendo el crecimiento del sur de Tucumán con materiales eléctricos confiables.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line - Hidden in mobile, visible on medium screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-red to-electric-yellow-dim hidden md:block opacity-35"></div>

          <div className="space-y-16">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  className="flex flex-col md:flex-row items-center relative"
                >
                  {/* Timeline Badge (Center Dot) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex w-12 h-12 rounded-full border border-slate-200 items-center justify-center z-20 bg-white shadow-md transition-all duration-300 hover:scale-110 hover:border-electric-red">
                    <Icon className="w-5 h-5 text-electric-red" />
                  </div>

                  {/* Left Column (Milestone Card on Even, Spacer on Odd) */}
                  <div className={`w-full md:w-1/2 flex justify-center md:justify-end ${isEven ? 'md:pr-16' : 'md:pl-16 md:order-2 md:justify-start'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.8, type: 'spring' }}
                      whileHover={{ scale: 1.02 }}
                      className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-md hover:border-electric-red/30 transition-all duration-300 relative group text-left"
                    >
                      {/* Left glowing border on hover */}
                      <span className="absolute left-0 top-6 bottom-6 w-1 bg-electric-red rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                      {/* Year badge */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-display font-black text-2xl text-electric-yellow-dim">
                          {item.year}
                        </span>
                        
                        <div className="md:hidden p-2 rounded-full border border-slate-200 bg-white">
                          <Icon className="w-4 h-4 text-electric-red" />
                        </div>
                      </div>

                      <h3 className="font-display font-extrabold text-lg text-slate-900 mb-3 group-hover:text-electric-red transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 font-sans text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Column (Milestone Card on Odd, Spacer on Even) */}
                  <div className={`w-full md:w-1/2 hidden md:block ${isEven ? 'order-2 pl-16' : 'pr-16'}`}>
                    {/* Empty spacer for matching timeline geometry */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
