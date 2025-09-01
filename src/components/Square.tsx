import XIcon from "../assets/icons/x-icon";
import OIcon from "../assets/icons/O-icon";

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
                 border rounded-xl border-[#FFEFDC] 
                 text-indigo-900 font-extrabold text-4xl ${squareRounded}
                `}
      onClick={onSquareClick}
    >
      {value === "X" ? (
        <XIcon size={28} />
      ) : value === "O" ? (
        <OIcon size={28} />
      ) : null}
    </button>
  );
}
