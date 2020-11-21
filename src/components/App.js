import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const prevClick = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const nextClick = () => {
    if (index === slides.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  const restart = () => {
    setIndex(0);
  };
  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      <button
        onClick={restart}
        data-testid="button-restart"
        disabled={index === 0 ? true : false}
      >
        Restart
      </button>
      <button
        data-testid="button-prev"
        onClick={prevClick}
        disabled={index === 0 ? true : false}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        onClick={nextClick}
        disabled={index === slides.length - 1 ? true : false}
      >
        Next
      </button>
    </>
  );
};

export default App;
