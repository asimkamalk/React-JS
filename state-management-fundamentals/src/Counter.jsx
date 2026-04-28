import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const rest = () => setCount(0);
  const increaseBy100 = () => setCount(100);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
      <button onClick={increaseBy100}>+100</button>
      <button onClick={rest}>Reset</button>
    </div>
  );
};
export default Counter;
