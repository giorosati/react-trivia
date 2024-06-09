import React from "react";
export default function ShowHideAnswer({ answerState, setAnswerState }) {
  const handleChange = () => {
    if (answerState === 0) {
      setAnswerState(1);
    } else {
      setAnswerState(0);
    }
  };

  if (answerState === 1) {
    return (
      <>
        <button className="showHide" onClick={handleChange}>
          Hide Answer
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className="showHide" onClick={handleChange}>
          Show Answer
        </button>
      </>
    );
  }
}
