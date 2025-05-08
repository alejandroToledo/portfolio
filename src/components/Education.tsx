'use client';

import { motion } from 'framer-motion';
import { fadeUp } from './animations';

export function Education() {
  const education = [
    {
      institution: 'Mindhub',
      degree: 'Bootcamp FullStack MERN',
      period: '2020',
      description: 'Full-time coding BootCamp de 600 horas de duración que implementa la metodología "learn by doing" y simula un entorno laboral real en el que se desarrollan diferentes proyectos bajo la metodología Scrum.'
    },
    {
      institution: 'UBA',
      degree: 'Diseñador Gráfico',
      period: '2022 - Actualidad',
      description: 'Estudiante del 2do año de diseño gráfico'
    },
    {
      institution: 'Escuela Superior De Comercio Carlos Pellegrini',
      degree: 'Perito Mercantil',
      period: '2013 - 2017',
      description: 'Graduado con el título de Perito Mercantil'
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
        <h2 className="text-3xl font-bold mb-8">Educación</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.degree} | {edu.period}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 