import "./App.css";
// import Event from "./Event";
// import { useState } from "react";
// import Form from "./Forms";
import Counter from "./Counter";
import Error from "./Error";
function App() {
  // const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {/* <Event /> */}
      {/* {counter} */}
      {/* <Form /> */}
      <Error>
        <h2>Error Boundry</h2>
        <Counter />
      </Error>
    </div>
  );
}

export default App;
