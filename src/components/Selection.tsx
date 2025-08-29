
export default function Selection({
  onSelection,
}: {
  onSelection: () => void;
}) {
  return (
    <>
      <div className="m-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold text-yellow-500">Select Level</h1>
        <img
          className="w-64"
          src="./src/assets/3x3quase.png"
          alt="selection board pic"
        />
        <div className="m-auto flex flex-col items-center gap-3">
          <button
            onClick={onSelection}
            className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045]"
          >
            P VS R
          </button>
          <button
            onClick={() => console.log("This also a mockup")}
            className="bg-gradient-to-b from-[#F9BE3E] to-[#C68907] px-10 py-2 rounded-3xl font-bold border-b-4 border-[#EBA105] text-[#210045]"
          >
            P VS P
          </button>
        </div>
      </div>
    </>
  );
}
