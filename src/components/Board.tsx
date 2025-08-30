import Square from "./Square";
import { useEffect, useState } from "react";
import "../styles/tailwind.css";
import ReturnIcon from "../assets/icons/return-icon";
import SettingsIcon from "../assets/icons/settings-icon";
import XIcon from "../assets/icons/x-icon";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";

type BoardProps = {
  onWin: () => void;
  onDraw: () => void;
};

export default function Board({ onWin, onDraw }: BoardProps) {
  const [xIsNext, setXIsNext] = useState(true);
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

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
    onWin();
  } else if (!winner && squares.every(Boolean)) {
    status = "It's a draw!";
    onDraw();
  } else {
    status = "Vez do jogador: " + (xIsNext ? "X" : "O");
  }

  const { transcript, listening, setListening } = useSpeechRecognition();

  useEffect(() => {
    if (!transcript) return;

    if (transcript.includes("reiniciar")) {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      return;
    }

    const match = transcript.match(/colocar (x|o) na posição (\d)/);
    if (match) {
      const player = match[1].toUpperCase();
      const position = parseInt(match[2]) - 1; // posição de 1 a 9 → índice de 0 a 8

      if ((player === "X" && xIsNext) || (player === "O" && !xIsNext)) {
        handleClick(position);
      }
    }
  }, [transcript]);

  return (
    <>
      <div className="flex flex-col m-auto justify-between h-full max-w-md p-4">
        <div className="w-full flex justify-between items-center">
          <button>
            <ReturnIcon />
          </button>
          <button>
            <SettingsIcon />
          </button>
        </div>
        <div>
          <div className="text-[#F4B52E] text-xl text-center font-bold mb-8 mx-auto w-full">
            {status}
          </div>

          <div className="flex gap-2 justify-center mb-4">
            <button
              onClick={() => setListening(true)}
              className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white px-4 py-2 rounded"
            >
              🎙️ Start voice
            </button>
            <button
              onClick={() => setListening(false)}
              className="bg-gradient-to-l from-yellow-600 to-yellow-400 text-white px-4 py-2 rounded"
            >
              🛑 Stop voice
            </button>
          </div>
          <p className="text-center text-lg text-yellow-500 mb-2">
            Último comando: {transcript}
          </p>

          <div className="bg-white rounded-xl w-full grid grid-cols-3 grid-rows-[repeat(3,_40px)]">
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
