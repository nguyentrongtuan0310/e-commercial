import React from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Avatar, Badge, Popover } from "antd";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";
import { Header } from "antd/es/layout/layout";
import { CallIcon, CartIcon, CategoryIcon, CheckOrderIcon, LocationIcon } from "../../Icon";

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
  const count = useSelector((state) => state.cart.listCart.totalItem);
  const nameUser = JSON.parse(localStorage.getItem('users'))
  
  const handleLogOut = () => {
    localStorage.removeItem("users");
    navigate('/')

  };
  const content = (
    <div className={cx("header__content__popover")}>
      <p>Tài Khoản Của Tôi</p>
      <p>Đơn Mua</p>
      <p onClick={handleLogOut}>Đăng Xuất</p>
    </div>
  );
  return (
    <Header>
      <div className={cx("header")}>
        <ul className={cx("nav")}>
          <Link to={"/home"} className={cx("nav__logo")}>
            <img src={logo} alt="logo" />
          </Link>
        
          <Link to={"/product"} className={cx("header__icon__wrapper")}>
            <CategoryIcon className={cx("header__icon")} />
            <p>Danh mục</p>
          </Link>
          <div className={cx("header__icon__wrapper")}>
            <LocationIcon className={cx("header__icon")} />
            <p className={cx("header__icon__text")}>
              <p className={cx("header__icon__text__title")}>Xem giá tại</p>
              <p className={cx("header__icon__text__adress")}>Hồ Chí Minh</p>
            </p>
          </div>
        </ul>
        <div className={cx("header__search")}>
          <input
            className={cx("header__search__input")}
            type="text"
            placeholder="Bạn cần tìm gì"
          />
          <SearchOutlined className={cx("header__search__icon")} />
        </div>
        <div className={cx("header__service")}>
            <div className={cx("header__service__icon")}><CallIcon className={cx("header__icon")} /></div>
              <div className={cx('header__service__title')}>
                 <p>
                    Gọi mua hàng
                    <br />
                    1800.2097
                  </p> 
                
              </div>
          </div>
        <div className={cx("header__service")}>
            <div className={cx("header__service__icon")}><LocationIcon className={cx("header__icon")} /></div>
              <div className={cx('header__service__title')}>
                 <p>
                    Cửa hàng
                    <br />
                    gần bạn
                  </p> 
                
              </div>
          </div>
        <div className={cx("header__service")}>
            <div className={cx("header__service__icon")}><CheckOrderIcon className={cx("header__icon")} /></div>
              <div className={cx('header__service__title')}>
                 <p>
                    Tra cứu 
                    <br />
                    đơn hàng
                  </p> 
                
              </div>
          </div>
        <span className={cx("header__right")}>
         
            <div className={cx("header__right__icon")}  onClick={() => navigate("/cart")}>
              <CartIcon className={cx("header__icon")} />
               <span >{count}</span>
            </div>
          
        

          <Popover
            placement="bottomRight"
            content={content}
            style={{ top: "53px" }}
          >
            <div>
              <Avatar
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                className={cx("header__right__avatar")}
              />
              <p>{nameUser?.user?.name}</p>
            </div>
          </Popover>
        </span>
      </div>
    </Header>
  );
};

export default HeaderApp;
