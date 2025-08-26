import Square from "./Square";
import { useEffect, useState } from "react";
import "../styles/tailwind.css";
import ReturnIcon from "../assets/icons/return-icon";
import SettingsIcon from "../assets/icons/settings-icon";
import XIcon from "../assets/icons/x-icon";

type BoardProps = {
  onWin: () => void;
  onDraw: () => void;
};

export default function Board({ onWin, onDraw }: BoardProps) {
  const [xIsNext, setXIsNext] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  useEffect(() => {
    const timer = setInterval((prev) => {
      prev - 1;
    }, 1000);
    return clearInterval(timer);
  }, []);

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
    onWin();
  } else if (!winner && squares.every(Boolean)) {
    status = "It's a draw!";
    onDraw();
  } else {
    status = "Player: " + (xIsNext ? "X" : "O") + " Turn";
  }

  return (
    <>
      <div className="relative flex flex-col m-auto justify-between gap-">
        <div className="w-full flex justify-between items-center">
          <button>
            <ReturnIcon />
          </button>
          <button>
            <SettingsIcon /></button>
        </div>
        <div>
          <div className="text-[#F4B52E] text-xl text-center font-bold mb-8 mx-auto w-full">
            {status}
          </div>
          <div className="bg-white rounded-xl w-full grid grid-cols-3 grid-rows-[repeat(3,_40px)]">
            <div className="grid grid-cols-3 ">
              {squares.map((square, index) => (
                <Square
                  key={index}
                  value={square}
                  onSquareClick={() => handleClick(index)}
                  squareRounded={
                    index < 3 ? "border-b-0" : index > 5 ? "border-t-0" : ""
                  }
                />
              ))}
            </div>
        </div>
      </div>
        </div>
        
    </>
  );
}

const calculateWinner = (squares: number[]) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
