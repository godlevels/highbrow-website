import React from 'react'
import { motion } from 'framer-motion'
import { footerData } from '../data';

const Copyright = () => {
  const { footadd } = footerData
  return (
    <div className='bg-[#002E5A]'> 
      <div className='flex flex-col mx-10 lg:flex-row lg:justify-between lg:mx-24'>
        <div className='container mx-auto pb-8'>
          <motion.div initial={{y: 40, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{
            type: 'tween',
            duration: '0.8',
            delay: '0.2',
          }}
          viewport={{once: false, amount: 0}}
          className='text-[16px] text-white/70 tracking-[0.02em] text-base'>&copy; 2023 Highbrow Research. All right reserved.</motion.div>
        </div>

        <motion.div initial={{y: 40, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{
            type: 'tween',
            duration: '0.8',
            delay: '0.2',
          }}
          viewport={{once: false, amount: 0}} className='flex gap-x-5 my-3 cursor-pointer'>
          <a href="https://www.instagram.com/tv/CSDL2band_x/?igshid=YmMyMTA2M2Y=" target="_blank"><img className='hover:translate-y-1 duration-500' src={footadd.insta} alt="" /></a>
          <a href="https://www.facebook.com/profile.php?id=100064903179873&mibextid=LQQJ4d" target="_blank"><img className='hover:translate-y-1 duration-500' src={footadd.face} alt="" /></a>
          <a href="https://twitter.com/highbrowr?t=7QvvV9Jcip1KS5ks2D8lUg&s=09" target="_blank"><img className='hover:translate-y-1 duration-500' src={footadd.twit} alt="" /></a>
        </motion.div>
      </div>
    </div>
  )
}

export default Copyright

