import React from 'react'
// import components
import Hero from '../components/Hero';
import Header from '../components/Header'; 
import About from '../components/About';
import GallerySection from '../components/GallerySection';
import Interview from '../components/Experience';
import Testimonial from '../components/Testimonial';
// import Contact from './components/Contact';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Services from '../components/Services'; 
import Talk from '../components/Talk';
import Courses from '../components/Courses';
import Faq from '../components/Faq';

const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Courses /> 
        <GallerySection />
        <Interview />
        <Testimonial />
        <Faq />
        <Talk />
        {/* <Contact /> */}
        <Footer />
        <Copyright />
        {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default HomePage