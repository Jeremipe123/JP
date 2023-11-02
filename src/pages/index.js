/* ******************************************************** */
import 'tailwindcss/tailwind.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
import Footer from '@/components/common/Footer'
/* ******************************************************** */
import MainSection from '@/components/sections/Home/MainSection'
import AboutMe from '@/components/sections/Home/AboutMeSection'
import ContactsSection from '@/components/sections/Home/ContactsSection'
import ProjectSesion from '@/components/sections/Home/ProjectSection'
import ServicesSection from '@/components/sections/Home/ServicesSection'
/* ******************************************************** */

const Main = () => {
  return (
    <div>
      <HeadPage />

      <MainSection />
      <AboutMe />
      <ContactsSection />
      <ProjectSesion />
      <ServicesSection />

      <Footer />
    </div>
  )
}

export default Main
