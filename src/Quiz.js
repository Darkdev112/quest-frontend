import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const questions = [
    {
      text: "How often do you consume alcohol?",
      options: [
        { id: 0, text: "Always" },
        { id: 1, text: "Often" },
        { id: 2, text: "Ocassionally" },
        { id: 3, text: "Sometimes" },
        { id: 4, text: "Never" },
      ],
    },
    {
      text: "Have you tried to cut down or stop drinking in the past? If so, were you successful?",
      options: [
        { id: 0, text: "Yes,I was successful" },
        { id: 1, text: "Yes,not successful" },
        { id: 2, text: "Never" },
      ],
    },
    {
      text: "Have you experienced withdrawal symptoms when you stop drinking or reduce alcohol intake? ",
      options: [
        { id: 0, text: "Usually" },
        { id: 1, text: "Sometimes" },
        { id: 2, text: "Never" },
      ],
    },
    {
      text: "Have you continued to drink even though it has caused problems in your personal or professional life?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Has your alcohol consumption negatively affected your relationships with family and friends?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Have you neglected responsibilities or given up activities that were once important to you because of your alcohol use?",
      options: [
        { id: 0, text: "Often" },
        { id: 1, text: "Sometimes" },
        { id: 2, text: "Never" },
      ],
    },
    {
      text: "Have others expressed concern about your alcohol consumption?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "Yes,Sometimes" },
        { id: 2, text: "No" },
      ],
    },
    {
      text: "How many times do u pee ,have acidic stomach and a disturbed sleep cycle?",
      options: [
        { id: 0, text: "Often" },
        { id: 1, text: "Sometimes" },
        { id: 2, text: "Never" },
      ],
    },
    {
      text: "Do you have change in body temperature?",
      options: [
        { id: 0, text: "Often" },
        { id: 1, text: "Sometimes" },
        { id: 2, text: "Never" },
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
    navigate('/dashboard')
    window.location.reload(true)
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
        // <div className="final-results">
        //   {/* <h1>Final Results</h1>
        //   <h2>
        //     {score} out of {questions.length} correct - (
        //     {(score / questions.length) * 100}%)
        //   </h2> */}
        //   <h2 className="Head4">See your performance analysis</h2>
        //   <button onClick={() => restartGame()}>Analysis</button>
        // </div>
        <>
          <div class="circle-wrap">
            <div class="circle">
              <div class="mask full">
                <div class="fill"></div>
              </div>
              <div class="mask half">
                <div class="fill"></div>
              </div>
              <div class="inside-circle"> 75% </div>
            </div>
          </div>
          <div>
            <button onClick={restartGame}>Dashboard</button>
          </div>
        </>
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
                <li className="Options"
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

export default Quiz;