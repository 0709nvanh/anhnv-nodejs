import React from "react";
import { NavLink, Link } from "react-router-dom";
import {MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, Input } from 'antd'
type Props = {
    
};

const Nav = (props: Props) => {
  const handleClick = (e: any) => {
    console.log(e);
  };
const { SubMenu } = Menu;
  return (
    <div>
      <Menu onClick={handleClick} mode="horizontal" style={{}}>
        <Menu.Item key="mail">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <SubMenu key="SubMenu" title="Product">
            <Menu.Item key="setting:1">Chairs & Sofas</Menu.Item>
            <Menu.Item key="setting:2">Chest</Menu.Item>
            <Menu.Item key="setting:3">Loungers</Menu.Item>
            <Menu.Item key="setting:4">Dining Chair</Menu.Item>
            <Menu.Item key="setting:5">Dining Table</Menu.Item>
            <Menu.Item key="setting:6">Loungers</Menu.Item>
            <Menu.Item key="setting:7">Bed</Menu.Item>
        </SubMenu>
        <SubMenu key="SubMenu2" title="Category">
            <Menu.Item key="setting:1">Houseware</Menu.Item>
            <Menu.Item key="setting:2">Outdoor</Menu.Item>
            <Menu.Item key="setting:3">Bed room</Menu.Item>
            <Menu.Item key="setting:4">Home Decor</Menu.Item>
        </SubMenu>
        <Menu.Item key="contact">
          Contact Us
        </Menu.Item>
        <Menu.Item key="blog">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item>
          <Input style={{ width: 500}} placeholder="Search..." />
        </Menu.Item>
        <Menu.Item key="signin">
          <Link to="/signin">Sign in</Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link to="/signup">Sign up</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
