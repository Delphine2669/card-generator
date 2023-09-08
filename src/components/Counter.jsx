import { useState } from "react";
function Counter() {
  const [count, setCount] = useState("0");

  return (
    <div className="counter-container">
      <div className="counter">{count}</div>
      <div className="counter-buttons">
        <button type="button" onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
