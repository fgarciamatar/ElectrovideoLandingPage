import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Zap, 
  ShieldAlert, 
  Truck, 
  Sparkles, 
  Building2, 
  Factory, 
  UserCheck, 
  Home 
} from 'lucide-react';

const solutions = [
  {
    icon: ShieldAlert,
    problem: '¿Demoras por falta de stock?',
    solution: 'Stock Inmediato',
    description: 'Disponemos de cables, cañerías, térmicas y tableros listos para entrega inmediata hoy mismo en Concepción.',
    badge: 'Sin Esperas',
    color: 'text-electric-red bg-electric-red/5 border-electric-red/10',
  },
  {
    icon: Lightbulb,
    problem: '¿Dudas en el cálculo?',
    solution: 'Asesoría Especializada',
    description: 'Nuestro equipo te asesora sin cargo en el dimensionamiento de conductores y selección de protecciones.',
    badge: 'Soporte Gratis',
    color: 'text-electric-yellow-dim bg-electric-yellow/10 border-electric-yellow/10',
  },
  {
    icon: Zap,
    problem: '¿Riesgo en la instalación?',
    solution: 'Materiales Homologados',
    description: 'Cumplimos con las normativas AEA e IRAM. Te brindamos certificados de calidad listos para EDET.',
    badge: 'Seguro',
    color: 'text-slate-700 bg-slate-100 border-slate-200',
  },
  {
    icon: Truck,
    problem: '¿Cómo transportar rollos y caños?',
    solution: 'Envío Express a Obra',
    description: 'Contamos con logística propia para entregar bobinas y caños largos directo a tu obra sin demoras.',
    badge: 'En el Día',
    color: 'text-electric-red bg-electric-red/5 border-electric-red/10',
  },
];

const segments = [
  {
    icon: Building2,
    title: 'Empresas',
    desc: 'Línea completa para locales y desarrollos comerciales.',
    color: 'text-electric-red bg-electric-red/5 border-electric-red/10',
  },
  {
    icon: Factory,
    title: 'Industrias',
    desc: 'Equipamiento industrial, tableros y conductores pesados.',
    color: 'text-electric-yellow-dim bg-electric-yellow/10 border-electric-yellow/10',
  },
  {
    icon: UserCheck,
    title: 'Profesionales y Electricistas',
    desc: 'Atención preferencial y stock constante para instaladores.',
    color: 'text-slate-700 bg-slate-100 border-slate-200',
  },
  {
    icon: Home,
    title: 'Hogares',
    desc: 'Iluminación decorativa y la máxima seguridad para tu familia.',
    color: 'text-electric-red bg-electric-red/5 border-electric-red/10',
  },
];

export default function Solutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="soluciones" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-electric-red/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-red/5 border border-electric-red/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-electric-red" />
            <span className="font-display text-[10px] font-extrabold tracking-widest text-electric-red uppercase">
              Servicios y Soluciones
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6"
          >
            Una Respuesta para Cada <span className="text-electric-yellow-dim">Proyecto</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-slate-600 font-sans font-light text-lg leading-relaxed"
          >
            Acompañamos tu obra desde el plano inicial hasta la última bombilla con asesoría técnica líder y logística ágil.
          </motion.p>
        </div>

        {/* TOP ROW: Nuestro Servicio & Segmentos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* LEFT: Nuestro Servicio Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl relative overflow-hidden"
          >
            <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-red to-electric-yellow-dim"></span>
            
            <span className="text-xs font-bold text-electric-red uppercase tracking-wider mb-2 block">
              NUESTRO COMPROMISO
            </span>
            
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-6">
              Nuestro Servicio
            </h3>
            
            <div className="space-y-4 text-slate-600 font-sans text-base font-normal leading-relaxed text-left">
              <p>
                Brindarte una amplia gama de productos para ofrecer una <strong className="text-slate-800">línea completa de soluciones</strong> de electricidad e iluminación para aplicaciones residenciales, comerciales e industriales. Contamos con un servicio de <strong className="text-slate-800">asesoramiento personalizado y exclusivo</strong> para acompañarte en cada uno de tus proyectos.
              </p>
              
              <p className="border-t border-slate-100 pt-4 text-slate-500 font-light text-sm sm:text-base">
                Nos dedicamos a proveer un <strong className="font-semibold text-slate-700">catálogo integral de materiales eléctricos e iluminación</strong> adaptado a las exigencias de proyectos residenciales, comerciales e industriales. Más que vender productos, brindamos un <strong className="font-semibold text-slate-700">respaldo técnico personalizado</strong> para asegurar el éxito y la eficiencia de cada una de tus obras.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Target Segments Stack */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {segments.map((seg, sIdx) => {
              const SegIcon = seg.icon;
              return (
                <motion.div
                  key={sIdx}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:border-slate-300 text-left"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${seg.color}`}>
                    <SegIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-1">
                      {seg.title}
                    </h4>
                    <p className="text-slate-500 font-sans text-xs sm:text-sm font-normal leading-normal">
                      {seg.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* BOTTOM ROW: Nuestras Soluciones */}
        <div className="border-t border-slate-200/60 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-electric-red uppercase tracking-widest mb-2 block">
              VENTAJAS DE ELEGIRNOS
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
              ¿Qué Solucionamos por Vos?
            </h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-col items-start text-left group relative overflow-hidden transition-all duration-300"
                >
                  {/* Hover backdrop glow */}
                  <span className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                  {/* Badge */}
                  <span className="text-[9px] uppercase tracking-widest font-black text-electric-red border border-electric-red/30 bg-electric-red/5 px-2.5 py-0.5 rounded-full mb-4 relative z-10">
                    {item.badge}
                  </span>

                  {/* Icon Box */}
                  <div className={`p-3 rounded-xl border mb-4 transition-all duration-300 group-hover:scale-105 relative z-10 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Problem statement */}
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 relative z-10">
                    {item.problem}
                  </span>

                  {/* Solution Title */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 mb-2 relative z-10 group-hover:text-electric-red transition-colors duration-300">
                    {item.solution}
                  </h3>

                  {/* Solution Description */}
                  <p className="text-slate-500 font-sans text-xs sm:text-sm font-normal leading-relaxed relative z-10">
                    {item.description}
                  </p>

                  {/* Bottom line accent */}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-red to-electric-yellow-dim transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
