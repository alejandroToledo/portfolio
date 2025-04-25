export function Experience() {
  const experiences = [
    {
      title: 'Desarrollador Full Stack',
      company: 'Jedify',
      period: '2020 - Actualidad',
      description: 'Desempeñé el cargo de desarrollador de software con un enfoque destacado en el desarrollo frontend con React y backend con Node.js, sequelize y SQL. Contribuí activamente al éxito de proyectos clave para clientes de renombre, incluyendo empresas de la talla de Murchison y Newsan, donde asumí el rol de coordinador del Frontend. Mi trabajo se centró en la creación de soluciones técnicas innovadoras y eficientes que mejoraron significativamente la experiencia del usuario y la eficacia operativa. ',
      skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Sequelize']
    },
    {
      title: 'Desarrollador Web',
      company: 'Freelance',
      period: 'Ene 2021 - Actualidad',
      description: 'He colaborado con una variedad de clientes para diseñar y desarrollar sitios web a medida. Mi enfoque en la creatividad y la funcionalidad ha resultado en proyectos exitosos que cumplen con las necesidades de los clientes y mejoran su presencia en línea. Estos proyectos han fortalecido aún más mis habilidades en tecnologías clave, como React, JavaScript, HTML, CSS, y han consolidado mi capacidad para gestionar proyectos de manera eficiente y cumplir plazos',
      skills: ['Liderazgo', 'Gestión de equipos', 'Planificación', 'Control de calidad']
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experiencia Profesional</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.company} | {exp.period}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 