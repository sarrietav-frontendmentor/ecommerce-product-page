import { createContext, Dispatch } from 'react';
import { Action, CartItem, RootState } from 'types/reducer';

export const storeReducer = (state: RootState, action: Action): RootState => {
  switch (action.type) {
    case 'Insert':
      if (
        typeof action.payload === 'undefined' ||
        typeof action.payload === 'number'
      )
        throw new Error('Must be a CartItem');
      return {
        currentCount: 0,
        items: insertItem(state.items, action.payload),
      };
    case 'Delete':
      if (typeof action.payload !== 'number')
        throw new Error('Must be a number');
      return { ...state, items: deleteItem(state.items, action.payload) };
    case 'Checkout':
      return { ...state, items: [] };
    case 'IncrementCount':
      return { ...state, currentCount: state.currentCount + 1 };
    case 'DecrementCount':
      return { ...state, currentCount: state.currentCount - 1 };
    default:
      throw new Error();
  }
};

export const GlobalStateContext = createContext<{
  state: RootState;
  dispatch: Dispatch<Action>;
}>({ state: { currentCount: 0, items: [] }, dispatch: () => {} });

const insertItem = (state: CartItem[], payload: CartItem) => {
  // Set new CartItem.id to the last index of the array.
  payload.id = state.length;
  return [...state, payload];
};

const deleteItem = (state: CartItem[], payload: number) =>
  state.filter((item) => item.id !== payload);
