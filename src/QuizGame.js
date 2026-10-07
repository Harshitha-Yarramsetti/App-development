import { useState } from "react";

function QuizGame({
  title,
  questions,
  pin,
  onHome,
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function selectAnswer(index) {
    if (selected !== null) return;

    setSelected(index);

    if (index === question.correctAnswer) {
      setScore((oldScore) => oldScore + 1);
    }
  }

  function nextQuestion() {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrent(current + 1);
    setSelected(null);
  }

  if (finished) {
    return (
      <div className="game-page result-page">
        <div className="result-card">
          <div className="trophy">🏆</div>

          <span className="result-label">
            QUIZ COMPLETE
          </span>

          <h1>Great job!</h1>

          <div className="final-score">
            {score}
            <small>/{questions.length}</small>
          </div>

          <p>Your final score</p>

          <button
            className="start-quiz"
            onClick={onHome}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-page">

      <div className="game-navbar">
        <button
          className="back-button white-back"
          onClick={onHome}
        >
          ← Exit
        </button>

        <div className="game-pin">
          GAME PIN:
          <strong>{pin}</strong>
        </div>
      </div>

      <div className="game-content">

        <div className="game-info">
          <span>
            QUESTION {current + 1} OF {questions.length}
          </span>

          <h1>{title}</h1>

          <div className="progress-bar">
            <div
              style={{
                width: `${
                  ((current + 1) / questions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        <div className="question-display">
          <h2>{question.question}</h2>
        </div>

        <div className="game-answers">
          {question.options.map((option, index) => {

            let answerClass = "";

            if (selected !== null) {
              if (index === question.correctAnswer) {
                answerClass = "correct";
              } else if (index === selected) {
                answerClass = "wrong";
              }
            }

            return (
              <button
                key={index}
                className={`game-answer answer-color-${index} ${answerClass}`}
                onClick={() => selectAnswer(index)}
                disabled={selected !== null}
              >
                <span className="answer-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                {option}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <button
            className="next-question"
            onClick={nextQuestion}
          >
            {current === questions.length - 1
              ? "Finish Quiz"
              : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizGame;