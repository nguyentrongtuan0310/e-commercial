
import { Button, Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./cart.module.scss";

import FooterApp from '../../components/HomeLayout/FooterApp/FooterApp'
import HeaderApp from '../../components/HomeLayout/HeaderApp/HeaderApp'
import { LeftOutlined } from '@ant-design/icons'
import CartItem from './CartItem';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import NoData from './NoData';
import { deleteCart } from './CartSlice';
import CartLayout from './CartLayout.js';
 


const Cart = () => {
  const data = useSelector(state => state.cart.listCart.item)
 const dispatch = useDispatch()
 const navigate = useNavigate()


  const deleteCartItem = (id) => {
    const index = data.findIndex(item => item.id === id)
       dispatch(deleteCart({index: index, id : id}))
   }

  return (

   
    <CartLayout>
      <span className={styles.title}>
            <span className={styles.title__back} onClick={() => navigate('/home')}> <LeftOutlined className={styles.title__icon}/> Trở về</span>
            <span className={styles.title__cart}>Giỏ hàng</span>
      </span>
      <ul className={styles.cart}>
        {data.length > 0 ? 
       (
        data.map(item => (
          <CartItem  key={item.id} item={item} deleteCartItem={deleteCartItem}/>
        ))
       )
        : <NoData />
      }
      </ul>
    </CartLayout>

  )
}

export default Cart