import Image from 'next/image';

export function Hero() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Alejandro"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hola, soy Alejandro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Desarrollador Full Stack con experiencia en TypeScript, React y Node.js
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Después de una exitosa carrera en gastronomía, decidí seguir mi pasión por la tecnología y la programación. 
            Mi experiencia en la cocina me ha enseñado la importancia del trabajo en equipo, la atención al detalle y 
            la resolución creativa de problemas, habilidades que ahora aplico en el desarrollo de software.
          </p>
        </div>
      </div>
    </section>
  );
} 