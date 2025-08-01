import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// 3. 子组件消费 Context
export default function ThemedButton() {
  const theme = useContext(ThemeContext);
  const style = {
    background: theme === "dark" ? "#333" : "#FFF",
    color: theme === "dark" ? "#FFF" : "#333",
    padding: "10px 20px",
    border: "1px solid #ccc",
  };
  return <button style={style}>I am a themed button</button>;
}
