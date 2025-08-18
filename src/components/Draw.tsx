
export default function Winner({ onHome }: { onHome: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-yellow-400">It's a Draw!</h1>
      <button
        onClick={onHome}
        className="bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-2 rounded-2xl font-bold"
      >
        Home
      </button>
    </div>
  );
}
