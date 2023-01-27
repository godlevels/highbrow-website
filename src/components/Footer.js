import React from 'react';
import { footerData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import FootLogo from '../img/footer/footlog.svg'

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const Footer = () => {
  const { linksovers, linkssupp, linksleg, footadd } = footerData
  return <footer className='bg-[#002E5A] py-10'>
    <div className='container mx-auto'>
      <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount:0.1}} 
      className='text-white flex flex-col mx-10 lg:flex-row lg:justify-between gap-x-5 gap-y-14 lg:mx-12'>
        <motion.div
        variants={fadeIn('up')}
         className='flex-1 flex flex-col gap-y-6'>
          <div className='mr-6'>
            <img className='w-24 lg:w-32' src={FootLogo} alt="" />

            <div>
              <p className='text-[15px]'>We are your best plug for <span className='text-[#D97718]'>Academic</span> and <span className='text-[#D97718]'>Business</span> Research.</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('up')}
        className='flex-1'>
          <div className=''>
            <div className='text-[20px] font-medium'>{linksovers.title}</div> 
            <ul className=''>
              {linksovers.items.map((item, i) => {
                const {href, name} = item
                return <li className='mt-2' key={i}>
                  <a href={href} className='text-white/70 hover:text-gray-400 text-[15px] duration-300'>{name}</a>
                </li>
              })}
            </ul>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('up')}
        className='flex-1'>
          <div>
              <div className='text-[20px] font-medium'>{linkssupp.title}</div>
            <ul>
              {linkssupp.items.map((item, i) => {
                const {href, name} = item
                return <li className='mt-2' key={i}>
                  <a href={href} className='text-white/70 hover:text-gray-400 text-[15px] duration-300'>{name}</a>
                </li>
              })}
            </ul>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('up')}
        className='flex-1'>
          <div>
              <div className='text-[20px] font-medium'>{linksleg.title}</div>
            <ul>
              {linksleg.items.map((item, i) => {
                const {href, name} = item
                return <li className='mt-2' key={i}>
                  <a href={href} className='text-white/70 hover:text-gray-400 text-[15px] duration-300'>{name}</a>
                </li>
              })}
            </ul>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('up')}
        className='flex-1'>
          <div className='leading-7'>
            <div className='text-[20px] font-medium'>{footadd.title}</div>
            <div className='text-white/70 hover:text-gray-400 text-[15px] duration-300'>{footadd.number}</div>
            <div className='text-white/70 hover:text-gray-400 text-[15px] duration-300'>{footadd.address}</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </footer>;
};

export default Footer;
 