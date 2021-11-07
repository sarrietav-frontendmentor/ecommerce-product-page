import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';

interface ImageLinkedListNode {
  before: number;
  src: string;
  after: number;
}

export const Carousel = () => {
  const imageLinkedList: ImageLinkedListNode[] = [
    { before: 3, src: '/image-product-1.jpg', after: 1 },
    { before: 0, src: '/image-product-2.jpg', after: 2 },
    { before: 1, src: '/image-product-3.jpg', after: 3 },
    { before: 2, src: '/image-product-4.jpg', after: 0 },
  ];

  const [currentImage, setCurrentImage] = useState(imageLinkedList[0]);

  return (
    <div className="relative w-full h-80">
      <Image
        src={currentImage.src}
        alt="Shoes"
        layout="fill"
        objectFit="cover"
        priority
        className="lg:rounded-xl"
      />
      <div className="absolute top-2/4 left-4 bg-white h-10 w-10 rounded-full flex justify-center items-center">
        <PreviousIcon
          onClick={() => setCurrentImage(imageLinkedList[currentImage.before])}
        />
      </div>
      <div className="absolute top-2/4 right-4 bg-white h-10 w-10 rounded-full flex justify-center items-center">
        <NextIcon
          onClick={() => setCurrentImage(imageLinkedList[currentImage.after])}
        />
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
