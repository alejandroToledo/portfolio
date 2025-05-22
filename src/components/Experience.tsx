'use client';
import { motion } from 'framer-motion';
import { fadeUp } from './animations';

export function Experience() {
  const experiences = [
    {
      title: 'Desarrollador Full Stack',
      company: 'Jedify',
      period: '2020 - Actualidad',
      description: 'He desarrollado aplicaciones web utilizando React, TypeScript, Node.js, Sequelize y SQL, participando en todas las etapas del ciclo de vida del software. He trabajado con arquitectura SPA tradicional y algunos proyectos con microfrontends (single-SPA), integrando APIs REST y optimizando la experiencia de usuario. Me he encargado de traducir diseños a código responsive, asegurando consistencia visual y funcionalidad, además de coordinar el equipo frontend, realizar revisiones de código, desarrollar pruebas con Jest y definir soluciones técnicas enfocadas en la eficiencia y escalabilidad.',
      skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Sequelize']
    },
    {
      title: 'Desarrollador Web',
      company: 'Freelance',
      period: 'Ene 2021 - Actualidad',
      description: 'Me especializo en el diseño y desarrollo de sitios web personalizados con un enfoque en la usabilidad, la estética y la experiencia del usuario. Me encargo de traducir diseños y wireframes (Figma, referencias visuales) a interfaces funcionales, responsive y optimizadas. Trabajo directamente con clientes para entender sus necesidades y proponer soluciones adaptadas a cada proyecto, utilizando tecnologías como React, JavaScript y CSS para crear experiencias web visualmente consistentes y accesibles.',
      skills: ['Liderazgo', 'Gestión de equipos', 'Planificación', 'Control de calidad']
    }
  ];

  return (
    <motion.section
      className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
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
    </motion.section>
  );
} 