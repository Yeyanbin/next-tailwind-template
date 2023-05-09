

import { IBasePageProps } from '@/types/page';
import HomePage from '@/views/home/index';
import React from 'react';
import { initPage } from '@/utils/page';

interface IProps {
  messageList: string[];
}

const Home: React.FC<IBasePageProps & IProps> = (props) => {
  console.log('home pageProps', props);

  return HomePage(props);
}

export const getServerSideProps = initPage(async ({ req, res }: any) => {

  return {
    props: {
      messageList: ['1. aaaa', '2. bbbbb'],
    }
  }
}, {
  hasHeader: true,
  hasMenu: true,
})

export default Home;
