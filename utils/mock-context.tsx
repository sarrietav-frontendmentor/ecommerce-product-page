import { GlobalStateContext, storeReducer } from '@/context/reducer';
import { ReactNode, useReducer } from 'react';

export const MockContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, {
    items: [],
    currentCount: 0,
  });

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
