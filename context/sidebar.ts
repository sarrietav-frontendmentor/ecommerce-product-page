import { createContext } from 'react';

export const SidebarContext = createContext({
  shown: false,
  setShown: (show: boolean) => {},
});
