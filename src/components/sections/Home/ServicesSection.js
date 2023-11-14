import React from 'react'
import Link from 'next/link'
import Button from '../../ui/Button2'

const ServicesSection = () => {
  return (
    <div className="bg-primary-800 py-6">
      <div className="container mx-auto text-center text-white max-w-lg px-8">
        <h2 className="text-3xl mb-20">Servicios</h2>
        <p className="text-lg mb-8 text-justify">
          En JP, transformamos ideas en experiencias digitales únicas y excepcionales.
          Desde el diseño web hasta el desarrollo de software, ofrecemos soluciones
          innovadoras y personalizadas.
        </p>
        <p className="text-lg mb-4 font-semibold">
          !Tu éxito es nuestro compromiso!
        </p>
        <Link href="/services">
          <div className="flex justify-center">
            <Button label="Ver más" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ServicesSection
