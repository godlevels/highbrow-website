import React from 'react'
import WorkHead from '../img/workss/head.png'
import WorkContent from '../img/workss/content.png'

const Works = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-[#002E5A] to-[#0D5EBB] py-10'>
        <div>
            <img className='flex justify-center mx-96 h-14' src={WorkHead} alt="" />
            <img className='h-auto my-8' src={WorkContent} alt="" />
        </div>
    </div>
  )
}

export default Works