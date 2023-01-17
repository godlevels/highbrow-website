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

const Bi = () => {
    return (
        <section>
            <Header />

            <div className='flex justify-between mx-24'>
            <div className='pt-32'>
                <h1 className='text-[#002E5A] text-[48px] font-bold'>Power BI</h1>
                <div className=''>
                    <div className='my-12'>
                        <p className='text-[16px] text-[#1A1A1A]'>Power BI is a Microsoft Business Intelligence tool that allows you to connect <br /> to, model and visualise data to gain insights into your organization’s data. <br /> Power BI is a Microsoft business intelligence tool used to generate insights <br /> from raw data. It is quickly becoming one of the world’s most powerful self- <br /> service business intelligence platforms, as well as an absolutely essential <br /> tool for today’s top data professionals. </p>
                        <a href="https://forms.office.com/r/byt4i0VjfR"> <button className='text-white bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] py-[10px] px-[20px] rounded-3xl hover:text-[#DA7717] my-6'>Get started </button> </a>
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
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Introducing Power BI</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Cleaning, Transforming, and Loading Data</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Create Model Calculations using DAX</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Create Reports and Dashboards</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Perform Advanced Analytics</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Create and Manage Workspaces</h1>
                                </div>   
                                <div className='flex gap-3'>
                                    <img className='h-6' src={Rocks} alt="" />
                                    <h1 className='text-[#1a1a1a] text-[18px]'>Project</h1>
                                </div>   
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[20px] text-[#1a1a1a] font-semibold'>Who should take this course? </h1>
                        <div>
                            <div className='flex gap-3'>
                                <img className='h-6 mt-4' src={Rocks} alt="" />
                                <h1 className='text-[16px] text-[#1a1a1a] my-3'>Excel users who want to develop advanced analytics and data <br /> modelling skills, or transition into a business intelligence role. </h1>
                            </div>
                            <div className='flex gap-3'>
                                <img className='h-6 mt-4' src={Rocks} alt="" />
                                <h1 className='text-[16px] text-[#1a1a1a] my-3'>Analysts or BI Professionals looking for a self-service platform <br /> to analyze large datasets, connect to external sources, build <br /> relational models, or design custom dashboards.</h1>
                            </div>
                            <div className='flex gap-3'>
                                <img className='h-6 mt-4' src={Rocks} alt="" />
                                <h1 className='text-[16px] text-[#1a1a1a] my-3'>Anyone seeking a clear and straight-forward introduction to <br /> Power BI desktop.</h1>
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
                            <img src={Liness} alt="" />
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

export default Bi
