import "./App.css";
import React, { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const increaseVote = (index) => {
    setLanguages((prevLanguages) => {
      const updatedLanguages = [...prevLanguages];
      updatedLanguages[index] = {
        ...updatedLanguages[index],
        votes: updatedLanguages[index].votes + 1,
      };
      return updatedLanguages;
    });
  };

  return (
    <div className="App">
      <h1>Vote Your Language</h1>
      {languages.map((language, index) => (
        <div key={index}>
          <p>
            {language.name}: {language.votes} votes
          </p>
          <button onClick={() => increaseVote(index)}>Vote Me!</button>
        </div>
      ))}
    </div>
  );
}

export default App;
