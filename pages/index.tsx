import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Carousel from '@components/Carousel';
import ItemCounter from '@components/ItemCounter';
import { CartIcon } from '@components/CartIcon';
import Sidebar from '@components/Sidebar';
import { SidebarContext } from '@context/sidebar';
import { useState } from 'react';

const Home: NextPage = () => {
  const [sideBarShown, showSidebar] = useState(false);

  return (
    <div className="font-kumbh mb-7">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
      <SidebarContext.Provider
        value={{ shown: sideBarShown, setShown: showSidebar }}
      >
        <Navbar />
        <Sidebar />
      </SidebarContext.Provider>
      <main>
        <Carousel />
        <div className="p-6">
          <div className="space-y-3">
            <h2 className="uppercase font-bold text-yellow-600 tracking-widest text-sm">
              Sneaker Company
            </h2>
            <h1 className="text-3xl font-bold text-gray-800">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they&apos;ll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="flex items-center my-5">
            <span className="text-2xl font-bold text-gray-800">$125.00</span>
            <span className="bg-yellow-500 bg-opacity-25 text-yellow-600 font-bold flex items-center self-center rounded px-2 ml-5">
              50%
            </span>
            <span className="font-bold text-gray-300 ml-auto">$250.00</span>
          </div>
          <ItemCounter />
          <button className="bg-yellow-600 brightness-110 flex justify-center items-center w-full rounded-lg py-4 space-x-3 my-4 shadow-xl">
            <CartIcon fillColor="white" />
            <span className="font-bold text-white tracking-wide">
              Add to cart
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
