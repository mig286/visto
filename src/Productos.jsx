import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { 
  Truck, Package, Palette, Sparkles, MoreHorizontal, 
  ArrowUpRight, Instagram, Linkedin, X,
  Search, Info, ShoppingBag, ArrowRight
} from 'lucide-react';

/* --- HOOKS & COMPONENTS --- */
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

/* --- DATA --- */
const PRODUCT_CATEGORIES = [
  { id: 'delivery', name: 'Delivery', icon: Truck, color: 'from-orange-400 to-red-500' },
  { id: 'cajas', name: 'Cajas', icon: Package, color: 'from-blue-400 to-indigo-600' },
  { id: 'personalizados', name: 'Personalizados', icon: Palette, color: 'from-purple-400 to-pink-600' },
  { id: 'moda', name: 'Moda', icon: Sparkles, color: 'from-pink-400 to-rose-600' },
  { id: 'otros', name: 'Otros', icon: MoreHorizontal, color: 'from-emerald-400 to-teal-600' }
];

const PRODUCTS = [
  // Bolsas Delivery
  { 
    id: 1, 
    cat: 'delivery', 
    title: 'Bolsas Delivery', 
    client: 'Delivery Pro', 
    material: 'Kraft Variado', 
    desc: 'Variedad de bolsas para entregas.',
    specs: [
      { label: 'Tamaño', value: 'Múltiples opciones disponibles' },
      { label: 'Material', value: 'Kraft resistente + asas reforzadas' },
      { label: 'Capacidad', value: '2kg a 5kg según modelo' },
      { label: 'Personalización', value: 'Impresión en 1 o 2 colores' }
    ],
    minOrder: '500 unidades',
    imgs: [
      '/visto fotos/bolsa delivery.jpeg',
      '/visto fotos/bolsa delivery 54564.jpeg',
      '/visto fotos/bolsa delivery1456498.jpeg',
      '/visto fotos/bolsa delivery15616.jpeg',
      '/visto fotos/bolsa delivery458.jpeg',
      '/visto fotos/bolsa delivery515416.jpeg',
      '/visto fotos/bolsa delivery5464.jpeg',
      '/visto fotos/bolsa delivery54841.jpeg',
      '/visto fotos/bolsa delivery565.jpeg',
      '/visto fotos/bolsa delivery651146.jpeg',
      '/visto fotos/bolsa delivery654.jpeg',
    ]
  },
  
  // Bolsas Térmicas
  { 
    id: 2, 
    cat: 'cajas', 
    title: 'Bolsas Térmicas', 
    client: 'Thermal Pro', 
    material: 'Aislante Premium',
    desc: 'Bolsas térmicas para entregas.',
    specs: [
      { label: 'Aislamiento', value: 'Espuma de 10mm a 20mm' },
      { label: 'Retención', value: 'Mantiene temperatura hasta 8 horas' },
      { label: 'Materiales', value: 'Kraft exterior + Polietileno interior' },
      { label: 'Durabilidad', value: 'Reutilizable hasta 50+ usos' }
    ],
    minOrder: '250 unidades',
    imgs: [
      '/visto fotos/bolsa termica grande.jpeg',
      '/visto fotos/bolsa termica media.jpeg',
      '/visto fotos/bolsa termica xxxl.jpeg',
      '/visto fotos/bolsa termica.jpeg',
    ]
  },
  
  // Sacos Delivery
  { 
    id: 3, 
    cat: 'delivery', 
    title: 'Sacos Delivery', 
    client: 'Delivery Express', 
    material: 'Kraft Especial', 
    desc: 'Sacos para entregas rápidas.',
    specs: [
      { label: 'Peso máximo', value: 'Soporta hasta 10kg' },
      { label: 'Acabado', value: 'Kraft blanco o marrón' },
      { label: 'Cierre', value: 'Pliegue superior o adhesivo' },
      { label: 'Certificación', value: 'Apto para alimentos' }
    ],
    minOrder: '1000 unidades',
    imgs: [
      '/visto fotos/saco delivery.jpeg',
      '/visto fotos/saco delivery2.jpeg',
      '/visto fotos/saco delivery26.jpeg',
      '/visto fotos/saco delivery4.jpeg',
      '/visto fotos/saco delivery56.jpeg',
      '/visto fotos/saco delivery6.jpeg',
      '/visto fotos/saco delivery615.jpeg',
      '/visto fotos/saco delivery6514.jpeg',
      '/visto fotos/saco delivery654418654.jpeg',
      '/visto fotos/saco delivery7.jpeg',
    ]
  },
  
  // Sacos Batata
  { 
    id: 4, 
    cat: 'personalizados', 
    title: 'Sacos Batata Frita', 
    client: 'Snack World', 
    material: 'Papel Antigrasa',
    desc: 'Sacos para batatas fritas.',
    specs: [
      { label: 'Protección', value: 'Antigrasa doble cara' },
      { label: 'Resistencia', value: 'No traspasa con grasas hasta 48 horas' },
      { label: 'Tamaños', value: 'Pequeño, Mediano, Grande, XL' },
      { label: 'Impresión', value: 'Personalización a todo color' }
    ],
    minOrder: '500 unidades',
    imgs: [
      '/visto fotos/batata frita.jpeg',
      '/visto fotos/batata frita6561.jpeg',
      '/visto fotos/batatafrita3564456.jpeg',
      '/visto fotos/batatafrita456634.jpeg',
      '/visto fotos/saco batata.jpeg',
      '/visto fotos/saco batata3.jpeg',
      '/visto fotos/saco batata4.jpeg',
      '/visto fotos/saco batata5.jpeg',
    ]
  },
  
  // Papeles y Embolbes
  { 
    id: 5, 
    cat: 'cajas', 
    title: 'Papeles y Embolbes', 
    client: 'Paper Pro', 
    material: 'Papel Variado', 
    desc: 'Papeles para embalaje y embolbe.',
    specs: [
      { label: 'Gramaje', value: '60g a 120g según uso' },
      { label: 'Acabado', value: 'Mate, Satinado o Brillante' },
      { label: 'Aplicaciones', value: 'Envolturas, forros, embalaje' },
      { label: 'Sostenibilidad', value: '100% reciclable' }
    ],
    minOrder: '2000 pliegos',
    imgs: [
      '/visto fotos/papel acoplado1.jpeg',
      '/visto fotos/papel de embolbe541.jpeg',
      '/visto fotos/papel de embolbe5468+.jpeg',
      '/visto fotos/papel de embolbe56414156.jpeg',
      '/visto fotos/papel de embolbe6546458.jpeg',
      '/visto fotos/papel de embolber5445.jpeg',
      '/visto fotos/papel para embolber .jpeg',
      '/visto fotos/papelvirgen110.webp',
    ]
  },
  
  // Sacos Empanada
  { 
    id: 6, 
    cat: 'personalizados', 
    title: 'Sacos Empanada', 
    client: 'Empanada Pro', 
    material: 'Kraft Especial', 
    desc: 'Sacos especiales para empanadas.',
    specs: [
      { label: 'Forma', value: 'Rectangular con fondo reforzado' },
      { label: 'Ventilación', value: 'Perforaciones estratégicas' },
      { label: 'Capacidad', value: '4 a 12 unidades según modelo' },
      { label: 'Cierre', value: 'Tapa abatible o adhesivo seguro' }
    ],
    minOrder: '1000 unidades',
    imgs: [
      '/visto fotos/saco de empanada.jpeg',
      '/visto fotos/saco empanada145.jpeg',
      '/visto fotos/sacoempanada.jpeg',
    ]
  },
  
  // Sacos Talher
  { 
    id: 7, 
    cat: 'personalizados', 
    title: 'Sacos Talher', 
    client: 'Utensils Pro', 
    material: 'Papel Premium', 
    desc: 'Sacos para cubiertos y utensilios.',
    specs: [
      { label: 'Material', value: 'Papel kraft blanco premium' },
      { label: 'Resistencia', value: 'Soporta cutlery de metal sin rasgarse' },
      { label: 'Tamaño', value: '10x10 cm a 15x15 cm' },
      { label: 'Impresión', value: 'Logo o branding personalizado' }
    ],
    minOrder: '500 unidades',
    imgs: [
      '/visto fotos/saco talher.jpeg',
      '/visto fotos/saco talher2.jpeg',
      '/visto fotos/saco talher3.jpeg',
      '/visto fotos/saco talher5.jpeg',
    ]
  },
  
  // Saches Guardanapo
  { 
    id: 8, 
    cat: 'otros', 
    title: 'Sachés Guardanapo', 
    client: 'Napkin Pro', 
    material: 'Papel 30-40g', 
    desc: 'Sachés con guardanapos variados.',
    specs: [
      { label: 'Contenido', value: '1, 2, 3 o 4 guardanapos por sache' },
      { label: 'Tamaño guardanapo', value: '20x20 cm hasta 30x30 cm' },
      { label: 'Cierre', value: 'Sellado térmico hermético' },
      { label: 'Impresión', value: 'Diseño personalizado disponible' }
    ],
    minOrder: '1000 unidades',
    imgs: [
      '/visto fotos/sache guardanapo.jpeg',
      '/visto fotos/sache guardanapo34.jpeg',
      '/visto fotos/sache guardanapo45461.jpeg',
      '/visto fotos/sache guardanapo4561.jpeg',
      '/visto fotos/sache guardanapo541.jpeg',
      '/visto fotos/sache guardanapo6514.jpeg',
      '/visto fotos/sache guardanapo694518.jpeg',
    ]
  },
  
  // Cervilletas
  { 
    id: 9, 
    cat: 'otros', 
    title: 'Cervilletas', 
    client: 'Servilleta Pro', 
    material: 'Papel 20-30g', 
    desc: 'Cervilletas y servilletas.',
    specs: [
      { label: 'Gramaje', value: '20g 2 capas / 30g 3 capas' },
      { label: 'Tamaño', value: '20x20 cm hasta 40x40 cm' },
      { label: 'Acabado', value: 'Liso o con relieve/textura' },
      { label: 'Colores', value: 'Blanco, Crema o colores especiales' }
    ],
    minOrder: '2000 unidades',
    imgs: [
      '/visto fotos/cervilletas.jpeg',
      '/visto fotos/cervilleta2.jpeg',
      '/visto fotos/sevilleta648468.jpeg',
    ]
  },
  
  // Comida Pasta
  { 
    id: 10, 
    cat: 'moda', 
    title: 'Cajas Comida Pasta', 
    client: 'Pasta Pro', 
    material: 'Caja Especial', 
    desc: 'Cajas para pasta y comida.',
    specs: [
      { label: 'Compartimientos', value: '1, 2, 3 o 4 divisiones' },
      { label: 'Capacidad', value: '500ml a 1500ml por compartimiento' },
      { label: 'Resistencia', value: 'Cartón corrugado reforzado' },
      { label: 'Cierre', value: 'Tapa con cierre seguro' }
    ],
    minOrder: '500 unidades',
    imgs: [
      '/visto fotos/comida.pasta.jpg',
      '/visto fotos/comida.pasta2.jpg',
      '/visto fotos/comida.pasta3.jpg',
      '/visto fotos/comida.pasta4.jpg',
      '/visto fotos/comida.pasta5.jpg',
      '/visto fotos/comida.pasta6.jpg',
      '/visto fotos/comida.pasta7.jpg',
      '/visto fotos/comida.pasta8.jpg',
      '/visto fotos/comida.pasta9.jpg',
      '/visto fotos/comida.pasta10.jpg',
    ]
  },
  
  // Lacres
  { 
    id: 11, 
    cat: 'personalizados', 
    title: 'Lacres Sello Anti Violación', 
    client: 'Seal Pro', 
    material: 'Cera Premium', 
    desc: 'Sellos de seguridad para proteger pedidos contra manipulación.',
    specs: [
      { label: 'Función', value: 'Sello anti violación / Seguridad' },
      { label: 'Diámetro', value: '15mm a 35mm personalizables' },
      { label: 'Colores', value: 'Rojo, Oro, Plata, Negro, Personalizado' },
      { label: 'Acabado', value: 'Mate, Brillante o Metalizado' }
    ],
    minOrder: '500 unidades',
    imgs: [
      '/visto fotos/lacre.jpeg',
      '/visto fotos/lacre2.jpeg',
      '/visto fotos/lacre3.jpeg',
      '/visto fotos/lacre5.jpeg',
    ]
  },
  
  // Americanos
  { 
    id: 12, 
    cat: 'moda', 
    title: 'Americanos', 
    client: 'American Plus', 
    material: 'Papel 150-160g', 
    desc: 'Americanos impresos variados.',
    specs: [
      { label: 'Tamaño', value: '43x30 cm o personalizado' },
      { label: 'Gramaje', value: '150g a 160g premium' },
      { label: 'Impresión', value: 'Full color, 4/4 o 2/1' },
      { label: 'Acabado', value: 'Laminado mate o brillante' }
    ],
    minOrder: '500 unidades',
    imgs: [
      '/visto fotos/americano.2.jpeg',
      '/visto fotos/americano.4.jpeg',
      '/visto fotos/americano.5.jpeg',
    ]
  },
  
  // Tapetes Americanos
  { 
    id: 13, 
    cat: 'moda', 
    title: 'Tapetes Americanos', 
    client: 'Place Mat Pro', 
    material: 'Papel 200g', 
    desc: 'Tapetes para mesa variados.',
    specs: [
      { label: 'Tamaño', value: '30x40 cm estándar' },
      { label: 'Gramaje', value: '200g premium resistente' },
      { label: 'Impresión', value: 'Full color de alta definición' },
      { label: 'Protección', value: 'Laminado plastificado' }
    ],
    minOrder: '250 unidades',
    imgs: [
      '/visto fotos/tapete americano.jpeg',
      '/visto fotos/tapete americano5436458.jpeg',
      '/visto fotos/tapete americano6541.jpeg',
    ]
  },
  
  // Otros
  { 
    id: 14, 
    cat: 'otros', 
    title: 'Otros Productos', 
    client: 'General', 
    material: 'Variado', 
    desc: 'Otros productos especiales.',
    specs: [
      { label: 'Variedad', value: 'Soluciones personalizadas' },
      { label: 'Aplicaciones', value: 'Múltiples usos y sectores' },
      { label: 'Diseño', value: 'Adaptable a tus necesidades' },
      { label: 'Consultar', value: '¿Necesitas algo especial?' }
    ],
    minOrder: 'Consultar según producto',
    imgs: [
      '/visto fotos/sacodepapel.jpeg',
      '/visto fotos/sacodelivery56414165.jpeg',
    ]
  },
];

/* --- MAIN COMPONENT --- */
export default function Productos() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(14); // Mostrar todos los 14 productos agrupados
  const [currentImageIndex, setCurrentImageIndex] = useState({}); // Track image index for each product
  const [zoomLevel, setZoomLevel] = useState(1); // Zoom level for modal image

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesFilter = activeFilter === 'todos' || p.cat === activeFilter;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Navigation functions
  const goToPrevImage = (productId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToNextImage = (productId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  };

  const handleZoomChange = (direction) => {
    if (direction === 'in' && zoomLevel < 3) {
      setZoomLevel(prev => Math.min(prev + 0.2, 3));
    } else if (direction === 'out' && zoomLevel > 1) {
      setZoomLevel(prev => Math.max(prev - 0.2, 1));
    }
  };

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setZoomLevel(1);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'} selection:bg-lime-400 selection:text-black font-sans transition-colors duration-300`}>

      {/* --- HERO / SEARCH --- */}
      <section className={`pt-24 pb-16 px-6 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border ${
              isDark 
                ? 'bg-lime-400/10 text-lime-400 border-lime-400/20' 
                : 'bg-lime-400/5 text-lime-600 border-lime-400/30'
            }`}>
              Catálogo Oficial 2024
            </span>
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
              EXPLORA NUESTRAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">CREACIONES</span>
            </h1>
          </Reveal>

          {/* Search Bar */}
          <Reveal delay={200} className="relative max-w-2xl mt-8">
            <Search className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
            <input 
              type="text" 
              placeholder="Busca por producto o material (ej. Kraft)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-lime-400/50 transition-all border ${
                isDark
                  ? 'bg-white/5 border-white/10 text-white placeholder:text-gray-600'
                  : 'bg-black/5 border-black/10 text-black placeholder:text-gray-400'
              }`}
            />
          </Reveal>
        </div>
      </section>

      {/* --- CATEGORIES & FILTER --- */}
      <section className={`sticky top-[73px] z-40 backdrop-blur-md py-4 border-b transition-colors duration-300 ${
        isDark
          ? 'bg-black/50 border-white/5'
          : 'bg-white/50 border-black/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar flex items-center gap-4">
          <button 
            onClick={() => setActiveFilter('todos')}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              activeFilter === 'todos' 
                ? isDark
                  ? 'bg-white text-black'
                  : 'bg-black text-white'
                : isDark
                  ? 'bg-white/5 text-gray-400 hover:bg-white/10'
                  : 'bg-black/5 text-gray-600 hover:bg-black/10'
            }`}
          >
            Todos
          </button>
          {PRODUCT_CATEGORIES.map(cat => {
            const IconComponent = cat.icon;
            return (
              <button 
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === cat.id ? 'bg-lime-400 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.slice(0, visibleCount).map((p, i) => (
            <Reveal key={p.id} delay={i * 50} className="group">
              <div 
                className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-lime-400/30 transition-all duration-500 flex flex-col h-full cursor-pointer group"
                onClick={() => handleModalOpen(p)}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden relative bg-black flex items-center justify-center">
                  <img 
                    src={p.imgs[currentImageIndex[p.id] || 0]} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    key={`${p.id}-${currentImageIndex[p.id] || 0}`}
                  />
                  {/* Navigation Buttons */}
                  {p.imgs.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToPrevImage(p.id, p.imgs.length);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4 text-lime-400 rotate-180" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToNextImage(p.id, p.imgs.length);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4 text-lime-400" />
                      </button>
                    </>
                  )}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-lime-400" />
                  </div>
                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-lime-400">
                    {(currentImageIndex[p.id] || 0) + 1}/{p.imgs.length}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-400">
                      {p.cat}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      Ref. #00{p.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Quick Specs Preview */}
                  <div className="mb-6 space-y-2">
                    {p.specs.slice(0, 2).map((spec, idx) => (
                      <div key={idx} className="text-[10px] text-gray-500">
                        <span className="font-bold text-gray-400">{spec.label}:</span> {spec.value}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-white/5 rounded-md text-[9px] font-bold text-gray-400 uppercase tracking-tighter flex items-center gap-1">
                      <Package className="w-3 h-3" /> {p.material}
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-md text-[9px] font-bold text-gray-400 uppercase tracking-tighter flex items-center gap-1">
                      <ShoppingBag className="w-3 h-3" /> {p.client}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ver Más Button */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisibleCount(prev => prev + 7)}
              className={`px-12 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 text-sm ${
                isDark
                  ? 'bg-lime-400 text-black hover:bg-lime-300 shadow-[0_0_30px_rgba(163,230,53,0.2)]'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              <span>Ver Más Productos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <div className="inline-flex p-6 rounded-full bg-white/5 mb-6 text-gray-600">
              <Search className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">No encontramos productos</h3>
            <p className="text-gray-400">Prueba con otra palabra clave o categoría</p>
          </div>
        )}
      </section>

      {/* --- PRODUCT MODAL --- */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-[#111] border border-white/10 rounded-[2.5rem] max-w-5xl w-full overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-lime-400/5 relative max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Gallery Section */}
            <div className="w-full lg:w-3/5 flex flex-col bg-black relative">
              {/* Main Image with Zoom */}
              <div className="flex-1 flex items-center justify-center overflow-hidden relative group">
                <div 
                  className="w-full h-full flex items-center justify-center transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img 
                    src={selectedProduct.imgs[currentImageIndex[selectedProduct.id] || 0]} 
                    className="w-full h-full object-contain" 
                    alt={selectedProduct.title}
                    key={`modal-${selectedProduct.id}-${currentImageIndex[selectedProduct.id] || 0}`}
                  />
                </div>
                
                {/* Zoom Controls */}
                <div className="absolute top-4 left-4 flex gap-2 bg-black/60 backdrop-blur-md rounded-full p-1">
                  <button
                    onClick={() => handleZoomChange('out')}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-lime-400"
                    title="Alejar"
                  >
                    <span className="text-lg font-bold">−</span>
                  </button>
                  <div className="px-3 py-2 text-xs font-bold text-lime-400 min-w-[50px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                  <button
                    onClick={() => handleZoomChange('in')}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-lime-400"
                    title="Acercar"
                  >
                    <span className="text-lg font-bold">+</span>
                  </button>
                </div>

                {/* Image Navigation */}
                {selectedProduct.imgs.length > 1 && (
                  <>
                    <button
                      onClick={() => goToPrevImage(selectedProduct.id, selectedProduct.imgs.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all text-lime-400 z-10"
                    >
                      <ArrowUpRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button
                      onClick={() => goToNextImage(selectedProduct.id, selectedProduct.imgs.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all text-lime-400 z-10"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-lime-400">
                  {(currentImageIndex[selectedProduct.id] || 0) + 1}/{selectedProduct.imgs.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {selectedProduct.imgs.length > 1 && (
                <div className="p-4 border-t border-white/5 overflow-x-auto">
                  <div className="flex gap-3">
                    {selectedProduct.imgs.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [selectedProduct.id]: idx }))}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          (currentImageIndex[selectedProduct.id] || 0) === idx
                            ? 'border-lime-400 ring-2 ring-lime-400'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="p-8 lg:p-12 w-full lg:w-2/5 flex flex-col justify-center overflow-y-auto max-h-[90vh] lg:max-h-none">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <span className="text-xs font-black text-lime-400 uppercase tracking-[0.3em] mb-4">
                Detalles del Producto
              </span>
              <h2 className="text-4xl font-black mb-6 leading-none tracking-tight">
                {selectedProduct.title}
              </h2>
              
              {/* Specifications Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                {selectedProduct.specs.map((spec, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                      {spec.label}
                    </p>
                    <p className="text-sm font-semibold text-lime-400">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg text-lime-400"><Info className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Descripción</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedProduct.desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg text-lime-400"><Package className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Material Principal</h4>
                    <p className="text-white font-bold">{selectedProduct.material}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 bg-white/5 p-6 rounded-2xl border border-white/5">
                <div>
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Desarrollado para</p>
                  <p className="font-bold text-sm">{selectedProduct.client}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Referencia</p>
                  <p className="font-bold text-sm">Ref. #00{selectedProduct.id}</p>
                </div>
              </div>

              <button 
                onClick={() => navigate('/contacto')}
                className="w-full py-5 bg-lime-400 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-lime-300 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group"
              >
                Cotizar este modelo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER SIMPLIFICADO --- */}
      <footer className="border-t border-white/5 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="font-black text-white text-sm">V</span>
            </div>
            <span className="text-xl font-black tracking-tighter">VISTO CATALOG</span>
          </div>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
            Diseño industrial y packaging de alta gama para marcas que buscan diferenciarse.
          </p>
          <div className="flex justify-center gap-6">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

      {/* Styles for scrollbar hidden but scrollable */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-top { from { transform: translateY(-100%); } to { transform: translateY(0); } }
        .animate-in { animation: var(--tw-duration, 300ms) ease-out; }
        .fade-in { animation-name: fade-in; }
        .slide-in-from-top { animation-name: slide-in-from-top; }
      `}</style>
    </div>
  );
}
