import React, { useState } from "react";
import History from "./components/History";
import Board from "./components/Board";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss";
import { calculateWinner } from "./helpers";

const App = () => {
  const [history, sethistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, SetCurrentMove] = useState(0);
  const current = history[currentMove];
  const [isXNext, setISXNext] = useState(false);
  const winner = calculateWinner(current.board);

  const handldeSquare = (position) => {
    if (current.board[position] || winner) return;

    sethistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    SetCurrentMove((prev) => prev + 1);
  };

  moveTo = (move) => {
    SetCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>TIC-TAC-TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handldeSquare={handldeSquare} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
