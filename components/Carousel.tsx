import Image from 'next/image';

const PreviousIcon = () => (
  <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 1 3 9l8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const NextIcon = () => (
  <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m2 1 8 8-8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const Carousel = () => (
  <div className="relative w-full h-80">
    <Image
      src="/image-product-1.jpg"
      alt="Shoes"
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute top-2/4 left-4 bg-white h-10 w-10 rounded-full flex justify-center items-center">
      <PreviousIcon />
    </div>
    <div className="absolute top-2/4 right-4 bg-white h-10 w-10 rounded-full flex justify-center items-center">
      <NextIcon />
    </div>
  </div>
);

export default Carousel;
