import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] backdrop-blur-md border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Nombre */}
        <a href="#inicio" className="font-bold text-xl dark:text-white tracking-tighter">
          MANUEL<span className="text-gray-500">.</span>N
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium dark:text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-black dark:hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-400 text-gray-600 transition-transform hover:scale-110"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle & Theme Button */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="dark:text-yellow-400 text-gray-600">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white text-black">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium dark:text-gray-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};