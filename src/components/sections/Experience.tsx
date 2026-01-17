export const Experience = () => {
    return (
      <section id="experiencia" className="py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Experiencia & Educación
          </h2>
          <div className="h-1 w-20 bg-black dark:bg-white"></div>
        </div>
  
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8">
          {/* Experiencia Laboral */}
          <div className="mb-12 relative">
            <span className="absolute -left-10 top-0 w-5 h-5 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black"></span>
            <h3 className="text-xl font-bold text-black dark:text-white">Soporte Técnico PC – Independiente</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">2019 – Actualidad</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Diagnóstico, reparación y optimización de hardware y software.</li>
              <li>Configuración de redes locales y mantenimiento preventivo.</li>
              <li>Desarrollo de habilidades de resolución de problemas y atención al cliente.</li>
            </ul>
          </div>
  
          {/* Educación - Ingeniería */}
          <div className="mb-12 relative">
            <span className="absolute -left-10 top-0 w-5 h-5 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black"></span>
            <h3 className="text-xl font-bold text-black dark:text-white">Ingeniería en Sistemas de Información</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">UTN – FR Villa María | 2016 – Actualidad</p>
            <p className="text-gray-600 dark:text-gray-400">Estudiante avanzado (4.º año – 8 materias pendientes).</p>
          </div>
  
          {/* Educación - Analista */}
          <div className="mb-12 relative">
            <span className="absolute -left-10 top-0 w-5 h-5 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black"></span>
            <h3 className="text-xl font-bold text-black dark:text-white">Analista en Sistemas de Información</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">UTN – FR Villa María</p>
            <p className="text-gray-600 dark:text-gray-400">Título obtenido.</p>
          </div>
        </div>
      </section>
    );
  };