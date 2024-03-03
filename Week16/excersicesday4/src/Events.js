import React, { useState } from "react";

const Events = () => {
  //   const clickMe = () => {
  //     alert("I was clicked");
  //   };

  //   const handleKeyDown = (e) => {
  //     if (e.key === "Enter") {
  //       alert("The Enter key was pressed, Your input is:" + e.target.value);
  //     }
  //   };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    //   <div>
    //     <button onClick={clickMe}>Click me!</button>
    //     <br></br>
    //     <input
    //       type="text"
    //       onKeyDown={handleKeyDown}
    //       placeholder="Press Enter"
    //     ></input>
    //   </div>

    <div>
      <button onClick={toggleState}>{isToggleOn ? "ON" : "OFF"}</button>
      <p>{isToggleOn ? "on" : "off"}</p>
    </div>
  );
};

export default Events;
