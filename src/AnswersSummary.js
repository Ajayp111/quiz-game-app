import React from "react";

const CorrectAnswers = ({ questions }) => (
  <div>
    <h2>Correct Answers</h2>
    <ul>
      {questions
        .filter((question) => question.isCorrect)
        .map((question, index) => (
          <li key={index}>{question.question}</li>
        ))}
    </ul>
  </div>
);

const IncorrectAnswers = ({ questions }) => (
  <div>
    <h2>Incorrect Answers</h2>
    <ul>
      {questions
        .filter((question) => !question.isCorrect)
        .map((question, index) => (
          <li key={index}>{question.question}</li>
        ))}
    </ul>
  </div>
);

export { CorrectAnswers, IncorrectAnswers };
