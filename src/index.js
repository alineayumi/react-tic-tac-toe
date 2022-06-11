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
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  return (
    <div>
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
    </div>
  );
}

function Game(props) {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      xIsNext: true,
    },
  ]);
  const [status, setStatus] = useState("Next Player: X");
  const [current, setCurrent] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  function onClick(i) {
    const _history = history.slice();
    let _current = _history[_history.length - 1];
    setCurrent(_current);

    // Checks if the square is not already filled
    if (isGameOver(_current.squares)) {
      setStatus("Game over. Play again clicking on 'RESET GAME'");
    } else if (_current.squares[i] != null) {
      setStatus("This square is already filled. Please choose an empty one.");
    } else if (_current.squares[i] == null) {
      const sqs = _current.squares.slice();
      sqs[i] = _current.xIsNext ? "X" : "O";

      _current = {
        squares: sqs,
        xIsNext: !current.xIsNext,
      };
      setCurrent(_current);
      _history.push(_current);
      setHistory(_history);
      console.log(history);

      const winner = calculateWinner(sqs);
      if (winner) {
        setStatus("Winner: " + winner);
      } else if (isGameOver(sqs)) {
        setStatus("Game Over.");
      } else {
        setStatus("Next Player: " + (_current.xIsNext ? "X" : "O"));
      }
    }
  }

  function handleResetClick() {
    setHistory([
      {
        squares: Array(9).fill(null),
        xIsNext: true,
      },
    ]);
    setStatus("Next Player: X");
    setCurrent({
        squares: Array(9).fill(null),
        xIsNext: true
    })
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => onClick(i)} />
        <Reset onClick={() => handleResetClick()} />
      </div>
      <div className="game-info">
        <div>{status}</div>
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
  if (calculateWinner(squares)) {
    return true;
  }
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
