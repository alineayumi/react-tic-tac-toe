import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Reset(props) {
  return (
    <button className="reset" onClick={props.onClick}>
      RESET GAME
    </button>
  );
}

function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Next Player: X");

  function handleClick(i) {
    const sqs = squares.slice();

    // Checks if the square is not already filled
    if (isGameOver(sqs) || calculateWinner(sqs)) {
      setStatus("Game over. Play again clicking on 'RESET GAME'");
    } else if (sqs[i] != null) {
      setStatus("This square is already filled. Please choose an empty one.");
    } else if (sqs[i] == null) {
      sqs[i] = xIsNext ? "X" : "O";
      setSquares(sqs);

      const winner = calculateWinner(sqs);
      if (winner) {
        setStatus("Winner: " + winner);
      } else if (isGameOver(sqs)) {
        setStatus("Game Over.");
      } else {
        setXIsNext(!xIsNext);
        setStatus("Next Player: " + (!xIsNext ? "X" : "O"));
      }
    }
  }

  function handleResetClick() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setStatus("Next Player: X");
  }

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <Reset onClick={() => handleResetClick()} />
    </div>
  );
}

function Game(props) {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isGameOver(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
