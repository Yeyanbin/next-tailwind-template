

export interface IMenuItem {
  key: string;
  label?: string;
  url?: string;
  children?: IMenuItem[];
}

export interface IBasePageProps {
  menu?: IMenuItem[];
  user?: string;
  hasMenu?: boolean;
  hasHeader?: boolean;
}