import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import HeaderApp from '../../../components/HomeLayout/HeaderApp/HeaderApp'
import styles from '../cart.module.scss'
import { openLogin } from '../../../components/ModalApp/ModalAppSLice'



const CartLayout = ({children}) => {
   const [value ,setValue] = useState('TIẾN HÀNH ĐẶT HÀNG')
   const users = JSON.parse(localStorage.getItem('users'))
   const data = JSON.parse(localStorage.getItem('quanity')).data || []
 const navigate = useNavigate()
 const dispatch = useDispatch()
const {payment} = useParams()
 const listPrice= useSelector(state => state.cart.listCart.totalPrice)

 const price = listPrice.reduce((cur,item) => {
  return ((Number.parseFloat(item.item.price ) * item.countTotal) + cur).toString()
},0)

const handleOrder = () => {
  
   if(data.length > 0 ){
    if(users){
    navigate('/cart/payment')

    }else{
      navigate('/')
      dispatch(openLogin())
    }
   }
}
  return (
    <Layout >
          <HeaderApp />
            <div className={styles.wrapper} >
                <div className={styles.container} >
                            {children}
                   
                </div >  
              </div>
         

              <div className={styles.pay}>
                   <div className={styles.pay__title}>
                      <h3 className={styles.pay__name}>Tổng tiền tạm tính:</h3>
                      <p className={styles.pay__total__price}>{price}0.000 ₫</p>
                    </div>   
                    <button type='submit' className={styles.pay__btn__order} onClick={handleOrder}>{payment ? "TIẾP TỤC" : "TIẾN HÀNH ĐẶT HÀNG"}</button>
                    <button className={styles.pay__btn__add} onClick={() => navigate('/')}>CHỌN THÊM SẢN PHẨM KHÁC</button>
              </div> 
             
      </Layout>

  )
}

export default CartLayout