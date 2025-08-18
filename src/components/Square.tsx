type SquareProps = {
  value: "X" | "O" | null;
  onSquareClick: () => void;
}


export default function Square({ value, onSquareClick }: SquareProps) {
  
  return (
      
        <button className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center 
                 rounded-lg bg-gradient-to-b from-yellow-400 to-yellow-500
                 border-4 border-indigo-800 shadow-[4px_4px_0px_#3b0ca3]
                 text-indigo-900 font-extrabold text-4xl
                 hover:scale-105 active:scale-95 transition-transform" 
        onClick={onSquareClick}
        >
          {value}
        </button>
      
  )
}