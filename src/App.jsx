import React, { useState } from "react";
import History from "./components/History";
import Board from "./components/Board";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss";
import { calculateWinner } from "./helpers";

const NewGame = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, sethistory] = useState(NewGame);
  const [currentMove, SetCurrentMove] = useState(0);
  const current = history[currentMove];
  const [isXNext, setISXNext] = useState(false);
  const { winner, winningSquares } = calculateWinner(current.board);

  const handldeSquare = (position) => {
    if (current.board[position] || winner || currentMove + 1 !== history.length)
      return;

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

  const onNewgame = () => {
    sethistory(NewGame);
    SetCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        <span className="text-green">TIC</span> -
        <span className="text-pink">TAC</span>-
        <span className="text-orange">TOE</span>
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handldeSquare={handldeSquare}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewgame}
        className={`btn-reset ${winner ? "active" : ""}`}
      >
        Start new Game
      </button>

      <h2 style={{ fontWeight: "normal" }}>Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  );
};

export default App;
