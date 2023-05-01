import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderApp.module.scss';
import { Avatar, Popover } from 'antd';

import { Header } from 'antd/es/layout/layout';
import { CallIcon, CartIcon, CategoryIcon, CheckOrderIcon, LocationIcon, UserIcon } from '../../../components/Icon';

import useResize from '../../../hooks/useResize';
import { ModalApp } from '../../../components/ModalApp';
import { useDispatch, useSelector } from 'react-redux';
import { openLogin } from '../../../components/ModalApp/ModalAppSLice';
import { Drawer } from '../../../components/Drawer';
import { openDrawer } from '../../../components/Drawer/DrawerSlice';

const cx = classNames.bind(styles);

const HeaderApp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const nameUser = JSON.parse(localStorage.getItem('users'));
    const count = useSelector((state) => state.cart.listCart.totalItem);

    const handleLogOut = () => {
        localStorage.removeItem('users');
        navigate('/');
    };
    const handleLogin = () => {
        dispatch(openLogin());
    };
    const content = (
        <div className={cx('header__content__popover')}>
            <p>Tài Khoản Của Tôi</p>
            <p>Đơn Mua</p>
            <p onClick={handleLogOut}>Đăng Xuất</p>
        </div>
    );
    const size = useResize();

    return (
        <Header>
            <Drawer />
            <div className={cx('header')}>
                <ul className={cx('nav')}>
                    {size.width > 768 ? (
                        <Link to={'/'} className={cx('nav__logo')}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="
                                alt="logo"
                            />
                        </Link>
                    ) : (
                        <Link to={'/'} className={cx('nav__logo')}>
                            <img className={cx('nav__logo__img')} alt="logo" />
                        </Link>
                    )}

                    {size.width > 768 && (
                        <Link onClick={() => dispatch(openDrawer())} className={cx('header__icon__wrapper')}>
                            <CategoryIcon className={cx('header__icon')} />
                            <p>Danh mục</p>
                        </Link>
                    )}
                    {size.width > 768 ? (
                        <div className={cx('header__icon__wrapper')}>
                            <LocationIcon className={cx('header__icon')} />
                            <div className={cx('header__icon__text')}>
                                <p className={cx('header__icon__text__title')}>Xem giá tại</p>
                                <p className={cx('header__icon__text__adress')}>Hồ Chí Minh</p>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('header__search')}>
                            <input className={cx('header__search__input')} type="text" placeholder="Bạn cần tìm gì" />
                            <SearchOutlined className={cx('header__search__icon')} />
                        </div>
                    )}
                </ul>
                {size.width > 768 ? (
                    <div className={cx('header__search')}>
                        <input className={cx('header__search__input')} type="text" placeholder="Bạn cần tìm gì" />
                        <SearchOutlined className={cx('header__search__icon')} />
                    </div>
                ) : (
                    <ul className={cx('nav')}>
                        <div className={cx('header__icon__wrapper')}>
                            <LocationIcon className={cx('header__icon')} />
                            <div className={cx('header__icon__text')}>
                                <p className={cx('header__icon__text__title')}>Xem giá tại</p>
                                <p className={cx('header__icon__text__adress')}>Hồ Chí Minh</p>
                            </div>
                        </div>
                    </ul>
                )}
                {size.width > 768 && (
                    <div className={cx('header__service')}>
                        <div className={cx('header__service__icon')}>
                            <CallIcon className={cx('header__icon')} />
                        </div>
                        <div className={cx('header__service__title')}>
                            <p>Gọi mua hàng</p>
                            <br />
                            <p>1800.2097</p>
                        </div>
                    </div>
                )}
                {size.width > 768 && (
                    <div className={cx('header__service')}>
                        <div className={cx('header__service__icon')}>
                            <LocationIcon className={cx('header__icon')} />
                        </div>
                        <div className={cx('header__service__title')}>
                            <div>
                                <p>Cửa hàng</p>
                                <br />
                                <p>gần bạn</p>
                            </div>
                        </div>
                    </div>
                )}
                {size.width > 1024 && (
                    <div className={cx('header__service')}>
                        <div className={cx('header__service__icon')}>
                            <CheckOrderIcon className={cx('header__icon')} />
                        </div>
                        <div className={cx('header__service__title')}>
                            <p>Tra cứu</p>
                            <br />
                            <p>đơn hàng</p>
                        </div>
                    </div>
                )}

                <span className={cx('header__right')}>
                    <div className={cx('header__right__icon__wrapper')} onClick={() => navigate('/cart')}>
                        <div className={cx('header__right__icon')}>
                            <CartIcon className={cx('header__icon')} />
                            <span>{count}</span>
                        </div>
                        <div className={cx('header__right__icon__wrapper__text')}>
                            <p> Giỏ </p>
                            <p>hàng</p>
                        </div>
                    </div>

                    <>
                        {size.width > 768 && (
                            <div>
                                {nameUser ? (
                                    <Popover placement="bottomRight" content={content} style={{ top: '53px' }}>
                                        <div className={cx('header__right__user')}>
                                            <Avatar
                                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                                className={cx('header__right__avatar')}
                                            />
                                            <p>{nameUser?.user?.name}</p>
                                        </div>
                                    </Popover>
                                ) : (
                                    <div className={cx('header__users')} onClick={handleLogin}>
                                        <UserIcon className={cx('header__users__icon')} />
                                        <div className={cx('header__users__title')}>Đăng nhập</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                    <ModalApp />
                </span>
            </div>
        </Header>
    );
};

export default HeaderApp;
