import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { RxDotFilled } from 'react-icons/rx'
import 'src/app/globals.css'
// import Home from '@/components/ui/Carrousel'

const ProjectSection = () => {
  const slides = [
    {
      url: '/assets/img/projects/1.png'
    },
    {
      url: '/assets/img/projects/2.png'
    },
    {
      url: '/assets/img/projects/3.png'
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
    <div className="bg-primary-800 w-full h-full relative">
      <div className='max-w-[1400px] h-[607px] w-full m-auto relative group z-20'>
        <div
          style={ { backgroundImage: `url(${slides[currentIndex].url})` } }
          className='w-full h-full opacity-20 brightness-[.8] bg-center bg-no-repeat ease-in-out duration-300 relative'
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
            { slides.map((slide, slideIndex) => (
              <div
                key={ slideIndex }
                onClick={ () => goToSlide(slideIndex) }
                className={ `text-3xl cursor-pointer ${currentIndex === slideIndex ? 'text-[#808080]' : 'text-[#333333]'
                  }` }
              >
                <RxDotFilled />
              </div>
            )) }
          </div>
        </div>
        <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-white text-center z-30 font-montserrat">
          <h1 className="text-4xl">Proyectos</h1>
          <p className="text-lg mt-48 max-w-sm mx-auto">
            &quot;Sobre que es el proyecto, y cuales son sus valores o cosas que lo identifiquen&quot;
          </p>
          <h2 className="text-lg mt-10">Nombre del Proyecto</h2>
          <p className="text-lg">Descripción detallada del proyecto.</p>
          <a className="text-primary-300 underline hover:text-primary-500 cursor-pointer">
            Ver más
          </a>
        </div>
      </div>
    </div >
  )
}

export default ProjectSection
