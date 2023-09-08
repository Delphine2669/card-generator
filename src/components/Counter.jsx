import { useState } from "react";
function Counter() {
  const [count, setCount] = useState("0");

  return (
    <div>
      <div>{count}</div>
      <div>
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
