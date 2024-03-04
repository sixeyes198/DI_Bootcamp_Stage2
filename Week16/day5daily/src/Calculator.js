import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("addition");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    let calculatedResult;

    switch (operation) {
      case "addition":
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;

      case "subtraction":
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;

      case "multiplication":
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;

      case "dividing":
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;

      default:
        calculatedResult = "Invalid operation";
    }
    setResult(calculatedResult);
  };
  return (
    <div
      className="Calculator"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20vh",
      }}
    >
      <h1>React Calculator</h1>
      <input
        style={{ margin: "5px" }}
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="addition">+</option>
        <option value="subtraction">-</option>
        <option value="multiplication">x</option>
        <option value="division">/</option>
      </select>
      <input
        style={{ margin: "5px" }}
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleCalculate} style={{ margin: "5px" }}>
        Calculate
      </button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};
export default Calculator;
