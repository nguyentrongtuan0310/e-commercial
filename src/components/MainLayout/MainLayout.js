import "./admin.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import React, { useState } from "react";
import LeftMenu from "../../pages/Admin/components/LeftLayout/LeftMenu";
import HeaderApp from "../HomeLayout/HeaderApp/HeaderApp";
const { Header, Sider, Content } = Layout;
const MainLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="wrapper"  >
      <Layout    
      >
    
        <Layout className="site-layout">
          <HeaderApp
            
          />
 
          <Content
            
          >
            {children}
          </Content>
  
        </Layout>
      </Layout>
    </div>
  );
};
export default MainLayout;
