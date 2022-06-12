import { useState, useEffect } from "react";
import "../../index.css";
import Board from "./components/board";
import Reset from "./components/reset";
import { calculateWinner, isGameOver } from "./game_utils";

export default function Game(props) {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [status, setStatus] = useState("Next Player: X");
  const [current, setCurrent] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  useEffect(() => {
    const winner = calculateWinner(current);
    if (winner) {
      setStatus("Winner: " + winner);
    } else if (isGameOver(current)) {
      setStatus("Game Over.");
    } else {
      setStatus("Next Player: " + (xIsNext ? "X" : "O"));
    }
    // eslint-disable-next-line
  }, [current]);

  const onClick = (i) => {
    const _history = history.slice(0, stepNumber + 1);
    let _current = history[stepNumber].squares.slice();

    if (isGameOver(_current)) {
      setStatus("Game over. Play again clicking on 'RESET GAME'");
    } else if (_current[i] !== null) {
      setStatus("This square is already filled. Please choose an empty one.");
    } else if (_current[i] === null) {
      _current[i] = xIsNext ? "X" : "O";

      setXisNext(!xIsNext);
      setCurrent(_current);
      setHistory(_history.concat([{ squares: _current }]));
      setStepNumber(_history.length);
    }
  };

  const onResetClick = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setXisNext(true);
    setStatus("Next Player: X");
    setCurrent(Array(9).fill(null));
    setStepNumber(0);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
    setHistory(history.slice(0, step + 1));
    setCurrent(history[step].squares.slice());
  };

  return (
    <div class="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div class=" row-3 align-top justify-left text-xl p-6">
          <p>{status}</p>
          <Board squares={current} onClick={(i) => onClick(i)} />
          <Reset onClick={() => onResetClick()} />
        </div>
        <div class="flex justify-left text-xl p-6">
          <ol>
            {history.map((gameState, index) => {
              if (index > 0) {
                const desc = `Go to move #${index}`;
                return (
                  <li class="text-md" key={index}>
                    <button onClick={() => jumpTo(index)}>{desc}</button>
                  </li>
                );
              }
              return <p key={index}>History</p>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
