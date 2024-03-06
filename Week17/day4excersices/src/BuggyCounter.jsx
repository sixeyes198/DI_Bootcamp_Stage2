import { useState } from "react";
const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  if (count > 5) {
    throw new Error("I crashed!");
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
      <button onClick={handleClick}>Count +</button>
      <h2 style={{ margin: "3px" }}>{count}</h2>
    </div>
  );
};
export default BuggyCounter;
