
export default function Draw({ onHome }: { onHome: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-yellow-400">Draw</h1>
      <div className=" flex flex-col gap-4">
          <button
            onClick={onHome}
            className="bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-2 rounded-2xl font-bold"
          >
            Home 
          </button>
          <button
            onClick={onHome}
            className="bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-2 rounded-2xl font-bold"
          >
            Retry
          </button>
        </div>
    </div>
  );
}
