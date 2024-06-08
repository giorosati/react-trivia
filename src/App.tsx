import { useState } from "react";

import "./App.css";
import Card from "./Card.js";
import NewButtonQuestion from "./NewQuestionButton.js";

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
    series: "TOS",
    question: "What city and state was Captain James T. Kirk born in?",
    answer: "Riverseriese, Iowa",
  },
  {
    cardId: 2,
    series: "TOS",
    question: "Who was the communications officer serving with Captain Kirk?",
    answer: "Lt. Ohura",
  },
];

// array to keep track of cards that have been played in current session
const playedCards = [];

function App() {
  const [count, setCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  let currentCard = 1;

  const selectedCard = triviaCards[currentCard];

  return (
    <>
      <div className="title">
        <h1>Star Trek Trivia</h1>
      </div>

      <div className="display">
        <Card
          id={selectedCard.cardId}
          category={selectedCard.series}
          question={selectedCard.question}
          answer={selectedCard.answer}
        />
        <div className="sidePanel">
          <p className="score">score display</p>
          <p className="categoryPicker">category radio buttons</p>
          <NewButtonQuestion />
        </div>
      </div>
    </>
  );
}

export default App;

// old mapping of cards:
{
  /* {triviaCards.map((triviaCard) => {
            return (
              <Card
                key={triviaCard.cardId}
                category={triviaCard.category}
                question={triviaCard.question}
                answer={triviaCard.answer}
              />
            );
          })} */
}
