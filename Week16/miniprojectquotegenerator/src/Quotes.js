import React, { useState } from "react";
const QuotesPage = () => {
  const quotes = [
    {
      quote:
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison",
    },
    {
      quote: "You can observe a lot just by watching.",
      author: "Yogi Berra",
    },
    {
      quote: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe",
    },
  ];

  const [quote, setQuote] = useState(quotes[0]);
  const [colors, setColors] = useState({
    background: getRandomColor(),
    header: getRandomColor(),
    button: getRandomColor(),
  });

  const predefinedColors = [
    "#FF5733",
    "#33FF57",
    "#3333FF",
    "#FFFF33",
    "#33FFFF",
    "#FF33FF",
    "#FF5733",
    "#33FF57",
    "#3333FF",
    "#FFFF33",
    "#33FFFF",
    "#FF33FF",
    "#FF5733",
    "#33FF57",
    "#3333FF",
    "#FFFF33",
    "#33FFFF",
    "#FF33FF",
    "#FF5733",
    "#33FF57",
  ];

  function getRandomQuote() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex].quote === quote.quote);
    return quotes[randomIndex];
  }

  function getRandomColor() {
    return predefinedColors[
      Math.floor(Math.random() * predefinedColors.length)
    ];
  }

  function generateNewQuote() {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
    setColors({
      background: getRandomColor(),
      header: getRandomColor(),
      button: getRandomColor(),
    });
  }

  return (
    <div className="App" style={{ backgroundColor: colors.background }}>
      <h2 style={{ color: colors.header }}>{quote.quote}</h2>
      <p style={{ color: colors.header }}>{quote.author}</p>
      <button
        style={{ backgroundColor: colors.button, color: "white" }}
        onClick={generateNewQuote}
      >
        Generate New quote
      </button>
    </div>
  );
};

export default QuotesPage;
