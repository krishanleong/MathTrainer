import Grid from "./Grid";
import { useState } from "react";
import "./App.css";
import CalcButton from "./CalcButton";
import Problem from "./Problem";
import { useEffect } from "react";

let left = 5;
let right = 3;

function App() {
  const [answer, setAnswer] = useState(3 + 5);

  const [guess, setGuess] = useState(0);

  function checkAnswer(g) {
    console.log("answer", answer, "guess", g);

    setGuess((guess) => guess * 10 + g);

    if (answer === g) {
      console.log("Correst Answer");

      left = Math.floor(Math.random() * 1 + 1);
      right = Math.floor(Math.random() * 10 + 1);
      setAnswer(Math.floor(left + right));
    } else {
      if (answer < 10) {
        setGuess(0);
      }
    }
  }

  return (
    <>
      <h1>Math Trainer</h1>
      <Problem left={left} right={right} />
      {Array.from({ length: 10 }, (_, i) => (
        <CalcButton number={i} check={checkAnswer} key={i} />
      ))}
      <Grid />
    </>
  );
}

export default App;
