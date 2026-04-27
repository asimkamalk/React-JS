import { useState } from "react";

const UseStateWithFunctions = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const incremnet = () => setCount(count + 1);

  return (
    <div>
      <h1>Count From Arrow Fn: {count}</h1>
      <button onClick={incremnet}>Increment</button>
    </div>
  );
};
export default UseStateWithFunctions;
