import React, { useState } from "react";
import Board from "./components/Board";
import "./styles/root.scss";
import { calculateWinner } from "./helpers";

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [isXNext, setISXNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `winner is ${winner}`
    : `Next player is 
  ${isXNext ? "X" : "O"}`;
  const handldeSquare = (position) => {
    if (board[position] || winner) return;
    setboard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }
        return square;
      });
    });

    setISXNext((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>TIC-TAC-TOE</h1>
      <h2> {message} </h2>
      <Board board={board} handldeSquare={handldeSquare} />
    </div>
  );
};

export default App;
