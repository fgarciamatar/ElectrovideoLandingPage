import { Zap, Heart, Phone } from 'lucide-react';
import logoImg from '../assets/Logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden text-left">
      {/* Decorative lightning bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-red via-electric-yellow-dim to-electric-red"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <a href="#inicio" className="group block w-fit">
              <div className="relative h-11 px-3 bg-white rounded-lg border border-electric-red/40 group-hover:border-electric-yellow transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_20px_rgba(255,42,42,0.35)] group-hover:scale-103 transform flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Electro Video Logo"
                  className="h-8 w-auto object-contain"
                />
                {/* Micro voltage spark effect on hover */}
                <div className="absolute -top-1.5 -right-1.5 p-0.5 rounded-full bg-electric-black border border-electric-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(255,215,0,0.6)]">
                  <Zap className="w-2.5 h-2.5 text-electric-yellow fill-current animate-pulse" />
                </div>
              </div>
            </a>

            <p className="text-slate-400 font-sans text-xs font-light leading-relaxed">
              Distribuidor de confianza de materiales eléctricos industriales, comerciales y residenciales en Concepción, Tucumán. Más de 20 años energizando tus proyectos con calidad homologada.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://wa.me/5493865000000"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6 border-l-2 border-electric-red pl-3">
              Navegación
            </h4>
            <ul className="space-y-3 font-sans text-xs font-semibold text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors duration-200">Inicio</a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors duration-200">Quiénes Somos</a>
              </li>
              <li>
                <a href="#historia" className="hover:text-white transition-colors duration-200">Nuestra Historia</a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors duration-200">Qué Solucionamos</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors duration-200">Materiales y Catálogo</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Category Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6 border-l-2 border-electric-yellow-dim pl-3">
              Categorías
            </h4>
            <ul className="space-y-3 font-sans text-xs font-semibold text-slate-400">
              <li>
                <a href="#productos" className="hover:text-white transition-colors duration-200">Cables y Conductores</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors duration-200">Térmicas y Disyuntores</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors duration-200">Artefactos LED e Iluminación</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors duration-200">Caños Corrugados y PVC</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors duration-200">Tableros de Paso y Gabinetes</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6 border-l-2 border-white pl-3">
              Sucursal Concepción
            </h4>
            <div className="text-xs font-sans text-slate-400 space-y-3 font-semibold">
              <p className="leading-relaxed">
                Italia 1526, <br />
                Concepción, Tucumán, Argentina
              </p>
              <p className="text-white font-bold">
                T: +54 3865 421-234
              </p>
              <p className="text-electric-yellow hover:underline">
                E: contacto@electrovideo.com.ar
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 mt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-500 font-sans font-medium text-center sm:text-left">
            &copy; {currentYear} Electro Video. Todos los derechos reservados. Concepción, Tucumán, AR.
          </p>

          <p className="text-[10px] text-slate-500 font-sans font-medium flex items-center gap-1.5">
            by BUBU.
          </p>
        </div>

      </div>
    </footer>
  );
}
