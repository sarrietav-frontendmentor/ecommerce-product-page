import Image from 'next/image';
import { Dispatch, MouseEventHandler, useContext } from 'react';

import { Action, CartItem } from 'types/reducer';
import { GlobalStateContext } from '@/context/reducer';
import { PrimaryButton } from '@/components/PrimaryButton';

export const CartBasket = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-xl absolute w-[95%] h-72 top-20 z-10 bg-white flex flex-col justify-start shadow-lg">
        <h2 className="font-bold text-lg m-5">Cart</h2>
        <hr className="text-gray-300" />
        <div className="p-5 flex flex-col flex-grow last:justify-self-end">
          {state.items.length !== 0 ? (
            <>
              <div className="max-h-28 overflow-scroll space-y-5">
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

const BasketItem = ({
  item,
  dispatch,
}: {
  item: CartItem;
  dispatch: Dispatch<Action>;
}) => (
  <div className="flex items-center">
    <Image
      src={item.image}
      className="rounded-md"
      height={50}
      width={50}
      alt="Product image"
    />
    <div className="flex flex-col w-48 ml-4">
      <p className="truncate">{item.name}</p>
      <p className="tracking-wider">
        ${item.price.toFixed(2)} x {item.quantity}{' '}
        <span className="font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </p>
    </div>
    <TrashIcon
      className="ml-auto"
      onClick={() => dispatch({ type: 'Delete', payload: item.id })}
    />
  </div>
);

const TrashIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: MouseEventHandler;
}) => (
  <svg
    width="14"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
    onClick={onClick}
  >
    <defs>
      <path
        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
        id="a"
      />
    </defs>
    <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
  </svg>
);

const CartEmpty = () => (
  <div className="flex-grow flex flex-col justify-center items-center">
    <p className="font-bold text-gray-500">Your cart is empty.</p>
  </div>
);