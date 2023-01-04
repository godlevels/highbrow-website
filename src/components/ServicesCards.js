import React from 'react'
import CardOne from '../img/service/one.png'
import CardTwo from '../img/service/two.png'
import CardThree from '../img/service/three.png'
import CardFour from '../img/service/four.png'
import CardFive from '../img/service/five.png'
import CardSix from '../img/service/six.png'
import CardSeven from '../img/service/seven.png'
import CardEight from '../img/service/eight.png'

const ServicesCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-12'>
          {/* {serviceData.map((item) => {
            return <div key={item.id}>
              <div className='h-[450px] mb-5 border border-[#e4e4e4] relative overflow-hidden group transition cursor-pointer'>
                <div className='w-full h-full'>
                  <div className='mx-auto flex justify-center items-center'>
                    <img className='group-hover:scale-110 transition duration-300' src={item.servImg} alt="" />
                  </div>
                  <div className='absolute top-5 left-5'>{item.title}</div>
                </div>
              </div>
            </div>
          })} */}

          <div className='mb-5 relative overflow-hidden group transition cursor-pointer'>
            <div className='relative'>
              <div>
                <img className='w-full h-full group-hover:scale-105 transition duration-300' src={CardOne} alt="" />
              </div>
              <h1 className='absolute top-5 left-5 text-[18px] text-white font-bold'>Business plan, <br /> profile and proposal</h1>
              <div className='bg-[#E08E3E] pt-0 mt-0 border-t-8 border-[#E08E3E]'>
                <p className='text-[14px] text-[#1A1A1A] p-4'>Take your business to the next level by building compelling business plans, profiles and proposals.</p>
                <button className='text-[14px] text-[#1A1A1A] border border-[#1a1a1a] rounded-full px-3 py-1 mx-4 mb-4'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='mb-5 relative overflow-hidden group transition cursor-pointer'>
            <div className='relative'>
              <div>
                <img className='w-full h-full group-hover:scale-105 transition duration-300' src={CardTwo} alt="" />
              </div>
              <h1 className='absolute top-5 left-5 text-[18px] text-white font-bold'>Personal Statement</h1>
              <div className='bg-[#ECBB8B] pt-0 mt-0 border-t-8 border-[#ECBB8B]'>
                <p className='text-[14px] text-[#1A1A1A] p-4'>Stand a higher chance to gain that admission or scholarship with our Personal Statement.</p>
                <button className='text-[14px] text-[#1A1A1A] border border-[#1a1a1a] rounded-full px-3 py-1 mx-4 mb-4'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='mb-5 relative overflow-hidden group transition cursor-pointer'>
            <div className='relative'>
              <div>
                <img className='w-full h-full group-hover:scale-105 transition duration-300' src={CardThree} alt="" />
              </div>
              <h1 className='absolute top-5 left-5 text-[18px] text-white font-bold'>Study Abroad</h1>
              <div className='bg-[#F8E4D1] pt-0 mt-0 border-t-8 border-[#F8E4D1]'>
                <p className='text-[14px] text-[#1A1A1A] p-4'>Contact educational consultants to guide and help process your study visa application glitch-free.</p>
                <button className='text-[14px] text-[#1A1A1A] border border-[#1a1a1a] rounded-full px-3 py-1 mx-4 mb-4'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='mb-5 relative overflow-hidden group transition cursor-pointer'>
            <div className='relative'>
              <div>
                <img className='w-full h-full group-hover:scale-105 transition duration-300' src={CardFour} alt="" />
              </div>
              <h1 className='absolute top-5 left-5 text-[18px] text-white font-bold'>CV & Cover Letter <br /> Writing</h1>
              <div className='bg-[#F3F0EB] mt-0 border-t-8 border-[#F3F0EB] pb-5'>
                <p className='text-[14px] text-[#1A1A1A] p-4'>Secure your dream job with a neatly written CV and cover Letter.</p>
                <button className='text-[14px] text-[#1A1A1A] border border-[#1a1a1a] rounded-full px-3 py-1 mx-4 mt-4'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='mb-5 relative overflow-hidden group transition cursor-pointer'>
            <div className='relative'>
              <div>
                <img className='w-full h-full group-hover:scale-105 transition duration-300' src={CardFive} alt="" />
              </div>
              <h1 className='absolute top-5 left-5 text-[18px] text-white font-bold'>PhD Proposals</h1>
              <div className='bg-[#F3F0EB] mt-0 border-t-8 border-[#F3F0EB]'>
                <p className='text-[14px] text-[#1A1A1A] p-4'>Stand a higher chance to secure a PhD opening with our neatly written PhD Proposals.</p>
                <button className='text-[14px] text-[#1A1A1A] border border-[#1a1a1a] rounded-full px-3 py-1 mx-4 mb-4'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='mb-5 relative overflow-hidden group transition cursor-pointer'>
            <div className='relative'>
              <div>
                <img className='w-full h-full group-hover:scale-105 transition duration-300' src={CardSix} alt="" />
              </div>
              <h1 className='absolute top-5 left-5 text-[18px] text-white font-bold'>Assignments & <br /> Projects</h1>
              <div className='bg-[#F8E4D1] pt-0 mt-0 border-t-8 border-[#F8E4D1] pb-5'>
                <p className='text-[14px] text-[#1A1A1A] p-4'>Secure your grades with us and embark on your path to academic excellence.</p>
                <button className='text-[14px] text-[#1A1A1A] border border-[#1a1a1a] rounded-full px-3 py-1 mx-4 mt-4'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='mb-5 relative overflow-hidden group transition cursor-pointer'>
            <div className='relative'>
              <div>
                <img className='w-full h-full group-hover:scale-105 transition duration-300' src={CardSeven} alt="" />
              </div>
              <h1 className='absolute top-5 left-5 text-[18px] text-white font-bold'>Proofreading & <br /> Editing</h1>
              <div className='bg-[#ECBB8B] pt-0 mt-0 border-t-8 border-[#ECBB8B]'>
                <p className='text-[14px] text-[#1A1A1A] p-4'>Get the best Proofreaders and Editors at your service. Prune and Polish your papers with our help.</p>
                <button className='text-[14px] text-[#1A1A1A] border border-[#1a1a1a] rounded-full px-3 py-1 mx-4 mb-4'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='mb-5 relative overflow-hidden group transition cursor-pointer'>
            <div className='relative'>
              <div>
                <img className='w-full h-full group-hover:scale-105 transition duration-300' src={CardEight} alt="" />
              </div>
              <h1 className='absolute top-5 left-5 text-[18px] text-white font-bold'>LinkedIn <br /> Optimization</h1>
              <div className='bg-[#E08E3E] pt-0 mt-0 border-t-8 border-[#E08E3E] pb-5'>
                <p className='text-[14px] text-[#1A1A1A] p-4'>Make your profile stand out to colleagues and recruiters on the platform.</p>
                <button className='text-[14px] text-[#1A1A1A] border border-[#1a1a1a] rounded-full px-3 py-1 mx-4 mt-4'>Learn More</button>
              </div>
            </div>
          </div>


          

          

          

          

          

          
        </div>
  )
}

export default ServicesCards