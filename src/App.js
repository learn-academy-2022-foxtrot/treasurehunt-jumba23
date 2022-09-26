import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const [counter, setCounter] = useState(5);
  const [youWin, setYouWin] = useState("");

  const handleGamePlay = (clickedSquare) => {
    console.log("treasureLocation:", treasureLocation);
    console.log("bombLocation:", bombLocation);
    let updateBoard = [...board];
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎";
      setYouWin("Great job you WIN 🏆");
      setBoard(updateBoard);
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣";
      setBoard(updateBoard);
    } else {
      updateBoard[clickedSquare] = "🌴";
      setBoard(updateBoard);
      runCounter(counter);
    }
  };

  const runCounter = () => {
    counter === 1 ? handleReset() : setCounter(counter - 1);
  };

  const handleReset = () => {
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setCounter(5);
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      {!youWin ? (
        <div className="attCounter">Number of Attempts left : {counter}</div>
      ) : (
        <div className="attCounter">{youWin}</div>
      )}
      <div className="board-game">
        {board.map((square, index) => {
          return (
            <Square
              square={square}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
      <div class="button-container-div" onClick={handleReset}>
        <button>Play Again</button>
      </div>
    </>
  );
};

export default App;
