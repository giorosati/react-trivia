import { useState } from "react";

import "./App.css";
import Card from "./Card.jsx";
import NewButtonQuestion from "./NewQuestionButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="title">
        <h1>Star Trek Trivia</h1>
      </div>

      <div className="display">
        <Card />
        <div>
          <p className="score">score display</p>
          <p className="categoryPicker">category radio buttons</p>
          <NewButtonQuestion />
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
