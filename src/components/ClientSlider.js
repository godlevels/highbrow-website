import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

const ClientSlider = ({clients}) => {
    return (
        <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{delay: 5000}}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                1170: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
            }}
            >
            {clients.map((client, i) => {
                const { message, image, name, borderColor } = client
                return (
                    <SwiperSlide key={i} style={{borderColor: borderColor}} className='border-t-[10px] rounded-t-[12px]'>
                        <div className='w-full mx-auto lg:max-w-[300px] xl:max-w-[430px] h-[550px] rounded-[12px] py-6 px-[30px]'>
                            <div className='mb-[30px]'>{message}</div>
                            <div className='flex gap-x-[10px]'>
                                <img src={image} alt="" />
                                <div className='font-bold'>{name}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ClientSlider
