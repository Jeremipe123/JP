import React, { useState } from 'react'
import Button from '@/components/ui/Button'

const CardSection = [
  {
    title: 'Asesoría | Consultoría',
    description: '1 hora',
    description2: '100$',
    buttonText: 'Reservar'
  },
  {
    title: 'Plan Personalizado',
    description: 'Descripción del Plan Personalizado.',
    buttonText: 'Seleccionar Personalizado'
  }
]

const PricingSection = () => {
  const [isBasicGuide, setIsBasicGuide] = useState(true)
  const selectedCard = isBasicGuide ? CardSection[0] : CardSection[1]

  return (
    <section className="bg-primary-500 py-12 text-white text-center relative">
      <div className={ `absolute left-1/3 w-1/3 ${isBasicGuide ? 'bg-black' : 'bg-white'} h-0.5 top-32 transition-all duration-300` }></div>
      <div className={ `absolute right-1/3 w-1/6 ${isBasicGuide ? 'bg-white' : 'bg-black'} h-0.5 top-32 transition-all duration-300` }></div>
      <div className='flex flex-row justify-center mb-16'>
        <p onClick={ () => setIsBasicGuide(true) } className={ `mt-24 text-lg text-white cursor-pointer mx-16 ${!isBasicGuide ? 'text-gray-300' : ''}` }>
          Guía básica
        </p>
        <p onClick={ () => setIsBasicGuide(false) } className={ `mt-24 text-lg text-white cursor-pointer mx-6 ${!isBasicGuide ? '' : 'text-gray-300'}` }>
          Guía personalizada
        </p>
      </div>
      <div className="mx-auto max-w-[240px] mb-5 bg-white py-7 shadow-lg text-black text-center flex flex-col items-center"> {/* Aplica text-center y mx-auto aquí */ }
        <p className="font-semibold mb-5">{ selectedCard.title }</p>
        <p className="mb-2">{ selectedCard.description }</p>
        <p>{ selectedCard.description2 }</p>
        <Button label={ selectedCard.buttonText } />
      </div>
    </section>
  )
}

export default PricingSection
