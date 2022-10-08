import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { Suspeitos } from "./pages/suspeitos";
import { Armas } from "./pages/armas";
import { Locais } from "./pages/locais";

function App() {
  const [count, setCount] = useState(0);

  const onChange = (key: string) => {
    console.log(key);
  };

  const items = [
    {
      label: `Suspeitos`,
      key: "1",
      children: <Suspeitos/>,
    },
    {
      label: `Armas`,
      key: "2",
      children: <Armas/>,
    },
    {
      label: `Local`,
      key: "3",
      children: <Locais/>,
    },
  ];

  return (
    <div className="App">
      <div className="card-container">
        <Tabs type="card" items={items} />
      </div>
    </div>
  );
}

export default App;
