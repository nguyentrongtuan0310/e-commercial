import React from 'react'
import { Layout } from 'antd'

import styles from './Register.module.scss'
import MainLayout from '../../components/MainLayout/MainLayout'
import { BackIcon } from '../../components/Icon'
import HeaderApp from '../../components/HomeLayout/HeaderApp/HeaderApp'
import shipper from '../../img/shipper.png'
import FormRegister from './FormRegister/FormRegister'
import gg from '../../img/goggle.png'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <Layout className={styles.wrapper}>
      <HeaderApp />
        <div className={styles.register}>
          <div className={styles.register__title}>
                <div onClick={() => navigate('/')} className={styles.register__title__icon}><BackIcon    /></div>
              <h2 >Đăng ký tài khoản</h2>
          </div>
          <div className={styles.register__logo}>
              <img className={styles.register__logo__img} src={shipper} alt='shipper' />
              <h3 className={styles.register__logo__text}>Đăng ký tài khoản shipper</h3>
          </div>
          <FormRegister />
          <div className={styles.register__line}>
                <span>Hoặc</span>
            </div>
            <button className={styles.register__btn}>
                <img className={styles.register__btn__icon} src={gg} alt='google' />
                <p className={styles.register__btn__text}>Đăng ký bằng Google</p>
            </button>
            <div className={styles.register__question}>
                <span  className={styles.register__question__text}>Bạn đã có tài khoản ?</span>
                <span className={styles.register__question__link}>Đăng nhập ngay</span>
            </div>
        </div>

    </Layout>
  )
}

export default Register