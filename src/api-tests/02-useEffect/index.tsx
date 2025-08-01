// 可以直接添加到上面 UseStateExample 组件中，也可以单独创建一个新文件

import React, { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);

  // 1. 调用 useEffect Hook
  useEffect(() => {
    // 2. 这是“副作用”函数，它会在组件渲染后执行
    console.log("Effect a fost rulat!");
    document.title = `您点击了 ${count} 次`;

    // 4. (可选) 返回一个清理函数
    return () => {
      console.log("Curățarea efectului...");
      // document.title = 'React App'; // 组件卸载时可以恢复标题
    };
  }, [count]); // 3. 这是依赖项数组

  return (
    <div>
      <h2>2. useEffect 实例：同步页面标题</h2>
      <p>当前计数值: {count}</p>
      <p>(请观察浏览器标签页的标题变化)</p>
      <button onClick={() => setCount((p) => p + 1)}>点击我</button>
    </div>
  );
}
