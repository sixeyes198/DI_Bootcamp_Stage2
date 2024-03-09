import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmmitedValue] = useState("");

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    const res = await fetch("http://localhost:5000/api/hello");
    const message = await res.text();
    setMessage(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: inputValue }),
    });
    const data = await response.json();
    console.log(data);
    setSubmmitedValue(data);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>{message}</h1>
      <h2>Post to server:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <input type="submit" value="submit" />
        <p>{submittedValue}</p>
      </form>
    </div>
  );
}

export default App;
