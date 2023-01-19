import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import AboutImg from '../img/about/image.jpeg'
import AboutTitle from '../img/about/about.png'
import { Link } from 'react-router-dom';
// import ModalVideo from 'react-modal-video';
// import '../modalVideo.scss'
// import { IoMdArrowForward } from 'react-icons/io'; 

 
const About = () => {
  return <section className='mt-[520px] lg:mt-[616px] py-12 bg-gradient-to-r from-[#002E5A] to-[#0D5EBB]'> 
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-24 lg:justify-around mx-12 lg:mx-10'>
        <motion.div
        variants={fadeIn('right')}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='lg:my-16'>
          <div>
            <img className='h-8 w-20 lg:h-10 lg:w-32' src={AboutTitle} alt="" />
          </div>
          <h2 className='text-[20px] lg:text-[32px] font-bold my-6 text-[#F3F0EB]'>Highbrow Research: your one stop <br /> for professional writing services.</h2>
          <div>
            <div>
              <p className='text-[#F3F0EB] lg:[12px] font-medium leading-5 my-2'>We are Africa’s leading educational institute that provides <br /> consultancy and professional writing services.</p>
              <Link to='/about'><button className='capitalize text-[12px] lg:text-[16px] text-[#F3F0EB] bg-transparent border border-[#F3F0EB] rounded-full py-1 px-3 my-8 font-normal flex gap-1 items-center hover:text-[#F3F0EB] hover:bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] transition-all duration-75'>learn more</button></Link>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left')}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        >
          <img className='object-cover h-[400px] w-[566px] md:mx-auto lg:mx-0 rounded-md' src={AboutImg} alt="" />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
