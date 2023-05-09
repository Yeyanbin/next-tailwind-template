
import React, { useState } from 'react';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { IMenuItem } from '@/types/page';
import { layoutState } from '@/contexts/layout';

const MenuItem: React.FC<{ menuItemName: string, route: string }> = ({ menuItemName, route }) => {
  return <a href={route}>{menuItemName}</a>
}

const transMenus = (menu: IMenuItem[]): MenuProps['items'] => {
    return menu.map((item) => {
      if (item.children) {
        return {
          key: item.key,
          label: item.label,
          children: transMenus(item.children)
        }
      }
      return {
        key: item.key,
        label: MenuItem({ menuItemName: item.label || '', route: item.url || '' }),
      };
    })
}

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const {
    menu
  } = layoutState.useState();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} items={transMenus(menu || [])} />;
};

export default App;