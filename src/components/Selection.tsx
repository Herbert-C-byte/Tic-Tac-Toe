export default function Selection({onSelection}: {onSelection: () => void}) {
  return (
    <>
    <button 
      onClick={onSelection}
      className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045]"
    >
      P VS P
    </button>
    <button
      onClick={() => console.log("This also a mockup")}
      className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045]"
    >
      P VS R
    </button>
    </>
  )
}