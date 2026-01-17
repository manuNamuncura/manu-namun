import { Squares } from '../bits/Squares';
import { DecryptedText } from '../bits/DecryptedText';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Background de React Bits */}
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.2}
          squareSize={30}
          borderColor="rgba(128, 128, 128, 0.2)" 
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6">
        <h4 className="text-sm md:text-base font-medium mb-4 text-gray-500 tracking-[0.3em] uppercase">
          Analista en Sistemas
        </h4>
        
        {/* Aquí usamos DecryptedText */}
        <DecryptedText
          text="Hola! soy MANUEL NAMUNCURÁ"
          className="text-5xl md:text-8xl font-bold dark:text-white text-black mb-6 leading-tight"
          delay={0.2} // Empieza 0.5s después de que se cargue la sección
          scrambleDuration={1.5} // El texto tardará 2.5 segundos en descifrarse completamente
        />
        
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Desarrollador Trainee / Junior de Villa María. 
          Estudiante de Ingeniería en Sistemas de Información.
        </p>
        <div className="mt-10">
          <a href="#proyectos" className="w-full sm:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all text-center">
            Ver Proyectos
          </a>
          <a href="/CV_Manuel_Namuncura.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center">
            Ver CV
          </a>
        </div>
      </div>
    </section>
  );
};