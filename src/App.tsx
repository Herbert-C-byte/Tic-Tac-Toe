import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Board from "./components/Board";
import Selection from "./components/Selection";
import Winner from "./components/Winner";
import Draw from "./components/Draw";

type StateProps = "home" | "select" | "pick" | "board" | "winner" | "draw"

function App() {
  const [screen, setScreen] = useState<StateProps>("home");

  return (
    <>
      <Layout>
        {screen === "home" && <Home onPlay={() => setScreen("select")} />}
        {screen === "select" && (
          <Selection onSelection={() => setScreen("pick")} />
        )}
        {screen === "pick" && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-white/90 text-lg">Pick who goes first</p>
            <div className="flex gap-3">
              <button
                className="bg-gradient-to-b from-[#E6BA5A] to-[#ECAF2D] px-10 py-2 rounded-3xl font-bold border-b-4 border-[#C68907] text-[#210045]"
                onClick={() => setScreen("board")}
              >
                X starts
              </button>
              <button
                className="bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-2 rounded-3xl font-bold"
                onClick={() => setScreen("board")}
              >
                O starts
              </button>
            </div>
          </div>
        )}
        {screen === "board" && <Board onWin={() => setScreen("winner")} onDraw={() => setScreen("draw")} />}
        {screen === "winner" && <Winner onHome={() => setScreen("home")} />}
        {screen === "draw" && <Draw onHome={() => setScreen("home")} />}
      </Layout>
    </>
  );
}

export default App;

{
  /* <Home />
        <Board /> */
}
