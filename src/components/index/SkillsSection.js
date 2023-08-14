import React from 'react'

const SkillsSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Explora el Futuro</h2>
            <p className="text-lg mb-6">
              Sumérgete en un mundo de innovación y posibilidades infinitas. Descubre cómo la tecnología está
              dando forma a nuestras vidas y creando un impacto en la sociedad.
            </p>
            <a href="#" className="text-blue-300 hover:text-blue-400 transition duration-300 ease-in-out">
              Leer más
            </a>
          </div>
          <div className="md:order-2 relative">
            <img src="/assets/img/tech.jpg" alt="Tecnología" className="w-full h-full rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
