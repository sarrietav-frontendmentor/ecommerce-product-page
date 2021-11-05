import Image from 'next/image';
import { GlobalStateContext } from '@context/reducer';
import { useContext } from 'react';
import { CartItem } from 'types/reducer';

const CartBasket = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const { items } = state;

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-xl absolute w-[95%] h-72 top-20 z-10 bg-white flex flex-col justify-start shadow-lg">
        <h2 className="font-bold text-lg m-5">Cart</h2>
        <hr className="text-gray-300" />
        <div className="p-5 flex flex-col flex-grow">
          {items.length !== 0 ? (
            <>
              {items.map((item) => (
                <BasketItem item={item} key={item.id} />
              ))}
            </>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartBasket;

const CartEmpty = () => (
  <div className="flex-grow flex flex-col justify-center items-center">
    <p className="font-bold text-gray-500">Your cart is empty.</p>
  </div>
);

const BasketItem = ({ item }: { item: CartItem }) => (
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
    <TrashIcon className="ml-auto" />
  </div>
);

const TrashIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
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
