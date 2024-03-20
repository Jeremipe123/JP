/* ******************************************************** */
import 'tailwindcss/tailwind.css'
import '../../app/globals.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
import ConfidentialProject from '@/components/sections/projects/demo/ConfidentialProject'
/* ******************************************************** */

const EcoFusion = () => {
  return (
    <div>
      <HeadPage />
      {/* <Navbar /> */}

      <ConfidentialProject />
      {/* <Footer /> */}
    </div>
  )
}

export default EcoFusion
