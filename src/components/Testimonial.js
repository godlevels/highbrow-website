import React from 'react';
// import TestOne from '../img/testimonial/Amanda.png'
// import TestTwo from '../img/testimonial/Edochie.png'
// import TestThree from '../img/testimonial/Tijani.png'
// import TestStars from '../img/testimonial/stars.png'
import { testimonials } from '../data';
import ClientSlider from './ClientSlider';
// import { createPopper } from '@popperjs/core';

const Testimonial = () => {

  // const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  // const btnDropdownRef = React.createRef();
  // const popoverDropdownRef = React.createRef();
  // const openDropdownPopover = () => {
  //   createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
  //     placement: "bottom-start"
  //   });
  //   setDropdownPopoverShow(true);
  //   setDropdownPopoverShowOne(false);
  //   setDropdownPopoverShowTwo(false);
  // };
  // const closeDropdownPopover = () => {
  //   setDropdownPopoverShow(false);
  // };

  // const [dropdownPopoverShowOne, setDropdownPopoverShowOne] = React.useState(false);
  // const btnDropdownOneRef = React.createRef();
  // const popoverDropdownOneRef = React.createRef();
  // const openDropdownPopoverOne = () => {
  //   createPopper(btnDropdownOneRef.current, popoverDropdownOneRef.current, {
  //     placement: "bottom-start"
  //   });
  //   setDropdownPopoverShow(false);
  //   setDropdownPopoverShowOne(true);
  //   setDropdownPopoverShowTwo(false);
  // };
  // const closeDropdownPopoverOne = () => {
  //   setDropdownPopoverShowOne(false);
  // };

  // const [dropdownPopoverShowTwo, setDropdownPopoverShowTwo] = React.useState(false);
  // const btnDropdownTwoRef = React.createRef();
  // const popoverDropdownTwoRef = React.createRef();
  // const openDropdownPopoverTwo = () => {
  //   createPopper(btnDropdownTwoRef.current, popoverDropdownTwoRef.current, {
  //     placement: "bottom-start"
  //   });
  //   setDropdownPopoverShow(false);
  //   setDropdownPopoverShowOne(false);
  //   setDropdownPopoverShowTwo(true);
  // };
  // const closeDropdownPopoverTwo = () => {
  //   setDropdownPopoverShowTwo(false);
  // };

  const { head, title, clients } = testimonials

  return (
    
    <section>
      <div className='container mx-auto mt-16'>
        <h1 className='text-[32px] text-[#1A1A1A] text-center font-medium'>{head}</h1>
        <h2 className='mb-10 lg:mb-20 text-center text-[#1A1A1A] text-[36px] font-semibold max-w-[920px] mx-auto capitalize'>{title}</h2>

        <div className='mx-12'>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  )
};

export default Testimonial;
