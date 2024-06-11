import React, { useState } from "react";

export default function PrevButtton({
  cardId,
  setCardId,
  totalCards,
  resetAnswerState,
}) {
  const handleChange = () => {
    if (cardId > 0) {
      setCardId((cardId) => cardId - 1);
      resetAnswerState();
    }
  };

  return (
    <>
      <button
        className="button navigation"
        onClick={handleChange}
        disabled={cardId === 0}
      >
        Previous Question
      </button>
    </>
  );
}
