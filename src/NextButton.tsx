import React, { useState } from "react";

export default function NextButtton({
  cardId,
  setCardId,
  totalCards,
  resetAnswerState,
}) {
  const handleChange = () => {
    if (cardId < totalCards - 1) {
      setCardId((cardId) => cardId + 1);
      resetAnswerState();
    }
  };

  return (
    <>
      <button
        className="button navigation"
        onClick={handleChange}
        disabled={cardId >= totalCards - 1}
      >
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
/* from chatGPT:

import React, { useState } from 'react';

export default function NextButton({ initialCardId, totalCards, resetAnswerState }) {
  const [cardId, setCardId] = useState(initialCardId);

  const handleChange = () => {
    if (cardId < totalCards - 1) {
      setCardId(prevCardId => prevCardId + 1);
      resetAnswerState(); // Reset answerState to 0 or initial state
    }
  };

  return (
    <>
      <button 
        className="button navigation" 
        onClick={handleChange} 
        disabled={cardId >= totalCards - 1}
      >
        Next Question
      </button>
      <p>cardId: {cardId}</p>
    </>
  );
}
  */
