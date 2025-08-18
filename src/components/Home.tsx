export default function Home({onPlay}: {onPlay: () => void}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8">
        <img src="./src/assets/group3.png" alt="Tic Tac Toe" />
        <div className="flex flex-col box-border size-80 gap-4">
          <button 
            className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045]"
            onClick={onPlay}
            >
            Play▶️
          </button>
          <button 
            className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045]"
            onClick={() => console.log("Settings mockup working")}
          >
            Setting⚙️
          </button>
        </div>
      </div>
    </>
  )
}