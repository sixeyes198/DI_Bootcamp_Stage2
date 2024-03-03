import React, { useState } from "react";
import Garage from "../Components/Garage";

const Car = ({ carInfo }) => {
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>
        This car is a {color} {carInfo.model}
      </h1>
      <Garage size="small" />
      <button onClick={() => setColor("Yellow")}>Change Color</button>
    </div>
  );
};
export default Car;
