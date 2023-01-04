import React from 'react'
import ContactForm from '../components/ContactForm'
import faqBg from '../img/faqs/bgfaq.png'
import Header from '../components/Header'
import Talk from '../components/Talk'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

const FaqsPage = () => {
  return (
    <div className='bg-[#ffffff]'>
        <div>
            <Header />

            <div className='pt-20 mx-24'>
                <h1 className='capitalize text-[48px] text-[#002E5A] font-bold pb-5'>contact us</h1>
                <div>
                    <img src={faqBg} alt="" />
                </div>
                <ContactForm />
            </div>

            <Talk />
            <Footer />
            <Copyright />
        </div>
    </div>
  )
}

export default FaqsPage