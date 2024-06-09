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
    </>
  );
}
