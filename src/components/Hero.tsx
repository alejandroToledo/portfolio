"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textReveal,
  hoverScale,
  circleHover,
  fadeUp,
} from "./animations";

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div variants={fadeIn} className="flex flex-col items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt="Alejandro"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div variants={fadeIn} className="flex gap-4 mt-6">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/alejandrotoledoher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors relative"
              variants={hoverScale}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gray-400"
                variants={circleHover}
              />
              <svg
                className="w-6 h-6 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
            </motion.a>
            {/* GitHub */}
            <motion.a
              href="https://github.com/alejandroToledo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors relative"
              variants={hoverScale}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gray-400"
                variants={circleHover}
              />
              <svg
                className="w-6 h-6 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            variants={textReveal}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hola, soy Alejandro
          </motion.h1>
          <motion.p
            variants={textReveal}
            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Full Stack Developer | TypeScript, React & Node.js
          </motion.p>
          <motion.p
            variants={textReveal}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Tengo más de 4 años de experiencia creando soluciones web para
            empresas como Newsan y Murchison. Me especializo en desarrollar
            interfaces modernas, rápidas y accesibles, combinando diseño limpio
            y lógica robusta.
          </motion.p>
          <motion.div variants={fadeIn}>
            <a
              href="#projects"
              className="inline-block bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-xl shadow-lg hover:bg-blue-600 transition"
            >
              Ver proyectos
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
