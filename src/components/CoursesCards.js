import React from 'react'
// import { coursesData } from '../data'
import imageC from '../img/courses/head.png'
import imageO from '../img/courses/python.png'
import imageU from '../img/courses/logos.png'
import imageR from '../img/courses/excell.png'
import { Link } from 'react-router-dom'

const CoursesCards = () => {
    // const { iconD, title, subtitle, btn } = coursesData
  return (
    <section>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 gap-x-4 mx-12 mt-10'>
                <div className='bg-white shadow-lg rounded-2xl p-8 mb-6 md:mb-0'>
                    <img src={imageC} alt="" />
                    <h1 className='text-[18px] text-[#002E5A] font-medium my-3'>Structured Query Language (SQL)</h1>
                    <p className='text-[16px] text-[#002E5A] font-normal my-3'>Structured Query Language is the most used tool by data <br /> professionals, for querying and interacting with databases.</p>
                    <Link to='/courses/sql'><button className='border border-[#002E5A] text-[14px] font-normal mt-9 rounded-full py-1 px-3 hover:bg-[#002e5a] hover:text-white transition duration-300 ease-in'>Learn More</button></Link>
                </div>

                <div className='bg-white shadow-lg rounded-2xl p-8'>
                    <img src={imageO} alt="" />
                    <h1 className='text-[18px] text-[#002E5A] font-medium my-3'>Python</h1>
                    <p className='text-[16px] text-[#002E5A] font-normal my-3'>Python is a multi-purpose high level langauge crucial for gaining <br /> mastery over advanced data analysis to enable you stand out from <br /> the crowd.</p>
                    <Link to='/courses/python'><button className='border border-[#002E5A] text-[14px] font-normal mt-3 rounded-full py-1 px-3 hover:bg-[#002e5a] hover:text-white transition duration-300 ease-in'>Learn More</button></Link> 
                </div>

                <div className='bg-white shadow-lg rounded-2xl p-8 mt-6'>
                    <img src={imageU} alt="" />
                    <h1 className='text-[18px] text-[#002E5A] font-medium my-3'>Power BI</h1>
                    <p className='text-[16px] text-[#002E5A] font-normal my-3'>Power BI is a Microsoft Business Intelligence tool that allows you to <br /> connect to, model and visualize data to gain insights into your <br /> organizations data.</p>
                    <Link to='/courses/powerbi'><button className='border border-[#002E5A] text-[14px] font-normal mt-3 rounded-full py-1 px-3 hover:bg-[#002e5a] hover:text-white transition duration-300 ease-in'>Learn More</button></Link>
                </div>

                <div className='bg-white shadow-lg rounded-2xl p-8 mt-6'>
                    <img src={imageR} alt="" />
                    <h1 className='text-[18px] text-[#002E5A] font-medium my-3'>Microsoft Excel</h1>
                    <p className='text-[16px] text-[#002E5A] font-normal my-3'>Microsoft Excel is a software program created by Microsoft that uses <br /> spreadsheets to organize numbers and data with forumlas and <br /> functions.</p>
                    <Link to='/courses/microsoftexcel'><button className='border border-[#002E5A] text-[14px] font-normal mt-3 rounded-full py-1 px-3 hover:bg-[#002e5a] hover:text-white transition duration-300 ease-in'>Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CoursesCards