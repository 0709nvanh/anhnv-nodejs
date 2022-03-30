import React from "react";
import { NavLink, Link } from "react-router-dom";
import {MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, Input, Button } from 'antd'
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
        <Menu.Item key="product ">
          <NavLink to="/product">Product</NavLink>
        </Menu.Item>
        <SubMenu key="SubMenu2" title="Category">
            <Menu.Item key="setting:1">Houseware</Menu.Item>
            <Menu.Item key="setting:2">Outdoor</Menu.Item>
            <Menu.Item key="setting:3">Bed room</Menu.Item>
            <Menu.Item key="setting:4">Home Decor</Menu.Item>
        </SubMenu>
        <Menu.Item key="blog">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Group compact>
            <Input style={{ width: 300 }} placeholder="Search..." />
            <Button type="primary">Search</Button>
          </Input.Group>
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
