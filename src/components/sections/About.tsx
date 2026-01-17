import ProfileCard from "../bits/ProfileCard";

export const About = () => {

  const fotoPerfil = "TU_LINK_DE_IMAGEN_AQUÍ"
  return (
    <section id="sobre-mi" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Columna Izquierda: Imagen o Decoración Visual */}
        <div className="flex justify-center items-center">
          <ProfileCard 
            name="Manuel Namuncurá"
            title="Desarrollador FullStack"
            handle="manux"
            status="Online"
            avatarUrl={fotoPerfil}
            showUserInfo={false}
            enableTilt={false}
            enableMobileTilt={false}
            behindGlowColor="hsla(81, 100%, 70%, 0.6"
          />
        </div>

        {/* Columna Derecha: Texto */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Sobre mí
          </h2>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            <p>
              Soy <span className="text-black dark:text-white font-medium">Analista en Sistemas de Información</span> y actualmente curso el 4.º año de Ingeniería en la <span className="text-black dark:text-white">UTN FRVM</span>. Mi formación académica me ha brindado una base sólida para entender el software no solo como código, sino como una herramienta analítica para resolver problemas complejos.
            </p>

            <p>
              Me apasiona el desarrollo moderno y el aprendizaje continuo. Mi enfoque se centra en construir aplicaciones eficientes y escalables, combinando el rigor técnico de mi carrera con las últimas tecnologías del ecosistema web como <span className="text-black dark:text-white font-medium">React, TypeScript y NestJS</span>.
            </p>

            <p>
              Cuento con experiencia en soporte técnico independiente, lo que me ha permitido desarrollar una gran capacidad de diagnóstico y optimización, habilidades que hoy aplico en cada línea de código que escribo.
            </p>
          </div>

          {/* Datos rápidos extraídos de tu CV */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-1">Ubicación</h4>
              <p className="text-black dark:text-white font-medium">Villa María, Córdoba</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-1">Idioma</h4>
              <p className="text-black dark:text-white font-medium">Inglés Intermedio (B1/B2)</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};