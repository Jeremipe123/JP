/* ******************************************************** */
import 'tailwindcss/tailwind.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
import Footer from '@/components/common/Footer'
/* ******************************************************** */
import MainSection from '@/components/sections/home/MainSection'
import AboutMe from '@/components/sections/home/AboutMeSection'
import ContactsSection from '@/components/sections/home/ContactsSection'
import ProjectSesion from '@/components/sections/home/ProjectSection'
import ServicesSection from '@/components/sections/home/ServicesSection'
/* ******************************************************** */

const Main = () => {
  return (
    <div>
      <HeadPage />

      <MainSection />
      <AboutMe />
      <ProjectSesion />
      <ServicesSection />
      <ContactsSection />

      <Footer />
    </div>
  )
}

export default Main
