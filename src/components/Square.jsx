import React from "react";

const Square = ({ value, onClick, iswinningsquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${iswinningsquare ? "winning" : ""} ${
        value === "X" ? "text-green" : "text-orange"
      }`}
      style={{ fontWeight: iswinningsquare ? "bold" : "normal" }}
    >
      {value}
    </button>
  );
};

export default Square;
