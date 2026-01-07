import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { 
  Box, 
  ShoppingBag, 
  Layers, 
  Zap, 
  ArrowUpRight, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Globe,
  Hexagon, 
  Droplet, 
  MoveRight, 
  ChevronDown,
  Recycle,
  Package,
  CheckCircle2,
  Play,
  Clock,
  Printer,
  MousePointer2
} from 'lucide-react';

/**
 * HOOK: useOnScreen
 */
function useOnScreen(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, visible];
}

/**
 * COMPONENT: Reveal
 */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.17, 0.55, 0.55, 1) ${className} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- DATA --- */
const PROJECTS = [
  {
    id: 1,
    cat: 'empaques',
    title: 'Kit Onboarding Oro',
    client: 'FinTech Global',
    year: '2024',
    material: 'Cartón Rígido + Soft Touch',
    desc: 'Experiencia de bienvenida premium para clientes VIP. Caja rígida imantada con cuna de espuma de alta densidad.',
    img: '/visto fotos/papel acoplado1.jpeg',
    span: 'md:col-span-2 md:row-span-2',
    color: 'bg-amber-500'
  },
  {
    id: 2,
    cat: 'helados',
    title: 'Conos Gelato Pro',
    client: 'Venezia Ice',
    year: '2023',
    material: 'Papel Antigrasa 120g',
    desc: 'Papel certificado FSC con barrera antigrasa vegetal. Impresión con tintas compostables.',
    img: '/visto fotos/sache guardanapo.jpeg',
    span: 'md:col-span-1 md:row-span-1',
    color: 'bg-pink-500'
  },
  {
    id: 3,
    cat: 'industrial',
    title: 'Bobinas Flexo',
    client: 'Ind. Alimentaria S.A.',
    year: '2024',
    material: 'BOPP Metalizado',
    desc: 'Impresión continua a 8 colores con alta velocidad. Resistencia a la humedad y sellado en frío.',
    img: '/visto fotos/saco delivery.jpeg',
    span: 'md:col-span-1 md:row-span-2',
    color: 'bg-blue-600'
  },
  {
    id: 4,
    cat: 'empaques',
    title: 'Burger Box Eco',
    client: 'The Burger Joint',
    year: '2023',
    material: 'Kraft Liner 300g',
    desc: 'Diseño autoarmable sin pegamento. Material 100% reciclable y compostable en 90 días.',
    img: '/visto fotos/saco batata.jpeg',
    span: 'md:col-span-1 md:row-span-1',
    color: 'bg-green-600'
  },
  {
    id: 5,
    cat: 'diseno',
    title: 'Bolsa Boutique',
    client: 'Luxe Fashion',
    year: '2024',
    material: 'Couché 250g + Hot Stamping',
    desc: 'Acabados de lujo con laminado mate y logo en relieve dorado. Asas de cinta de gross.',
    img: '/visto fotos/bolsa delivery.jpeg',
    span: 'md:col-span-2 md:row-span-1',
    color: 'bg-purple-600'
  },
  {
    id: 6,
    cat: 'chocolates',
    title: 'Cacao Origins',
    client: 'Chocolatier Belgian',
    year: '2023',
    material: 'Cartulina Premium',
    desc: 'Sistema de cierre seguro para envíos internacionales. Diseño modular para diferentes gramajes.',
    img: '/visto fotos/papelvirgen110.webp',
    span: 'md:col-span-1 md:row-span-1',
    color: 'bg-orange-500'
  }
];

const PROCESS_STEPS = [
  { 
    id: 1, 
    title: "Mundo Físico", 
    desc: "Soluciones de empaque personalizado, impresión de alto volumen y materiales delivery que protegen y enamoran.", 
    icon: <Box className="w-6 h-6" /> 
  },
  { 
    id: 2, 
    title: "Mundo Digital", 
    desc: "Plataforma de gestión, auditoría con data science y producción visual de élite para brillar en redes.", 
    icon: <Zap className="w-6 h-6" /> 
  },
  { 
    id: 3, 
    title: "Estrategia", 
    desc: "Desarrollo de marca, asesoría legal y preparación para exportación con socios internacionales.", 
    icon: <Globe className="w-6 h-6" /> 
  },
  { 
    id: 4, 
    title: "Crecimiento", 
    desc: "Transformamos tu visión en realidad. Hacemos que tu empresa sea vista por todo el mundo.", 
    icon: <MoveRight className="w-6 h-6" /> 
  }
];

const STATS = [
  { number: "25+", label: "Años de Trayectoria" },
  { number: "12k", label: "Proyectos Entregados" },
  { number: "400", label: "Marcas Confían" },
  { number: "24h", label: "Tiempo de Prototipado" }
];

// Array de imágenes para el rotador
const HERO_IMAGES = [
  '/visto fotos/americano.2.jpeg',
  '/visto fotos/americano.4.jpeg',
  '/visto fotos/americano.5.jpeg',
  '/visto fotos/batata frita.jpeg',
  '/visto fotos/bolsa delivery.jpeg',
  '/visto fotos/bolsa delivery54841.jpeg',
  '/visto fotos/bolsa termica.jpeg',
  '/visto fotos/saco delivery.jpeg',
  '/visto fotos/saco batata.jpeg',
  '/visto fotos/papel acoplado1.jpeg',
  '/visto fotos/lacre.jpeg',
  '/visto fotos/sache guardanapo.jpeg',
  '/visto fotos/cervilletas.jpeg',
  '/visto fotos/comida.pasta.jpg',
];

/* --- COMPONENTE PRINCIPAL --- */
const PackStudio = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('todos');
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactInterest, setContactInterest] = useState('Packaging Industrial'); // Estado para pre-seleccionar interés
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(HERO_IMAGES[0]);
  const [imageKey, setImageKey] = useState(0);
  const [currentSolutionImage, setCurrentSolutionImage] = useState(HERO_IMAGES[0]);

  // Manejo de scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotación de imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
      setCurrentHeroImage(HERO_IMAGES[randomIndex]);
      setImageKey(prev => prev + 1); // Para forzar remontaje de la imagen
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Rotación de imagen de solución cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
      setCurrentSolutionImage(HERO_IMAGES[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Función Helper para scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Función Helper para abrir modal con contexto
  const openContact = (interest = 'Packaging Industrial') => {
    setContactInterest(interest);
    setShowContactModal(true);
  };

  const filteredProjects = activeFilter === 'todos' 
    ? PROJECTS 
    : PROJECTS.filter(i => i.cat === activeFilter);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#050505] text-white' : 'bg-white text-black'} font-sans overflow-x-hidden selection:bg-lime-400 selection:text-black transition-colors duration-300`}>
      
      {/* --- HERO SECTION (Mejorado con Imagen) --- */}
      <section id="inicio" className="relative min-h-screen flex flex-col lg:flex-row items-center px-4 md:px-12 pt-32 overflow-hidden">
        
        {/* Background Gradients & Noise */}
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-to-b from-indigo-900/30 to-purple-900/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>

        <div className="max-w-[95rem] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 pt-10 lg:pt-0">
            <Reveal>
              <div className="inline-flex items-center gap-3 border border-lime-400/20 rounded-full px-4 py-1.5 mb-8 bg-lime-400/5 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-lime-400 animate-ping"></span>
                <span className="text-[10px] md:text-xs font-mono text-lime-400 tracking-widest uppercase font-bold">Solución 360° para tu Empresa</span>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight mb-8">
                EL IMPULSO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-200 to-white italic pr-4">
                  INTEGRAL.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-xl leading-relaxed mb-10`}>
                Somos un equipo integral dedicado a transformar tu empresa. Con expertise en empaque, tecnología digital y estrategia empresarial, nos encargamos de la complejidad para que tú solo crezcas.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => openContact()} className={`${isDark ? 'bg-white text-black hover:bg-lime-400' : 'bg-black text-white hover:bg-lime-400'} px-8 py-4 rounded-full font-bold transition-colors text-sm md:text-base flex items-center gap-2 group`}>
                  INICIAR PROYECTO <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('portafolio')}
                  className={`px-8 py-4 rounded-full font-bold transition-colors text-sm md:text-base flex items-center gap-2 ${isDark ? 'border border-white/20 hover:bg-white/10' : 'border border-black/20 hover:bg-black/10'}`}
                >
                  <ShoppingBag size={18} /> VER TRABAJOS
                </button>
              </div>
            </Reveal>
            
            {/* Stats Mini in Hero */}
            <Reveal delay={400} className={`mt-12 flex gap-8 pt-8 ${isDark ? 'border-t border-white/10' : 'border-t border-black/10'}`}>
              <div>
                <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>25+</div>
                <div className={`text-xs uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Años Exp.</div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>12k</div>
                <div className={`text-xs uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Proyectos</div>
              </div>
              <div>
                 <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>24h</div>
                <div className={`text-xs uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Prototipado</div>
              </div>
            </Reveal>
          </div>
          
          {/* Right: Immersive Image Composition */}
          <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full">
             <Reveal delay={200} className="w-full h-full relative">
                {/* Main Image with Gradient Mask */}
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                  <img 
                    key={imageKey}
                    src={currentHeroImage}
                    alt="Abstract Packaging Art" 
                    className={`w-full h-full object-cover opacity-100 scale-105 hover:scale-100 transition-all duration-700 ease-in-out`}
                  />
                  {/* Gradient overlays to blend with background */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#050505]/40 via-transparent' : 'from-white/40 via-transparent'} to-transparent`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-l ${isDark ? 'from-[#050505]/10 via-[#050505]/20 to-transparent' : 'from-white/10 via-white/20 to-transparent'}`}></div>
                </div>

                {/* Floating Elements (Glassmorphism) */}
                <div className={`absolute top-10 right-10 p-6 backdrop-blur-xl border rounded-2xl max-w-[200px] animate-float-slow hidden md:block ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                   <Hexagon className="text-lime-400 mb-2" />
                   <div className={`text-xs font-bold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>PROTOTIPADO RÁPIDO</div>
                   <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>Muestras físicas en 24h sin costo de matriz.</div>
                </div>

                <div className={`absolute bottom-20 left-10 lg:-left-10 p-6 backdrop-blur-xl border rounded-2xl max-w-[220px] shadow-2xl animate-float-delayed hidden md:block ${isDark ? 'bg-[#111]/80 border-white/10' : 'bg-gray-100/80 border-black/10'}`}>
                   <div className="flex justify-between items-start mb-2">
                     <Droplet className="text-cyan-400" />
                     <div className="bg-lime-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">ECO</div>
                   </div>
                   <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>Tintas Bio-based seguras para contacto con alimentos.</div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="w-full bg-lime-400 overflow-hidden py-5 -rotate-1 scale-105 border-y-4 border-black relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 text-black font-black text-3xl md:text-5xl uppercase italic tracking-tighter">
              Empaque <span className="mx-6 text-stroke-black">360°</span> •
              <span className="mx-6">Digital</span> •
              <span className="mx-6 text-stroke-black">Estrategia</span> •
            </div>
          ))}
        </div>
      </div>

      {/* --- PROCESO --- */}
      <section className={`py-32 px-6 md:px-12 relative transition-colors duration-300 ${isDark ? 'bg-[#050505]' : 'bg-gray-50'}`}>
        <div className="max-w-[95rem] mx-auto">
          <Reveal>
            <div className={`flex items-center gap-4 mb-16 ${isDark ? 'divide-white/20' : 'divide-gray-300'}`}>
              <div className={`h-px flex-1 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">Nuestra Visión 360</h2>
              <div className={`h-px flex-1 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.id} delay={i * 150} className="relative">
                <div className={`group h-full p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
                  isDark 
                    ? 'bg-[#111] border-white/5 hover:border-lime-400/50' 
                    : 'bg-white border-gray-200 hover:border-lime-400/50'
                }`}>
                  <div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400 group-hover:text-black transition-colors ${
                      isDark ? 'bg-lime-400/10 text-lime-400' : 'bg-lime-200 text-lime-600'
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{step.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                  </div>
                  <div className={`text-8xl font-black select-none group-hover:opacity-70 transition-opacity self-end -mb-4 -mr-4 ${
                    isDark ? 'text-[#1a1a1a]' : 'text-gray-200'
                  }`}>
                    0{step.id}
                  </div>
                </div>
                {i < 3 && <div className={`hidden md:block absolute top-1/2 right-[-12px] transform -translate-y-1/2 z-10 ${isDark ? 'text-gray-700' : 'text-gray-400'}`}><MoveRight /></div>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUIÉNES SOMOS (mejorado) --- */}
      <section id="procesos" className={`py-32 px-6 md:px-12 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#050505]' : 'bg-white'} ${isDark ? 'text-white' : 'text-black'}`}>
        <div className={`absolute top-0 right-0 p-24 pointer-events-none ${isDark ? 'opacity-5' : 'opacity-5'}`}>
          <Globe size={400} />
        </div>
        
        <div className="max-w-[95rem] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
              SOMOS <br/> <span className="text-lime-600">VISTO</span>
            </h2>
            <p className={`text-xl mb-8 leading-relaxed max-w-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              En Visto, entendemos que dirigir una empresa es un reto multidimensional. Por eso, nuestra misión es democratizar el acceso a herramientas de alto nivel para negocios de todos los tamaños.
            </p>
            <p className={`text-lg mb-8 leading-relaxed max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Nos encargamos de la parte complicada: desde la presentación física de tu producto hasta la estrategia digital y el crecimiento empresarial. Somos tu socio integral.
            </p>
            <ul className="space-y-4 mb-10">
              {['Empaque & Presentación', 'Tecnología & Marketing', 'Consultoría & Expansión'].map(item => (
                <li key={item} className={`flex items-center gap-3 font-bold text-lg ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                  <CheckCircle2 className="text-lime-600" /> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => openContact('Solución Integral')}
              className={`px-8 py-4 rounded-full font-bold transition-colors ${isDark ? 'bg-white text-black hover:bg-lime-400' : 'bg-black text-white hover:bg-lime-400'}`}
            >
              Descubre Cómo Crecemos Juntos
            </button>
          </Reveal>

          <Reveal delay={200}>
            <div className={`relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden group scale-125 origin-center ${isDark ? 'bg-gray-900' : 'bg-gray-200'}`}>
               <img key={imageKey} src={currentSolutionImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Solución Integral" />
               <div className={`absolute bottom-6 left-6 backdrop-blur p-4 rounded-2xl ${isDark ? 'bg-black/70' : 'bg-white/90'}`}>
                 <div className={`text-xs font-bold uppercase ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Nuestra Promesa</div>
                 <div className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>Hacemos que tu empresa sea vista por todo el mundo</div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className={`pt-32 pb-20 px-6 md:px-12 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark 
          ? 'bg-[#050505] text-white border-white/10' 
          : 'bg-gray-50 text-black border-gray-200'
      }`}>
        <div className="max-w-[95rem] mx-auto relative z-10">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-[7rem] font-black mb-10 leading-[0.9]">
                COMENCEMOS <br/>
                TU <span className="text-lime-400">TRANSFORMACIÓN.</span>
              </h2>
              <button 
                onClick={() => openContact()}
                className={`group relative px-10 py-6 rounded-full font-bold text-xl overflow-hidden ${
                  isDark 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white'
                }`}
              >
                <div className="absolute inset-0 w-full h-full bg-lime-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-4">Solicita una Consulta <MoveRight /></span>
              </button>
            </div>

            <div className={`grid grid-cols-2 gap-12 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              <div>
                <h4 className={`font-bold mb-6 uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>Navegación</h4>
                <ul className="space-y-3">
                  <li onClick={() => scrollToSection('inicio')} className={`hover:text-lime-400 cursor-pointer transition-colors`}>Inicio</li>
                  <li onClick={() => scrollToSection('servicios')} className={`hover:text-lime-400 cursor-pointer transition-colors`}>Servicios</li>
                  <li onClick={() => navigate('/productos')} className={`hover:text-lime-400 cursor-pointer transition-colors`}>Productos</li>
                  <li onClick={() => navigate('/contacto')} className={`hover:text-lime-400 cursor-pointer transition-colors`}>Contacto</li>
                </ul>
              </div>
              <div>
                <h4 className={`font-bold mb-6 uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>Social</h4>
                <div className="flex gap-4">
                  <a href="#" className={`w-10 h-10 rounded-full border flex items-center justify-center hover:bg-lime-400 hover:border-lime-400 hover:text-black transition-all ${
                    isDark ? 'border-white/20' : 'border-black/20'
                  }`}><Instagram size={18} /></a>
                  <a href="#" className={`w-10 h-10 rounded-full border flex items-center justify-center hover:bg-lime-400 hover:border-lime-400 hover:text-black transition-all ${
                    isDark ? 'border-white/20' : 'border-black/20'
                  }`}><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t text-xs font-mono ${
            isDark 
              ? 'border-white/10 text-gray-600' 
              : 'border-gray-300 text-gray-600'
          }`}>
            <div>© 2025 Visto. Todos los derechos reservados.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- MODAL DE PROYECTO --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className={`relative w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-modal-up border ${
            isDark 
              ? 'bg-[#111] border-white/10' 
              : 'bg-white border-gray-200'
          }`}>
            <button onClick={() => setSelectedProject(null)} className={`absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isDark 
                ? 'bg-black/50 backdrop-blur-md text-white hover:bg-white hover:text-black' 
                : 'bg-gray-100 text-black hover:bg-black hover:text-white'
            }`}>
              <X />
            </button>
            
            <div className={`w-full md:w-1/2 h-[40vh] md:h-auto relative group ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <img src={selectedProject.img} className="w-full h-full object-cover" alt={selectedProject.title} />
              <div className={`absolute bottom-4 left-4 backdrop-blur px-3 py-1 rounded-full text-xs font-mono ${isDark ? 'bg-black/50' : 'bg-white/50'}`}>IMG REF: {selectedProject.id}00X</div>
            </div>
            
            <div className={`w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col ${isDark ? 'text-white' : 'text-black'}`}>
              <div className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold text-white mb-6 ${selectedProject.color}`}>
                {selectedProject.cat.toUpperCase()}
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{selectedProject.title}</h3>
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedProject.desc}
              </p>
              
              <div className={`grid grid-cols-2 gap-y-8 gap-x-4 border-t pt-8 mt-auto ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
                <div>
                  <div className={`text-xs uppercase font-bold mb-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Cliente</div>
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{selectedProject.client}</div>
                </div>
                <div>
                  <div className={`text-xs uppercase font-bold mb-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Año</div>
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{selectedProject.year}</div>
                </div>
                <div className="col-span-2">
                  <div className={`text-xs uppercase font-bold mb-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Materiales</div>
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{selectedProject.material}</div>
                </div>
              </div>

              <div className={`mt-10 pt-8 border-t ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
                <button 
                  onClick={() => { setSelectedProject(null); openContact(`Interesado en proyecto similar a: ${selectedProject.title}`); }}
                  className={`w-full py-4 font-bold rounded-xl transition-colors ${
                    isDark 
                      ? 'bg-white text-black hover:bg-lime-400' 
                      : 'bg-black text-white hover:bg-lime-400'
                  }`}
                >
                  Quiero algo similar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL DE CONTACTO --- */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setShowContactModal(false)}></div>
          <div className={`relative border rounded-[2rem] w-full max-w-lg overflow-hidden animate-modal-up ${
            isDark 
              ? 'bg-[#0a0a0a] border-white/10' 
              : 'bg-white border-gray-200'
          }`} style={{ boxShadow: isDark ? '0_0_50px_rgba(0,0,0,0.5)' : '0_0_50px_rgba(0,0,0,0.1)' }}>
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-center mb-2">
                <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>Hablemos</h3>
                <button onClick={() => setShowContactModal(false)} className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-black'}`}>
                  <X />
                </button>
              </div>
              <p className={`text-sm mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Cuéntanos sobre tu producto y te enviaremos una propuesta y timeline estimado.</p>
              
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Gracias por contactarnos. Te responderemos pronto.'); setShowContactModal(false); }}>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-lime-400 uppercase tracking-widest pl-1">Nombre / Empresa</label>
                  <input type="text" className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-all border ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-white focus:bg-white/10' 
                      : 'bg-gray-50 border-gray-300 text-black focus:bg-white'
                  }`} placeholder="Ej. PackStudio Inc" autoFocus />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-lime-400 uppercase tracking-widest pl-1">Email Corporativo</label>
                  <input type="email" className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-all border ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-white focus:bg-white/10' 
                      : 'bg-gray-50 border-gray-300 text-black focus:bg-white'
                  }`} placeholder="nombre@empresa.com" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-lime-400 uppercase tracking-widest pl-1">Interés Principal</label>
                  <div className="relative">
                    <select 
                      defaultValue={contactInterest}
                      className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-all appearance-none cursor-pointer border ${
                        isDark 
                          ? 'bg-white/5 border-white/10 text-white focus:bg-white/10' 
                          : 'bg-gray-50 border-gray-300 text-black focus:bg-white'
                      }`}
                    >
                      <option className={isDark ? 'bg-[#111]' : 'bg-white'}>Packaging Industrial</option>
                      <option className={isDark ? 'bg-[#111]' : 'bg-white'}>Alimentos / Food Service</option>
                      <option className={isDark ? 'bg-[#111]' : 'bg-white'}>E-commerce / Mailing</option>
                      <option className={isDark ? 'bg-[#111]' : 'bg-white'}>Diseño Estructural</option>
                      <option className={isDark ? 'bg-[#111]' : 'bg-white'}>Reporte de Sostenibilidad</option>
                      <option className={isDark ? 'bg-[#111]' : 'bg-white'}>Consultoría General</option>
                    </select>
                    <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-lime-400 uppercase tracking-widest pl-1">Detalles</label>
                  <textarea rows="3" className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-all resize-none border ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-white focus:bg-white/10' 
                      : 'bg-gray-50 border-gray-300 text-black focus:bg-white'
                  }`} placeholder="Cantidad estimada, plazos..."></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-lime-400 text-black py-4 rounded-xl font-bold hover:bg-white transition-colors text-lg shadow-lg shadow-lime-400/20">
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* --- ESTILOS GLOBALES --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Space Grotesk', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .text-stroke-black {
          -webkit-text-stroke: 1px black;
          color: transparent;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes modalUp {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-up {
          animation: modalUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-slow 7s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
};

export default PackStudio;
