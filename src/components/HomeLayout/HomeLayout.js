import { Layout, Menu, Tag, theme } from "antd";

import { Carousel } from "../../pages/Products/components/Carousel";
import "./HomeLayout.scss";
import HeaderApp from "./HeaderApp/HeaderApp";
import FooterApp from "./FooterApp/FooterApp";
import SaleProduct from "../../pages/Products/components/SaleProduct/SaleProduct";

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
  return (
    <Layout className="layout">
      <HeaderApp className="layout-header" />
      
        <div
          style={{
            marginTop: "10px",
            width: '1200px',
            margin: '0 auto'
            
            
          }}
        >
  
          <Carousel />
          <SaleProduct />
          <div className="layout__tag">
            <h2>SẢN PHẨM NỔI BẬT</h2>
            <div className="layout__tag__list">
              {tagList.map((item, i) => (
                <Tag className="layout__tag__item">{item}</Tag>
              ))}
            </div>
          </div>
          <div className="site-layout-content">{children}</div>
        </div>
        <div>
          <FooterApp />
        </div>
    
    </Layout>
  );
};
export default HomeLayout;
