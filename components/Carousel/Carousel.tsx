import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';

interface ImageLinkedListNode {
  before: number;
  src: string;
  thumbnailSrc: string;
  after: number;
}

export const Carousel = () => {
  const imageLinkedList: ImageLinkedListNode[] = [
    {
      before: 3,
      src: '/image-product-1.jpg',
      thumbnailSrc: '/image-product-1-thumbnail.jpg',
      after: 1,
    },
    {
      before: 0,
      src: '/image-product-2.jpg',
      thumbnailSrc: '/image-product-2-thumbnail.jpg',
      after: 2,
    },
    {
      before: 1,
      src: '/image-product-3.jpg',
      thumbnailSrc: '/image-product-3-thumbnail.jpg',
      after: 3,
    },
    {
      before: 2,
      src: '/image-product-4.jpg',
      thumbnailSrc: '/image-product-4-thumbnail.jpg',
      after: 0,
    },
  ];

  const [currentImage, setCurrentImage] = useState(imageLinkedList[0]);

  return (
    <div className="flex flex-col space-y-7">
      <div className="relative w-full h-96">
        <Image
          src={currentImage.src}
          alt="Shoes"
          layout="fill"
          objectFit="cover"
          priority
          className="lg:rounded-xl"
          data-testid="main-image"
        />
        <div className="lg:hidden absolute top-2/4 left-4 bg-white h-10 w-10 rounded-full flex justify-center items-center">
          <PreviousIcon
            onClick={() =>
              setCurrentImage(imageLinkedList[currentImage.before])
            }
          />
        </div>
        <div className="lg:hidden absolute top-2/4 right-4 bg-white h-10 w-10 rounded-full flex justify-center items-center">
          <NextIcon
            onClick={() => setCurrentImage(imageLinkedList[currentImage.after])}
          />
        </div>
      </div>
      <div className="hidden lg:flex space-x-6">
        {imageLinkedList.map((image, index) => (
          <CarouselThumbnail
            key={index}
            image={image}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </div>
  );
};

const PreviousIcon = ({ onClick }: { onClick?: MouseEventHandler }) => (
  <svg
    width="12"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="back-icon"
    onClick={onClick}
  >
    <path
      d="M11 1 3 9l8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const NextIcon = ({ onClick }: { onClick?: MouseEventHandler }) => (
  <svg
    width="13"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    data-testid="next-icon"
  >
    <path
      d="m2 1 8 8-8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const CarouselThumbnail = ({
  image,
  currentImage,
  setCurrentImage,
}: {
  image: ImageLinkedListNode;
  currentImage: ImageLinkedListNode;
  setCurrentImage: (image: ImageLinkedListNode) => void;
}): JSX.Element => (
  <div
    onClick={() => setCurrentImage(image)}
    className={`group w-20 h-20 relative rounded-xl cursor-pointer ${
      image.src === currentImage.src &&
      'border-4 border-yellow-600 border-solid'
    }`}
  >
    <div
      className={`group-hover:w-full group-hover:h-full bg-white z-10 absolute bg-opacity-60 rounded-lg ${
        image.src === currentImage.src && 'w-full h-full'
      }`}
    ></div>

    <Image
      src={image.thumbnailSrc}
      layout="fill"
      objectFit="cover"
      alt="Shoes"
      className="rounded-lg"
      data-testid="image-thumbnail"
    />
  </div>
);
