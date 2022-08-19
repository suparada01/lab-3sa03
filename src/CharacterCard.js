import React, { useState, useEffect, useRef } from "react";

const CharacterCard = ({ value, activationHandler, attempt }) => {
  const [active, setActive] = useState(false);
  const activate = () => {
    setActive(true);
    activationHandler(value);
  };
  const className = `card ${active ? "activeCard" : ""}`;

  const attemptRef = useRef(attempt);

  useEffect(() => {
    if (attemptRef.current !== attempt) {
      setActive(false);
      attemptRef.current = attempt;
    }
  }, [attempt]);

  return (
    <div className={className} onClick={activate}>
      {value}
    </div>
  );
};

export default CharacterCard;