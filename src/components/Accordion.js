import React, {useState} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'


const Accordion = ({ accordion }) => {
    const [isOpen, setIsOpen] = useState(false) 

    const { question, answer } = accordion
    return (
        <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer'>
            <div className='bg-[#F3F0EB] rounded-sm'>
                <div className='min-h-[60px] flex items-center justify-between px-[30px]'>
                    <h6 className='text-[#1A1A1A] text-[18px] font-medium'>{question}</h6>
                    <div>
                        {isOpen ? <FaMinus className='text-[20px] text-[#1A1A1A]' /> : <FaPlus className='text-[20px] text-[#1A1A1A]' />}
                    </div>
                </div>
            </div>

            <div className={`bg-[#F3F0EB] ${isOpen ? 'min-h-[130px] lg:min-h-[160px]' : 'min-h-0'} max-h-0 overflow-hidden flex justify-center transition-all ease-linear duration-500 px-[30px]`}>
                <div className='mt-3'>{answer}</div>
            </div>
        </div>
    )
}

export default Accordion
