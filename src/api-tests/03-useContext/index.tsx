import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemedButton from "./ThemedButton";

// 2. 这个组件是 useContext 测试用例的根组件
export default function UseContextExample() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <div>
      <h2>Testing useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* 使用 Provider 为所有子组件提供当前的 theme 值 */}
      <ThemeContext.Provider value={theme}>
        <ThemedButton />
      </ThemeContext.Provider>
    </div>
  );
}
