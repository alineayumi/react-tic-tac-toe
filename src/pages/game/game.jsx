import React, { useState, useEffect } from "react";
import "../../index.css";
import Board from "./components/board";
import Reset from "./components/reset";
import { calculateWinner, isGameOver } from "./game_utils";

export default function Game(props) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [status, setStatus] = useState("Next Player: X");
  const [current, setCurrent] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  useEffect(() => {
    const winner = calculateWinner(current);
    if (winner) {
      setStatus("Winner: " + winner);
    } else if (isGameOver(current)) {
      setStatus("Game Over.");
    } else {
      setStatus("Next Player: " + (xIsNext ? "X" : "O"));
    }
  }, [current]);

  const onClick = (i) => {
    let _current = current.slice();

    if (isGameOver(_current)) {
      setStatus("Game over. Play again clicking on 'RESET GAME'");
    } else if (_current[i] !== null) {
      setStatus("This square is already filled. Please choose an empty one.");
    } else if (_current[i] === null) {
      _current[i] = xIsNext ? "X" : "O";

      setXisNext(!xIsNext);
      setCurrent(_current);
      setHistory(history.concat(_current));
    }
  };

  const onResetClick = () => {
    setHistory([Array(9).fill(null)]);
    setXisNext(true);
    setStatus("Next Player: X");
    setCurrent(Array(9).fill(null));
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current} onClick={(i) => onClick(i)} />
        <Reset onClick={() => onResetClick()} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
