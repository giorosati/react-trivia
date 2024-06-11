import { useState } from "react";

import "./App.css";
import Card from "./Card.jsx";
import SidePanel from "./SidePanel.jsx";
import PrevButton from "./PrevButton.jsx";
import NextButton from "./NextButton.jsx";
import ShowHideAnswer from "./ShowHideAnswer.jsx";

const category = [
  {
    series: "TOS",
    name: "Star Trek: The Original Series",
    date: "September 8, 1966",
  },
  {
    series: "TAS",
    name: "Star Trek: The Animated Series",
    date: "September 8, 1973",
  },
  {
    series: "TNG",
    name: "Star Trek: The Next Generation",
    date: "September 28, 1987",
  },
  {
    series: "DS9",
    name: "Star Trek: Deep Space Nine",
    date: "January 3, 1993",
  },
  { series: "VOY", name: "Star Trek: Voyager", date: "January 16, 1995" },
  { series: "ENT", name: "Star Trek: Enterprise", date: "September 26, 2001" },
  { series: "DIS", name: "Star Trek: Discovery", date: "September 24, 2017" },
  { series: "Pic", name: "Star Trek: Picard", date: "January 23, 2020" },
  { series: "LD", name: "Star Trek: Lower Decks", date: "August 6, 2020" },
  { series: "PRO", name: "Star Trek: Prodigy", date: "October 28, 2021" },
  { series: "SNW", name: "Star Trek: Strange New Worlds", date: "May 5, 2022" },
];

const triviaCards = [
  {
    cardId: 1,
    series: "Star Trek: The Original Series",
    question: "What city and state was Captain James T. Kirk born in?",
    answer: "Riverside, Iowa",
  },
  {
    cardId: 2,
    series: "Star Trek: The Original Series",
    question: "Who was the communications officer serving with Captain Kirk?",
    answer: "Lieutenant Uhura",
  },
  {
    cardId: 3,
    series: "Star Trek: The Original Series",
    question:
      "What is the designation of the Enterprise in the Original Series?",
    answer: "USS Enterprise (NCC-1701)",
  },
  {
    cardId: 4,
    series: "Star Trek: The Original Series",
    question: "What was the name of Captain Kirk's brother?",
    answer: "George Samuel Kirk",
  },
  {
    cardId: 5,
    series: "Star Trek: The Original Series",
    question: "Who was the chief medical officer aboard the Enterprise?",
    answer: "Dr. Leonard McCoy",
  },
  {
    cardId: 6,
    series: "Star Trek: The Original Series",
    question:
      "What Vulcan served as science officer and first officer under Captain Kirk?",
    answer: "Spock",
  },
  {
    cardId: 7,
    series: "Star Trek: The Original Series",
    question: "What is the name of the Klingon homeworld?",
    answer: "Qo'noS",
  },
  {
    cardId: 8,
    series: "Star Trek: The Original Series",
    question: "Who was the helmsman often seen piloting the Enterprise?",
    answer: "Hikaru Sulu",
  },
  {
    cardId: 9,
    series: "Star Trek: The Original Series",
    question: "What is the name of the Chief Engineer of the Enterprise?",
    answer: "Montgomery Scott",
  },
  {
    cardId: 10,
    series: "Star Trek: The Original Series",
    question: "What is the nickname Dr. McCoy often uses for Spock?",
    answer: "Pointy-Eared",
  },
  {
    cardId: 11,
    series: "Star Trek: The Original Series",
    question: "Which ship did Captain Kirk serve on before the Enterprise?",
    answer: "USS Farragut",
  },
  {
    cardId: 12,
    series: "Star Trek: The Original Series",
    question:
      "What was the name of the first Romulan ship encountered by the Enterprise?",
    answer: "The Bird-of-Prey",
  },
  {
    cardId: 13,
    series: "Star Trek: The Original Series",
    question: "What was the name of Spock's father?",
    answer: "Sarek",
  },
  {
    cardId: 14,
    series: "Star Trek: The Original Series",
    question:
      "What famous battle did Captain Kirk participate in at Starfleet Academy?",
    answer: "The Kobayashi Maru scenario",
  },
  {
    cardId: 15,
    series: "Star Trek: The Original Series",
    question:
      "What is the title of the first episode of Star Trek: The Original Series to air on television?",
    answer: "The Man Trap",
  },
  {
    cardId: 16,
    series: "Star Trek: The Original Series",
    question: "What device does Dr. McCoy often use for medical scans?",
    answer: "The tricorder",
  },
  {
    cardId: 17,
    series: "Star Trek: The Original Series",
    question: "What species is known for saying 'Resistance is futile'?",
    answer: "The Borg",
  },
  {
    cardId: 18,
    series: "Star Trek: The Original Series",
    question: "What is the name of the bartender at Ten Forward?",
    answer: "Guinan",
  },
  {
    cardId: 19,
    series: "Star Trek: The Original Series",
    question:
      "Who was Captain Kirk's best friend from his time at Starfleet Academy?",
    answer: "Gary Mitchell",
  },
  {
    cardId: 20,
    series: "Star Trek: The Original Series",
    question: "What is the name of Spock's human mother?",
    answer: "Amanda Grayson",
  },
];

function App() {
  // const [count, setCount] = useState(0);
  // const [correctCount, setCorrectCount] = useState(0);
  const totalCards = 20;
  const [answerState, setAnswerState] = useState(0);
  const [cardId, setCardId] = useState(0);
  // let score = [9, 7];

  const selectedCard = triviaCards[cardId];
  const resetAnswerState = () => {
    setAnswerState(0);
  };

  return (
    <>
      <div className="title">
        <h1>Star Trek™ Trivia</h1>
      </div>

      <div className="display">
        <Card
          id={selectedCard.cardId}
          category={selectedCard.series}
          question={selectedCard.question}
          answer={selectedCard.answer}
          answerState={answerState}
        />
        <div className="sidePanel">
          <ShowHideAnswer
            answerState={answerState}
            setAnswerState={setAnswerState}
          />
          <PrevButton
            cardId={cardId}
            setCardId={setCardId}
            totalCards={totalCards}
            resetAnswerState={resetAnswerState}
          />
          <NextButton
            cardId={cardId}
            setCardId={setCardId}
            totalCards={totalCards}
            resetAnswerState={resetAnswerState}
          />
        </div>
      </div>
    </>
  );
}

export default App;
