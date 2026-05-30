import { motion } from 'framer-motion';
import { Users, ShieldCheck, Landmark, Heart } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Años en Concepción' },
  { value: '15.000+', label: 'Productos en Stock' },
  { value: '30+', label: 'Marcas Líderes' },
  { value: '5.000+', label: 'Clientes Satisfechos' },
];

const values = [
  {
    icon: Landmark,
    title: 'Compromiso Local',
    description: 'Nacimos y crecemos en Concepción, Tucumán. Conocemos a cada electricista, constructor e industria del sur de la provincia y brindamos soluciones adaptadas a nuestra región.',
    color: 'text-electric-red bg-electric-red/5',
    borderColor: 'hover:border-electric-red/40',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad Homologada',
    description: 'Cada cable, interruptor y luminaria que vendemos cumple estrictamente con las normas IRAM y certificaciones de seguridad eléctrica vigentes en el país.',
    color: 'text-electric-yellow-dim bg-electric-yellow/10',
    borderColor: 'hover:border-electric-yellow-dim/40',
  },
  {
    icon: Users,
    title: 'Asesoramiento Experto',
    description: 'No somos solo despachantes. Nuestro equipo técnico te ayuda a realizar los cálculos de carga, diagramación de tableros y elección óptima de materiales.',
    color: 'text-slate-700 bg-slate-100',
    borderColor: 'hover:border-slate-400/40',
  },
];

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="quienes-somos" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Radial Glow (Light Mode) */}
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      
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
            <Heart className="w-3.5 h-3.5 text-electric-red" />
            <span className="font-display text-[10px] font-extrabold tracking-widest text-electric-red uppercase">
              Nosotros
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6"
          >
            Quiénes Somos en <span className="text-electric-red">Electro Video</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-slate-600 font-sans font-light text-lg leading-relaxed"
          >
            Somos una empresa familiar tucumana dedicada a proveer materiales eléctricos de excelencia. Nos caracterizamos por el stock permanente, precios competitivos y un servicio personalizado que garantiza que tus proyectos nunca se queden a oscuras.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-electric-red/30 transition-all duration-300"
            >
              {/* Decorative corner indicator */}
              <span className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-slate-100 to-transparent group-hover:from-electric-red/10 transition-all duration-300 rounded-tr-xl"></span>
              
              <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight group-hover:text-electric-red transition-colors duration-300">
                {stat.value}
              </span>
              <span className="text-slate-500 text-xs sm:text-sm font-bold tracking-wider uppercase mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-col items-start text-left group transition-all duration-500 cursor-default ${val.borderColor}`}
              >
                <div className={`p-4 rounded-xl border border-slate-100 mb-6 group-hover:bg-slate-50 transition-colors duration-300 ${val.color}`}>
                  <Icon className="w-6 h-6 group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mb-4 group-hover:text-electric-red transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-slate-600 transition-colors duration-300 font-sans text-sm font-light leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
