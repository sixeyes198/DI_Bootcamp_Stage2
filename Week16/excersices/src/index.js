import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Element from "./Element";
// import Sum from "./Sum";
import "./Exercise3.css";
import Excersice from "./Exercise3";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <h1>Excersice 1:</h1>
    1: <App />
    2: <Element />
    3: React is <Sum></Sum> times better with JSX <br></br> */}
    {/* Excersice 2:
    <App /> */}
    Excersice 3:
    <Excersice />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
