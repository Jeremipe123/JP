/* ******************************************************** */
import 'tailwindcss/tailwind.css'
import '../../app/globals.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
// import Footer from '@/components/common/Footer'
// import Navbar from '@/components/common/Navbar'
import LensPerfectProject from '@/components/sections/projects/demo/LensPerfectProject'
/* ******************************************************** */
// import MainSection from '@/components/sections/Home/MainSection'
/* ******************************************************** */

const EcoFusion = () => {
  return (
    <div>
      <HeadPage />
      {/* <Navbar /> */ }

      <LensPerfectProject />
      {/* <Footer /> */ }
    </div>
  )
}

export default EcoFusion