import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Zap, Shield, ArrowUpRight, HelpCircle } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'conductores', name: 'Conductores' },
  { id: 'proteccion', name: 'Protección y Tableros' },
  { id: 'iluminacion', name: 'Iluminación' },
  { id: 'canalizacion', name: 'Canalización' },
];

const productsList = [
  {
    id: 1,
    category: 'conductores',
    name: 'Cable Unipolar Imsa Plastix CF',
    spec: 'Cobre electrolítico flexible de 2.5 mm² - Norma IRAM 247-3',
    desc: 'Ideal para instalaciones fijas interiores en cañerías o tableros. Alta flexibilidad y excelente deslizamiento.',
    status: 'Stock Inmediato',
    whatsappMsg: 'Hola! Quiero consultar stock y precio del Cable Unipolar Imsa de 2.5mm.',
  },
  {
    id: 2,
    category: 'conductores',
    name: 'Cable Subterráneo Sintenax Prysmian',
    spec: 'Cobre electrolítico flexible 3x4 mm² - PVC Violeta XLPE',
    desc: 'Diseñado para alimentación eléctrica industrial o residencial a la intemperie o directamente enterrado.',
    status: 'Stock Inmediato',
    whatsappMsg: 'Hola! Quiero consultar stock y precio del Cable Subterráneo Sintenax 3x4mm.',
  },
  {
    id: 3,
    category: 'proteccion',
    name: 'Interruptor Termomagnético Schneider Acti9',
    spec: 'Bipolar de 16A/20A/25A - Curva C - Poder de corte 4.5kA',
    desc: 'Máxima protección contra sobrecargas y cortocircuitos. Ideal para tableros residenciales de alto nivel.',
    status: 'Consumo Masivo',
    whatsappMsg: 'Hola! Quisiera consultar sobre las Llaves Térmicas Schneider Acti9.',
  },
  {
    id: 4,
    category: 'proteccion',
    name: 'Interruptor Diferencial Sica (Disyuntor)',
    spec: 'Bipolar de 25A / 40A - Sensibilidad de 30mA',
    desc: 'Protección vital contra contactos directos e indirectos, garantizando la seguridad de tu familia y personal.',
    status: 'Seguridad Obligatoria',
    whatsappMsg: 'Hola! Quisiera consultar sobre el Disyuntor Bipolar Sica.',
  },
  {
    id: 5,
    category: 'iluminacion',
    name: 'Reflector LED Philips Tango G3',
    spec: 'Potencia 100W / 150W / 200W - Flujo luminoso 120lm/W',
    desc: 'Proyector LED exterior de alta eficiencia ideal para frentes de comercios, canchas o depósitos industriales.',
    status: 'Alta Luminosidad',
    whatsappMsg: 'Hola! Quiero consultar stock del Reflector LED Philips Tango G3 de 100W.',
  },
  {
    id: 6,
    category: 'iluminacion',
    name: 'Panel LED Embutir Kalop Redondo/Cuadrado',
    spec: 'Potencia 18W - Luz Cálida/Fría - Diámetro 22cm',
    desc: 'Iluminación moderna y minimalista empotrable en cielorrasos de placas de yeso. Distribución lumínica uniforme.',
    status: 'Estética Premium',
    whatsappMsg: 'Hola! Quisiera averiguar por los Paneles LED Kalop de embutir de 18W.',
  },
  {
    id: 7,
    category: 'canalizacion',
    name: 'Caño Corrugado Reforzado Kalop',
    spec: 'Medida 3/4" - Color Naranja Ignífugo - IRAM 62386',
    desc: 'Caño de PVC flexible con retardador de llama de alta resistencia al aplastamiento, apto para losas de hormigón.',
    status: 'Stock Masivo',
    whatsappMsg: 'Hola! Quiero consultar por rollos de Caño Corrugado Naranja Kalop de 3/4".',
  },
  {
    id: 8,
    category: 'canalizacion',
    name: 'Caja Estanca de Paso Daisa',
    spec: 'Medida 150x150x80 mm - PVC IP65 - Con conos pasacables',
    desc: 'Caja estanca para empalmes exteriores protegida contra el agua, humedad y polvo. Alta durabilidad.',
    status: 'Uso Exterior',
    whatsappMsg: 'Hola! Quisiera consultar por las Cajas Estancas de Paso Daisa.',
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? productsList 
    : productsList.filter(prod => prod.category === activeTab);

  const getWhatsAppLink = (msg) => {
    return `https://wa.me/5493865000000?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="productos" className="py-24 bg-white relative overflow-hidden electric-grid-red">
      {/* Subtle Glow Effects (Light Mode) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-red/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-electric-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-yellow/10 border border-electric-yellow/30 mb-4"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-electric-yellow-dim" />
            <span className="font-display text-[10px] font-extrabold tracking-widest text-electric-yellow-dim uppercase">
              Catálogo
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6"
          >
            Materiales <span className="text-electric-red">Destacados</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-slate-600 font-sans font-light text-lg leading-relaxed"
          >
            Explorá algunas de nuestras categorías más vendidas. Consultanos directamente por WhatsApp para presupuestos a medida o pedidos especiales.
          </motion.p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-full font-display text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md shadow-electric-red/10'
                    : 'text-slate-600 hover:text-slate-900 border border-slate-200 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProductTab"
                    className="absolute inset-0 bg-gradient-to-r from-electric-red to-electric-yellow-dim rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={prod.id}
                className="group relative flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-md hover:border-electric-red/40 hover:shadow-lg transition-all duration-500 cursor-default text-left"
              >
                {/* Decorative electric glow line */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-red to-electric-yellow-dim opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></span>

                {/* Top Info row */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] uppercase tracking-widest text-electric-red font-black">
                    {prod.category}
                  </span>
                  
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded border border-slate-200">
                    {prod.status}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="font-display font-extrabold text-base text-slate-900 mb-2 line-clamp-2 group-hover:text-electric-red transition-colors duration-300">
                  {prod.name}
                </h3>

                {/* Specification (IRAM/Tech Details) */}
                <div className="flex items-start gap-1.5 mb-4 p-2.5 rounded bg-white border border-slate-200">
                  <Shield className="w-3.5 h-3.5 text-electric-yellow-dim shrink-0 mt-0.5" />
                  <span className="text-[10px] text-slate-600 font-sans font-semibold leading-relaxed">
                    {prod.spec}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-500 font-sans text-xs font-light leading-relaxed mb-6 line-clamp-3">
                  {prod.desc}
                </p>

                {/* Push WhatsApp Action to bottom */}
                <div className="mt-auto pt-4 border-t border-slate-200">
                  <a
                    href={getWhatsAppLink(prod.whatsappMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 border-electric-red bg-transparent text-electric-red font-display text-xs font-extrabold tracking-wider uppercase hover:bg-electric-red hover:text-white hover:shadow-md transition-all duration-300"
                  >
                    Consultar Stock
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Heavy Catalog Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-center relative overflow-hidden"
        >
          {/* Subtle grid in callout */}
          <div className="absolute inset-0 electric-grid opacity-5"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 mb-2 flex items-center gap-2">
                <Zap className="w-6 h-6 text-electric-red fill-current animate-bounce" />
                ¿Buscás una marca específica o un pedido al por mayor?
              </h3>
              <p className="text-slate-600 font-sans text-sm font-light max-w-xl">
                Trabajamos con más de 30 marcas líderes nacionales e internacionales. Envianos tu pliego de obra o lista de materiales y te cotizamos en menos de 2 horas.
              </p>
            </div>
            
            <a
              href="https://wa.me/5493865000000?text=Hola!%20Tengo%20un%20pliego%20de%20materiales%20eléctricos%20y%20quiero%20cotizar."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-xl bg-electric-yellow-dim hover:bg-slate-900 text-white font-display font-extrabold text-sm tracking-wider uppercase transition-all duration-300 shrink-0"
            >
              <HelpCircle className="w-5 h-5 fill-current" />
              Cotizar Pliego / Obra
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
