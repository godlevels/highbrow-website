import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Payment from './Socials';
import Logo from '../img/header/logos.svg'
import NavMobile from './NavMobile';
import Telephone from '../img/header/tele.png'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [bg, setBg] = useState(false)



  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })
  return (
     <div className={`${ bg ? 'bg-white py-4 lg:py-6 shadow-md' : 'bg-none'} fixed mt-0 w-full px-[30px] lg:px-[100px] z-30 h-[70px] lg:h-[70px] flex items-center`}>
    {/* <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
      <nav className='flex justify-between'>
        <ul className='hidden xl:flex gap-x-12 font-medium cursor-pointer'> 
          <Link to='/'><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>Home</li></Link>
          <Link><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>
            <Menu as='div' className="relative inline-block text-left">
              <Menu.Button>
                Services  
              </Menu.Button>
              <Transition as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg focus:outline-none flex gap-5">
                  <div className='py-1'>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/businessplan'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Business Plan</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/businessprofiles'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Business Profile</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/businessproposals'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Business Proposals</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/personalstatement'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Personal Statement</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/studyabroad'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Study Abroad</Link>
                    )}  
                    </Menu.Item>
                  </div>

                  <div className='py-1'>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/professionalCV'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>CV Writing</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/coverletter'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Cover Letter Writing</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/assignments&projects'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Assignments & Projects</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/proofreading&editing'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Proofreading & Editing</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/linkedin'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>LinkedIn Optimization</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/phdproposals'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>PhD Proposal</Link>
                    )}  
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>  
            </Menu>  
          </li></Link>
          <Link to='/courses'><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>
          <Menu as='div' className="relative inline-block text-left">
              <Menu.Button>
                Courses  
              </Menu.Button>
              <Transition as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg focus:outline-none flex gap-5">
                  <div className='py-1'>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/courses/sql'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Standard Query Language (SQL)</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/courses/python'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Python</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/courses/powerbi'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Power BI</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/courses/microsoftexcel'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Microsoft Excel</Link>
                    )}  
                    </Menu.Item>
                  </div>
                </Menu.Items> 
              </Transition>  
            </Menu>
          </li></Link>
          <Link to='/about'><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>About</li></Link>
          <Link to='/contact'><li className='text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>Contact</li></Link>
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
          <Link to='/placeorder'><Payment /></Link> 
        </div>
    </div>

    <NavMobile /> */}

    <div className='flex justify-between md:gap-x-[150px] md:flex-row items-center w-full'>
      <ul className='hidden md:flex gap-x-12 font-medium cursor-pointer'>
        <Link to='/'><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>Home</li></Link>
        <Link><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>
            <Menu as='div' className="relative inline-block text-left">
              <Menu.Button>
                Services  
              </Menu.Button>
              <Transition as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg focus:outline-none flex gap-5">
                  <div className='py-1'>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/businessplan'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Business Plan</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/businessprofiles'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Business Profile</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/businessproposals'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Business Proposals</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/personalstatement'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Personal Statement</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/studyabroad'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Study Abroad</Link>
                    )}  
                    </Menu.Item>
                  </div>

                  <div className='py-1'>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/professionalCV'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>CV Writing</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/coverletter'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Cover Letter Writing</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/assignments&projects'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Assignments & Projects</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/proofreading&editing'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Proofreading & Editing</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/linkedin'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>LinkedIn Optimization</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/phdproposals'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>PhD Proposal</Link>
                    )}  
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>  
            </Menu>  
          </li></Link>
          <Link to='/courses'><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>
          <Menu as='div' className="relative inline-block text-left">
              <Menu.Button>
                Courses  
              </Menu.Button>
              <Transition as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg focus:outline-none flex gap-5">
                  <div className='py-1'>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/courses/sql'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Standard Query Language (SQL)</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/courses/python'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Python</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/courses/powerbi'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Power BI</Link>
                    )}  
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to='/courses/microsoftexcel'
                      className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}>Microsoft Excel</Link>
                    )}  
                    </Menu.Item>
                  </div>
                </Menu.Items> 
              </Transition>  
            </Menu>
          </li></Link>
        <Link to='/about'><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>About</li></Link>
        <Link to='/contact'><li className='text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>Contact</li></Link>
      </ul>
      
      <div>
        <Link to='/'><img src={Logo} alt="" /></Link>
      </div>
      
      <div className='hidden lg:flex'>
        <div>
          <div className='flex gap-x-3 items-center'>
            <img className='h-4 mt-1' src={Telephone} alt="" />
            <h1 className='text-[#1A1A1A] lg:text-[16px] lg:font-medium'>Call:</h1>
          </div>
          <Link to='/+234 701 280 7297' className='text-[#1A1A1A] text-[16px] font-medium'>+234 701 280 7297</Link>
        </div>
        <div><Link to='/placeorder'><Payment /></Link></div>
      </div>
      <NavMobile />
    </div>
    
  </div>);
};

export default Header;
