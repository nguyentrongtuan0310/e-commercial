import React, { useEffect, useRef } from 'react';

import styles from './Drawer.module.scss';
import DrawerItem from './DrawerItem';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer } from './DrawerSlice';
const data = [
    {
        id: 1,
        name: 'Điện thoại',
        link: 'https://cellphones.com.vn/media/icons/menu/icon-cps-3.svg',
        to: '/phone',
    },
    {
        id: 2,
        name: 'Laptop',
        link: 'https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-380.svg',
        to: '/laptop',
    },
    {
        id: 5,
        name: 'Tablet',
        link: 'https://cellphones.com.vn/media/icons/menu/icon-cps-4.svg',
        to: '/tablet',
    },
    {
        id: 3,
        name: 'Âm thanh ',
        link: 'https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg',

        to: '/sound',
    },
    {
        id: 4,
        name: 'Đồng hồ',
        link: 'https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg',
        to: '/watch',
    },
];
const Drawer = () => {
    const isShowDrawer = useSelector((state) => state.drawer.isShowDrawer);
    const user = JSON.parse(localStorage.getItem('users'));
    const drawerRef = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        if (isShowDrawer) {
            drawerRef.current.classList.add(styles.visible);
        } else {
            drawerRef.current.classList.remove(styles.visible);
        }
    }, [isShowDrawer]);

    return (
        <div className={styles.drawer} ref={drawerRef} onClick={() => dispatch(closeDrawer())}>
            <div className={styles.drawer__content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.drawer__info}>
                    <div className={styles.drawer__info__name}>
                        <img
                            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            className={styles.drawer__info__img}
                            alt="f8"
                        />
                        <span>{user ? user.user.name : 'No login'}</span>
                    </div>
                    <CloseOutlined className={styles.drawer__info__icon} onClick={() => dispatch(closeDrawer())} />
                </div>
                <ul className={styles.drawer__list}>
                    {data.map((item) => (
                        <DrawerItem item={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Drawer;
