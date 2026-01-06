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
  { id: 1, cat: 'delivery', title: 'Bolsa Delivery Premium', client: 'FastFood Global', material: 'Kraft 120g Reciclado', desc: 'Resistencia superior con acabado mate ecológico.', img: '/images/saco delivery4.jpeg' },
  { id: 2, cat: 'delivery', title: 'Caja Térmica Burger', client: 'The Burger Joint', material: 'Microcorrugado + Aislante', desc: 'Mantiene el calor por más de 30 minutos.', img: '/images/saco batata.jpeg' },
  { id: 3, cat: 'cajas', title: 'Caja Rígida Luxury', client: 'Premium Brands', material: 'Cartón 2mm + Forro Seda', desc: 'Cierre magnético oculto para productos de lujo.', img: '/images/GT 3357 - L15,5 - A22 - P3 - M1 38 x 30 cm.jpg' },
  { id: 4, cat: 'cajas', title: 'Caja Autoarmable E-com', client: 'Store Co', material: 'Kraft Liner reforzado', desc: 'Fácil armado, máxima protección en envíos.', img: '/images/papelvirgen110.webp' },
  { id: 5, cat: 'personalizados', title: 'Packaging Joyería', client: 'Jewels & Co', material: 'Cartulina Soft Touch', desc: 'Acabado aterciopelado con Hot Stamping oro.', img: '/images/sache guardanapo.jpeg' },
  { id: 6, cat: 'moda', title: 'Tote Bag Algodón', client: 'Fashion Group', material: 'Algodón Orgánico 300g', desc: 'Serigrafía textil de alta definición.', img: '/images/GT 5150 - L13 - A19,5 - P4,5 - M1-36,5 x 29.jpg' },
];

/* --- MAIN COMPONENT --- */
export default function Productos() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesFilter = activeFilter === 'todos' || p.cat === activeFilter;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'} selection:bg-lime-400 selection:text-black font-sans transition-colors duration-300`}>

      {/* --- HERO / SEARCH --- */}
      <section className={`pt-32 pb-16 px-6 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
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
          {filteredProducts.map((p, i) => (
            <Reveal key={p.id} delay={i * 50} className="group">
              <div 
                className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-lime-400/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProduct(p)}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-lime-400" />
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
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {p.desc}
                  </p>
                  
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
            className="bg-[#111] border border-white/10 rounded-[2.5rem] max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-lime-400/5 relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
              <img src={selectedProduct.img} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center">
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
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Especificación Técnica</h4>
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
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Mínimo sugerido</p>
                  <p className="font-bold text-sm">500 unidades</p>
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
