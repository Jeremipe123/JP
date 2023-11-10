/* ******************************************************** */
import 'tailwindcss/tailwind.css'
import '../app/globals.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
/* ******************************************************** */
import ProjectDescription from '@/components/sections/projects/ProjectInformation'
/* ******************************************************** */

const Main = () => {
  return (
    <div>
      <HeadPage />
      <Navbar />

      <ProjectDescription />

      <Footer />
    </div>
  )
}

export default Main
