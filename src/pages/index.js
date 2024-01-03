import 'tailwindcss/tailwind.css'
import '../app/globals.css'
import React, { useState, useEffect } from 'react'
import HeadPage from '@/components/common/Head'
import Footer from '@/components/common/Footer'
import MainSection from '@/components/sections/Home/MainSection'
import AboutMe from '@/components/sections/Home/AboutMeSection'
import ContactsSection from '@/components/sections/Home/ContactsSection'
import ProjectSesion from '@/components/sections/Home/ProjectSection'
import ServicesSection from '@/components/sections/Home/ServicesSection'
import Loader from '@/components/ui/Loader'

const Main = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div>
      { loading
        ? (<Loader setLoading={ setLoading } />)
        : (
          <>
            <HeadPage />
            <MainSection />
            <AboutMe />
            <ProjectSesion />
            <ServicesSection />
            <ContactsSection />
            <Footer />
          </>)
      }
    </div>
  )
}

export default Main
