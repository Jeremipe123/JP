import React, { useState } from 'react'
import Button from '@/components/ui/Button'

const GuideData = [
  {
    title: 'Guía Básica',
    cards: [
      {
        title: 'Asesoría | Consultoría',
        description: '1 hora',
        description2: '100$',
        buttonText: 'Reservar'
      },
      {
        title: 'Creación de página web',
        description: 'Nos adaptamos a su necesidad, con nuestra originalidad',
        buttonText: 'Solicitar'
      }
    ]
  },
  {
    title: 'Guía Personalizada',
    cards: [
      {
        title: 'Corrección | Modificaciones',
        description: 'Te ayudamos a mejorar tu página al máximo',
        buttonText: 'Solicitar'
      }
      // {
      //   title: 'Tarjeta 2',
      //   description: 'Descripción de la Tarjeta 2.',
      //   buttonText: 'Ver Más'
      // }
    ]
  }
]

const PricingSection = () => {
  const [selectedGuideIndex, setSelectedGuideIndex] = useState(0)
  const selectedGuide = GuideData[selectedGuideIndex]

  return (
    <section className="bg-primary-500 py-12 text-white text-center relative">
      <div className={ `absolute left-1/3 w-1/3 ${selectedGuideIndex === 0 ? 'bg-black' : 'bg-white'} h-0.5 top-32 transition-all duration-300` }></div>
      <div className={ `absolute right-1/3 w-1/6 ${selectedGuideIndex === 0 ? 'bg-white' : 'bg-black'} h-0.5 top-32 transition-all duration-300` }></div>
      <div className="flex flex-row justify-center mb-16">
        { GuideData.map((guide, index) => (
          <p
            key={ index }
            onClick={ () => setSelectedGuideIndex(index) }
            className={ `mt-24 text-lg text-white cursor-pointer mx-6 ml-16 ${selectedGuideIndex === index ? '' : 'text-[#d8d8d8]'}` }
          >
            { guide.title }
          </p>
        )) }
      </div>
      <div className="flex flex-row justify-center">
        { selectedGuide.cards.map((card, index) => (
          <div key={ index } className="mx-4">
            <div className="mx-auto max-w-[260px] mb-5 bg-white px-4 py-6 shadow-lg text-black text-center flex flex-col items-center">
              <p className="font-semibold mb-5">{ card.title }</p>
              <p className="mb-2">{ card.description }</p>
              { card.description2 && <p>{ card.description2 }</p> }
              <Button label={ card.buttonText } />
            </div>
          </div>
        )) }
      </div>
    </section>
  )
}

export default PricingSection
