/* eslint-disable react-hooks/rules-of-hooks */
import useEasyState from '@/hooks/useEasyState';
import { IRef } from '@/hooks/ref';

export interface IUserState {
  user?: IRef<string>;
  isLogin?: IRef<boolean>;
}

export const userState = useEasyState<IUserState>({
  user: undefined,
  isLogin: undefined
});


