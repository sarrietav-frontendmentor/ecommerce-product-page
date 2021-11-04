import { GlobalStateContext } from '@context/reducer';
import { MouseEventHandler, useContext } from 'react';

const ItemCounter = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const handleMinusClick = () => {
    if (state.currentCount - 1 < 0) return;
    dispatch({ type: 'DecrementCount' });
  };

  return (
    <div className="w-full flex justify-between items-center p-4 bg-red-300 bg-opacity-10 rounded-xl">
      <MinusIcon onClick={handleMinusClick} />
      <span className="font-bold">{state.currentCount}</span>
      <PlusIcon onClick={() => dispatch({ type: 'IncrementCount' })} />
    </div>
  );
};

export default ItemCounter;

const MinusIcon = ({ onClick }: { onClick?: MouseEventHandler }) => (
  <svg
    width="12"
    height="4"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    <defs>
      <path
        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
        id="a"
      />
    </defs>
    <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
  </svg>
);

const PlusIcon = ({ onClick }: { onClick?: MouseEventHandler }) => (
  <svg
    width="12"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    <defs>
      <path
        d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
        id="b"
      />
    </defs>
    <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
  </svg>
);
