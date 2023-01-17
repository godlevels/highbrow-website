import React from 'react';
import ContactRock from '../img/contact/rock.png'
import ContactCube from '../img/contact/cube.png'

const Contact = () => {
  return <section>
    <div className='container mx-auto'>
      <div className=' flex flex-col lg:flex-row mx-12 my-20'>
        <div className='border border-[#002E5A] py-9 px-10'>
          <h1 className='text-[#1A1A1A] text-[20px] lg:text-[36px] font-semibold'>Talk To Us About Your Needs</h1>
          <h2 className='text-[#DA7717] text-[16px] lg:text-[24px] font-semibold'>Looking for a first class research <br /> consultant?</h2>
          <p className='text-[#1A1A1A] text-[12px] lg:text-[16px] font-light'>Highbrow research consultants are experts in writing research proposals <br /> and highly skilled in performing and conducting studies on topics in their specialized fields.</p>
        </div>

        <div className='border border-[#002E5A] pl-10 pr-28 pt-36 hover:bg-[#DA7717] duration-1000 cursor-pointer'>
          <img src={ContactRock} alt="" />
          <h1 className='text-[17px] lg:text-[20px] text-[#1A1A1A] font-semibold'>Call or chat Consultant</h1>
        </div>


        <div className='border border-[#002E5A] pl-10 pr-28 pt-36 hover:bg-[#DA7717] duration-1000 cursor-pointer'>
          <img src={ContactCube} alt="" />
          <h1 className='text-[17px] lg:text-[20px] text-[#1A1A1A] font-semibold'>Place an order</h1> 
        </div>
      </div>
    </div>
  </section>;
};

export default Contact;
