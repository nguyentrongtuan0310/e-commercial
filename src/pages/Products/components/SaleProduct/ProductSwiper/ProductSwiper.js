import React, { useCallback, useRef } from 'react'

import {Autoplay} from 'swiper'

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { CardItem } from '../../CardItem';


import './ProductSwiper.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
const ProductSwiper = ({data}) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <SwiperComponent
    ref={sliderRef}
    slidesPerView={5}
    spaceBetween={10}
     grabCursor={true}
     breakpoints={{
      400: {
        // width: 576,
        slidesPerView: 2,
      },
      576: {
        // width: 576,
        slidesPerView: 2,
      },
      768: {
        // width: 768,
        slidesPerView: 3,
      },
      996: {
        // width: 768,
        slidesPerView: 4,
      },
    }}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
     }} 

     modules={[Autoplay]}

    className='mySwiper'
    >
     <div className='list__product'>
          {data.map((item,id) => (
             
                  <SwiperSlide style={{width: '100%',borderRadius: '10px'}} key={id}>
                      <CardItem item={item}/>
                  </SwiperSlide> 
          ))}
     </div>
     <div className="slider-controler" >
            <div className="prev-arrow" onClick={handlePrev}>
              <LeftOutlined name="arrow-back-ouline" className="icon__prev"/>
  
            </div>
            <div className="next-arrow" onClick={handleNext}>
            <RightOutlined name="arrow-forward-ouline"  className="icon__next"/>
  
            </div>
          </div>
        
  </ SwiperComponent>
  )
}

export default ProductSwiper