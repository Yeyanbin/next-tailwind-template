import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout';
import { IBasePageProps } from '@/types/page';
import axios from 'axios';

export default function App({ Component, pageProps }: AppProps) {
  // const menuList = [];
  return <Layout {...pageProps}>
    <Component {...pageProps} />
  </Layout>
}

