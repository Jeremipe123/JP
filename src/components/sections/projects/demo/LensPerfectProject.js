import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const LensPerfectProject = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-fixed" style={{ backgroundImage: 'url(/assets/img/demo/fondoLens.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(60%)' }}></div>
      <nav className="bg-white h-20 p-4 relative z-20">
        <div className="flex items-center justify-between">
          <div className="text-3xl lg:mt-2 font-bold text-black">Lens | Perfect</div>
          <button onClick={toggleMenu} className="block lg:hidden text-black text-center py-4 px-4 focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />)
                : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
            </svg>
          </button>
        </div>
        <div className={`absolute top-20 left-0 text-center right-0 ${!menuOpen && 'lg:bg-transparent'} lg:-mt-10 lg:relative lg:flex lg:items-center lg:justify-end lg:space-x-4 lg:top-auto lg:left-auto lg:right-auto bg-custom-100 ${menuOpen ? 'block' : 'hidden'}`}>
          {['Inicio', 'Portafolio', 'Sobre Mí', 'Blog', 'Álbumes de Clientes', 'Contacto'].map((item, index) => (
            <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={index} className="block px-4 py-2 text-black hover:bg-gray-200">{item}</a>
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
