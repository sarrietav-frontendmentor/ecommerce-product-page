import { NextPage } from 'next';
import Head from 'next/head';
import { v4 } from 'uuid';

import { GlobalStateContext, storeReducer } from '@/context/reducer';

import { Navbar } from '@/components/Navbar/Navbar';
import { Carousel } from '@/components/Carousel/Carousel';
import { ItemCounter } from '@/components/ItemCounter/ItemCounter';
import { CartIcon } from '@/components/CartIcon';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { useReducer, useState } from 'react';
import { PrimaryButton } from '@/components/PrimaryButton';
import { CartBasket } from '@/components/CartBasket/CartBasket';

const Home: NextPage = () => {
  const [sideBarShown, showSidebar] = useState(false);
  const [cartBasketShown, showCartBasket] = useState(false);

  const [state, dispatch] = useReducer(storeReducer, {
    items: [],
    currentCount: 0,
  });

  const CartBasketOverlay = () => (
    <div
      className="fixed h-screen w-screen"
      onClick={() => {
        if (cartBasketShown) showCartBasket(false);
      }}
    ></div>
  );

  const handleAddToCart = () => {
    if (state.currentCount > 0)
      dispatch({
        type: 'Insert',
        payload: {
          id: v4(),
          image: '/image-product-1.jpg',
          name: 'Autumn Limited Edition Sneakers',
          price: 125.0,
          quantity: state.currentCount,
        },
      });
  };

  const NavbarFragment = () => (
    <>
      {cartBasketShown && <CartBasketOverlay />}
      {sideBarShown && <Sidebar setShown={showSidebar} />}
      {cartBasketShown && <CartBasket />}
      <Navbar
        cartBasketShown={cartBasketShown}
        showSidebar={showSidebar}
        showCartBasket={showCartBasket}
      />
    </>
  );

  return (
    <div className="font-kumbh mb-7 relative lg:h-screen lg:mb-0 lg:flex flex-col lg:divide-y">
      <Head>
        <title>E-Commerce Product Page</title>
        <meta name="description" content="Webapp challenge by Frontend Mentor" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="E-Commerce Product Page" />
        <meta property="og:image" content="https://raw.githubusercontent.com/sarrietav-frontendmentor/ecommerce-product-page/main/desktop-preview.jpg" />
        <meta property="og:description" content="https://raw.githubusercontent.com/sarrietav-frontendmentor/ecommerce-product-page/main/desktop-preview.jpg" />
        <meta property="og:url" content="https://ecommerce-product-page-nine.vercel.app/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStateContext.Provider value={{ state, dispatch }}>
        <NavbarFragment />
        <main className="lg:flex items-center lg:px-44 flex-grow lg:space-x-28">
          <Carousel />
          <div className="p-6">
            <ProductDescription />
            <ProductPrices />
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-5">
              <div className="lg:w-36">
                <ItemCounter />
              </div>
              <div className="my-4 flex-grow">
                <PrimaryButton onClick={handleAddToCart}>
                  <CartIcon fillColor="white" />
                  <span className="font-bold text-white tracking-wide">
                    Add to cart
                  </span>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </main>
      </GlobalStateContext.Provider>
    </div>
  );
};

export default Home;

const ProductDescription = () => (
  <div className="space-y-3">
    <h2 className="uppercase font-bold text-yellow-600 tracking-widest text-sm">
      Sneaker Company
    </h2>
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 lg:mb-8">
        Fall Limited Edition Sneakers
      </h1>
    </div>
    <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they&apos;ll withstand everything
      the weather can offer.
    </p>
  </div>
);

const ProductPrices = () => (
  <div className="flex lg:flex-col lg:justify-start items-center lg:items-start my-5">
    <div className="flex">
      <span className="text-2xl font-bold text-gray-800">$125.00</span>
      <span className="bg-yellow-500 bg-opacity-25 text-yellow-600 font-bold flex items-center self-center rounded px-2 ml-5">
        50%
      </span>
    </div>
    <span className="font-bold text-gray-300 ml-auto lg:m-0 line-through">
      $250.00
    </span>
  </div>
);
