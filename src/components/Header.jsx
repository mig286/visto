import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Productos', path: '/productos' },
    { label: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  // Manejo de scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 20 
          ? isDark
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-1'
            : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-2xl py-1'
          : isDark
            ? 'bg-black/60 backdrop-blur-md border-b border-white/5 py-1'
            : 'bg-white/60 backdrop-blur-md border-b border-gray-200/30 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleNavigation('/')}
          className="group cursor-pointer z-50"
        >
          <img 
            src="/visto fotos/logo5.png" 
            alt="VISTO Logo" 
            className="w-24 h-24 group-hover:scale-110 transition-all duration-300"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`text-sm uppercase font-bold tracking-[0.2em] transition-all duration-300 pb-1 border-b-2 ${
                isActive(item.path)
                  ? 'text-lime-400 border-lime-400'
                  : isDark
                    ? 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-lime-400'
                    : 'text-gray-600 hover:text-black border-b-2 border-transparent hover:border-lime-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4 z-50">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark
                ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
                : 'bg-black/10 hover:bg-black/20 text-gray-800'
            }`}
            title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={() => handleNavigation('/contacto')}
            className="hidden sm:flex bg-lime-400 text-black px-5 py-2 rounded-full font-bold hover:bg-lime-300 hover:scale-105 active:scale-95 transition-all duration-300 text-sm items-center gap-2 shadow-[0_0_20px_rgba(163,230,53,0.3)]"
          >
            COTIZAR <Zap size={14} className="fill-black" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${isDark ? 'text-white hover:text-lime-400' : 'text-black hover:text-lime-400'}`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 top-[60px] backdrop-blur-xl z-40 md:hidden flex flex-col p-8 gap-6 pb-32 overflow-y-auto transition-colors duration-300 ${
          isDark ? 'bg-black/95' : 'bg-white/95'
        }`}>
          {navItems.map((item, index) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`text-3xl font-black text-left uppercase tracking-tighter transition-all duration-300 py-2 ${
                isActive(item.path)
                  ? 'text-lime-400 pl-4'
                  : isDark
                    ? 'text-white hover:text-lime-400 hover:pl-4'
                    : 'text-black hover:text-lime-400 hover:pl-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavigation('/contacto')}
            className={`mt-8 pt-8 border-t transition-colors duration-300 text-lg font-black text-lime-400 flex items-center gap-3 hover:gap-5 transition-all duration-300 ${
              isDark ? 'border-white/20' : 'border-black/20'
            }`}
          >
            COTIZAR PROYECTO <Zap size={20} className="fill-lime-400" />
          </button>
        </div>
      )}
    </header>
  );
}
