import React from "react";

const StatusMessage = ({ winner, current }) => {
  const Nomoves = current.board.every((el) => el !== null);
  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        !Nomoves &&
        `Next player is
           ${current.isXNext ? "X" : "O"}`}
      {!winner && Nomoves && "Draw Match"}
    </h2>
  );
};

export default StatusMessage;
