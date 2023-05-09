import type { IMenuItem } from '@/types/page';
import { IncomingMessage, ServerResponse } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

const getBaseMenu = (businessPages: IMenuItem[]): IMenuItem[] => [
  {
    key: 'home',
    label: '首页',
    url: '/home'
  },
  {
    label: '业务页',
    key: 'businessPages',
    children: businessPages,
  },
  {
    label: '其他页',
    key: 'other',
    children: [
      {
        key: 'index',
        label: '主页',
        url: '/'
      },
      {
        key: '404',
        label: '404页',
        url: '/notFound'
      },
    ]
  },
  {
    key: 'settings',
    label: '设置',
    url: '/settings'
  },
];

const defaultBusinessPages: IMenuItem[] = [
  {
    label: '登录页', 
    url: '/login',
    key: 'login'
  }
];

const getPagesByToken = async (token: string) => {
  return Promise.resolve<IMenuItem[]>([
    {
      label: '业务AAA',
      url: '/testA',
      key: 'testA'
    }
  ]);
}

const getBusinessPages = async (token: string = '') => {
  const pages = defaultBusinessPages;

  if (token) {
    pages.push(...await getPagesByToken(token));
  }

  return pages;
}

type Data = {
  menu: IMenuItem[];
}

export default async function handler(
  req: IncomingMessage  & {
    cookies: NextApiRequestCookies
  },
  res: ServerResponse<IncomingMessage>
) {
  const { token } = req.cookies;

  return getBaseMenu(await getBusinessPages(token));
}
