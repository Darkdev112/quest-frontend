import React, { useState } from "react";
// import "./App.css";
import "./Quiz.css";
import { useNavigate } from "react-router";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const questions = [
    {
      text: "When did you start drinking  alcohol and how has your drinking pattern evolved over the years?",
      options: [
        { id: 0, text: "More than 2 years ago." },
        {id: 1, text: "A year ago." },
        { id: 2, text: "6 months ago."},
        { id: 3, text: "6 months ago." },
        { id: 4, text: "Few weeks ago."},
      ],
    },
    {
      text: "How often do you drink alcohol?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Never"},
      ],
    },
    {
      text: "Have you experienced any blackouts or memory lapse due to alcohol?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Never"},
      ],
    },
    {
      text: "Are there any specific situations or emotions or triggers that lead you to drnik?",
      options: [
        { id: 0, text: "Depression and Anxiety"},
        { id: 1, text: "Stress"},
        { id: 2, text: "Peer pressure"},
        { id: 3, text: "Interests" },
        { id: 4, text: "None"},
      ],
    },
    {
      text: "Has alcohol affected your academic or work performances?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Do you find it difficult to control the amount you drink once you start?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Have your relationships with family, friends, or colleagues been affected by your drinking?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Have you ever tried to quit alcohol?",
      options: [
        { id: 0, text: "Every year"},
        { id: 1, text: "Every 6 months"},
        { id: 2, text: "Few months ago"},
        { id: 3, text: "This week" },
        { id: 4, text: "Few days ago"},
      ],
    },
    {
      text: "Have you experienced withdrawal symptoms when you've tried to stop drinking in the past?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Never"},
      ],
   },
   {
    text: "Have you participated in any alcohol treatment programs or therapy sessions in the past?",
    options: [
      { id: 0, text: "Never"},
      { id: 1, text: "Rarely"},
      { id: 2, text: "Sometimes"},
      { id: 3, text: "Often" },
      { id: 4, text: "Always"},
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
  };

  return (
    <div className="Quiz_bg">
      {/* 1. Header  */}
      <h1 className="Head2">Take a Short Quiz</h1>
      <p className="Head4">Choose the options that best describes your current situation.</p>

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
                <li className={`Option option-${option.id}`}
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