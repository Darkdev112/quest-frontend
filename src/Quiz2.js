import React, { useState } from "react";
import "./App.css";

function Quiz2() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "How often do you engage in gambling activities?",
      options: [
        { id: 0, text: "Most often" },
        { id: 1, text: "Often" },
        { id: 2, text: "once a week"},
        { id: 3, text: "twice a week" },
        { id: 4, text: "rare"},
      ],
    },
    {
      text: "Have you tried to cut down or stop gambling, but found it difficult to do so?",
      options: [
        { id: 0, text: "Yes"},
        { id: 1, text: "Sometimes"},
        { id: 2, text: "No"},
      ],
    },
    {
      text: "Have you ever borrowed money or sold personal items to fund your gambling activities? ",
      options: [
        { id: 0, text: "Yes"},
        { id: 1, text: "Sometimes"},
        { id: 2, text: "No"},
      ],
    },
    {
      text: "Do you experience restlessness or irritability when you're unable to gamble? ",
      options: [
        { id: 0, text: "Usually" },
        { id: 1, text: "Sometimes"},
        { id: 2, text: "Never"},
      ],
    },
    {
      text: "Have your gambling habits negatively impacted your relationships with family or friends?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No"},
      ],
    },
    {
      text: "Have you neglected work, school, or other important responsibilities due to gambling? ",
      options: [
        { id: 0, text: "Often" },
        { id: 1, text: "Sometimes"},
        { id: 2, text: "Never" },
      ],
    },
    {
      text: "Has gambling led to financial difficulties or debt for you? ",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "Yes,Sometimes"},
        { id: 2, text: "No" },
      ],
    },
    {
      text: "Do you gamble as a way to cope with stress, anxiety, or depression?  ",
      options: [
        { id: 0, text: "Get rid from stress and anxiety " },
        { id: 1, text: "Get rid from depression"},
        { id: 2, text: " As a mode of entertainment" },
      ],
    },
    {
      text: "Have you sought help or advice for gambling-related issues in the past?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "Sometimes"},
        { id: 2, text: "Never" },
    ],
   },
   {
    text: "Have you ever tried to hide your gambling activities from others?",
    options: [
      { id: 0, text: "Yes" },
      { id: 1, text: "Sometimes"},
      { id: 2, text: "No" },
  ],
 },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className="Head2">Take a Short Quiz</h1>

      {/* 2. Current Score  */}
      {/* <h2>Score: {score}</h2> */}

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          {/* <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2> */}
          <h2 className="Head4">See your performance analysis</h2>
          <button onClick={() => restartGame()}>Analysis</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <div className="Ques-Ans">
          <h2 className="Head3">
            Question:{currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          </div>
          {/* List of possible answers  */}
          <ul className="Ques">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz2;