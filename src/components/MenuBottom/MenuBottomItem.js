import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from '../Icon';
import styles from './MenuBottom.module.scss';
const MenuBottomItem = () => {
    return (
        <NavLink
            to="/"
            className={({ isActive }) =>
                classNames(styles.product__option__item, {
                    [styles.active]: isActive,
                })
            }
        >
            <HomeIcon className={styles.menu__item__icon} />
            <span className={styles.menu__item__text}>Trang chủ</span>
        </NavLink>
    );
};

export default MenuBottomItem;
