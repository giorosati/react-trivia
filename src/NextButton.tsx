import React from "react";

export default function NextButtton({ cardId }) {
  const handleChange = () => {
    if (cardId < 19) {
      setCardId(cardId++);
    }
  };

  return (
    <>
      <button className="button navigation" onClick={handleChange}>
        Next Question
      </button>
      <p>cardId: {cardId}</p>
    </>
  );
}

// return <button className="button navigation">Next</button>;
/*
  logic
  if at end of trivia cards, disable next
  when select prev or next, reset answerState to 0

  */
