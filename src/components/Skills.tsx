export function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'REST APIs']
    },
    {
      category: 'Herramientas',
      items: ['Git', 'GitHub', 'Axios', 'Postman', 'VS Code']
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 