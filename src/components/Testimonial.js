import React from 'react';
import TestOne from '../img/testimonial/Amanda.png'
import TestTwo from '../img/testimonial/Edochie.png'
import TestThree from '../img/testimonial/Tijani.png'
import TestStars from '../img/testimonial/stars.png'
import { createPopper } from '@popperjs/core';

const Testimonial = () => {

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
    setDropdownPopoverShowOne(false);
    setDropdownPopoverShowTwo(false);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const [dropdownPopoverShowOne, setDropdownPopoverShowOne] = React.useState(false);
  const btnDropdownOneRef = React.createRef();
  const popoverDropdownOneRef = React.createRef();
  const openDropdownPopoverOne = () => {
    createPopper(btnDropdownOneRef.current, popoverDropdownOneRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(false);
    setDropdownPopoverShowOne(true);
    setDropdownPopoverShowTwo(false);
  };
  const closeDropdownPopoverOne = () => {
    setDropdownPopoverShowOne(false);
  };

  const [dropdownPopoverShowTwo, setDropdownPopoverShowTwo] = React.useState(false);
  const btnDropdownTwoRef = React.createRef();
  const popoverDropdownTwoRef = React.createRef();
  const openDropdownPopoverTwo = () => {
    createPopper(btnDropdownTwoRef.current, popoverDropdownTwoRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(false);
    setDropdownPopoverShowOne(false);
    setDropdownPopoverShowTwo(true);
  };
  const closeDropdownPopoverTwo = () => {
    setDropdownPopoverShowTwo(false);
  };



  return <section>
    <div className='container mx-auto'>
      <div>
        <div className='text-center'>
          <h1 className='capitalize text-[#1A1A1A] text-[26px] lg:text-[36px] font-medium mt-14'>Testimonials</h1>
          <h2 className='capitalize text-[#1A1A1A] text-[26px]  lg:text-[36px] font-semibold'>What our Clients say about us</h2>
        </div>

        <div className='bg-[#F3F0EB] mx-8 lg:mx-12 mt-14 flex flex-col lg:flex-row lg:justify-between px-10 lg:px-20'>
          <div>
            <div className='flex flex-col lg:flex-row justify-between my-20'>
              <div>
                <p ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block" : "hidden")}>“Your writing services came in handy and <br /> helped me a lot. I have been struggling <br /> with my Master's thesis, and I tried <br /> researching materials for my project but <br /> needed to figure out how to do it. The <br /> delivery from your team was excellent, <br /> solid, and timely. My thesis was ranked as <br /> one of the best, as I scored an A in my <br /> project work. Your Writers did an excellent <br /> job, especially on short notice. I'm indeed <br /> so happy and would refer more clients for <br /> similar assistance.”</p>
              </div>
              <div>
                <p ref={popoverDropdownRef} className={(dropdownPopoverShowOne ? "block" : "hidden")}>“I can tell that you carefully studied the <br /> book, did thorough research and <br /> thoughtfully presented your ideas. The <br /> relevant arguments are well constructed <br /> and related together clearly, achieving a <br /> good overall analysis and synthesis <br /> without being superfluous. The essay is <br /> well structured and perfectly balances <br /> context, research, discussion, analysis, <br /> and synthesis.”</p>
              </div>
              <div>
                <p ref={popoverDropdownRef} className={(dropdownPopoverShowTwo ? "block" : "hidden")}>“After getting a series of rejections for my <br /> MBA program in the United Kingdom, I <br /> saw your company ads on Instagram and <br /> decided to give a trial. The Statement of <br /> Purpose was delivered, to my surprise, <br /> within three days and was marvelled with <br /> the quality of the write-up. The way the <br /> writer captured my interests, background <br /> and experiences were fantastic. At the <br /> end of my application process, I got an <br /> MBA admission into 4 top universities in <br /> the United Kingdom that I applied to.”</p>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-40'>
              <div 
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ?closeDropdownPopover()
                  :openDropdownPopover()
              }}
              className='flex gap-3 py-6 px-10 hover:text-white hover:bg-[#002E5A] transition duration-300 ease-in rounded-t-md cursor-pointer'>
                <img src={TestOne} alt="" />
                <div>
                  <h1>Amanda Nweze</h1>
                  <img src={TestStars} alt="" />
                </div>
              </div>
              <div
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShowOne
                  ?closeDropdownPopoverOne()
                  :openDropdownPopoverOne()
              }}
              className='flex gap-3 py-6 px-10 hover:text-white hover:bg-[#002E5A] transition duration-300 ease-in rounded-t-md cursor-pointer'>
                <img src={TestTwo} alt="" />
                <div>
                  <h1>Rita Wabaranta</h1>
                  <img src={TestStars} alt="" />
                </div>
              </div>
              <div 
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShowTwo
                  ?closeDropdownPopoverTwo()
                  :openDropdownPopoverTwo()
              }}
              className='flex gap-3 py-6 px-10 hover:text-white hover:bg-[#002E5A] transition duration-300 ease-in rounded-t-md cursor-pointer'>
                <img src={TestThree} alt="" />
                <div>
                  <h1>David Tijani</h1>
                  <img src={TestStars} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Testimonial;
