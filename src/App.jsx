import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import History from './components/History';
import Solutions from './components/Solutions';
import Products from './components/Products';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PowerSplash from './components/PowerSplash';

export default function App() {
  const [isPowerOn, setIsPowerOn] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-electric-red selection:text-white overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        {!isPowerOn ? (
          // Dark Screen: Electrical Switch Splash Page
          <PowerSplash 
            key="splash" 
            onPowerOn={() => setIsPowerOn(true)} 
          />
        ) : (
          // Light Screen: Unified Classic Landing Page content
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            {/* Subtle light background grids */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-electric-red/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

            {/* Dynamic Sticky Header Navigation */}
            <Navbar />

            {/* Main Sections */}
            <main className="relative z-10">
              {/* Hero Section */}
              <Hero />
              
              {/* About Us (Quiénes Somos) Section */}
              <AboutUs />
              
              {/* History (Línea de Tiempo) Section */}
              <History />
              
              {/* Solutions (Qué Solucionamos) Section */}
              <Solutions />
              
              {/* Products (Catálogo y Consultas) Section */}
              <Products />
              
              {/* Brands (Marcas Líderes) Section */}
              <Brands />
              
              {/* Contact (Formulario y Mapa) Section */}
              <Contact />
            </main>

            {/* Footer Details */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
