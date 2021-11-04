import React from 'react';

export const PrimaryButton = ({ children }: { children: React.ReactNode; }) => {
  return (
    <button className="bg-yellow-600 brightness-110 flex justify-center items-center w-full rounded-lg py-4 space-x-3 my-4 shadow-xl">
      {children}
    </button>
  );
};
