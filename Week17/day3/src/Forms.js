import React, { useState } from "react";

const Form = () => {
  const [first_name, setFirstName] = useState("");
  const [last_Name, setLastName] = useState("");
  const [color, setColor] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(first_name, last_Name, color, isChecked);
  };

  return (
    <div>
      <h3>Forms:</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        First Name:{" "}
        <input
          name="first_name"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br></br>
        Last name:
        <input
          name="last_Name"
          type="text"
          onInput={(e) => setLastName(e.target.value)}
        />
        <br></br>
        <select
          onChange={(e) => {
            setColor(e.target.value);
          }}
        >
          <option value={1}>Red</option>
          <option value={2}>Blue</option>
          <option value={3}>Yellow</option>
        </select>
        <br></br>
        Yes/No:
        <input
          name="isChecked"
          onChange={(e) => setIsChecked(e.target.checked)}
          type="checkbox"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default Form;
