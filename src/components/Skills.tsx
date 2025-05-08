'use client';
import { motion } from 'framer-motion';
import { fadeUp } from './animations';

export function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Git',
        'Redux Toolkit',
        'Framer Motion',
        'GraphQL',
        'Vite',
        'Responsive Design (Flexbox, Grid)'
      ]  
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'REST APIs', 'JWT (JSON Web Tokens)',]
    },
    {
      category: 'Herramientas',
      items: ['Git', 'GitHub', 'Axios', 'Postman', 'Cursor', 'Photoshop','Illustrator', 'Figma']
    }
  ];

  return (
    <motion.section
      className="pt-12 pb-20 px-4 md:px-8 bg-white dark:bg-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
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
    </motion.section>
  );
} 