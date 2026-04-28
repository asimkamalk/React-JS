import { useState } from "react";

const InputExample = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="name">Enter your name: </label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
};
export default InputExample;
