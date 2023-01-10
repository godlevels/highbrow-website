import React from 'react'; 
import ChooseHead from '../img/gallery/choose.png'
// import ChooseSlider from './ChooseSlider';
import { chooseData } from '../data';


const GallerySection = () => {
  
  return <section>
    <div className='container mx-auto h-full mt-20 mb-32'>
      <div className='min-h-[100px] mx-12'>
        <div className='flex flex-col justify-center px-2 xl:px-0'>
          <img className='h-8 w-20 lg:h-10 lg:w-32' src={ChooseHead} alt="" />
          <p className='text-[14px] lg:text-[18px] mt-2 mb-8'>With over 7 years of industry experience and 3000+ projects successfully <br /> completed, Success stories and testimonials from our clients show that <br /> we have consistently provided value to our clients worldwide.</p>
        </div>
        
        <div className='grid grid-cols-2 gap-y-10 gap-x-10 mt-8'>
          {chooseData.map((data, i) => {
            return <div key={i}>
              <div className='flex'>
                <img className='mt-14 h-24' src={data.side} alt="" />
                <div>
                  <img src={data.icon1} alt="" />
                  <h1 className='text-[#1A1A1A] text-[20px] font-medium pl-8 my-3'>{data.title}</h1>
                  <p className='text-[#1A1A1A] text-[16px] pl-8'>{data.subtitle}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </section>;
};

export default GallerySection;
