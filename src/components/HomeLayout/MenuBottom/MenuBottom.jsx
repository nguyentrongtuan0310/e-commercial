import React from 'react'
import  './MenuBottom.scss'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { CategoryIcon, HomeIcon, ReadMoreIcon, StoreIcon, UserIcon } from '../../Icon'
import { UserOutlined } from '@ant-design/icons'
const MenuBottom = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    const navLinkClass = ({ isActive }) => {
        return isActive ? 'menu__md__item active' : 'menu__md__item'
      }
      const handleLogin = () => {
            if(users){
                localStorage.removeItem('users')
            }
      }
  return (
    <div className='menu__md'>
        <ul className='menu__md__list' >
            <NavLink  to='/' className={navLinkClass}>
                <HomeIcon className='menu__md__item__icon' />
                <span className='menu__md__item__text'>Trang chủ</span>
            </NavLink>
            <NavLink to='/product' className={navLinkClass}>
                <CategoryIcon  className='menu__md__item__icon'/>
                <span className='menu__md__item__text'>Danh mục</span>
            </NavLink>
            <NavLink to='/store' className={navLinkClass} >
                <StoreIcon className='menu__md__item__icon'/>
                <span className='menu__md__item__text'>Cửa hàng</span>
            </NavLink>
            <NavLink to='/login'className={navLinkClass} onClick={handleLogin}>
                <UserOutlined className='menu__md__item__icon'/>
                <span className='menu__md__item__text'>Đăng nhập</span>
            </NavLink>
            <NavLink to='/more' className={navLinkClass}>
                <ReadMoreIcon className='menu__md__item__icon'/>
                <span className='menu__md__item__text'>Xem thêm</span>
            </NavLink>
        </ul>

    </div>
  )
}

export default MenuBottom