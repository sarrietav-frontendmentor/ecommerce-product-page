import { useContext } from 'react';

import { GlobalStateContext } from '@/context/reducer';
import { PrimaryButton } from '@/components/PrimaryButton';
import { BasketItem } from './BasketItem';

export const CartBasket = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-xl absolute w-[95%] lg:w-1/4 h-72 top-20 lg:right-10 z-10 bg-white flex flex-col justify-start shadow-xl">
        <h2 className="font-bold text-lg m-5">Cart</h2>
        <hr className="text-gray-300" />
        <div className="p-5 flex flex-col flex-grow last:justify-self-end space-y-3">
          {state.items.length !== 0 ? (
            <>
              <div className="h-28 overflow-scroll overflow-x-hidden space-y-5">
                {state.items.map((item) => (
                  <BasketItem item={item} key={item.id} dispatch={dispatch} />
                ))}
              </div>
              <div className="mt-auto">
                <PrimaryButton onClick={() => dispatch({ type: 'Checkout' })}>
                  <span className="text-white font-bold">Checkout</span>
                </PrimaryButton>
              </div>
            </>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </div>
  );
};

const CartEmpty = () => (
  <div className="flex-grow flex flex-col justify-center items-center">
    <p className="font-bold text-gray-500">Your cart is empty.</p>
  </div>
);
