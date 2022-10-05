import { useEffect, useState } from "react";
import "./App.css";
import CoinFlip from "./components/CoinFlip/CoinFlip";
import Dice from "./components/Dice/Dice";
import VerticalNav from "./components/Navbar/VerticalNav";
import Wheel from "./components/Wheel/Wheel";
import { Tool } from "./types/Interfaces";

function App() {
  const [tools, setTools] = useState<Tool[]>([
    { name: "Coin Flip", active: true },
    { name: "Wheel", active: false },
    { name: "Dice", active: false },
  ]);

  const setActiveTool = (toolName: string) => {
    const arr = tools.map((tool) =>
      tool.name === toolName
        ? { ...tool, active: true }
        : { ...tool, active: false }
    );
    setTools(arr);
  };

  return (
    <div className="App">
      <VerticalNav tools={tools} setActiveTool={setActiveTool} />
      {tools[0].active === true && <CoinFlip />}
      {tools[1].active === true && <Wheel />}
      {tools[2].active === true && <Dice />}
    </div>
  );
}

export default App;
