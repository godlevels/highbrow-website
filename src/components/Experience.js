import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import ExperienceBg from '../img/experience/world.png' 
import ProjectsBag from '../img/experience/bag.png'
import Research from '../img/experience/people.png'
import ThumbsUp from '../img/experience/thumb.png'
import AWards from '../img/experience/award.png'
import ExpLine from '../img/experience/rectangle.png'

const Experience = () => {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <section> 
      <div  className='bg-[#002E5A] pb-20'>
        <div className='container mx-auto'>
          <div className='flex justify-between mx-8 lg:mx-12 py-14 gap-2 lg:gap-20'>
            <div className='mt-20'>
              <div className='text-[30px] lg:text-[36px] text-[#FAFAFA] font-semibold'>More Than <span className='text-[#DA7717]'> 7 Years </span> <br /> Of Experience</div>
              <p className='text-[14px] lg:text-[16px] text-[#FAFAFA] my-5'>With over seven years of delivering quality <br /> work to our clients worldwide, we are committed <br /> to serving our client's needs and delivering <br /> <span className='text-[#DA7717]'> beyond their expectations.</span></p>
            </div>
            <div className='mr-[400px]'>
              <img className='w-96 mt-44 absolute' src={ExperienceBg} alt="" />
            </div>
          </div>
          <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
          <div className=''>
            <div className='flex gap-x-32 mx-12 mb-10'>
              <div>
                <img className='ml-6' src={ProjectsBag} alt="" />
                <div className='flex gap-3'>
                  <img src={ExpLine} alt="" />
                  <div>
                    <h1 className='text-[20px] text-[#ffffff] font-semibold'> {counterOn && <CountUp start={0} end={3000} duration={2} delay={0} />} +</h1>
                    <p className='text-[16px] text-[#ffffff] capitalize mt-4'>completed projects</p>
                  </div>
                </div>
              </div>


              <div>
                <img className='ml-6' src={Research} alt="" />
                <div className='flex gap-3'>
                  <img src={ExpLine} alt="" />
                  <div>
                    <h1 className='text-[20px] text-[#ffffff] font-semibold'> {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />} +</h1>
                    <p className='text-[16px] text-[#ffffff] capitalize mt-4'>researchers</p>
                  </div>
                </div>
              </div>
            </div>


            <div className='flex gap-x-32 mx-12'>
              <div>
                <img className='ml-6' src={ThumbsUp} alt="" />
                <div className='flex gap-3'>
                  <img src={ExpLine} alt="" />
                  <div>
                  <h1 className='text-[20px] text-[#ffffff] font-semibold'> {counterOn && <CountUp start={0} end={600} duration={2} delay={0} />} +</h1>
                    <p className='text-[16px] text-[#ffffff] capitalize mt-4'>satisfied customers</p>
                  </div>
                </div>
              </div>


              <div>
                <img className='ml-6' src={AWards} alt="" />
                <div className='flex gap-3'>
                  <img src={ExpLine} alt="" />
                  <div>
                    <h1 className='text-[20px] text-[#ffffff] font-semibold'>2</h1>
                    <p className='text-[16px] text-[#ffffff] capitalize mt-4'>awards won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollTrigger>
        </div>
      </div>
    </section>
  )
}

export default Experience
