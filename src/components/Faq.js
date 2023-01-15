import React from 'react'
import { faq } from '../data'
import Accordion from './Accordion' 

const Faq = () => {
    const { title, accordions } = faq
    return (
        <section className='pt-[180px] lg:pt-[100px] container mx-auto'>
            <div className='mx-12'>
                <div>
                    <img className='h-10 mb-10' src={title} alt="" />
                </div>

                <div className='grid grid-cols-2 gap-3 mb-14'>{accordions.map((accordion, idx)=> {
                        return <Accordion accordion={accordion} key={idx} />
                    })}
                </div> 
            </div>
        </section>
    )
}

export default Faq
