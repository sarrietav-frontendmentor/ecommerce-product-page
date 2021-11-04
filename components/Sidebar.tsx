import { MouseEventHandler } from 'react';

const Sidebar = ({ setShown }: { setShown: (shown: boolean) => void }) => {
  return (
    <div
      className="w-full h-full fixed top-0 bg-black bg-opacity-70 z-10"
      onClick={() => setShown(false)}
    >
      <nav className="h-full w-8/12 fixed top-0  bg-white p-6">
        <CloseIcon className="mb-14" onClick={() => setShown(false)} />
        <ul className="list-none space-y-6">
          <li>
            <a href="#" className="font-bold text-xl cursor-pointer">
              Collections
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-xl cursor-pointer">
              Men
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-xl cursor-pointer">
              Women
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-xl cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-xl cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

const CloseIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: MouseEventHandler;
}) => (
  <svg
    width="14"
    height="15"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path
      d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
      fill="#69707D"
      fillRule="evenodd"
    />
  </svg>
);
