'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, hoverScale, fadeUp } from './animations';

export function Projects() {
  const freelanceProjects = [
    {
      title: 'Soho construction',
      description: 'Landing Page para empresa dedicada a la construcción residencial, arquitectura y desarrollo.',
      image: '/images/projects/soho-construction.png',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://www.timelesstileinc.com/',
    },
    {
      title: 'Timeless Tile Inc',
      description: 'Sitio web corporativo para una empresa de instalación de pisos y azulejos. Diseño moderno y responsivo con enfoque en la experiencia del usuario.',
      image: '/images/projects/timeless-tile.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://www.timelesstileinc.com/',
    },
    {
      title: 'ICH Locksmith',
      description: 'Página web para una empresa de cerrajería con sistema de cotización en línea y reserva de servicios.',
      image: '/images/projects/ich-locksmith.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js'],
      link: 'https://ichlocksmith.com/',
    },
    {
      title: "Neil's Garage Doors",
      description: 'Sitio web para una empresa de puertas de garaje con catálogo de productos y sistema de contacto.',
      image: '/images/projects/neils-garage.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://www.neilsgaragedoors.com/',
    },
  ];

  const corporateProjects = [
    {
      title: 'Retail y Marketing Inteligente (Brasil)',
      description: 'Webapp que analiza góndolas y heladeras mediante reconocimiento de imágenes. Compara reglas de marketing para calcular posicionamiento y contaminación por competencia.',
      technologies: ['React.js', 'Redux', 'Material UI', 'Java', 'Spring', 'AWS'],
    },
    {
      title: 'App Jornaleros – Murchison',
      description: 'Webapp para gestionar ingresos al puerto, asignación de barcos y tareas. Escaneo de DNI, reportes y consultas.',
      technologies: ['React.js', 'Redux', 'Material UI', 'Node.js'],
    },
    {
      title: 'Software de Balanza – Murchison',
      description: 'Aplicación para registrar el pesaje de camiones en el puerto de Zárate. Permite registrar tipo de mercadería, peso bruto y neto, y generar reportes logísticos.',
      technologies: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Plataforma Boost – Mindhub',
      description: 'Plataforma web y mobile para conectar alumnos de bootcamp con empresas tech. Incluye analytics, búsqueda inteligente y seguimiento de carrera.',
      technologies: ['React.js', 'Redux', 'Material UI', 'Java', 'Spring', 'AWS', 'ELK Stack'],
    },
    {
      title: 'Vuelta a la Oficina – Electrónica de consumo',
      description: 'App para gestionar la vuelta presencial post-pandemia. Reservas de puestos, formularios de salud, QR, reservas de salas y reportes de RRHH.',
      technologies: ['React.js', 'Redux', 'Material UI', 'Java', 'Spring', 'OpenShift', 'MySQL'],
    },
    {
      title: 'Sistema de Presupuestos y Stock – Kelvineu',
      description: 'App interna para la empresa Kelvineu, especializada en refrigeración y climatización industrial y comercial. Permite generar presupuestos jerárquicos y gestionar el stock de materiales y servicios en tiempo real.',
      technologies: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'JWT', 'Excel/Word Export'],
    },
  ];
  

  return (
    <motion.section
      className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div>
          <h2 className="text-3xl font-bold mb-8">🧳 Proyectos Corporativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8">💼 Proyectos Freelance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48 w-full group overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                    className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                    variants={hoverScale}
                    whileHover="hover"
                    initial="initial"
                  >
                    Ver proyecto
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
