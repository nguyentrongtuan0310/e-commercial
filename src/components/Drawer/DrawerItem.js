import React from 'react';
import styles from './Drawer.module.scss';
const DrawerItem = ({ item }) => {
    return (
        <li className={styles.drawer__item}>
            <span className={styles.drawer__item__img} style={{ backgroundImage: `url(${item.link})` }}></span>
            <span>{item.name}</span>
        </li>
    );
};

export default DrawerItem;
