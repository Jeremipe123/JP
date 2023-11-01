/* ******************************************************** */
import 'tailwindcss/tailwind.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
import Footer from '@/components/common/Footer'
/* ******************************************************** */
import MainSection from '@/components/sections/MainSection'
import AboutMe from '@/components/sections/AboutMeSection'
import ContactsSection from '@/components/sections/ContactsSection'
import ProjectSesion from '@/components/sections/ProjectSection'
/* ******************************************************** */

const Main = () => {
  return (
    <div>
      <HeadPage />

      <MainSection />
      <AboutMe />
      <ContactsSection />
      <ProjectSesion />

      <Footer />
    </div>
  )
}

export default Main
