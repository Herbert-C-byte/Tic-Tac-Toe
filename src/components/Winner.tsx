type WinnerProps = {
  onHome: () => void;
  onSelection: () => void;
};

export default function Winner({ onHome, onSelection }: WinnerProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl p-4 border-b-8 border-[#FFDB8E] flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-yellow-400">You Win</h1>
        <div className=" flex flex-col gap-4">
          <button
            onClick={onHome}
            className="bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-2 rounded-2xl font-bold"
          >
            Home
          </button>
          <button
            onClick={onSelection}
            className="bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-2 rounded-2xl font-bold"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
