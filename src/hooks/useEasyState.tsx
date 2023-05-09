
import React, { createContext, useContext } from 'react';


function createState<IState>(defaultValue: IState) {

  const Context = createContext<IState>(defaultValue);

  const withState = (Component: React.FC<any>, prop: any, value: IState | undefined = undefined) => {
    return <Context.Provider value={{
      ...defaultValue,
      ...value
    }}><Component { ...prop }></Component></Context.Provider>
  }

  const useState = () => useContext(Context);

  return {
    withState,
    useState
  };
}

export default createState;
