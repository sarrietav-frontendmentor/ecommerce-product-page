import React, { MouseEventHandler } from 'react';

export const PrimaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-600 hover:bg-yellow-500 brightness-110  flex justify-center items-center w-full rounded-lg py-5 space-x-3 shadow-xl"
    >
      {children}
    </button>
  );
};
