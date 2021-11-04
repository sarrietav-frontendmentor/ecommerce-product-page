import { CartBasketContext } from '@context/cart-basket';
import { useContext } from 'react';

const CartBasket = () => {
  const { shown } = useContext(CartBasketContext);

  return (
    <div className={`${shown ? 'flex' : 'hidden'} items-center justify-center`}>
      <div className="rounded-xl absolute w-[95%] h-72 top-20 z-10 bg-white flex flex-col justify-start shadow-lg">
        <h2 className="font-bold text-lg m-5">Cart</h2>
        <hr className="text-gray-300" />
        <CartEmpty />
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
