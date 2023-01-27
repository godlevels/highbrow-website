import React from 'react'
// import { serviceData } from '../data'
import ServiceHead from '../img/service/services.svg'
import ServicesCards from './ServicesCards'



const Services = () => {

  // const { icons, title, desc } = serviceData; 
  return ( 
    <section>
      <div className='container mx-auto my-9'>
        <div>
          <img className='mx-12 h-8 w-20 lg:h-10 lg:w-32 my-6' src={ServiceHead} alt="" />
          <p className='mb-14 text-[13px] lg:text-[18px] text-[#1A1A1A] mx-12'>We are committed to providing the best possible solutions to academic and business <br /> projects, proposals, research, software, solutions, admission help and consultancy.</p>
        </div>
        <ServicesCards /> 
      </div>
    </section>
  )
}

export default Services