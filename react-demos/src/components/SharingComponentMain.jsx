import SharingComponentOne from "./SharingComponentOne";
import SharingComponentTwo from "./SharingComponentTwo";

import { useState } from "react";
const SharingComponentMain = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SharingComponentOne
        count={count}
        onClickHandler={() => setCount(count + 1)}
      />
      <SharingComponentTwo
        count={count}
        onClickHandler={() => setCount(count + 1)}
      />
    </div>
  );
};
export default SharingComponentMain;
