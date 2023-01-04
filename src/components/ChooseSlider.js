import React from 'react'
import { chooseData, WhyChooseData } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../slider.css'
import 'swiper/css/autoplay'
import { Navigation, Pagination, Autoplay } from 'swiper'


const ChooseSlider = () => {
  return ( 
    <Swiper>
       <SwiperSlide className='bg-[#F3F0EB] rounded-[20px] border border-[#F3F0EB] xl:max-w-[900px] max-h-[1000px] pt-[10px] px-[35px] xl:px-[50px] pb-[50px] flex items-start gap-x-[30px] shadow-xl my-20'>
        
                
        </SwiperSlide>
    </Swiper>
  )
}

export default ChooseSlider