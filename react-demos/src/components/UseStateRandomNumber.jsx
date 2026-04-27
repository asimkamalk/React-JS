import { useState } from "react";

const UseStateRandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(() => {
    return Math.floor(Math.random() * 100);
  });

  const randomNumberHandler = () => {
    const randmomNumb = Math.floor(Math.random() * 100);
    setRandomNumber(randmomNumb);
  };

  return (
    <div>
      <h1>Random Number {randomNumber}</h1>
      <button onClick={randomNumberHandler}>Generate Random Number</button>
    </div>
  );
};
export default UseStateRandomNumber;
