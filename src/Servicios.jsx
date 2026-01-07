import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { 
  Instagram, Linkedin, ArrowRight, ArrowUpRight,
  Package, Cpu, Globe, BarChart3, Camera, 
  ShieldCheck, Zap, ChevronRight, CheckCircle2,
  Box, Sparkles, Database, HeartPulse, Shirt,
  FileText, Search, PenTool, Layout, Play
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

export default function Servicios() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [activePillar, setActivePillar] = useState('fisico');

  // Datos estructurados con imágenes de fondo para cada pilar
  const pillars = {
    fisico: {
      id: 'fisico',
      title: "Diseño & Producción",
      subtitle: "Materializamos tu Marca",
      description: "Del boceto a la realidad. Creamos experiencias tangibles que tus clientes querrán tocar, usar y compartir.",
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop", // Imagen Packaging/Industrial
      accent: "text-orange-400",
      border: "hover:border-orange-400/50",
      services: [
        { 
          name: "Embalaje de Impacto", 
          icon: Box,
          desc: "Diseños estructurales únicos. Desde hamburguesas gourmet hasta equipamiento técnico.",
          img: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=500"
        },
        { 
          name: "Uniformes Pro", 
          icon: Shirt,
          desc: "Identidad textil. Vestimos a tu equipo con telas técnicas y cortes modernos.",
          img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=500"
        },
        { 
          name: "Prod. Audiovisual", 
          icon: Camera,
          desc: "Fotografía y video de nivel cinematográfico para redes y catálogos.",
          img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500"
        }
      ]
    },
    digital: {
      id: 'digital',
      title: "Inteligencia Digital",
      subtitle: "Dominio de Datos",
      description: "No disparamos a ciegas. Usamos ciencia de datos para posicionarte donde realmente importa.",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Imagen Data/Tech
      accent: "text-lime-400",
      border: "hover:border-lime-400/50",
      services: [
        { 
          name: "SEO & Keywords", 
          icon: Search,
          desc: "Estrategia de palabras clave para que Google se enamore de tu marca.",
          img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=500"
        },
        { 
          name: "Data Science", 
          icon: Database,
          desc: "Auditorías profundas de comportamiento de usuario y métricas.",
          img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=500"
        },
        { 
          name: "Plataforma Visto", 
          icon: Layout,
          desc: "Software exclusivo para gestionar tu contenido sin dolores de cabeza.",
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
        }
      ]
    },
    estrategia: {
      id: 'estrategia',
      title: "Legal & Salud",
      subtitle: "Expansión Segura",
      description: "Desbloqueamos nuevos mercados gestionando la burocracia y las normativas por ti.",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop", // Imagen Corporate/Strategy
      accent: "text-blue-400",
      border: "hover:border-blue-400/50",
      services: [
        { 
          name: "Retail & Supermercados", 
          icon: ShieldCheck,
          desc: "Gestión documental para ingresar a las grandes cadenas de consumo.",
          img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=500"
        },
        { 
          name: "Nutrición Certificada", 
          icon: HeartPulse,
          desc: "Especialistas en tablas nutricionales y normativas de salud.",
          img: "https://images.unsplash.com/photo-1490818387583-1baba5e6d492?auto=format&fit=crop&q=80&w=500"
        },
        { 
          name: "Importación/Exportación", 
          icon: FileText,
          desc: "Asesoría aduanera para llevar tu producto a cualquier frontera.",
          img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500"
        }
      ]
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#050505] text-white' : 'bg-white text-black'} selection:bg-lime-400 selection:text-black font-sans overflow-x-hidden transition-colors duration-300`}>
      
      {/* --- HERO SECTION CON IMAGEN --- */}
      <section className={`relative pt-24 pb-8 px-4 sm:px-6 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#050505]' : 'bg-white'}`}>
        {/* Fondo sutil */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className={`w-full h-full object-cover filter grayscale contrast-125 ${isDark ? 'opacity-20' : 'opacity-10'}`}
            alt="Fondo corporativo"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-[#050505] via-[#050505]/90 to-[#050505]' : 'from-white via-white/90 to-white'}`}></div>
        </div>

        <div className="max-w-full mx-auto relative z-10 text-center px-6">
          <Reveal>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-8 ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <Sparkles className="w-4 h-4 text-lime-400" />
              <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Soluciones Integrales 360°</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
              RESOLVEMOS LO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-500">COMPLEJO</span>
            </h1>
            <p className={`text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Desde la ingeniería de tu empaque hasta la estrategia legal de exportación. 
              Nosotros nos ocupamos de los detalles difíciles para que tu marca brille sin esfuerzo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- NAVEGACIÓN INTERACTIVA DE SERVICIOS --- */}
      <section className={`py-12 px-4 sm:px-6 relative z-20 transition-colors duration-300 ${isDark ? 'bg-[#050505]' : 'bg-white'}`}>
        <div className="max-w-full mx-auto px-6">
          
          {/* Tabs de Navegación */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(pillars).map(([id, pillar]) => (
              <button
                key={id}
                onClick={() => setActivePillar(id)}
                className={`px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activePillar === id 
                    ? isDark
                      ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                      : 'bg-black text-white border-black shadow-[0_0_30px_rgba(0,0,0,0.1)]'
                    : isDark
                      ? 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/20'
                      : 'bg-black/5 text-gray-600 border-black/5 hover:bg-black/10 hover:border-black/20'
                }`}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          {/* Contenedor Principal del Servicio Activo */}
          <div className="grid lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom duration-700">
            
            {/* Columna Izquierda: Imagen Destacada e Info Principal */}
            <div className={`lg:col-span-5 relative group overflow-hidden rounded-[3rem] h-[500px] lg:h-[600px] border transition-colors duration-300 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              <div className="absolute inset-0">
                <img 
                  src={pillars[activePillar].bgImage} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={pillars[activePillar].title}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black via-black/50' : 'from-white via-white/50'} to-transparent opacity-90`}></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-10 lg:p-12 w-full">
                <h2 className={`text-4xl lg:text-5xl font-black mb-4 tracking-tighter ${pillars[activePillar].accent}`}>
                  {pillars[activePillar].subtitle}
                </h2>
                <p className={`text-lg leading-relaxed mb-6 font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {pillars[activePillar].description}
                </p>
                <div className={`flex items-center gap-3 font-bold text-sm uppercase tracking-widest ${isDark ? 'text-white' : 'text-black'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border ${isDark ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  Ver Proyectos
                </div>
              </div>
            </div>

            {/* Columna Derecha: Grid de Sub-servicios */}
            <div className="lg:col-span-7 grid md:grid-cols-1 gap-4 h-full">
              {pillars[activePillar].services.map((service, i) => {
                const SvgIcon = service.icon;
                return (
                  <div 
                    key={i} 
                    className={`relative p-6 rounded-[2rem] border transition-all duration-300 group flex items-center gap-6 overflow-hidden ${
                      isDark
                        ? 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06]'
                        : 'bg-black/[0.03] border-black/5 hover:bg-black/[0.06]'
                    } ${pillars[activePillar].border}`}
                  >
                    {/* Thumbnail pequeño */}
                    <div className={`w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border hidden sm:block ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                      <img src={service.img} className={`w-full h-full object-cover transition-opacity ${isDark ? 'opacity-60 group-hover:opacity-100' : 'opacity-40 group-hover:opacity-70'}`} alt={service.name} />
                    </div>

                    <div className="flex-grow relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                         <SvgIcon className={`w-5 h-5 ${pillars[activePillar].accent}`} />
                         <h4 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>{service.name}</h4>
                      </div>
                      <p className={`text-sm leading-relaxed max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.desc}
                      </p>
                    </div>

                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                       <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                    </div>
                  </div>
                );
              })}

              {/* Tarjeta de Call to Action dentro del Grid */}
              <div className={`p-8 rounded-[2rem] border flex flex-col justify-center items-start ${isDark ? 'bg-gradient-to-r from-white/10 to-transparent border-white/10' : 'bg-gradient-to-r from-black/10 to-transparent border-black/10'}`}>
                 <h4 className={`text-2xl font-black mb-2 tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>¿Tienes un reto específico?</h4>
                 <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Nuestros consultores están listos para diseñar una solución a medida.</p>
                 <button 
                   onClick={() => navigate('/contacto')}
                   className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors ${isDark ? 'bg-white text-black hover:bg-lime-400' : 'bg-black text-white hover:bg-lime-400'}`}>
                   Agendar Consulta
                 </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECCIÓN "NOSOTROS NOS ENCARGAMOS" (REDISENADA) --- */}
      <section className={`py-24 px-4 sm:px-6 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#050505]' : 'bg-white'}`}>
        {/* Elemento decorativo de fondo */}
        <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-gradient-to-b from-lime-400/5 to-transparent' : 'bg-gradient-to-b from-lime-400/3 to-transparent'}`}></div>

        <div className="max-w-full mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">
          
          <Reveal>
             <div className="relative">
                <h2 className={`text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
                  TU TRANQUILIDAD <br /> ES NUESTRO <br /> <span className="text-lime-400">ACTIVO.</span>
                </h2>
                <div className={`space-y-8 text-lg font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className={`border-l-2 pl-6 ${isDark ? 'border-lime-400' : 'border-lime-500'}`}>
                    <strong className={`block mb-1 ${isDark ? 'text-white' : 'text-black'}`}>Cero Burocracia</strong>
                    Olvídate de los trámites complejos para entrar al supermercado. Nosotros gestionamos las certificaciones.
                  </p>
                  <p className={`border-l-2 pl-6 ${isDark ? 'border-emerald-500' : 'border-emerald-600'}`}>
                    <strong className={`block mb-1 ${isDark ? 'text-white' : 'text-black'}`}>Precisión Técnica</strong>
                    Desde tablas nutricionales exactas hasta estrategias SEO quirúrgicas. No dejamos nada al azar.
                  </p>
                  <p className={`border-l-2 pl-6 ${isDark ? 'border-blue-500' : 'border-blue-600'}`}>
                    <strong className={`block mb-1 ${isDark ? 'text-white' : 'text-black'}`}>Estética Superior</strong>
                    Hacemos que tu producto, ya sea una hamburguesa o tecnología militar, luzca como una obra de arte.
                  </p>
                </div>
             </div>
          </Reveal>

          <Reveal delay={200}>
            <div className={`relative rounded-[3rem] overflow-hidden border shadow-2xl ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1500" 
                alt="Equipo trabajando" 
                className={`w-full h-[600px] object-cover transition-all duration-700 ${isDark ? 'filter grayscale hover:grayscale-0' : 'hover:grayscale-0'}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black via-transparent' : 'from-white via-transparent'} to-transparent opacity-80`}></div>
              
              <div className={`absolute bottom-10 left-10 right-10 p-6 backdrop-blur-md rounded-3xl border ${isDark ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-black">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className={`font-bold text-lg leading-none mb-1 ${isDark ? 'text-white' : 'text-black'}`}>Garantía VISTO</p>
                    <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Tu empresa será vista. Punto.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* --- SERVICIOS PRINCIPALES --- */}
      <section id="servicios" className={`py-32 px-4 sm:px-6 relative transition-colors duration-300 ${isDark ? 'bg-[#050505]' : 'bg-white'}`}>
        <div className="max-w-full mx-auto px-6">
          <Reveal>
            <div className={`flex items-center gap-4 mb-8`}>
              <div className={`h-px flex-1 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">Nuestros Servicios</h2>
              <div className={`h-px flex-1 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0}>
              <div className={`group p-10 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 ${
                isDark 
                  ? 'bg-[#111] border-white/5 hover:border-lime-400/50' 
                  : 'bg-gray-50 border-gray-200 hover:border-lime-400/50'
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:bg-lime-400 group-hover:text-black transition-colors ${
                  isDark ? 'bg-lime-400/10 text-lime-400' : 'bg-lime-200 text-lime-600'
                }`}>
                  <Box size={32} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Empaque Personalizado</h3>
                <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Diseño y producción de empaques a medida que reflejan la identidad de tu marca. Desde cajas rígidas hasta soluciones flexibles, garantizamos calidad y durabilidad.
                </p>
                <ul className={`text-sm space-y-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  <li>✓ Diseño estructural personalizado</li>
                  <li>✓ Impresión de alta definición</li>
                  <li>✓ Materiales eco-friendly</li>
                  <li>✓ Prototipos en 24-48h</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className={`group p-10 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 ${
                isDark 
                  ? 'bg-[#111] border-white/5 hover:border-lime-400/50' 
                  : 'bg-gray-50 border-gray-200 hover:border-lime-400/50'
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:bg-lime-400 group-hover:text-black transition-colors ${
                  isDark ? 'bg-lime-400/10 text-lime-400' : 'bg-lime-200 text-lime-600'
                }`}>
                  <Zap size={32} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Soluciones Digitales</h3>
                <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Plataformas de gestión, auditoría con data science y producción visual profesional para potenciar tu presencia en redes y canales digitales.
                </p>
                <ul className={`text-sm space-y-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  <li>✓ Desarrollo de plataformas web</li>
                  <li>✓ Análisis de datos e insights</li>
                  <li>✓ Producción audiovisual</li>
                  <li>✓ Estrategia en redes sociales</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className={`group p-10 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 ${
                isDark 
                  ? 'bg-[#111] border-white/5 hover:border-lime-400/50' 
                  : 'bg-gray-50 border-gray-200 hover:border-lime-400/50'
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:bg-lime-400 group-hover:text-black transition-colors ${
                  isDark ? 'bg-lime-400/10 text-lime-400' : 'bg-lime-200 text-lime-600'
                }`}>
                  <Globe size={32} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Consultoría Estratégica</h3>
                <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Desarrollo de marca, asesoría legal y preparación para exportación. Te acompañamos en cada etapa del crecimiento empresarial.
                </p>
                <ul className={`text-sm space-y-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  <li>✓ Branding y posicionamiento</li>
                  <li>✓ Asesoría legal exportadora</li>
                  <li>✓ Planes de expansión</li>
                  <li>✓ Análisis de mercado</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={450} className="mt-16 text-center">
            <button onClick={() => navigate('/productos')} className={`group relative px-10 py-6 rounded-full font-bold text-lg overflow-hidden inline-flex items-center gap-2 ${
              isDark 
                ? 'bg-white text-black hover:text-white' 
                : 'bg-black text-white hover:text-black'
            }`}>
              <div className="absolute inset-0 w-full h-full bg-lime-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">Ver Productos <ArrowUpRight size={20} /></span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`border-t py-20 transition-colors duration-300 ${isDark ? 'border-white/5 bg-[#020202]' : 'border-black/5 bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-10 ${isDark ? 'text-white' : 'text-black'}`}>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-lime-400/20">
                  <span className="font-black text-black text-sm">V</span>
                </div>
                <span className="text-xl font-black tracking-tighter">VISTO</span>
              </div>
              <p className={`text-[10px] uppercase tracking-[0.3em] font-bold ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Strategic Solutions & Design</p>
            </div>
            
            <div className="flex gap-6">
              {[Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all duration-300 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className={`mt-16 text-center border-t pt-8 ${isDark ? 'border-white/5' : 'border-black/5'}`}>
            <p className={`text-[9px] uppercase tracking-[0.5em] font-bold ${isDark ? 'text-gray-700' : 'text-gray-600'}`}>
              © 2024 VISTO Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-in { animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); animation-fill-mode: forwards; }
        .fade-in { animation-name: fade-in; }
        .slide-in-from-bottom { animation-name: slide-in-from-bottom; }
      `}</style>
    </div>
  );
}
