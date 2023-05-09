
import React from 'react';
import Menu from './menu';
import { ConfigProvider, Layout, Button } from 'antd';

import { layoutState } from '@/contexts/layout';
import ref from '@/hooks/ref';
import { IBasePageProps } from '@/types/page';

interface IProp {
  children: any;
}

const { Sider, Header } = Layout;

const App: React.FC<IBasePageProps & IProp> = (props) => {

  const {
    hasHeader,
    hasMenu,
    menu,
  } = props;
  console.log('in Layout loading...')
  return layoutState.withState(layout, props, {
    hasMenu: ref(hasMenu ?? true),
    hasHeader: ref(hasHeader ?? true),
    menu,
  });
};

const layout: React.FC<IBasePageProps & IProp> = (props) => {
  const {
    children
  } = props;
  const {
    theme,
  } = layoutState.useState();


  return <ConfigProvider
    theme={theme}>
  <Layout style={{height: '100vh', width: '100vw'}}>
    <HeaderComponent></HeaderComponent>
    <Layout hasSider>
      <SiderComponent></SiderComponent>
      {children}
    </Layout>
  </Layout>
</ConfigProvider>
}

const HeaderComponent = () => {
  const {
    headerStyle,
    hasHeader,
  } = layoutState.useState();
  if (!hasHeader?.value) {
    return <></>
  }
  return <Header style={headerStyle}>
  <div className="flex gap-4 m-2 items-center">
  this is Header
  </div>
</Header>
}

const SiderComponent = () => {
  const {
    SiderStyle,
    hasMenu,
  } = layoutState.useState();
  if (!hasMenu?.value) {
    return <></>
  }
  return <Sider style={SiderStyle}>
  <Menu></Menu>
</Sider>
}

export default App;
