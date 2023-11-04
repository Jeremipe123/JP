import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { RxDotFilled } from 'react-icons/rx'
// import Home from '@/components/ui/Carrousel'

const ProjectSection = () => {
  const slides = [
    {
      url: '/assets/img/projects/11.png',
      description: 'Nuestro objetivo es inspirar y guiar a las personas hacia un estilo de vida activo y saludable, fomentando el bienestar físico y mental',
      title: 'EcoFusión Fitness',
      color: 'text-[#FF4500]'
    },
    {
      url: '/assets/img/projects/22.png',
      description: 'Utilizamos tecnologías avanzadas de inteligencia artificial y análisis de datos para ofrecer pronósticos deportivos precisos y recomendaciones de apuestas en tiempo real, confiables y certeros',
      title: 'AI',
      color: 'text-[#FFBD5B]'
    },
    {
      url: '/assets/img/projects/33.png',
      description: 'Este proyecto se basa en la gestión y administración de población de manera masiva, contando con muchas funcionalidades que la ayudan a ser la más completa',
      title: 'Confidencial',
      color: 'text-[Afb0b1]'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="bg-primary-100 w-full h-full relative">
      <div className='max-w-[1400px] h-[599px] w-full m-auto relative group z-20'>
        <div
          style={ { backgroundImage: `url(${slides[currentIndex].url})` } }
          className='w-full h-full bg-center bg-no-repeat ease-in-out duration-300 relative'
        >
          {/* Left Arrow */ }
          <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-primary-300 cursor-pointer'>
            <IoIosArrowBack onClick={ prevSlide } size={ 50 } />
          </div>
          {/* Right Arrow */ }
          <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-primary-300 cursor-pointer'>
            <IoIosArrowForward onClick={ nextSlide } size={ 50 } />
          </div>
          <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-0.5'>
            { slides.map((project, projectIndex) => (
              <div
                key={ projectIndex }
                onClick={ () => goToSlide(projectIndex) }
                className={ `text-4xl cursor-pointer ${currentIndex === projectIndex ? 'text-[#808080]' : 'text-[#333333]'}` }
              >
                <RxDotFilled />
              </div>
            )) }
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-center z-30">
            <h1 className="text-4xl my-5 mb-40">Proyectos</h1>
            <h2 className={ `text-lg ${slides[currentIndex].color}` }>
              { slides[currentIndex].title }
              {
                currentIndex === 1 ? <span className='text-lg text-[#CECECE]'> PLAY</span> : ''
              }
            </h2>
            <p className="text-lg mt-5 mb-5 max-w-sm mx-auto text-justify">
              &quot;{ slides[currentIndex].description }&quot;.
            </p>
            {/* <a className="text-primary-300 underline hover:text-primary-500 cursor-pointer">
              Ver más
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
