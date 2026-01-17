import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Gestión de Reclamos",
    description: "Aplicación para la administración y seguimiento de tickets. Incluye gestión de estados de reclamo, asignación de operarios y reportes.",
    technologies: ["React", "NestJS", "MongoDB"],
    githubLink: "#", // Reemplazar con tu enlace de GitHub
    demoLink: "#",   // Reemplazar con tu enlace de Demo
  },
  {
    title: "Calculadora de IMC",
    description: "Herramienta interactiva para el cálculo de salud biométrica con interfaz responsiva y validación de datos en tiempo real.",
    technologies: ["React", "NestJS", "PostgreSQL"],
    githubLink: "#", // Reemplazar con tu enlace de GitHub
    demoLink: "#",   // Reemplazar con tu enlace de Demo
  },
  // Puedes añadir más proyectos aquí
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          Proyectos Destacados
        </h2>
        <div className="h-1 w-20 bg-black dark:bg-white"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col p-8 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-black dark:hover:border-white transition-all duration-500 bg-gray-50 dark:bg-gray-950"
          >
            {/* Espacio para Imagen/Icono del Proyecto */}
            <div className="flex-shrink-0 mb-6 w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
              <span className="text-2xl font-bold">P{index + 1}</span>
              {/* Aquí podrías poner una imagen o un icono más específico para el proyecto */}
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {project.githubLink !== '#' && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <Github size={20} /> <span className="text-sm">GitHub</span>
                </a>
              )}
              {project.demoLink !== '#' && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <ExternalLink size={20} /> <span className="text-sm">Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};