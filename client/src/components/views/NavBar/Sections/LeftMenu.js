import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


function LeftMenu(props) {
  return (
    
    <Menu mode={props.mode}>
    <Menu.Item key="mail" style={{ backgroundColor: '#282c34' }}>
     <a href="/" style={{ color:'white'  }}><b>Home</b></a>
    </Menu.Item>
    
  </Menu>

  )
}

export default LeftMenu