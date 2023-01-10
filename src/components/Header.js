import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Payment from './Socials';
import Logo from '../img/header/logoo.png'
import NavMobile from './NavMobile';
import Telephone from '../img/header/tele.png'

const Header = () => {
  const [bg, setBg] = useState(false)



  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })
  return <div className={`${ bg ? 'bg-white py-4 lg:py-6 shadow-md' : 'bg-none'} fixed mt-0 w-full px-[30px] lg:px-[100px] z-30 h-[70px] lg:h-[70px] flex items-center`}>
    <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
      <nav className='flex justify-between'>
        <ul className='hidden xl:flex gap-x-12 font-medium cursor-pointer'> 
          <Link to='/'><li className='text-[#1A1A1A]  hover:text-[#DA7717] transition'>Home</li></Link>
          <Link to='/services'><li className='text-[#1A1A1A]  hover:text-[#DA7717] transition'>Services</li></Link>
          <Link to='/courses'><li className='text-[#1A1A1A]  hover:text-[#DA7717] transition'>Courses</li></Link>
          <Link to='/about'><li className='text-[#1A1A1A]  hover:text-[#DA7717] transition'>About</li></Link>
          <Link to='/contact'><li className='text-[#1A1A1A]  hover:text-[#DA7717] transition'>Contact</li></Link>
        </ul>
      </nav>
      <a href="/" className='max-w-[200px]'><img className='mr-40' src={Logo} alt="" /></a>
        <div className='hidden xl:flex'> 
          <div>
            <div className='flex gap-x-3 justify-end'>
              <img className='h-4 mt-1' src={Telephone} alt="" />
              <h1 className='text-[#1A1A1A] text-[16px] font-medium'>Call:</h1>
            </div>
            <Link to='/+234 701 280 7297' className='text-[#1A1A1A] text-[16px] font-medium'>+234 701 280 7297</Link>
          </div>
          <Payment /> 
        </div>
    </div>

    <NavMobile />
  </div>;
};

export default Header;
