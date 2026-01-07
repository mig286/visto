import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { 
  Instagram, Linkedin,
  Clock, Users, MessageSquare, Send, CheckCircle2,
  Box, Eye, Zap, ChevronRight
} from 'lucide-react';

/* --- COMPONENTE DE ANIMACIÓN REVEAL --- */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div 
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default function Contacto() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [needType, setNeedType] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'} selection:bg-lime-400 selection:text-black font-sans transition-colors duration-300`}>

      {/* --- PÁGINA DE CONTACTO --- */}
      <main className={`pt-24 pb-24 px-6 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Sección Principal */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Columna Informativa */}
            <div className="space-y-12">
              <Reveal>
                <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border ${
                  isDark
                    ? 'bg-lime-400/10 text-lime-400 border-lime-400/20'
                    : 'bg-lime-400/5 text-lime-600 border-lime-400/30'
                }`}>
                  Compromiso Visto
                </span>
                <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
                  TU DEMANDA <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">RESUELTA</span>
                </h1>
                <p className={`text-xl leading-relaxed max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Entender tus necesidades de manera explícita es nuestro lema. Diseñamos procesos interactivos para que tu visión se haga realidad sin complicaciones.
                </p>
              </Reveal>

              <div className="space-y-6">
                {[
                  { 
                    icon: Clock, 
                    title: "Respuesta en 48 Horas", 
                    desc: "Analizamos tu solicitud y te contactamos en menos de 48 horas para dar el primer paso." 
                  },
                  { 
                    icon: Users, 
                    title: "Representantes a tu disposición", 
                    desc: "Si el proyecto lo requiere, enviamos a un experto para entender tu entorno y necesidades de forma directa." 
                  },
                  { 
                    icon: MessageSquare, 
                    title: "Explicitud Total", 
                    desc: "Sin vueltas. Soluciones claras, interactivas y fáciles de entender para cumplir tu demanda." 
                  }
                ].map((item, i) => (
                  <Reveal key={i} delay={200 + (i * 100)}>
                    <div className={`flex gap-6 p-6 rounded-[2rem] border transition-colors ${
                      isDark
                        ? 'bg-white/[0.02] border-white/5 hover:border-lime-400/20'
                        : 'bg-black/[0.02] border-black/5 hover:border-lime-400/20'
                    } group`}>
                      <div className={`p-3 rounded-xl text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-500 ${
                        isDark ? 'bg-lime-400/10' : 'bg-lime-400/5'
                      }`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>{item.title}</h4>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Columna del Formulario */}
            <Reveal delay={400} className="lg:sticky lg:top-24">
              <div className={`border p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden transition-colors duration-300 ${
                isDark
                  ? 'bg-[#111] border-white/10 shadow-lime-400/5'
                  : 'bg-white border-gray-300 shadow-gray-400/10'
              }`}>
                {!submitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>Tu Nombre</label>
                        <input type="text" required placeholder="Ej. Juan Pérez" className={`w-full rounded-2xl px-5 py-4 focus:border-lime-400 outline-none transition-all ${
                          isDark 
                            ? 'bg-white/5 border border-white/10 placeholder:text-gray-700 text-white' 
                            : 'bg-gray-100 border border-gray-300 placeholder:text-gray-500 text-black'
                        }`} />
                      </div>
                      <div className="space-y-2">
                        <label className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>Empresa</label>
                        <input type="text" placeholder="Nombre de tu marca" className={`w-full rounded-2xl px-5 py-4 focus:border-lime-400 outline-none transition-all ${
                          isDark 
                            ? 'bg-white/5 border border-white/10 placeholder:text-gray-700 text-white' 
                            : 'bg-gray-100 border border-gray-300 placeholder:text-gray-500 text-black'
                        }`} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>Email de contacto</label>
                      <input type="email" required placeholder="contacto@empresa.com" className={`w-full rounded-2xl px-5 py-4 focus:border-lime-400 outline-none transition-all ${
                          isDark 
                            ? 'bg-white/5 border border-white/10 placeholder:text-gray-700 text-white' 
                            : 'bg-gray-100 border border-gray-300 placeholder:text-gray-500 text-black'
                        }`} />
                    </div>

                    <div className="space-y-2">
                      <label className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>Detalla tu demanda</label>
                      <textarea rows="4" required placeholder="Explícanos brevemente qué necesitas..." className={`w-full rounded-2xl px-5 py-4 focus:border-lime-400 outline-none transition-all resize-none ${
                          isDark 
                            ? 'bg-white/5 border border-white/10 placeholder:text-gray-700 text-white' 
                            : 'bg-gray-100 border border-gray-300 placeholder:text-gray-500 text-black'
                        }`}></textarea>
                    </div>

                    {/* Componente Interactivo de Prioridad */}
                    <div className={`pt-6 border-t ${isDark ? 'border-white/5' : 'border-gray-300'}`}>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <ChevronRight className="w-3 h-3 text-lime-400" /> 
                        Selecciona tu prioridad principal
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'vis', label: 'Estética', icon: Eye },
                          { id: 'fun', label: 'Funcional', icon: Box },
                          { id: 'vel', label: 'Entrega', icon: Zap }
                        ].map(opt => {
                          const IconComponent = opt.icon;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setNeedType(opt.id)}
                              className={`flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all ${
                                needType === opt.id 
                                  ? 'bg-lime-400 border-lime-400 text-black shadow-lg shadow-lime-400/20 scale-[1.02]' 
                                  : isDark
                                    ? 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20'
                                    : 'bg-gray-100 border-gray-300 text-gray-600 hover:border-gray-400'
                              }`}
                            >
                              <IconComponent className="w-5 h-5" />
                              <span className="text-[9px] font-black uppercase tracking-tighter">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button type="submit" className="w-full py-5 bg-lime-400 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-lime-300 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
                      Enviar Solicitud
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <div className="py-20 text-center animate-in fade-in slide-in-from-bottom duration-700">
                    <div className="w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-lime-400/30">
                      <CheckCircle2 className="w-12 h-12 text-black" />
                    </div>
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">SOLICITUD ENVIADA</h2>
                    <p className={`leading-relaxed max-w-xs mx-auto mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Hemos recibido tu demanda. Uno de nuestros representantes se pondrá en contacto contigo en las próximas 48 horas.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${
                        isDark
                          ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                          : 'bg-gray-200 border border-gray-300 hover:bg-gray-300'
                      }`}
                    >
                      Volver a escribir
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* --- COMPONENTE FINAL: ENTENDIENDO AL CONSUMIDOR --- */}
          <Reveal delay={600} className="mt-40 pt-20 border-t border-white/5">
            <div className="text-center mb-20">
              <span className="text-lime-400 text-[10px] font-black uppercase tracking-[0.4em]">Visión 360°</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter mt-4 uppercase">
                Entendemos la necesidad <br /> de tu consumidor
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Análisis Explícito",
                  desc: "Desglosamos cada aspecto de tu demanda para que la solución técnica sea 100% funcional.",
                  accent: "bg-lime-400"
                },
                {
                  title: "Diseño Interactivo",
                  desc: "Proponemos empaques que invitan al usuario a interactuar con tu producto desde el primer segundo.",
                  accent: "bg-emerald-500"
                },
                {
                  title: "Cumplimiento Total",
                  desc: "Nuestro proceso está optimizado para cumplir con tus plazos y estándares de calidad más altos.",
                  accent: "bg-blue-500"
                }
              ].map((card, i) => (
                <div key={i} className="group p-10 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 cursor-default">
                  <div className={`w-12 h-1 ${card.accent} mb-8 group-hover:w-full transition-all duration-700`}></div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-lime-400 transition-colors">{card.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                  <span className="font-black text-black text-sm">V</span>
                </div>
                <span className="text-xl font-black tracking-tighter">VISTO</span>
              </div>
              <p className="text-gray-600 text-xs uppercase tracking-widest font-bold">Entendiendo tus necesidades desde 2024</p>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-lime-400 hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-lime-400 hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 text-center text-[10px] text-gray-700 font-bold uppercase tracking-[0.3em]">
            © Visto Industrial Design & Packaging - Todos los derechos reservados
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-in { animation: var(--tw-duration, 300ms) ease-out forwards; }
        .fade-in { animation-name: fade-in; }
        .slide-in-from-bottom { animation-name: slide-in-from-bottom; }
      `}</style>
    </div>
  );
}
