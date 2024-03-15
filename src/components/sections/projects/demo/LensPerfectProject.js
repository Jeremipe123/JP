import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const LensPerfectProject = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-fixed" style={{ backgroundImage: 'url(/assets/img/demo/fondoLens.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(60%)' }}></div>
      <nav className="bg-white overflow-hidden h-20 p-4 relative z-10">
        <div className="float-left flex items-center mt-1 ml-4 text-3xl font-bold text-black">
          Lens | Perfect
        </div>
        <div className="float-right mt-3">
          {['Inicio', 'Portafolio', 'Sobre Mí', 'Blog', 'Álbumes de Clientes', 'Contacto'].map((item, index) => (
            <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={index} className="text-black text-center py-4 px-4 hover:bg-gray-200">{item}</a>
          ))}
        </div>
      </nav>

      <section className="relative z-10">
        <div className="text-white text-center py-52">
          <h1 className="text-5xl mb-8 font-semibold">Lens Perfect</h1>
          <h2 className="text-2xl mb-8">Explora el mundo a través de nuestras imágenes</h2>
          <button className="bg-transparent border border-white text-white px-10 py-4 text-xl transition duration-300 ease-in-out hover:bg-white hover:text-black">Ver Más</button>
        </div>
      </section>

      <footer className="bg-white text-center py-6 relative z-10">
        <div className="flex justify-center">
          <FaFacebook className="text-2xl mx-4" />
          <FaInstagram className="text-2xl mx-4" />
          <FaTwitter className="text-2xl mx-4" />
        </div>
        <p className="mt-4 text-gray-600">&copy; 2023 Lens Perfect. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default LensPerfectProject
