import React from 'react'
import RockBg from '../img/form/rock.png'
import Envelope from '../img/form/enve.png'
import WhatsApp from '../img/form/whats.png'
import Locates from '../img/form/locate.png'

const ContactForm = () => {
  return (
    <div className='flex justify-between'>
        <div>
            <h1 className='text-[48px] text-[#002E5A] font-bold my-6'>Talk to us about your needs</h1>
            <p className='text-[16px] text-[#000000] font-bold'>Hundreds of students and entrepreneurs have trusted us since 2015. <br /> Let us know how we can assist you with your research work or if you have <br /> questions regarding our services. We will be happy to talk to you through <br /> Live chat, Email, or any of our social media platforms. </p>

            <div className='my-10'>
                <form action="">
                    <h1 className='text-[20px] text-[#002E5A] font-semibold my-2'>What is your name?</h1>
                    <input className='border-[0.6px] border-gray-400 w-96 rounded-[5px] py-2 px-4 text-[16px] text-[#1A1A1A] font-medium outline-none mb-4' type="text" placeholder='Name' />


                    <h1 className='text-[20px] text-[#002E5A] font-semibold my-2'>What is your Email address?</h1>
                    <input className='border-[0.6px] border-gray-400 w-96 rounded-[5px] py-2 px-4 text-[16px] text-[#1A1A1A] font-medium outline-none mb-4' type="email" placeholder='Email Address' />


                    <h1 className='text-[20px] text-[#002E5A] font-semibold my-2'>What is your question?</h1>
                    <textarea className='border-[0.6px] border-gray-400 w-96 rounded-[5px] py-2 px-4 text-[16px] text-[#1A1A1A] font-medium outline-none mb-4' name="question" id="" cols="30" rows="4"></textarea>
                </form>
            </div>

            <div>
                <p className='text-[16px] text-[#1A1A1A]'>Highbrow needs the contact information you give us to help and get in touch <br /> with you regarding our services. Highbrow Research agrees that confidential <br /> information will be used solely for the purpose for which it was submitted and <br /> that no personal information will be sold or distributed. Please review our <br /> Privacy Policy.</p>

                <button className='text-white bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] py-[6px] px-[20px] rounded-3xl hover:text-[#DA7717] mt-5'>Submit</button>
            </div>
        </div>

        <div className='my-60 leading-7'>
            <img className='mb-8 mx-12' src={RockBg} alt="" />

            <div className='flex gap-3'>
                <img className='h-4 mt-2' src={Envelope} alt="" />
                <div className='mb-8'>
                    <h2 className='text-[20px] font-[#002E5A] font-semibold'>Prefer Email?</h2>
                    <h1 className='text-[18px] text-[#000000]'>You can reach us at</h1>
                    <ul>
                        <li className='text-[16px] text-[#002E5A] font-medium'>highbrowresearch@gmail.com</li>
                        <li className='text-[16px] text-[#002E5A] font-medium'>hello@highbrowresearch.com</li>
                        <li className='text-[16px] text-[#002E5A] font-medium'>customercare@highbrowresearch.com</li>
                    </ul>
                </div>
            </div>

            <div className='flex gap-3'>
                <img className='h-4 mt-2' src={WhatsApp} alt="" />
                <div className='mb-8'>
                    <h2 className='text-[20px] font-[#002E5A] font-semibold'>Prefer WhatsApp?</h2>
                    <h1 className='text-[18px] text-[#000000]'>You can also reach us at</h1>
                    <ul>
                        <li className='text-[16px] text-[#002E5A] font-medium'>highbrowresearch@gmail.com</li>
                        <li className='text-[16px] text-[#002E5A] font-medium'>+234 701 280 7297</li>
                        <li className='text-[16px] text-[#002E5A] font-medium'>+234 912 259 3441</li>
                        <li className='text-[16px] text-[#002E5A] font-medium'>+234 704 295 0801</li>
                        
                    </ul>
                </div>
            </div>


            <div className='flex gap-3'>
                <img className='h-4 mt-2' src={Locates} alt="" />
                <div>
                    <h2 className='text-[20px] font-[#002E5A] font-semibold'>Prefer to visit the office?</h2>
                    <address className='text-[16px] text-[#002E5A] font-medium'>34 Emina Crescent, 101233, Ikeja, Nigeria.</address>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm