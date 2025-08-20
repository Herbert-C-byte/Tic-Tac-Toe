import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Board from "./components/Board";
import Selection from "./components/Selection";
import Winner from "./components/Winner";
import Draw from "./components/Draw";
import XIcon from "./assets/icons/x-icon";
import OIcon from "./assets/icons/O-icon";

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
            <p className="text-[#EBA105] text-3xl font-bold">Pick who goes first</p>
            <div className="flex gap-3">
              <button
                onClick={() => setScreen("board")}
              >
                <XIcon />
              </button>
              <button
                onClick={() => setScreen("board")}
              >
                <OIcon />
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
