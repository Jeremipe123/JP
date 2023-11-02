import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <img src="/assets/img/logo.png" alt="JP Logo" className="w-12 h-12 mr-2" />
            </div>
          </div>
          <div className="flex justify-center ml-6">
            <a href="https://wa.me/+584241939329" className="mr-4">
              <FaWhatsapp size={ 24 } className="text-white hover:text-gray-300" />
            </a>
            <a href="https://www.youtube.com/@JeremiPerez19" className="mr-4">
              <FaYoutube size={ 24 } className="text-white hover:text-gray-300" />
            </a>
            <a href="https://www.instagram.com/jeremiperez19">
              <FaInstagram size={ 24 } className="text-white hover:text-gray-300" />
            </a>
          </div>
          <div className="text-center font-montserrat md:text-right">
            <p className="text-xs"> Jeremi Perez © 2023   | Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
