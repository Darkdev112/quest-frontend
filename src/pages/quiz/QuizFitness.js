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
      text: "Are you obsessed about fitness and have a less social activity circle?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Do you feel anxious and guilty when you miss a workout?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Do you find it challenging to take rest days?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Have you ever experienced any physical discomfort or injuries due to your intense workouts?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Is it easy to balance your fitness routine with other aspects of your life, such as work, social activities, and family?",
      options: [
        { id: 0, text: "Never"},
        { id: 1, text: "Rarely"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Often" },
        { id: 4, text: "Always"},
      ],
    },
    {
      text: "Have you noticed any changes in your mood or emotions on days when you haven't exercised?",
      options: [
        { id: 0, text: "Very badly"},
        { id: 1, text: "Badly"},
        { id: 2, text: "Moderately"},
        { id: 3, text: "Balanced" },
        { id: 4, text: "None,I am cured"},
      ],
    },
    {
      text: "Do you ever take breaks from your fitness routine intentionally?",
      options: [
      { id: 0, text: "Never"},
      { id: 1, text: "Rarely"},
      { id: 2, text: "Sometimes"},
      { id: 3, text: "Often" },
      { id: 4, text: "Always"},
      ],
    },
    {
      text: "Do you experience withdrawal symptoms after long periods without exercise?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "How do you feel about the idea of having a more flexible approach to your fitness routine?",
      options: [
        { id: 0, text: "Negative"},
        { id: 1, text: "Bad"},
        { id: 2, text: "Neutral"},
        { id: 3, text: "Good" },
        { id: 4, text: "Positive"},
      ],
   },
   {
    text: "Have you ever tried to give up Fitness addiction?",
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