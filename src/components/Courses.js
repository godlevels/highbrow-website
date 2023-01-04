import React from 'react'
import Logo from '../img/courses/courseI.png'
import ArrowLine from '../img/courses/arrow.png'
import CourseImage from '../img/courses/courseL.png'
import CoursesCards from './CoursesCards'

const Courses = () => {
  return (
    <section className='bg-[#F3F0EB] py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row gap-24 lg:justify-around mx-12 lg:mx-10 mt-10'>
                <div className=''>
                    <img className='h-32 mt-5' src={Logo} alt="" />
                    <p className='text-[18px] font-medium'>We offer a series of professional training on Data <br /> analysis using Excel, SQL, PowerBI, and Python.</p>
                    <img className='flex justify-center items-center h-28 mx-36 mt-10' src={ArrowLine} alt="" />
                </div>
                <div>
                    <img className='h-[390px]' src={CourseImage} alt="" />
                </div>
            </div>

            <CoursesCards /> 
        </div>
    </section>
  )
}

export default Courses