import React from "react";

const Square = ({ square, index, handleGamePlay, gameOver }) => {
  const handleClick = () => {
    console.log(gameOver);
    return !gameOver ? handleGamePlay(index) : null;
  };
  return (
    <>
      <div className="square" onClick={handleClick}>
        {square}
      </div>
    </>
  );
};
export default Square;
