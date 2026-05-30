import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Zap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      tempErrors.email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'El formato de correo no es válido.';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'El teléfono es obligatorio.';
    }
    if (!formData.message.trim()) tempErrors.message = 'El mensaje no puede estar vacío.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API submit
      setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden electric-grid">
      {/* Background Subtle Glow (Light Mode) */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-yellow/10 border border-electric-yellow/30 mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5 text-electric-yellow-dim" />
            <span className="font-display text-[10px] font-extrabold tracking-widest text-electric-yellow-dim uppercase">
              Contacto
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6"
          >
            Hablemos de tu <span className="text-electric-red">Próxima Obra</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-slate-600 font-sans font-light text-lg leading-relaxed"
          >
            ¿Necesitás presupuestar materiales, solicitar asesoramiento o comprar al por mayor? Envianos un mensaje o visitanos en nuestro local comercial.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Info & Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-6">
              Información de <span className="text-electric-red">Contacto</span>
            </h3>

            {/* Address */}
            <div className="flex gap-4 items-start group">
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-electric-red group-hover:bg-electric-red group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider">Dirección Local</h4>
                <p className="text-slate-800 text-base mt-1 font-extrabold">Italia 1526, Concepción, Tucumán</p>
                <span className="text-xs text-slate-500 font-light mt-0.5 block">Frente a la plaza principal, Concepción.</span>
              </div>
            </div>

            {/* Phone */}
            <a href="tel:+5493865000000" className="flex gap-4 items-start group cursor-pointer block">
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-electric-yellow-dim group-hover:bg-electric-yellow-dim group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider">Teléfono Ventas</h4>
                <p className="text-slate-800 text-base mt-1 font-extrabold group-hover:text-electric-red transition-colors duration-300">+54 3865 421-234</p>
                <span className="text-xs text-slate-500 font-light mt-0.5 block">Lunes a Viernes de 8:00 a 12:30 y 16:30 a 20:30 hs. Sábados de 8:30 a 13:00 hs.</span>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:contacto@electrovideo.com.ar" className="flex gap-4 items-start group cursor-pointer block">
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider">Correo Electrónico</h4>
                <p className="text-slate-800 text-base mt-1 font-extrabold group-hover:text-electric-red group-hover:underline transition-colors duration-300">contacto@electrovideo.com.ar</p>
                <span className="text-xs text-slate-500 font-light mt-0.5 block">Te respondemos en menos de 24 horas hábiles.</span>
              </div>
            </a>

            {/* Mini Map Iframe (Concepción, Tucumán) - Colored (grayscale/invert filters removed) */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-60 bg-slate-50 group">
              <iframe
                title="Electro Video Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.455118742211!2d-65.60252199999999!3d-27.345851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf94bbbbbbbb%3A0xabcdef1234567890!2sConcepci%C3%B3n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1717000000000!5m2!1ses!2sar"
                className="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-3 right-3 py-1 px-2.5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 pointer-events-none">
                <Zap className="w-3.5 h-3.5 text-electric-red animate-pulse" />
                <span className="text-[10px] font-black uppercase text-slate-800 tracking-widest">Nuestra Sucursal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl relative"
            >
              {/* Form border accent */}
              <span className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-electric-red to-electric-yellow-dim rounded-l-3xl"></span>

              <h3 className="font-display font-black text-2xl text-slate-900 mb-6 text-left">
                Envianos un <span className="text-electric-red">Mensaje</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Nombre y Apellido *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-slate-900 font-sans text-sm font-semibold focus:outline-none transition-all duration-300 ${errors.name
                        ? 'border-electric-red focus:shadow-sm'
                        : 'border-slate-300 focus:border-electric-red focus:shadow-md'
                      }`}
                    placeholder="Ej. Juan Pérez"
                  />
                  {errors.name && <p className="text-electric-red text-xs font-semibold mt-1.5">{errors.name}</p>}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border text-slate-900 font-sans text-sm font-semibold focus:outline-none transition-all duration-300 ${errors.email
                          ? 'border-electric-red focus:shadow-sm'
                          : 'border-slate-300 focus:border-electric-red focus:shadow-md'
                        }`}
                      placeholder="Ej. juan@correo.com"
                    />
                    {errors.email && <p className="text-electric-red text-xs font-semibold mt-1.5">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Teléfono / WhatsApp *</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border text-slate-900 font-sans text-sm font-semibold focus:outline-none transition-all duration-300 ${errors.phone
                          ? 'border-electric-red focus:shadow-sm'
                          : 'border-slate-300 focus:border-electric-red focus:shadow-md'
                        }`}
                      placeholder="Ej. 3865456789"
                    />
                    {errors.phone && <p className="text-electric-red text-xs font-semibold mt-1.5">{errors.phone}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Detalles del Pedido o Consulta *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-slate-900 font-sans text-sm font-semibold focus:outline-none transition-all duration-300 ${errors.message
                        ? 'border-electric-red focus:shadow-sm'
                        : 'border-slate-300 focus:border-electric-red focus:shadow-md'
                      }`}
                    placeholder="Escribí detalladamente tu consulta, pliego de materiales o el tipo de obra..."
                  ></textarea>
                  {errors.message && <p className="text-electric-red text-xs font-semibold mt-1.5">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-electric-red hover:bg-slate-900 text-white font-display font-extrabold text-base tracking-wider uppercase transition-all duration-300 shadow-md shadow-electric-red/10 disabled:opacity-50 active:scale-98"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Enviar Consulta
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Success Banner */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-600 mt-4 font-semibold"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0 text-emerald-500" />
                      <div className="text-xs font-sans">
                        ¡Mensaje enviado con éxito! Nos pondremos en contacto con vos a la brevedad.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
