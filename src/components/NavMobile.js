import React, { useState, Fragment } from 'react';
import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'
import { motion } from 'framer-motion';
import Payment from './Socials';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



 
const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }
}


const NavMobile = () => {
  const [openMenu, setOpenMenu] = useState(false)


  return <nav className='text-primary flex md:hidden'>
    <div onClick={()=> setOpenMenu(true)} className='text-3xl cursor-pointer'>
      <CgMenuRight /> 
    </div>
    <motion.div 
      variants={menuVariants}
      initial='hidden'
      animate={openMenu ? 'show' : ''} 
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      <div onClick={()=> setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
        <IoMdClose className='hover:animate-bounce'/>
      </div>
      <div className='h-full flex flex-col justify-center items-center text-primary font-semibold cursor-pointer'>
        <ul className='flex flex-col justify-center items-center gap-y-8 font-medium text-base'>
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
                <Menu.Items className="absolute right-[-150px] z-10 mt-2 w-96 origin-top-left rounded-md bg-white shadow-lg focus:outline-none flex gap-5">
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
        
          <Link><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>Courses</li></Link>
          <Link to='/about'><li className='text-[#1A1A1A]  hover:text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>About</li></Link>
          <Link to='/contact'><li className='text-[#DA7717] hover:border-b hover:border-[#DA7717] transition ease-in duration-500'>Contact</li></Link>
        </ul>
        <div className='bg-white mr-24 mt-10 text-sm'>
          <Link to='/placeorder'><Payment /></Link>
        </div>
      </div>
    </motion.div>
  </nav>;
};

export default NavMobile;
