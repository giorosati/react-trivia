import React from "react";
export default function ShowHideAnswer({ answerState, setAnswerState }) {
  const handleChange = () => {
    let newValue;

    if (answerState == 0) {
      newValue = 1;
    } else {
      newValue = 0;
    }
    setAnswerState(newValue);
  };

  if (answerState === 0) {
    return (
      <>
        <button className="showHide" onClick={handleChange}>
          Hide Answer
        </button>
        <p>answerState: {answerState}</p>
      </>
    );
  } else {
    return (
      <>
        <button className="showHide" onClick={handleChange}>
          Show Answer
        </button>
        <p>answerState: {answerState}</p>
      </>
    );
  }
}
