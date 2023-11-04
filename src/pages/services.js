/* ******************************************************** */
import 'tailwindcss/tailwind.css'
import '../app/globals.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
/* ******************************************************** */
import CardSection from '@/components/sections/services/CardSection'
/* ******************************************************** */

const Main = () => {
  return (
    <div>
      <HeadPage />
      <Navbar />

      <CardSection />

      <Footer />
    </div>
  )
}

export default Main
