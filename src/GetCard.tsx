function GetCard(cardId) {
  const currentCard = triviaCards[cardId]; // Accesses the first card (index 0)
  const series = currentCard.series;
  const question = currentCard.question; // Accesses the question property of the first card
  const answer = currentCard.answer;

  return (
    <>
      <div className="card">
        <div className="series"> {series} </div>

        <h3 className="question">Q: {question}</h3>
        <h2 className="answer">A: {answer}</h2>
        <p className="cardId">{cardId}</p>
      </div>
    </>
  );
}
