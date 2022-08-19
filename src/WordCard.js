import React from "react";
import CharacterCard from "./CharacterCard";
import * as _ from "lodash";
import { useState } from "react";
import { Fireworks } from 'fireworks-js';
import { useEffect } from "react";
import { GrPowerReset } from "react-icons/gr";

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase();
  let chars = _.shuffle(Array.from(word));
  return {
    word,
    chars,
    attempt: 1,
    guess: "",
    completed: false,
  };
};

const WordCard = ({ value }) => {
  const [state, setState] = useState(prepareStateFromWord(value));
  const [isShowReset, setIsShowReset] = useState(false);
  const [text, setText] = useState("");

  const activationHandler = (c) => {
    console.log(`${c} has been activated.`);

    let guess = state.guess + c;
    setState({ ...state, guess });
    if (guess.length === state.word.length) {
      if (guess === state.word) {
        setText("congratulations!, You won.");
        Fireworks.start()
        setState({ ...state, guess: "", completed: true });
      } else {
        setText("that answer is incorrect !!!, Please try again.");
        setState({
          ...state,
          guess: "",
          attempt: state.attempt + 1,
          completed: false,
        });
      }
    }
  };

  const handleReset = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    if (state.completed) {
      const timer = setTimeout(() => {
        setIsShowReset(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.completed]);
  return (
    <div>
      {state.completed ? (
        <h1
          style={{ color: "red", textTransform: "uppercase", opacity: "0.8" }}
        >
          {text}
        </h1>
      ) : (
        <h1
          style={{ color: "black", textTransform: "uppercase", opacity: "0.8" }}
        >
          {text}
        </h1>
      )}
      {state.chars.map((c, i) => (
        <CharacterCard
          value={c}
          key={i}
          activationHandler={activationHandler}
          attempt={state.attempt}
        />
      ))}
      {isShowReset && (
        <GrPowerReset onClick={handleReset} style={{ cursor: "pointer" }} />
      )}
    </div>
  );
};

export default WordCard;