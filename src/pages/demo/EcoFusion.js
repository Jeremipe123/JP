/* ******************************************************** */
import 'tailwindcss/tailwind.css'
import '../../app/globals.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
// import Footer from '@/components/common/Footer'
// import Navbar from '@/components/common/Navbar'
import EcoFusionProject from '@/components/sections/projects/demo/EcoFusionProject'
/* ******************************************************** */
// import MainSection from '@/components/sections/Home/MainSection'
/* ******************************************************** */

const EcoFusion = () => {
  return (
    <div>
      <HeadPage />
      {/* <Navbar /> */ }

      <EcoFusionProject />
      {/* <Footer /> */ }
    </div>
  )
}

export default EcoFusion
