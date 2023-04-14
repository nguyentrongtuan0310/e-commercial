
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import styles from "./cart.module.scss";
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate} from 'react-router-dom';

import CartItem from './CartItem';
import NoData from './NoData';
import { deleteCart } from './CartSlice';
import CartLayout from './CartLayout.js';
 


const Cart = () => {
  const data = JSON.parse(localStorage.getItem('quanity'))?.data || []
 const [status,setStatus] = useState(false)

 const dispatch = useDispatch()
 const navigate = useNavigate()


  const deleteCartItem = (id) => {
    const index = data.findIndex(item => item.id === id)
       dispatch(deleteCart({index: index, id : id}))
      setStatus(!status)
   }
  
  return (

   
    <CartLayout>
      <span className={styles.title}>
            <span className={styles.title__back} onClick={() => navigate('/')}> <LeftOutlined className={styles.title__icon}/> Trở về</span>
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