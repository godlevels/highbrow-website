import React from 'react';
import { Link } from 'react-router-dom';
import ContentImg from '../img/hero/contents.png'
import VideoBtn from '../img/hero/video.png'
import Download from './Download'; 
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6
    }
  }
}

const Hero = () => {
  return <section>
    <motion.div variants={container} initial='hidden' whileInView={'show'} className='container mx-auto h-full relative'>
      <div className='flex flex-col justify-center'>
        <motion.div variants={fadeIn('down')} className='w-full pt-28 pb-14 lg:pt-[650px] lg:w-auto z-10 lg:absolute flex flex-col justify-center mx-12 lg:items-start'>
          <h1 className='text-[#1A1A1A] text-[26px] font-bold capitalize lg:text-[40px] leading-none'>We provide the best <br /> research assistance</h1>
          <div className='flex my-3'>
            <p>We are the ideal companion for guiding and assisting <br /> you with your assignments and project works.</p>
          </div>
          <div className='flex gap-2 mt-2'>
            <div className='mt-2'>
              <Download />
            </div> 
            <Link to='/about'>
              <div className='flex'>
                <img src={VideoBtn} alt="" className='text-red-400 h-12 w-12 lg:h-14 lg:w-14 cursor-pointer'/>
                <h1 className='pt-4 text-[#1A1A1A] text-[14px] md:text-[16px] font-medium'>Watch Video</h1>
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('left')} className='flex justify-center lg:justify-end max-h-20 lg:max-h-20'>
          <div className='relative lg:left-24 bg-[#F3F0EB] h-full pt-24 pb-24 px-9'>
            <motion.div variants={fadeIn('up')} className='mt-8 relative lg:right-28'>
              <img src={ContentImg} alt="" className='h-60 w-60 ml-7 lg:h-[472px] lg:w-[472px] xl:h-[450px]' />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>;
};

export default Hero;
