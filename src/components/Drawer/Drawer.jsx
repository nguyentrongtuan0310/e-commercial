import React from 'react';

import styles from './Drawer.module.scss';
import DrawerItem from './DrawerItem';
import { SettingOutlined } from '@ant-design/icons';

const Drawer = () => {
    const data = [
        {
            id: 1,
            name: 'Điện thoại',
            link: 'https://cellphones.com.vn/media/icons/menu/icon-cps-3.svg',
        },
        {
            id: 2,
            name: 'Laptop',
            link: 'https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-380.svg',
        },
        {
            id: 5,
            name: 'Tablet',
            link: 'https://cellphones.com.vn/media/icons/menu/icon-cps-4.svg',
        },
        {
            id: 3,
            name: 'Âm thanh ',
            link: 'https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg',
        },
        {
            id: 4,
            name: 'Đồng hồ',
            link: 'https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg',
        },
    ];
    return (
        <div className={styles.drawer}>
            <div className={styles.drawer__content}>
                <div className={styles.drawer__info}>
                    <div className={styles.drawer__info__name}>
                        <img
                            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            className={styles.drawer__info__img}
                            alt="f8"
                        />
                        <span>Nguyễn Trọng Tuấn</span>
                    </div>
                    <SettingOutlined className={styles.drawer__info__icon} />
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
