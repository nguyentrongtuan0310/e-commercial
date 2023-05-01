import React from 'react';
import './MenuBottom.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { CategoryIcon, HomeIcon, ReadMoreIcon, StoreIcon, UserIcon } from '../Icon';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { openLogin } from '../ModalApp/ModalAppSLice';
import useNotification from 'antd/es/notification/useNotification';
import { openDrawer } from '../Drawer/DrawerSlice';

const MenuBottom = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [api, contextHolder] = useNotification();
    const navLinkClass = ({ isActive }) => {
        return isActive ? 'menu__md__item active' : 'menu__md__item';
    };
    const handleLogin = () => {
        if (users) {
            localStorage.removeItem('users');
            api.success({
                message: 'Thông báo',
                description: 'Bạn đã đăng xuất thành công',
                duration: 5,
                onClose: () => {
                    navigate('/');
                },
            });
        } else {
            dispatch(openLogin());
        }
    };

    return (
        <div className="menu__md">
            <ul className="menu__md__list">
                <NavLink to="/" className={navLinkClass}>
                    <HomeIcon className="menu__md__item__icon" />
                    <span className="menu__md__item__text">Trang chủ</span>
                </NavLink>
                <NavLink to="/phone" className={navLinkClass} onClick={() => dispatch(openDrawer())}>
                    <CategoryIcon className="menu__md__item__icon" />
                    <span className="menu__md__item__text">Danh mục</span>
                </NavLink>
                <NavLink to="/store" className={navLinkClass}>
                    <StoreIcon className="menu__md__item__icon" />
                    <span className="menu__md__item__text">Cửa hàng</span>
                </NavLink>
                <NavLink to="/login" className={navLinkClass} onClick={handleLogin}>
                    <UserOutlined className="menu__md__item__icon" />
                    <span className="menu__md__item__text">{users?.user?.name ? 'Đăng xuất' : 'Đăng nhập'}</span>
                </NavLink>
                <NavLink to="/more" className={navLinkClass}>
                    <ReadMoreIcon className="menu__md__item__icon" />
                    <span className="menu__md__item__text">Xem thêm</span>
                </NavLink>
            </ul>
            {contextHolder}
        </div>
    );
};

export default MenuBottom;
