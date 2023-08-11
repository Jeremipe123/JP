import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import MainSection from '../components/index/MainSection';
import AboutMeSection from '../components/index/AboutMeSection';
import SkillsSection from '../components/index/SkillsSection';
// import CoursesSection from '../components/index/CoursesSection';
// import TestimonialsSection from '../components/index/TestimonialsSection';
// import ContactSection from '../components/index/ContactsSection';
import Footer from '../components/index/Footer';

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
      {/* <SkillsSection /> */}
      {/* <CoursesSection />
      <TestimonialsSection />
      <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Home;
