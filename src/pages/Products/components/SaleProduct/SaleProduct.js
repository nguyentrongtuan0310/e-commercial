import React, { useEffect, useRef, useState } from 'react'
import './SaleProduct.scss'
import { useSelector } from 'react-redux'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductSwiper from './ProductSwiper/ProductSwiper';


const SaleProduct = () => {
    const data = useSelector(state =>state.products.products)
    const [day,setDay] = useState('')
    const [second,setSecond] = useState('')
    const [hour,setHour] = useState('')
    const [minute,setMinute] = useState('')
 
  

    const date = new Date();
    useEffect(() =>{

        setDay(date.getDay())
        setSecond(date.getSeconds())
        setHour(date.getHours())
        setMinute(date.getMinutes())
    },[])


  return (
    <div className='sale'>
        <div className='sale__title'>
            <div className='sale__title__img'>
                    <img src='assets/img/hst.png' alt='hst'/>
            </div>
            <div className='sale__title__countdown'>
                    <p>Kết thúc sau:</p>
                    <ul className='sale__box__time'>
                        <li className='sale__box__time__item'>
                            <p className='sale__box__time__number'> {day.length > 2 ? day :`0${day}` }</p>
                            <span className='sale__box__time__sperate'>:</span>
                        </li>
                        <li className='sale__box__time__item'>
                            <p className='sale__box__time__number'>{hour}</p>
                            <span className='sale__box__time__sperate'>:</span>
                        </li>
                        <li className='sale__box__time__item'>
                            <p className='sale__box__time__number'>{minute}</p>
                            <span className='sale__box__time__sperate'>:</span>
                        </li>
                        <li className='sale__box__time__item'>
                            <p className='sale__box__time__number'>{second}</p>        
                        </li>              
                    </ul>
            </div>
        </div>
      <ProductSwiper data={data} />
    </div>
  )
}

export default SaleProduct