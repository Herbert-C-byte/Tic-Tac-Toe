type SquareProps = {
  value: "X" | "O" | null;
  onSquareClick: () => void;
  squareRounded?: string
};

export default function Square({ value, onSquareClick, squareRounded }: SquareProps) {
  return (
    <button
      className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center 
                 border-2 border-[#FFEFDC] 
                 text-indigo-900 font-extrabold  text-4xl ${squareRounded}
                `}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
