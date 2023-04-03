import React, { useEffect, useRef, useState } from 'react'
import styles from './SaleProduct.module.scss'
import logo from '../../../../img/hst.png'
import { Col, Pagination, Row } from 'antd'
import { CardItem } from '../CardItem'
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper'

const SaleProduct = () => {
    const data = useSelector(state =>state.products.products)
    const [day,setDay] = useState('')
    const [second,setSecond] = useState('')
    const [hour,setHour] = useState('')
    const [minute,setMinute] = useState('')
    const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
    const date = new Date();
    useEffect(() =>{

        setDay(date.getDay())
        setSecond(date.getSeconds())
        setHour(date.getHours())
        setMinute(date.getMinutes())
    },[])
//     const navigationPrevRef = useRef(null)
//   const navigationNextRef = useRef(null)

  return (
    <div className={styles.sale}>
        <div className={styles.sale__title}>
            <div className={styles.sale__title__img}>
                    <img src={logo} alt={logo}/>
            </div>
            <div className={styles.sale__title__countdown}>
                    <p>Kết thúc sau:</p>
                    <ul className={styles.sale__box__time}>
                        <li className={styles.sale__box__time__item}>
                            <p className={styles.sale__box__time__number}> {day.length > 2 ? day :`0${day}` }</p>
                            <span className={styles.sale__box__time__sperate}>:</span>
                        </li>
                        <li className={styles.sale__box__time__item}>
                            <p className={styles.sale__box__time__number}>{hour}</p>
                            <span className={styles.sale__box__time__sperate}>:</span>
                        </li>
                        <li className={styles.sale__box__time__item}>
                            <p className={styles.sale__box__time__number}>{minute}</p>
                            <span className={styles.sale__box__time__sperate}>:</span>
                        </li>
                        <li className={styles.sale__box__time__item}>
                            <p className={styles.sale__box__time__number}>{second}</p>        
                        </li>              
                    </ul>
            </div>
        </div>
        < SwiperComponent
          slidesPerView={5}
          spaceBetween={10}
            Pagination={{
                clickable: true
            }}
           grabCursor={true}
           autoplay={{
             delay: 3000,
             disableOnInteraction: false,
           }}
           
           modules={[ Autoplay,Pagination]}
    
          className={styles.mySwiper}>
       

           <div className={styles.list__product}>
                {data.map((item,id) => (
                   
                        <SwiperSlide style={{width: '100%',borderRadius: '10px'}}>
                            <CardItem item={item}/>
                        </SwiperSlide> 
              
                ))}
           </div>
       

        </ SwiperComponent>
    </div>
  )
}

export default SaleProduct