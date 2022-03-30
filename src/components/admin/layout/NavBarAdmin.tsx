import React from "react";
import { NavLink, Link } from "react-router-dom";
import {MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from 'antd'
type Props = {
    
};

const NavAdmin = (props: Props) => {
  const handleClick = (e: any) => {
    console.log(e);
  };
const { SubMenu } = Menu;
  return (
    <div>
      <Menu onClick={handleClick} mode="horizontal" style={{}}>
        <Menu.Item key="dashboard">
          <Link to="/admin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="products">
        <Link to="/admin/product">Product</Link>
        </Menu.Item>
        <Menu.Item key="category">
          <Link to="/admin/category">Category</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavAdmin;
