'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, hoverScale } from './animations';

export function Projects() {
  const projects = [
    {
      title: 'Timeless Tile Inc',
      description: 'Sitio web corporativo para una empresa de instalación de pisos y azulejos. Diseño moderno y responsivo con enfoque en la experiencia del usuario.',
      image: '/images/projects/timeless-tile.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://www.timelesstileinc.com/'
    },
    {
      title: 'ICH Locksmith',
      description: 'Página web para una empresa de cerrajería con sistema de cotización en línea y reserva de servicios.',
      image: '/images/projects/ich-locksmith.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js'],
      link: 'https://ichlocksmith.com/'
    },
    {
      title: 'Neil\'s Garage Doors',
      description: 'Sitio web para una empresa de puertas de garaje con catálogo de productos y sistema de contacto.',
      image: '/images/projects/neils-garage.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://www.neilsgaragedoors.com/'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  variants={hoverScale}
                  whileHover="hover"
                  initial="initial"
                >
                  Ver proyecto
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 