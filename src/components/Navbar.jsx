import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Zap } from 'lucide-react';
import logoImg from '../assets/Logo.png';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Quiénes Somos', href: '#quienes-somos' },
  { name: 'Historia', href: '#historia' },
  { name: 'Soluciones', href: '#soluciones' },
  { name: 'Productos', href: '#productos' },
  { name: 'Marcas', href: '#marcas' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for custom underline
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'inicio';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm' 
            : 'py-5 bg-white/80 border-b border-slate-100 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area - No white box needed since header is already light! */}
            <a href="#inicio" className="group flex items-center justify-center transform hover:scale-102 transition-transform duration-300">
              <img 
                src={logoImg} 
                alt="Electro Video Logo" 
                className="h-10 sm:h-12 w-auto object-contain" 
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const target = link.href.substring(1);
                const isActive = activeSection === target;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 font-display text-sm font-bold tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-electric-red' : 'text-slate-600 hover:text-electric-red'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-2 right-2 h-[3px] bg-gradient-to-r from-electric-red to-electric-yellow rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA WhatsApp Button */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/5493865000000"
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-red text-white font-display text-sm font-extrabold tracking-wider hover:bg-slate-900 transition-all duration-300 shadow-md shadow-electric-red/20 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar Ahora</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200/55"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-b border-slate-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => {
                  const target = link.href.substring(1);
                  const isActive = activeSection === target;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-display text-base font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-slate-50 text-electric-red border-l-4 border-electric-red'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Zap className={`w-4 h-4 ${isActive ? 'text-electric-yellow' : 'text-slate-400'}`} />
                      {link.name}
                    </a>
                  );
                })}
                <div className="pt-4 px-4">
                  <a
                    href="https://wa.me/5493865000000"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-electric-red text-white font-display font-extrabold shadow-md shadow-electric-red/10"
                  >
                    <Phone className="w-4 h-4" />
                    Contactar Vía WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
