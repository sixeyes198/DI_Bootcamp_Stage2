import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Car from "./Car";
// import Car2 from "./Car";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const myelement = ReactDOM.createRoot(document.getElementById("root"));
// myelement.render(
//   <React.StrictMode>
//     <App />
//     <h1>I Love JSX!</h1>
//     <h1>React is {5 + 5} times better with JSX</h1>
//     <ul>
//       <li>Apples</li>
//       <li>Bananas</li>
//       <li>Cherries</li>
//     </ul>
//     Enter something: <input type="text" /> <br></br>
//     <Car />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
