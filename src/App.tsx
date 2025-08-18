import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Board from "./components/Board";
import Selection from "./components/Selection";
import Winner from "./components/Winner";

function App() {
  const [screen, setScreen] = useState<
    "home" | "select" | "pick" | "board" | "winner"
  >("home");

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
                className="bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-2 rounded-3xl font-bold"
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
        {screen === "board" && <Board onWin={() => setScreen("winner")} />}
        {screen === "winner" && <Winner onHome={() => setScreen("home")} />}
      </Layout>
    </>
  );
}

export default App;

{
  /* <Home />
        <Board /> */
}
