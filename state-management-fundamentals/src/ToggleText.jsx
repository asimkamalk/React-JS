import { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {isVisible && <p> This is a secret Message </p>}
    </div>
  );
};
export default ToggleText;
