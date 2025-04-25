export function Projects() {
  const projects = [
    {
      title: 'API REST con Sequelize',
      description: 'Desarrollo de una API REST utilizando Node.js, Express y Sequelize como ORM para PostgreSQL. Implementación de autenticación y autorización.',
      technologies: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'JWT'],
      link: '#'
    },
    {
      title: 'Aplicación de Clima',
      description: 'Aplicación web que muestra el clima actual y pronóstico utilizando la API de OpenWeatherMap. Implementada con React y Axios para las peticiones HTTP.',
      technologies: ['React', 'Axios', 'CSS3', 'OpenWeatherMap API'],
      link: '#'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                Ver proyecto
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 