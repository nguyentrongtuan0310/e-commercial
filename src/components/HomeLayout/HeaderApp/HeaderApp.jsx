import React, { useState } from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Avatar, Popover } from "antd";

import { Header } from "antd/es/layout/layout";
import {
  CallIcon,
  CartIcon,
  CategoryIcon,
  CheckOrderIcon,
  LocationIcon,
  UserIcon,
} from "../../Icon";
import logo from "../../../img/logo.png";
import useResize from "../../../hooks/useResize";
import ModalApp from "../../ModalApp/ModalApp";
import { useDispatch } from "react-redux";
import { openLogin } from "../../ModalApp/ModalAppSLice";
const cx = classNames.bind(styles);

const headerNav = [
  {
    id: 1,
    name: "Admin",
    link: "/prodcut",
  },
];

const HeaderApp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameUser = JSON.parse(localStorage.getItem("users"));
  const count = JSON.parse(localStorage.getItem("quanity"))?.value || 0;

  const handleLogOut = () => {
    localStorage.removeItem("users");
    navigate("/");
  };
  const handleLogin = () => {
    dispatch(openLogin());
  };
  const content = (
    <div className={cx("header__content__popover")}>
      <p>Tài Khoản Của Tôi</p>
      <p>Đơn Mua</p>
      <p onClick={handleLogOut}>Đăng Xuất</p>
    </div>
  );
  const size = useResize();

  return (
    <Header>
      <div className={cx("header")}>
        <ul className={cx("nav")}>
          {size.width > 768 ? (
            <Link to={"/"} className={cx("nav__logo")}>
              <img src={logo} alt="logo" />
            </Link>
          ) : (
            <Link to={"/"} className={cx("nav__logo")}>
              <img className={cx("nav__logo__img")} alt="logo" />
            </Link>
          )}

          {size.width > 768 && (
            <Link to={"/product"} className={cx("header__icon__wrapper")}>
              <CategoryIcon className={cx("header__icon")} />
              <p>Danh mục</p>
            </Link>
          )}
          {size.width > 768 && (
            <div className={cx("header__icon__wrapper")}>
              <LocationIcon className={cx("header__icon")} />
              <div className={cx("header__icon__text")}>
                <p className={cx("header__icon__text__title")}>Xem giá tại</p>
                <p className={cx("header__icon__text__adress")}>Hồ Chí Minh</p>
              </div>
            </div>
          )}
        </ul>
        <div className={cx("header__search")}>
          <input
            className={cx("header__search__input")}
            type="text"
            placeholder="Bạn cần tìm gì"
          />
          <SearchOutlined className={cx("header__search__icon")} />
        </div>
        {size.width > 768 && (
          <div className={cx("header__service")}>
            <div className={cx("header__service__icon")}>
              <CallIcon className={cx("header__icon")} />
            </div>
            <div className={cx("header__service__title")}>
              <p>
                Gọi mua hàng</p>
                <br />
                <p>1800.2097</p>
              
            </div>
          </div>
        )}

        <div className={cx("header__service")}>
          <div className={cx("header__service__icon")}>
            <LocationIcon className={cx("header__icon")} />
          </div>
          <div className={cx("header__service__title")}>
            <p>
              Cửa hàng
              <p />
              <br />
              gần bạn
            </p>
          </div>
        </div>
        {size.width > 1024 && (
          <div className={cx("header__service")}>
            <div className={cx("header__service__icon")}>
              <CheckOrderIcon className={cx("header__icon")} />
            </div>
            <div className={cx("header__service__title")}>
              <p>
                Tra cứu
                </p>
                <br />
                <p>đơn hàng</p>
              
            </div>
          </div>
        )}

        <span className={cx("header__right")}>
          <div className={cx("header__right__icon__wrapper")}>
            <div
              className={cx("header__right__icon")}
              onClick={() => navigate("/cart")}
            >
              <CartIcon className={cx("header__icon")} />
              <span>{count}</span>
            </div>
            <div className={cx("header__right__icon__wrapper__text")}> 
               <p> Giỏ </p>
              <p>hàng</p>
            </div>
          </div>

          <div>
            {nameUser ? (
              <Popover
                placement="bottomRight"
                content={content}
                style={{ top: "53px" }}
              >
                <div className={cx("header__right__user")}>
                  <Avatar
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                    className={cx("header__right__avatar")}
                  />
                  <p>{nameUser?.user?.name}</p>
                </div>
              </Popover>
            ) : (
              <div className={cx("header__users")} onClick={handleLogin}>
                <UserIcon className={cx("header__users__icon")} />
                <div className={cx("header__users__title")}>Đăng nhập</div>
              </div>
            )}
          </div>
          <ModalApp />
        </span>
      </div>
    </Header>
  );
};

export default HeaderApp;
