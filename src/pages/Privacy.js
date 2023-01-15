import React from 'react'
import Header from '../components/Header'
import Tags from '../img/privacy/tag.png'
import Checks from '../img/privacy/check.png'
import Rocks from '../img/privacy/rock.png'
import { Link } from 'react-router-dom'
import Talk from '../components/Talk'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

const Privacy = () => {
  return (
    <div>
        <Header />
        <div className='mx-24 pt-32'>
            <h1 className='text-[#002E5A] text-[48px] font-bold'>Privacy Policy</h1>

            <div className='flex justify-between items-center'>
                <div>
                    <p className='text[#1a1a1a] text-[18px] my-5'>At Highbrow Research, we respect and value your privacy. We want you to be able to <br /> enjoy our website without any worries about what information is being collected or <br /> how it will be used. This Privacy Policy is designed to help you understand how your <br /> personal data is collected, stored, used, and protected by our security features.</p>   
                    <p className='text[#1a1a1a] text-[18px]'>This policy only applies to information collected by Highbrow Research. By accessing <br /> our website, you are accepting and agreeing fully to the practices listed in this Privacy Policy. <br /> Highbrow Research agrees that confidential information sent to the company <br /> will be used solely for the purpose for which it was submitted and that no personal <br /> information will be sold or distributed. </p>                
                </div>
                <div className='bg-[#F3F0EB] rounded-md flex flex-col justify-center items-center px-8 py-14'>
                    <img className='mb-10' src={Tags} alt="" />
                    <p className='text-center text-[24px] text-[#002E5A] font-semibold'>Our average page is<br /> 300 words</p>
                </div>
            </div>

            <div className='flex justify-between items-center my-20'>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-x-3'>
                        <div><img className='my-2' src={Rocks} alt="" /></div>
                        <p>You may not add your name to the delivered pieces of writing (hereinafter <br /> referred to as "Product").</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <div><img className='my-2' src={Rocks} alt="" /></div>
                        <p>All written materials delivered to you are for research and reference <br /> purposes only. </p>
                    </div>
                    <div className='flex gap-x-3'>
                        <div><img className='my-2' src={Rocks} alt="" /></div>
                        <p>Highbrow Research do not encourage, condone, or knowingly participate <br /> in plagiarism or acts of academic fraud.</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <div><img className='my-6' src={Rocks} alt="" /></div>
                        <p>Highbrow Research endeavours to abide by all copyright laws and we will <br /> not knowningly permit any customer to commit plagiarism or violate <br /> copyright laws.</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <div><img className='my-2' src={Rocks} alt="" /></div>
                        <p>As a user of our services, you agree that if any written materials are <br /> delivered to you, it shall be delivered only as a model answer.</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <div><img className='my-10' src={Rocks} alt="" /></div>
                        <p>Highbrow Research shall not be liable for any unethical, inappropriate, <br /> illegal, or otherwise wrongful use of the written materials received from <br /> us. This may include loss of scholarships, awards, grants, titles, prizes, <br /> failure, positions, suspension, plagiarism, lawsuits, poor grading, <br /> expulsion, academic probation, or any other legal or disciplinary actions.  </p>
                    </div>
                    <div className='flex gap-x-3'>
                        <div><img className='my-6' src={Rocks} alt="" /></div>
                        <p>The purchaser of any material from our site is solely accountable for any <br /> disciplinary actions that may arise from the unethical, improper, and/or <br /> illegal use of the information received from Highbrow Research.</p>
                    </div>
                </div>
                <div className='bg-[#F3F0EB] rounded-md flex flex-col justify-center items-center px-8 py-6 mt-10'>
                    <img className='' src={Checks} alt="" />
                    <p className='text-center text-[24px] text-[#002E5A] font-semibold leading-6 my-5'>Hire a reliable essay <br /> writer.</p>
                    <Link to='/placeorer'><button className='text-white bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] py-[10px] px-[20px] rounded-3xl hover:text-[#DA7717] my-4'>Place an order</button></Link>
                </div>
            </div>
        </div>
        <Talk />
        <Footer />
        <Copyright />
    </div>
  )
}

export default Privacy