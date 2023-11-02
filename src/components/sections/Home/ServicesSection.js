import React from 'react'
import Button from '../../ui/Button2'

const ServicesSection = () => {
  return (
    <div className="bg-primary-800 py-6">
      <div className="container mx-auto text-center text-white font-montserrat max-w-lg">
        <h2 className="text-3xl mb-24">Servicios</h2>
        <p className="text-lg mb-16 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut cursus erat.
          Proin ac posuere purus. Nam sed arcu erat. Praesent a vehicula est, et condimentum enim.
        </p>
        <div className="flex justify-center">
          <Button label="Ver más" textColor="text-black" color="bg-primary-300" hover="bg-red-500" />
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
