import PlayIcon from "../assets/icons/play-icon";
import SettingIcon from "../assets/icons/setting-icon";

export default function Home({ onPlay }: { onPlay: () => void }) {
  return (
    <>
      <div className="sm-auto flex flex-col justify-center">
        <img
          className="mx-auto mb-24"
          src="./src/assets/logo.png"
          alt="Tic Tac Toe"
        />
        <div className="gap-y-6 flex flex-col w-full">
          <button
            className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] flex justify-center items-center px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045] w-full max-w-[343px]"
            onClick={onPlay}
          >
            <span>Play</span>
            <PlayIcon />
          </button>
          <button
            className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] flex justify-center items-center px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045]"
            onClick={() => console.log("Settings mockup working")}
          >
            <span>Settings</span>
            <SettingIcon />
          </button>
        </div>
      </div>
    </>
  );
}
