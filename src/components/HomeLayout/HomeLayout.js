import { Layout, Menu, Tag, theme } from "antd";

import { Carousel } from "../../pages/Products/components/Carousel";
import "./HomeLayout.scss";
import HeaderApp from "./HeaderApp/HeaderApp";
import FooterApp from "./FooterApp/FooterApp";
import SaleProduct from "../../pages/Products/components/SaleProduct/SaleProduct";
import MenuBottom from "./MenuBottom/MenuBottom";
import useResize from "../../hooks/useResize";
import { useSelector } from "react-redux";

const { Content, Footer } = Layout;

const HomeLayout = ({ children }) => {

  const tagList = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "OPPO",
    "VIVO",
    "Realme",
    "Nokia",
    "ASUS",
    "Tecno",
    "Xem tất cả",
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const size = useResize()

  return (
    <Layout className="layout">
      <HeaderApp className="layout-header" />
      
        <div
         className="layout__content"
        >
  
          <Carousel />
          <SaleProduct />
          <div className="layout__tag">
            <h2>SẢN PHẨM NỔI BẬT</h2>
            <div className="layout__tag__list">
              {tagList.map((item, i) => (
                <Tag className="layout__tag__item" key={i}>{item}</Tag>
              ))}
            </div>
          </div>
          <div className="site-layout-content">{children}</div>
        </div>
        <div>
          {size.width > 768 ?  <FooterApp /> :  <MenuBottom />}
         
         
        </div>
    
    </Layout>
  );
};
export default HomeLayout;
