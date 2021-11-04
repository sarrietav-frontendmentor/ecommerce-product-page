import { createContext } from 'react';

export const CartBasketContext = createContext({
  shown: false,
  setShown: (show: boolean) => {},
});
