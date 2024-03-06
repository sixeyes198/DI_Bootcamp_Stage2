import React, { useState } from "react";
const Event = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Helllo");

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Event Examples</h3>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => add()}>Add</button>
      <input onChange={(e) => setMessage(e.target.value)} />
      <h4>{message}</h4>

      <button>Add to the app Count</button>
    </div>
  );
};
export default Event;
