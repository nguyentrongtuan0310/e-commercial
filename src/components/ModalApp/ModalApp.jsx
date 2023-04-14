
import { useEffect, useRef, useState } from 'react';
import styles from './ModalApp.module.scss'
import Login from './Login/LogIn'
import gg from '../../img/goggle.png'
import {  CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { closeLogin } from './ModalAppSLice';
import { useNavigate } from 'react-router-dom';
const ModalApp = () => {
 const modalRef = useRef()
 const state = useSelector(state => state.modal.isShow)
 const dispatch = useDispatch()
 const navigate = useNavigate()
 useEffect (() => {
      if(state){
        modalRef.current.classList.add(styles.visible)
      }else{
        modalRef.current.classList.remove(styles.visible)

      }
 },[state])
const handleRegister = () => {
  dispatch(closeLogin())
  navigate('/register')
}
  return (
    <div className={styles.modal} ref={modalRef} onClick={() => dispatch(closeLogin())}>
        <div className={styles.modal__inner} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modal__inner__title}>
            <p> ĐĂNG NHẬP TÀI KHOẢN SMEMBER</p>
            <CloseOutlined className={styles.modal__inner__icon} onClick={() => dispatch(closeLogin())}/>
            
            </div>
            <Login />
            <div className={styles.modal__inner__text}>
                <span>Hoặc</span>
            </div>
            <div className={styles.modal__inner__login}>
                <button className={styles.modal__inner__login__btn}>
                    <img src={gg} alt='google' />
                    <span>Đăng nhập bằng tài khoản Google</span>
                </button>
                <div className={styles.modal__inner__login__question}>
                  <span className={styles.modal__inner__login__question__text}>Bạn chưa có tài khoản? </span>
                  <a onClick={handleRegister}> Đăng ký ngay</a>
                </div>
            </div>
        </div>
    
    </div>
  );
};
export default ModalApp;