import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import HeroSection from '../components/index/HeroSection';
import SkillsSection from '../components/index/SkillsSection';
import CoursesSection from '../components/index/CoursesSection';
import AboutMeSection from '../components/index/AboutMeSection';
import TestimonialsSection from '../components/index/TestimonialsSection';
import ContactSection from '../components/index/ContactsSection';
import Footer from '../components/index/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>JP</title>
        <meta name="description" content="Marca personal sobre JP" />
      </Head>

      <HeroSection />
      <SkillsSection />
      <CoursesSection />
      <AboutMeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
