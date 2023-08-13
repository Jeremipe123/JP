import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import MainSection from '../components/information/MainSection'
import AboutMeSection from '../components/information/AboutMeSection'
import ContactSection from '../components/information/ContactsSection'
// import SkillsSection from '../components/index/SkillsSection';
// import CoursesSection from '../components/index/CoursesSection';
// import TestimonialsSection from '../components/index/TestimonialsSection';
import Footer from '../components/index/Footer'

const Home = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/assets/img/logo.png" />
        <title>JEREMI PEREZ</title>
        <meta name="description" content="Marca personal" />
      </Head>

      <MainSection />
      <AboutMeSection />
      <ContactSection />
      {/* <SkillsSection /> */ }
      {/* <CoursesSection />
      <TestimonialsSection /> */}
      <Footer />
    </div>
  )
}

export default Home
