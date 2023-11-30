import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import DynamicModal from '@/components/ui/Modal'
import Alert from '@/components/ui/Alert'

const GuideData = [
  {
    title: 'Básico',
    cards: [
      {
        title: 'Consultoría',
        description: '1 hora',
        description2: '50$',
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
    title: 'Personalizado',
    cards: [
      {
        title: 'Asesoría',
        description: '1 hora',
        description2: '200$',
        buttonText: 'Reservar'
      },
      {
        title: 'Modificaciones',
        description: 'Te ayudamos a mejorar tu página al máximo',
        buttonText: 'Solicitar'
      }
    ]
  }
]

const PricingSection = () => {
  const [selectedGuideIndex, setSelectedGuideIndex] = useState(0)
  const selectedGuide = GuideData[selectedGuideIndex]
  const [issueTheme, setIssueTheme] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  const openModal = (selectedIssueTheme) => {
    setIssueTheme(selectedIssueTheme)
    setOpen(true)
  }

  return (
    <section className="bg-primary-500 h-[116vh] md:h-[86vh] py-12 text-white text-center relative">
      <div className={ `mx-[15%] w-[35%] md:mx-[30%] md:w-[20%] ${selectedGuideIndex === 0 ? 'bg-black' : 'bg-white'} h-0.5 transition-all duration-300` }></div>
      <div className={ `mx-[50%] -mt-0.5 w-[35%] md:w-[20%] ${selectedGuideIndex === 0 ? 'bg-white' : 'bg-black'} h-0.5 transition-all duration-300` }></div>
      <div className="flex flex-row justify-center mb-16">
        { GuideData.map((guide, index) => (
          <p
            key={ index }
            onClick={ () => setSelectedGuideIndex(index) }
            className={ `mt-8 text-lg text-white cursor-pointer ml-14 -mr-3 sm:ml-28 sm:mr-20 ${selectedGuideIndex === index ? '' : 'text-gray-300'}` }
          >
            { guide.title }
          </p>
        )) }
      </div>
      <div className="flex flex-col sm:flex-row justify-center">
        { selectedGuide.cards.map((card, index) => (
          <div key={ index } className="mx-4">
            <div className="mx-auto w-[240px] h-[235px] mb-10 bg-white px-4 py-6 shadow-lg text-black text-center flex flex-col items-center">
              <p className="font-semibold mb-6">{ card.title }</p>
              <div className="h-[75px]">
                <p className="mb-2">{ card.description }</p>
                { card.description2 && <p>{ card.description2 }</p> }
              </div>
              <Button label={ card.buttonText } onSubmit={ () => openModal(card.title) } />
            </div>
          </div>
        )) }
      </div>
      { isOpen && <DynamicModal isOpen={ isOpen } handleClose={ closeModal } issue={ issueTheme } setShowAlert={ setShowAlert } /> }
      { showAlert && (
        <Alert message="¡Se ha enviado un correo satisfactoriamente!" onClose={ () => setShowAlert(false) } timeout={ 4000 } />
      ) }
    </section>
  )
}

export default PricingSection
