import React from 'react'
import WomanCalling from '../img/workinghours/headset.png'
import Tele from '../img/workinghours/call.png'

const WorkingHours = () => {
  return (
    <div className='flex flex-col mx-12 my-5 md:flex-row md:justify-between md:py-32 md:mx-24'>
        <div className='flex flex-col md:flex-row md:gap-x-10'>
            <div>
                <h1 className='text-[36px] font-semibold text-[#1A1A1A]'>Working Hours</h1>
                <ul className='leading-10'>
                    <li className='text-[16px] font-normal text-[#1A1A1A]'>Sunday : Closed</li>
                    <li className='text-[16px] font-normal text-[#1A1A1A]'>Monday : 8 AM - 5 PM</li>
                    <li className='text-[16px] font-normal text-[#1A1A1A]'>Tuesday : 8 AM - 5 PM</li>
                    <li className='text-[16px] font-normal text-[#1A1A1A]'>Wednesday : 8 AM - 5 PM</li>
                    <li className='text-[16px] font-normal text-[#1A1A1A]'>Thursday : 8 AM - 5 PM</li>
                    <li className='text-[16px] font-normal text-[#1A1A1A]'>Friday : 8 AM - 5 PM</li>
                    <li className='text-[16px] font-normal text-[#1A1A1A]'>Saturday : Closed</li>
                </ul>
            </div>
            <div className='text-[36px] font-semibold text-[#1A1A1A]'>
                <h1>Contact Us</h1>
                <ul className='leading-10'>
                    <li  className='text-[16px] font-normal text-[#1A1A1A] flex gap-x-2'><img className='h-5 mt-3' src={Tele} alt="" />Agnes : +234 701 280 7297</li>
                    <li  className='text-[16px] font-normal text-[#1A1A1A] flex gap-x-2'><img className='h-5 mt-3' src={Tele} alt="" />Grace : +234 912 259 3441</li>
                    <li  className='text-[16px] font-normal text-[#1A1A1A] flex gap-x-2'><img className='h-5 mt-3' src={Tele} alt="" />David : +234 901 698 0325</li>
                </ul>
            </div>
        </div>
        <div>
            <img src={WomanCalling} alt="" />
        </div>
    </div>
  )
}

export default WorkingHours