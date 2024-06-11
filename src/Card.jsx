export default function Card({ id, category, question, answer, answerState }) {
  if (answerState === 0) {
    return (
      <>
        <div className="card">
          <div className="category">{category}</div>
          <h3 className="question">
            <i>Q:&nbsp;&nbsp; </i> {question}
          </h3>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card">
          <div className="category">{category}</div>
          <h3 className="question">
            <i>Q:&nbsp;&nbsp;</i> {question}
          </h3>
          <h3 className="answer">
            <i>A:&nbsp;&nbsp;</i> {answer}
          </h3>
        </div>
      </>
    );
  }
}
