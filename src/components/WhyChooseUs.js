import React from 'react'
import WhyHead from '../img/whychoose/whyhead.png'
import { WhyChooseData } from '../data'


const WhyChooseUs = () => {
  return (
    <div className='bg-[#F3F0EB] py-10'>  
        <div className='flex justify-center'>
            <img className='h-14' src={WhyHead} alt="" />
        </div>

        <div className='grid md:grid-cols-3 mx-24 gap-10 my-9'>
            {WhyChooseData.map((item) => {
                return <div key={item.id}>
                    <div className='flex gap-3'>
                        <img className='my-3 h-6' src={item.iconC} alt="" />
                        <div>
                            <h1 className='text-[#1A1A1A] text-[20px] font-medium'>{item.title}</h1> 
                            <img className='h-1 mb-3' src={item.iconW} alt="" />
                            <p className='text-[#1A1A1A] text-[16px]'>{item.subtitle}</p> 
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default WhyChooseUs