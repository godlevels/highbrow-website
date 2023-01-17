import React from 'react'
import Header from '../components/Header'
import Rect from '../img/bi/side.png'
import Rocks from '../img/bi/rock.png'
import Macs from '../img/bi/mac.png'
import Lines from '../img/bi/line.png'
import Winds from '../img/bi/wind.png'
import ManSide from '../img/bi/mans.png'
import Liness from '../img/bi/lines.png'
import Talk from '../components/Talk'
import Footer from '../components/Footer'

const SQL = () => {
    return (
        <section>
            <Header />

            <div className='flex justify-between mx-24'>
            <div className='pt-32'>
                <h1 className='text-[#002E5A] text-[48px] font-bold'>SQL</h1>
                <div className=''>
                    <div className='my-12'>
                        <p className='text-[16px] text-[#1A1A1A]'>SQL stands for Structured Query Language, and is a special programming <br /> language used to manipulate and retrieve data stored in a relational <br /> database management system. SQL skill is a must have for any data <br /> professional, also given that the modern data stack is built on it. This <br /> training, like every of our data courses, is hands on and project based to <br /> help consolidate our learnings.</p>
                        <a href="https://forms.office.com/r/byt4i0VjfR"> <button className='text-white bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] py-[10px] px-[20px] rounded-3xl hover:text-[#DA7717] my-6'>Get started </button></a>
                    </div>

                <div className='mx-5'>
                    <h1 className='text-[20px] text-[#1a1a1a] font-semibold'>Course Curriculum</h1>
                    <div className='flex justify-between'>
                        <div>
                            <div className='bg-[#F3F0EB] rounded-md leading-8 p-5 my-5'>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Getting started with Data Analytics</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>SQL server Into and Setup</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Understanding the SQL Server Management <br /> Studi (SSMS) interface</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Writing the first SELECT Statements</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Exploring more SQL statements</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Analyzing Multiple Tables with Joins</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>SQL Projects</h1>
                                </div>   
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[20px] text-[#1a1a1a] font-semibold'>Who should take this course? </h1>
                        <div>
                            <div className='flex gap-3'>
                                <img className='h-6 mt-4' src={Rocks} alt="" />
                                <h1 className='text-[16px] text-[#1a1a1a] my-3'>Analysts or BI Professionals looking to quickly retrieve or analyze <br /> data stored in relational database systems.</h1>
                            </div>
                            <div className='flex gap-3'>
                                <img className='h-6 mt-4' src={Rocks} alt="" />
                                <h1 className='text-[16px] text-[#1a1a1a] my-3'>Excel users looking to shift into a broader BI-focused role.</h1>
                            </div>
                            <div className='flex gap-3'>
                                <img className='h-6 mt-4' src={Rocks} alt="" />
                                <h1 className='text-[16px] text-[#1a1a1a] my-3'>Anyone seeking to learn one of the world’s most popular <br /> database programming languages.</h1>
                            </div>
                        </div>
                    </div>

                    <div className='my-6'>
                        <h1 className='text-[20px] text-[#1a1a1a] font-semibold'>Required Tools</h1>

                        <div className='flex gap-10 my-7'>
                            <div>
                                <img className='my-6' src={Macs} alt="" />
                                <h1 className='text-[#002E5A] mx-3'>Macbook</h1>
                            </div>
                            <div>
                                <img src={Lines} alt="" />
                            </div>
                            <div>
                                <img src={Winds} alt="" />
                                <h1 className='text-[#002E5A] mx-10'>Windows</h1>
                            </div>
                        </div>

                        <div className='flex gap-20'>
                            <div>
                                <h1 className='text-[#1a1a1a] text-[18px] font-medium'>CLASS</h1>
                                <h2 className='text-[16px] text-[#DA7717] font-medium'>Online Class (Microsoft Teams)</h2>
                            </div>
                            <div className='flex gap-8'>
                                <div>
                                    <h1 className='text-[#1a1a1a] text-[18px] font-medium'>PRICE</h1>
                                    <h2 className='text-[16px] text-[#DA7717] font-medium'>50,000</h2>
                                </div>
                                <div>
                                    <h1 className='text-[#1a1a1a] text-[18px] font-medium'>DURATION</h1>
                                    <h2 className='text-[16px] text-[#DA7717] font-medium'>6 Weeks (Saturdays only)</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img className='mt-4' src={Liness} alt="" />
                        </div>
                        <button className='text-white bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] py-[10px] px-[20px] rounded-3xl hover:text-[#DA7717] my-12'>Get started </button>
                    </div>
                </div>
                </div>
            </div>

            <div>
                <img className='my-36' src={Rect} alt="" />
                <img src={ManSide} alt="" />
            </div>
            </div>
            <Talk />
            <Footer />
        </section>
    )
}

export default SQL
