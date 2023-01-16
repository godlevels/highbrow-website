import React from 'react'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReactVideoPlayer from '../components/ReactVideoPlayer'
import Talk from '../components/Talk'
import Head from '../img/aboutpage/logo.png'
import AboutHead from '../img/aboutpage/about.png'
import Woman from '../img/aboutpage/img1.png'
import Women from '../img/aboutpage/img2.png'
import Writers from '../img/aboutpage/write.png'
import WorkingHours from '../components/WorkingHours'
import WhyChooseUs from '../components/WhyChooseUs'
import Works from '../components/Works'

const AboutPage = () => {
  return (
    <>
      <div>
        <Header />

        <div className='pt-20 mx-24'>
          <img className='h-14 mt-10 mb-8' src={Head} alt="" />
          <ReactVideoPlayer />

          <div className='mb-8'>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <div className='mt-12'>
                <img className='h-14 mb-3' src={AboutHead} alt="" />
                <p className='text-[16px] font-normal text-[#1A1A1A]'>Highbrow Research is Africa’s leading educational institute that provides consultancy <br /> and professional writing services. With over seven years of delivering quality work to <br /> our clients worldwide, we are committed to serving our client’s needs and delivering <br /> beyong their expectations. <br /> Highbrow Research Enterprise Limited is a company registered under the Companies <br /> and Allied Matters Act of the Federal Republic of Nigeria. Highbrow Research is your <br /> one stop-stop agency for professional educational writing & consultancy services, <br /> including assignments, projects, and, research proposals, CVs, Cover letters, SOPs, <br /> Business plan writings and study visa processing. <br /> You can reach us through our office in Lagos. Click here to find a <br /> list of our contact addresses. You can also enjoy our state-of-the-art online <br /> services if you are far away. </p>
              </div>
              <img className='mt-10' src={Woman} alt="" />
            </div>

            <div className='flex flex-col  md:flex-row-reverse justify-between'>
              <div className='my-20'>
                <img className='h-14' src={Writers} alt="" />
                <p className='text-[16px] font-normal text-[#1A1A1A]'>Our team of writers and consultants are highly qualified and experienced. Our <br /> screening process for writers is highly competitive, and we engage the best writers <br /> and professionals globally. <br /> Each of them has its area of specialization and expertise, which aids our excellent <br /> deliveries. Our writers and consultants work round the clock to ensure the timely <br /> delivery of projects and tasks so that clients can have enough time to review before <br /> the deadline and submission. <br /> Success stories and testimonials from our clients show that we have consistently <br /> provided value to our clients worldwide. Our writers and consultants provide specific <br /> solutions to your writing needs and address your concerns as appropriate.</p>
              </div>
              <img className='my-12' src={Women} alt="" /> 
            </div>
            
          </div>
        </div>
        <WhyChooseUs />
        <Works />
        <WorkingHours />
        <Talk />
        <Footer />
        <Copyright />
      </div>
    </>
  )
}

export default AboutPage