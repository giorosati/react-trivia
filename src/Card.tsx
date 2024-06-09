export default function Card({ id, category, question, answer, answerState }) {
  if (answerState === 0) {
    return (
      <>
        <div className="card">
          <div className="category">{category}</div>
          <h3 className="question">Q: {question}</h3>
          <p className="cardId">{id}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card">
          <div className="category">{category}</div>
          <h3 className="question">Q: {question}</h3>
          <h2 className="answer">A: {answer}</h2>
          <p className="cardId">{id}</p>
        </div>
      </>
    );
  }
}
