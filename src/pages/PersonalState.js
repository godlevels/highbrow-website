import React from 'react'
import Header from '../components/Header'
import Buss from '../img/businessplan/boards.png'
import Side from '../img/personal/frames.png'
import Fra from '../img/businessplan/Frame.png'
import Cal from '../img/businessplan/frames.png'
import Sets from '../img/businessplan/framess.png'
import Lines from '../img/businessplan/rects.png'
import WorkH from '../img/businessplan/head.png'
import SideC from '../img/businessplan/circle.png'
import Talk from '../components/Talk'
import Footer from '../components/Footer'

const PersonalState = () => {
    return (
        <div>
        <Header />

<div className='mx-auto container'>
    <h1 className='text-[48px] text-[#002E5A] font-bold pt-24 pb-20 capitalize mx-12'>services we provide</h1>

    <div className='flex justify-between bg-[#F3F0EB] rounded-full mx-12 py-2 px-4'>
        <div className='flex gap-2'>
            <img className='h-6 mt-1' src={Buss} alt="" />
            <h1 className='text-[#1a1a1a] text-[18px] font-medium'>Personal Statement</h1>
        </div>
    </div>

    <div className='flex justify-between bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] mx-12 rounded-xl px-16 mt-12 absolute'>
        <div>
            <div className='flex gap-52'>
                <div className='mt-[200px]'>
                    <h1 className='capitalize text-[#F3F0EB] text-[48px] font-bold'>We Write the <span className='text-[#DA7717]'>Best</span> <br /> Personal Statements for <br />Graduate Admissions.</h1>
                    <p className='text-[#F3F0EB] text-[16px]'>Stand a higher chance to gain that admission or scholarship with <br /> our Personal Statement.</p>
                </div>
                <div>
                    <img className='relative top-20' src={Side} alt="" />
                </div>
            </div>
            <div className='flex justify-between bg-white p-10 rounded-3xl relative top-36 drop-shadow-2xl'>
                <div className='flex gap-2'>
                    <div>
                        <img src={Fra} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] font-semibold text-[#1a1a1a]'>Price friendly <br /> packages</h1>
                        <p className='text-[#1a1a1a] text-[12px] py-2'>Our prices are pocket friendly and <br /> affordable. Our pocket friendly prices <br /> are backed up with quality delivery.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <img src={Cal} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] font-semibold text-[#1a1a1a]'>Right on <br /> time</h1>
                        <p className='text-[#1a1a1a] text-[12px] py-2'>Your work will be delivered at the <br /> appropriate time before the agreed <br /> deadline.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <img src={Sets} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] font-semibold text-[#1a1a1a]'>100% <br /> Confidentiality</h1>
                        <p className='text-[#1a1a1a] text-[12px] py-2'>We take privacy extremely seriously; <br /> thus, we keep your personal and order <br /> information confidential.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='pt-[900px] mx-12'>
        <p className='text-[#1A1A1A] text-[16px] mb-5 mx-20 mt-14'>Our statement of purpose (also called personal statement or letter of intent, or research statement) is for international graduate school <br /> applications for Masters or PhD admission. It is where you sell yourself to the admissions committee on why you belong in their program <br /> specifically. For a superb statement of purpose for a masters degree and PhD, we would require the following details:</p>
        <div className='mx-20'>
            <div className='flex gap-14'>
                <img className='w-[3px] h-16 mt-2 rounded-2xl' src={Lines} alt="" />
                <div>
                    <ul className='text-[#1a1a1a] list-disc'>
                        <li className='text-[16px]'>A Copy of your CV</li>
                        <li className='text-[16px]'>The course you are applying for</li>
                        <li className='text-[16px]'>The name of the school you are applying to</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='my-16 bg-[#F3F0EB] flex justify-between rounded-3xl px-16 py-8'>
            <div className='my-28'>
                <img src={WorkH} alt="" />
                <h1 className='text-[#1A1A1A] text-[16px] font-medium my-5'>Get your paper done on time by an expert <br /> in your discipline.</h1>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-[24px] font-semibold'>3000+</h1>
                        <p className='text-[#1A1A1A] text-[16px] font-medium'>Completed <br /> projects</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[24px] font-semibold'>50+</h1>
                        <p className='text-[#1A1A1A] text-[16px] font-medium'>Skilled <br /> researchers</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[24px] font-semibold'>600+</h1>
                        <p className='text-[#1A1A1A] text-[16px] font-medium'>Satisfied <br /> customers</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={SideC} alt="" />
            </div>
        </div>
    </div>
</div>
<Talk />
<Footer />
        </div>
    )
}

export default PersonalState
