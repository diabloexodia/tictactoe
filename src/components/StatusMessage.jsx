import React from "react";

const StatusMessage = ({ winner, current }) => {
  const Nomoves = current.board.every((el) => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !Nomoves && (
        <>
          Next player is{" "}
          <span
            className={current.isXNext === "X" ? "text-green" : "text-orange"}
          >
            {current.isXNext ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && Nomoves && (
        <>
          <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span> - Draw
        </>
      )}
    </div>
  );
};

export default StatusMessage;
