export default function Selection({onSelection}: {onSelection: () => void}) {
  return (
    <>
    <button 
      onClick={onSelection}
      className="bg-gradient-to-b from-amber-400 to-amber-500 px-10 py-2 rounded-3xl"
    >
      P VS P
    </button>
    <button
      onClick={() => console.log("This also a mockup")}
      className="bg-gradient-to-b from-amber-400 to-amber-500 px-10 py-2 rounded-3xl"
    >
      P VS R
    </button>
    </>
  )
}