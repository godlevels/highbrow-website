import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero';
import Header from '../components/Header'; 
import About from '../components/About';
import GallerySection from '../components/GallerySection';
import Interview from '../components/Experience';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Services from '../components/Services'; 
import Talk from '../components/Talk';
import Courses from '../components/Courses';
import Faq from '../components/Faq';
import ChatBot from '../components/ChatBot';
import CircleLoader from "react-spinners/CircleLoader";

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },3000)
  },[])
  return ( 
    <div className=''>
      {
        loading ?
        <CircleLoader
        color={'#DA7717'}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> :
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
        <Footer />
        <ChatBot />
        <Copyright />
      </div>
      }
        
    </div>
  )
}

export default HomePage