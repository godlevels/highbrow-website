import React from 'react'
import { chooseData } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../slider.css'
import { Pagination, Autoplay } from 'swiper' 
import 'swiper/css/autoplay'

const ChooseSlider = () => {
    return (
        <Swiper slidesPerView={'auto'} spaceBetween={20} pagination={{clickable: true,}} modules={[Pagination, Autoplay]} autoplay={{delay: 5000}} className='mySwiper'>
            {chooseData.map((slide, idx)=> {
                const { icon1, title, subtitle } = slide
                return <SwiperSlide className='bg-[#F3F0EB] rounded-[20px] border border-[#F3F0EB] max-h-[300px] max-w-sm flex items-start gap-x-[30px] shadow-xl mt-10 mb-20' key={idx}>
                    <div className='flex flex-col pt-10 pb-32'>
                        <div><img src={icon1} alt="" /></div>
                        <h1 className='text-[#1A1A1A] text-[28px] font-bold px-10 py-1'>{title}</h1>
                        <h1 className='text-[#1A1A1A] text-[16px] px-10'>{subtitle}</h1>
                    </div>
                </SwiperSlide> 
            })}
        </Swiper>
    )
}

export default ChooseSlider
