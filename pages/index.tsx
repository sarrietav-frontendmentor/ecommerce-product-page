import { NextPage } from 'next';
import Navbar from '@components/Navbar';
import Carousel from '@components/Carousel';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
};

export default Home;
