
import { userState } from '@/contexts/user';

import LoginPage from '@/views/login/index';
import React from 'react';
import ref from '@/hooks/ref';
import { IBasePageProps } from '@/types/page';
import getMenu from '@/apis/getMenu';

interface IProps {
  isLogin?: false;
  user?: string;
}

const Login: React.FC<IProps> = (prop) => {
  const user = ref(prop.user || '')
  const isLogin = ref(prop.isLogin || false)

  return userState.withState(LoginPage, {}, {
    user,
    isLogin
  });
}

export async function getServerSideProps({ req, res }: any) {
  const { token } = req.cookies;

  const menu = await getMenu(req, res);
  const pageProps: IBasePageProps = {
    menu: menu,
    user: '测试',
    hasHeader: true,
    hasMenu: false,
  };

  if (!token) {
    // 如果用户未登录，则返回空的菜单和 isAuthenticated=false
    return {
      props: {
        isLogin: false,
        user: 'default',
        ...pageProps,
      },
    };
  }

  // 验证用户身份
  // 获取菜单
  // ...

  // 返回 isAuthenticated=true 和菜单数据
  return {
    props: {
      isAuthenticated: true,
      menu: [
        { id: 1, title: 'Home' },
        { id: 2, title: 'About' },
        { id: 3, title: 'Contact' },
      ],
    },
  };
}

export default Login;
