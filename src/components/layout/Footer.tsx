import { Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Izquierdo: Branding & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-black dark:text-white font-bold tracking-tighter text-lg">
            MANUEL NAMUNCURA
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Analista en Sistemas & Desarrollador.
          </p>
          <p className="text-gray-400 text-xs mt-4">
            © {currentYear} — Hecho con React & Tailwind.
          </p>
        </div>

        {/* Lado Derecho: Enlaces rápidos */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:manu.namun94@gmail.com"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};