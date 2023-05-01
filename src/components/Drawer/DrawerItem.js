import React from 'react';
import styles from './Drawer.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
const DrawerItem = ({ item }) => {
    return (
        <NavLink
            to={item.to}
            className={({ isActive }) =>
                classNames(styles.drawer__item, {
                    [styles.active]: isActive,
                })
            }
        >
            <span className={styles.drawer__item__img} style={{ backgroundImage: `url(${item.link})` }}></span>
            <span>{item.name}</span>
        </NavLink>
    );
};

export default DrawerItem;
