/* eslint-disable react-hooks/rules-of-hooks */
import { IRef } from '@/hooks/ref';
import useEasyState from '@/hooks/useEasyState';
import { IMenuItem } from '@/types/page';
import { ThemeConfig, theme } from 'antd';

export interface ILayoutState {
  theme?: ThemeConfig,
  headerStyle?: React.CSSProperties;
  SiderStyle?: React.CSSProperties;
  hasMenu?: IRef<boolean>;
  hasHeader?: IRef<boolean>;
  menu?: IMenuItem[];
}

const themeData: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#cb00b0",
    colorTextBase: "#ac457d",
    colorBgBase: "#e8e9ff",
    borderRadius: 5,
  },
};
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: themeData.token?.colorPrimary + '33',
};

const SiderStyle: React.CSSProperties = {
  backgroundColor: themeData.token?.colorPrimary + '33',
};


export const layoutState = useEasyState<ILayoutState>({
  theme: themeData,
  headerStyle,
  SiderStyle
});


