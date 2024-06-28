// src/Game.jsx
import React, { useState } from "react";
import Square from "./components/Square";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || squares[index]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newSquares));
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setXIsNext(true);
  };

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center mt-10">
      <div
        className={`mb-4 text-2xl font-bold ${
          winner === "O"
            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 animate-bounce"
            : ""
        } ${
          winner === "X"
            ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 animate-bounce"
            : null
        } ${xIsNext ? "text-red-500" : "text-blue-500"}`}
      >
        {status}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button
        className="mt-4 btn btn-outline btn-primary w-full text-xl"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Game;

function calculateWinner(squares) {
  const lines = [
    // Baris
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Kolom
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
