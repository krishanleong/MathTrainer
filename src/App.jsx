import Grid from "./Grid";
import { useState } from "react";
import "./App.css";
import CalcButton from "./CalcButton";
import Problem from "./Problem";
import { useEffect } from "react";

function App() {
  const [left, setLeft] = useState(3);
  const [right, setRight] = useState(5);

  const [guess, setGuess] = useState(0);
  useEffect(() => {
    console.log("Guess start: ", guess);
    if (left + right === guess) {
      console.log("Correct Answer");

      setLeft(Math.floor(Math.random() * 9 + 1));
      setRight(Math.floor(Math.random() * 6 + 1));
      setGuess(0);
    } else {
      if (left + right < 10 || guess > 10) {
        setGuess(0);
      }
    }
    console.log("Guess end: ", guess);
  }, [guess, left, right]);
  function checkAnswer(g) {
    console.log("answer", left + right, "guess", g);

    console.log("Guess clacl", guess * 10 + g);
    setGuess((guess) => guess * 10 + g);
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
