import React from 'react'

const AboutMe = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:px-2 text-justify">
            <h2 className="text-3xl mb-6">¿Quién soy?</h2>
            <p className="mb-2">
              ¡Saludos! Soy Jeremi Pérez, <span className='font-bold'>no solo creamos código,
                construimos experiencias. </span>
              Desde mis inicios a los 20 años, me embarqué en un viaje
              donde la autenticidad y el crecimiento personal son <span className='font-bold'>PRIORIDAD</span>.
            </p>
            <p className="mb-2">
              &quot;En cada línea de código, buscamos la originalidad, la elegancia y la excelencia.&quot;
            </p>
            <p className='mb-2 font-bold'>
              No somos solo desarrolladores; somos narradores de historias digitales.
            </p>
            <p className='mb-2'>
              <span className='font-bold'>No se trata solo de mí</span>. Aquí, ofrecemos más que servicios: brindamos
              atención personalizada y un compromiso firme con nuestra comunidad.
            </p>
            <p className='mb-2'>
              Creo en el poder transformador de la tecnología, y JP es la plataforma
              desde la cual creamos soluciones que van más allá de las expectativas.
            </p>
          </div>
          <div className="md:order-2 flex justify-center">
            <img src="/assets/img/aboutme.jpg" alt="Foto" className="w-[90%] h-[90%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
