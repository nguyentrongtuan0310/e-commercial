import React from "react";
import { BarsOutlined, HomeOutlined,  UserOutlined } from "@ant-design/icons";
import {  Menu  } from "antd";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
    
    >

          <Menu.Item key="1">
          
            <HomeOutlined />
              <span>Home</span>
              <Link to={'home'} />
            </Menu.Item>  
            <Menu.Item key="2">
             
            <BarsOutlined />
              <span>List Product</span>
              <Link to={'product'} />
           </Menu.Item>
            <Menu.Item key="3">
             
            <UserOutlined />
              <span>List User</span>
              <Link to={'user'} />
           </Menu.Item>
      
    </Menu>
  );
};

export default LeftMenu;
