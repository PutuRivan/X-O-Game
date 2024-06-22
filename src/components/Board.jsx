import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
    <div className="flex flex-wrap w-64">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
