import React from 'react'
import Header from '../components/Header'
import Buss from '../img/businessplan/boards.png'
import Ana from '../img/businessplan/analytics.png'
import Cre from '../img/businessplan/card.png'
import Line from '../img/businessplan/rect.png'
import Side from '../img/Academic/frames.png'
import Fra from '../img/businessplan/Frame.png'
import Cal from '../img/businessplan/frames.png'
import Sets from '../img/businessplan/framess.png'
import Lines from '../img/businessplan/rects.png'
import WorkH from '../img/businessplan/head.svg'
import SideC from '../img/coverletter/circle.svg'
import Talk from '../components/Talk'
import Footer from '../components/Footer'

const CoverLetter = () => {
    return (
        <div>
        <Header />

<div className='mx-auto container'>
    <h1 className='text-[48px] text-[#002E5A] font-bold pt-24 pb-20 capitalize mx-12'>services we provide</h1>

    <div className='flex justify-between bg-[#F3F0EB] rounded-full mx-12 py-2 px-4'>
        <div className='flex gap-2'>
            <img className='h-6 mt-1' src={Buss} alt="" />
            <h1 className='text-[#1a1a1a] text-[18px] font-medium'>Academic CV</h1>
        </div>
        <div className='flex gap-2'>
            <img className='h-6 mt-1' src={Ana} alt="" />
            <h1 className='text-[#1a1a1a] text-[18px] font-medium'>Professional CV</h1>
        </div>
        <div className='flex gap-2'>
            <img className='h-6 mt-1' src={Cre} alt="" />
            <h1 className='text-[#1a1a1a] text-[18px] font-medium'>Cover Letter</h1>
        </div>
    </div>

    <div className='flex justify-between bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] mx-12 rounded-xl px-16 mt-12 absolute'>
        <div>
            <div className='flex gap-56'>
                <div className='mt-[200px]'>
                    <h1 className='capitalize text-[#F3F0EB] text-[48px] font-bold'>we write <span className='text-[#DA7717]'>outstanding</span></h1>
                    <div className='flex gap-10'>
                        <img className='h-28' src={Line} alt="" />
                        <ul className='text-[#F3F0EB] list-disc leading-7'>
                            <li className='text-[16px] font-medium'>ATS-Compliant CV’s</li>
                            <li className='text-[16px] font-medium'>Academic CV’s</li>
                            <li className='text-[16px] font-medium'>Cover Letter</li>
                        </ul>
                    </div>
                    <p className='text-[#F3F0EB] text-[16px]'>Ensure that your CV and cover letter is flawlessly written, precise, <br /> and polished to perfection. </p>
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
        <p className='text-[#1A1A1A] text-[16px] mb-5 mx-20'>Our cover letter is a letter of introduction attached to or accompanying another document, such as a résumé or a curriculum vitae. Job seekers frequently send a cover letter along with their curriculum vitae or employment applications to introduce themselves to potential employers and explain their suitability for the desired positions. For our cover letters, we would need the following details:</p>
        <div className='mx-20'>
            <div className='flex gap-14'>
                <img src={Lines} alt="" />
                <ul className='text-[#1a1a1a] list-disc'>
                    <li className='text-[16px]'>Name of The person you want to address the Letter to</li>
                    <li className='text-[16px]'>Position/role in the company</li>
                    <li className='text-[16px]'>Company name</li>
                    <li className='text-[16px]'>Company address</li>
                    <li className='text-[16px]'>Which job title/role are you applying for</li>
                    <li className='text-[16px]'>Company website</li>
                </ul>
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

export default CoverLetter
