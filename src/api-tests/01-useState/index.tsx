// src/api-tests/01-useState/index.tsx

import React, { useState } from "react";

export default function UseStateExample() {
  // 1. 调用 useState，传入初始状态 0
  // 它返回一个包含两个元素的数组：[当前状态, 更新状态的函数]
  const [count, setCount] = useState(0);

  // 处理增加按钮的点击事件
  function handleIncrease() {
    // 3. 调用更新函数来改变状态，React 会自动重新渲染组件
    // 使用函数式更新，确保在并发操作下状态正确
    setCount((prevCount) => prevCount + 1);
  }

  // 处理减少按钮的点击事件
  function handleDecrease() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h2>1. useState 实例：一个简单的计数器</h2>

      {/* 2. 在 JSX 中直接使用状态变量 */}
      <p>当前计数值: {count}</p>

      <button onClick={handleIncrease}>增加 (+)</button>
      <button onClick={handleDecrease} style={{ marginLeft: "10px" }}>
        减少 (-)
      </button>
    </div>
  );
}
