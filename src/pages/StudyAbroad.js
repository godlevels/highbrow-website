import React from 'react'
import Header from '../components/Header'
import Buss from '../img/businessplan/boards.png'
import Ana from '../img/businessplan/analytics.png'
import Cre from '../img/businessplan/card.png'
import Side from '../img/abroad/abd.png'
import Fra from '../img/businessplan/Frame.png'
import Cal from '../img/businessplan/frames.png'
import Sets from '../img/businessplan/framess.png'
import Lines from '../img/businessplan/rects.png'
import WorkH from '../img/businessplan/head.svg'
import SideC from '../img/abroad/circle.svg'
import Talk from '../components/Talk'
import Footer from '../components/Footer'

const StudyAbroad = () => {
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
            <div className='flex gap-28'>
                <div className='mt-[200px]'>
                    <h1 className='capitalize text-[#F3F0EB] text-[48px] font-bold'>Apply for your <span className='text-[#DA7717]'>Study Visa</span> <br /> application with Highbrow <br /> Research</h1>
                    <p className='text-[#F3F0EB] text-[16px]'>Make your profile stand out to colleagues and recruiters on the platform.</p>
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
        <p className='text-[#1A1A1A] text-[16px] mb-5 mx-20 mt-14'>Visa application is an important part and parcel of the study abroad journey. As soon as you receive an acceptance letter from the <br /> university, the next critical step is to apply for the Visa. We have educational consultants ready to guide and help process your study visa <br /> application glitch-free. Our experienced educational consultants have extensive experience with global visa requirements. Below are visa <br /> checklist and financial requirement from the UK Visas and Immigration.</p>
        <div className='mx-20'>
            <div className='flex gap-14'>
                <img className='w-[3px] h-64 mt-9 rounded-2xl' src={Lines} alt="" />
                <div>
                    <h1 className='text-[#1a1a1a] text-[16px]'>Visa Document Checklist:</h1>
                    <ul className='text-[#1a1a1a]'>
                        <li className='text-[16px]'>1. CAS (Confirmation of Acceptance of Studies) - A CAS letter is an essential document that is used to apply for a student visa and <br /> verifies that a student has been offered an unconditional letter to study at a specific university after the tuition deposit has been paid.</li>
                        <li className='text-[16px]'>2. Tuberculosis Test - A Tuberculosis test is needed in order to be eligible for a UK Study Visa. A tuberculosis (TB) test is required by <br /> an Applicant if they are coming to the UK for more than 6 months.</li>
                        <li className='text-[16px]'>3. International Passport - Your passport must be valid for at least 3 months beyond the date you plan to travel. It must also have at <br /> least one blank page for the Visa.</li>
                        <li className='text-[16px]'>4. Proof Of English Language Proficiency - This may include WAEC result, Degree Certificate/ Transcript depending on what the <br /> school uses in accessing the applicant’s proficiency.</li>
                        <li className='text-[16px]'>5. Proof of Financial Means - This may be your Bank Statement for a period of 28 Days or a proof of sponsorship from a third-party to <br /> cover the estimated living cost and tuition fee.</li>
                        <li className='text-[16px]'>And any other applicable documents.</li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-14 my-3'>
                <img className='w-[3px] h-52 mt-9 rounded-2xl' src={Lines} alt="" />
                <div>
                    <h1 className='text-[#1a1a1a] text-[16px]'>Visa Financial Requirements:</h1>
                    <ul className='text-[#1a1a1a]'>
                        <li className='text-[16px]'>1. Visa Fee - 363 pounds</li>
                        <li className='text-[16px]'>2. Immigration Health Surcharge (IHS) – Amount depends on your study requirements</li>
                        <li className='text-[16px]'>3. Priority Visa Service - 250 pounds (Optional)</li>
                        <li className='text-[16px]'>4. Financial statement for the main applicant exclusive of tuition fee; a minimum of 9,135 Pounds outside London and 11315 pounds <br /> within London.</li>
                        <li className='text-[16px]'>5. Financial statement for each dependent i.e., Spouse/Child (ren); a minimum of 6120 Pounds outside London and a minimum of <br /> 7605 Pounds within London</li>
                        <li className='text-[16px]'>N: B - These are the estimated fees as at when this document was compiled. Kindly note that the above fees are subject to change <br /> by the UK Government at any time.</li>
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

export default StudyAbroad
