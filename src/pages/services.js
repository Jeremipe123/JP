/* ******************************************************** */
import 'tailwindcss/tailwind.css'
/* ******************************************************** */
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
/* ******************************************************** */
import CardSection from '@/components/sections/services/CardSection'
/* ******************************************************** */

const Main = () => {
  return (
    <div>
      <Navbar />

      <CardSection />

      <Footer />
    </div>
  )
}

export default Main
