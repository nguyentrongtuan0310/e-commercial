import { DeleteOutlined } from '@ant-design/icons'
import { current } from '@reduxjs/toolkit'
import { InputNumber, Select } from 'antd'
import useNotification from 'antd/es/notification/useNotification'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './cart.module.scss'
import { priceDecreseTotalItem, priceTotalItem } from './CartSlice'

const CartItem = ({item,deleteCartItem}) => {
    const [number,setNumber]= useState(1)
    const [api, contextHolder] = useNotification()
    const dispatch = useDispatch()
   
    
    const handleDecrese = () => {
        
        if(number < 2){
            api.open({
                style : { width: 350,height: 83},
                message: `Thông báo  `,
                duration: 5,
                description:
                  'Số lượng sản phẩm đã giảm tới mức tối thiểu',
               
              });
            
        }else{
            setNumber(number - 1)
            dispatch( priceDecreseTotalItem({item: item, countTotal: number}))
        }
    }
useEffect(() => {
    dispatch(priceTotalItem({item: item, countTotal: 0}))
   
},[])
    const handleIncrese = () => {
        setNumber(number + 1)
        
        dispatch(priceTotalItem({item: item, countTotal: number}))
    }
   
    const handleDelete = (id) => {
        deleteCartItem(id)
    }
  return (
    
    <div className={styles.product}>
        <div className={styles.product__img} ><img src={item.link} alt={item.link}/></div >
        <div className={styles.product__content}>
            <div className={styles.product__info}>
                    <div className={styles.product__info__wrapper}>
                        <h3 className={styles.product___name}> {item.name}</h3>
                        <span className={styles.product__price}>
                            <p className={styles.product__price__sale}>{item.price} ₫</p>
                            <p className={styles.product__price__regular}>{item.priceOld} ₫</p>
                            <p className={styles.product__price__onsale}>Giảm 13%</p>
                        </span>
                    </div >
                   <div> <div className={styles.product__icon} onClick={() => handleDelete(item.id)}> <DeleteOutlined /></div>
                   <div className={styles.product__number}>
                        <span onClick={handleDecrese}>-</span>
                        <input type='text' value={number} />
                        <span onClick={handleIncrese}>+</span>
                </div>
                   </div>
            </div>   
        
               <div className={styles.product__notification}>{contextHolder }</div >
        
        </div>
    </div>
  )
}

export default CartItem