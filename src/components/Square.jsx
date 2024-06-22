// src/components/Square.jsx
import React from 'react';
import clsx from 'clsx';

const Square = ({ value, onClick }) => {
  return (
    <button
      className={clsx(
        'w-16 h-16 m-1 bg-gray-200 text-3xl font-bold',
        value === 'X' && 'text-red-500',
        value === 'O' && 'text-blue-500',
      )}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
