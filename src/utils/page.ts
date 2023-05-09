import getMenu from "@/apis/getMenu";
import { IBasePageProps } from "@/types/page";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface IPageConfig {
  hasHeader?: boolean;
  hasMenu?: boolean;
}

export const initPage = (getServerSideProps: GetServerSideProps, config: IPageConfig = {}) => {

  return async (context: GetServerSidePropsContext) => {
    const data = await getServerSideProps(context) as any;

    const pageProps: IBasePageProps = {
      ...config,
    };

    // check login, or direction

    if (config.hasMenu) {
      const menu = await getMenu(context.req, context.res);
      pageProps.menu = menu; 
    }
    data.props = {
      ...data.props,
      ...pageProps
    }

    return data;
  };
}

