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
    },

    {
      url: '/assets/img/images/1.jpg'
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
    <div className="bg-primary-800 w-full h-full">
      <div className='max-w-[1400px] h-[599px] w-full m-auto relative group'>
        <div
          style={ { backgroundImage: `url(${slides[currentIndex].url})` } }
          className='w-full h-full bg-center bg-no-repeat object-fill ease-in-out duration-300'
        >
          {/* Left Arrow */ }
          <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl cursor-pointer'>
            <IoIosArrowBack onClick={ prevSlide } size={ 50 } />
          </div>
          {/* Right Arrow */ }
          <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl cursor-pointer'>
            <IoIosArrowForward onClick={ nextSlide } size={ 50 } />
          </div>
          <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-0.5'>
            { slides.map((slide, slideIndex) => (
              <div
                key={ slideIndex }
                onClick={ () => goToSlide(slideIndex) }
                className='text-4xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            )) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
