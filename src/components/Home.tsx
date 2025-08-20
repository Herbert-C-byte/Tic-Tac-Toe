import PlayIcon from "../assets/icons/play-icon";
import SettingIcon from "../assets/icons/setting-icon";

export default function Home({ onPlay }: { onPlay: () => void }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8">
        <img
          className="w-auto h-auto"
          src="./src/assets/logo.png"
          alt="Tic Tac Toe"
        />
        <div className="flex flex-col justify-center w-84 box-border size-80 gap-5">
          <button
            className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] flex justify-center items-center px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045] w-full max-w-[343px]"
            onClick={onPlay}
          >
            Play<PlayIcon />
          </button>
          <button
            className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] flex justify-center items-center px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045]"
            onClick={() => console.log("Settings mockup working")}
          >
            Settings<SettingIcon />
          </button>
        </div>
      </div>
    </>
  );
}
