import { Code2, Layout, Server, Database, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Lenguajes",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Java", "JavaScript", "TypeScript", "Python"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React", "HTML5/CSS3", "Tailwind CSS", "MUI"]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "NestJS", "Spring Boot"]
  },
  {
    title: "Bases de Datos",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Otras Herramientas",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Git & GitHub", "Testing Agil", "Ciberseguridad"]
  }
];

export const Skills = () => {
  return (
    <section id="habilidades" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          Habilidades Técnicas
        </h2>
        <div className="h-1 w-20 bg-black dark:bg-white"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, index) => (
          <div 
            key={index}
            className="p-8 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-black dark:hover:border-white transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 mb-6 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              {cat.icon}
              <h3 className="text-xl font-bold text-black dark:text-white">
                {cat.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 rounded-md group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};