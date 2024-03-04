import React, { useState } from "react";

const Phone = () => {
  const [phoneState, setPhoneState] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setPhoneState((prevState) => ({
      ...prevState,
      color: "blue",
    }));
  };

  return (
    <div>
      <h2>Phone Details:</h2>
      <p>Brand: {phoneState.brand}</p>
      <p>Model: {phoneState.model}</p>
      <p>Color: {phoneState.color}</p>
      <p>Year: {phoneState.year}</p>
      <button onClick={changeColor}>change Color</button>
    </div>
  );
};
export default Phone;
