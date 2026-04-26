import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  const clearHandler = () => setCounter(0);

  return (
    <div>
      <h1> {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={clearHandler}>Clear</button>
    </div>
  );
};
export default UseState;
