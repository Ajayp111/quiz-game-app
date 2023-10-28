import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CorrectAnswers, IncorrectAnswers } from "./AnswersSummary";
const Game = () => {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Venus", "Jupiter", "Mars"],
      correctAnswer: "Jupiter",
    },
    {
      question:
        "Which gas do plants absorb from the atmosphere during photosynthesis?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Leo Tolstoy",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: ["China", "Japan", "South Korea", "Vietnam"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the largest mammal in the world?",
      answers: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "In which year did the Titanic sink?",
      answers: ["1912", "1923", "1935", "1947"],
      correctAnswer: "1912",
    },
    {
      question: "What is the chemical symbol for water?",
      answers: ["H2O", "CO2", "O2", "NaCl"],
      correctAnswer: "H2O",
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: "Nitrogen",
    },
    {
      question:
        "Who was the first woman to fly solo across the Atlantic Ocean?",
      answers: [
        "Amelia Earhart",
        "Harriet Quimby",
        "Bessie Coleman",
        "Valentina Tereshkova",
      ],
      correctAnswer: "Amelia Earhart",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Venus", "Mercury"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest organ in the human body?",
      answers: ["Heart", "Brain", "Skin", "Liver"],
      correctAnswer: "Skin",
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the currency of Japan?",
      answers: ["Yen", "Dollar", "Euro", "Pound"],
      correctAnswer: "Yen",
    },
    {
      question: "Which gas do plants release during photosynthesis?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Oxygen",
    },
    {
      question: "Who wrote the 'Harry Potter' book series?",
      answers: [
        "J.R.R. Tolkien",
        "C.S. Lewis",
        "J.K. Rowling",
        "George R.R. Martin",
      ],
      correctAnswer: "J.K. Rowling",
    },
    {
      question: "What is the chemical symbol for silver?",
      answers: ["Si", "Sv", "Au", "Ag"],
      correctAnswer: "Ag",
    },
    {
      question:
        "In which country was the game of chess believed to have originated?",
      answers: ["India", "China", "Egypt", "Greece"],
      correctAnswer: "India",
    },
    {
      question: "Which gas is responsible for the Earth's ozone layer?",
      answers: [
        "Oxygen",
        "Carbon Dioxide",
        "Ozone",
        "Chlorofluorocarbons (CFCs)",
      ],
      correctAnswer: "Ozone",
    },
    {
      question: "Who is known as the father of modern physics?",
      answers: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Stephen Hawking",
      ],
      correctAnswer: "Albert Einstein",
    },
  ];
  const totalQuestions = questions.length;

  const handleAnswerClick = (answer) => {
    if (answer === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (questionIndex === questions.length - 1) {
      // The user has completed the game
      navigate("/results", { state: { score } });
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">
        Question {questionIndex + 1} of {totalQuestions}
      </h1>
      <h2 className="text-lg font-semibold mb-4">
        {questions[questionIndex].question}
      </h2>
      <ul className="space-y-4">
        {questions[questionIndex].answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className="cursor-pointer py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
