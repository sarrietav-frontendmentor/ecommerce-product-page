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
      className="bg-yellow-600 brightness-110 flex justify-center items-center w-full rounded-lg py-4 space-x-3 shadow-xl"
    >
      {children}
    </button>
  );
};
