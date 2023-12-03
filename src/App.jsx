import { useState } from "react";
import "./App.css";
import CalcButton from "./CalcButton";
import Problem from "./Problem";
import { useEffect } from "react";

function App() {
  const left = Math.floor(Math.random() * 10 + 1);
  const right = Math.floor(Math.random() * 10 + 1);

  const [answer, setAnswer] = useState(left + right);

  const [guess, setGuess] = useState(0);

  const checkAnswer = (g) => {
    console.log("answer", answer, "guess", g);

    setGuess(guess * 10 + g);

    if (answer === g) {
      console.log("Corresct Answer");

      const newLeft = Math.floor(Math.random() * 10 + 1);
      const newRight = Math.floor(Math.random() * 10 + 1);
      setAnswer(Math.floor(newLeft + newRight));
    } else {
      if (answer < 10) {
        setGuess(0);
      }
    }
  };

  return (
    <>
      <h1>Math Trainer</h1>
      <Problem left={left} right={right} />
      {Array.from({ length: 10 }, (_, i) => (
        <CalcButton number={i} check={checkAnswer} key={i} />
      ))}
    </>
  );
}

export default App;
