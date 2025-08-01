import "./styles.css";
import React from "react";

import UseStateExample from "./api-tests/01-useState";
import UseEffectExample from "./api-tests/02-useEffect";
import UseContextExample from "./api-tests/03-useContext"; // 导入的是 03-useContext/index.jsx

export default function App() {
  return (
    <div className="App">
      <h1>React API Playground</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      {/* <UseStateExample /> */}
      <UseEffectExample />
      {/* <UseContextExample /> */}
    </div>
  );
}
