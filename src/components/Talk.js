import React from 'react'
import talkLine from '../img/talk/line.png'
import callIcon from '../img/talk/call.png'

const Talk = () => {
  return (
    <section>
        <div className='bg-[#002E5A] text-[#FAFAFA]'>
            <div className='container mx-auto text-center py-20'>
                <div className='flex items-center justify-center gap-3'>
                    <img src={talkLine} alt="" />
                    <h1 className='text-[18px] font-medium'>Talk To Us About Your Needs</h1>
                </div>
                <div className='pt-3'>
                    <h2 className='text-[32px] font-semibold'>Looking for a first class <br /> research consultant?</h2>
                </div>
                <div>
                    <p className='text-[16px] pt-3 pb-5'>Highbrow research consultants are experts in writing research proposals and highly <br /> skilled in performing and conducting studies on topics in their specialized fields.</p>
                </div>

                <div className='flex items-center justify-center gap-8'>
                    <button className='border rounded-full px-3 py-1 text-[16px] font-[400] capitalize'>place order</button>
                    <div className='flex gap-2 cursor-pointer'>
                        <img className='h-5 w-5 mt-1 items-center animate-bounce' src={callIcon} alt="" />
                        <h2 className='text-[16px] font-[400]'>Call or chat with us</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Talk