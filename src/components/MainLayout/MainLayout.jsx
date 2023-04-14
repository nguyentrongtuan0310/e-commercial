import "./admin.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import React, { useState } from "react";
import LeftMenu from "../../pages/Admin/components/LeftLayout/LeftMenu";
import HeaderApp from "../HomeLayout/HeaderApp/HeaderApp";
import useResize from "../../hooks/useResize";
import FooterApp from "../HomeLayout/FooterApp/FooterApp";
import MenuBottom from "../HomeLayout/MenuBottom/MenuBottom";
const { Header, Sider, Content } = Layout;
const MainLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
const size = useResize()

  return (
    <div className="wrapper__main"  >
      <Layout    
      >
        <Layout className="site-layout">
          <HeaderApp
            
          />
 
          <Content
            
          >
            {children}
          </Content>
          {size.width > 567 ? <FooterApp />  : <MenuBottom />}
        </Layout>
      </Layout>
    </div>
  );
};
export default MainLayout;
