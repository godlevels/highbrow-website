import React, { useState } from 'react';
import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'
import { motion } from 'framer-motion';
import Payment from './Socials';
import { Link } from 'react-scroll';




const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }
}


const NavMobile = () => {
  const [openMenu, setOpenMenu] = useState(false)


  return <nav className='text-primary flex lg:hidden'>
    <div onClick={()=> setOpenMenu(true)} className='text-3xl cursor-pointer'>
      <CgMenuRight /> 
    </div>
    <motion.div 
      variants={menuVariants}
      initial='hidden'
      animate={openMenu ? 'show' : ''} 
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      <div onClick={()=> setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
        <IoMdClose className='hover:animate-bounce'/>
      </div>
      <div className='h-full flex flex-col justify-center items-center text-primary font-semibold cursor-pointer'>
        <ul className='flex flex-col justify-center items-center gap-y-8 font-bold text-xl'>
          <Link to='hero' spy={true} smooth={true} offset={50} duration={500}><li className='hover:text-[#DA7717] transition'>Home</li></Link>
          <Link to='about' spy={true} smooth={true} offset={-100} duration={500}><li className='hover:text-[#DA7717] transition'>About Us</li></Link>
          <Link to='services' spy={true} smooth={true} offset={-80} duration={500}><li className='hover:text-[#DA7717] transition'>Services</li></Link>
          <Link to='courses' spy={true} smooth={true} offset={-80} duration={500}><li className='hover:text-[#DA7717] transition'>Courses</li></Link>
          <Link  to='portfolio' spy={true} smooth={true} offset={-60} duration={500}><li className='hover:text-[#DA7717] transition'>Portfolio</li></Link>
        </ul>
        <div className='bg-white mr-24 mt-10 text-sm'>
          <Payment />
        </div>
      </div>
    </motion.div>
  </nav>;
};

export default NavMobile;
