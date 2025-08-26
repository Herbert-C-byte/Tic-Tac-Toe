import OIcon from "../assets/icons/O-icon";
import XIcon from "../assets/icons/x-icon";

type SquareProps = {
  value: "X" | "O" | null;
  onSquareClick: () => void;
  squareRounded?: string;
};

export default function Square({
  value,
  onSquareClick,
  squareRounded,
}: SquareProps) {
  return (
    <button
      className={`flex items-center justify-center 
                 border-2 border-[#FFEFDC] 
                 text-indigo-900 font-extrabold  text-4xl ${squareRounded}
                `}
      onClick={onSquareClick}
    >
      {value === "X" ? (
        <XIcon size={28} />
      ) : value === "O" ? (
        <img src="/O.svg" alt="o" className="w-7 h-7" />
      ) : null}
    </button>
  );
}
