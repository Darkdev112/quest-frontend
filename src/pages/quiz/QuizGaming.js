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
      text: "How many hours do you spend on gaming?",
      options: [
        { id: 0, text: "More than 12 hours" },
        {id: 1, text: "8-10 hours" },
        { id: 2, text: "4-6 hours"},
        { id: 3, text: "2-3 hours" },
        { id: 4, text: "Less than 2 hours"},
      ],
    },
    {
      text: "How did you first become interested in gaming?",
      options: [
        { id: 0, text: "Depression"},
        { id: 1, text: "Peer pressure"},
        { id: 2, text: "Impulse"},
        { id: 3, text: "Relaxation" },
        { id: 4, text: "Never"},
      ],
    },
    {
      text: "What types of games do you usually play, and what do you enjoy about them?",
      options: [
        { id: 0, text: "Multiplayer video games"},
        { id: 1, text: "Action games"},
        { id: 2, text: "Simulation video games"},
        { id: 3, text: "Role playing and puzzle games" },
        { id: 4, text: "Casual games"},
      ],
    },
    {
      text: "When did you start feeling that gaming might be interfering with other aspects of your life?",
      options: [
        { id: 0, text: "More than 6 months ago"},
        { id: 1, text: "Few months ago"},
        { id: 2, text: "Last month"},
        { id: 3, text: "Few weeks ago" },
        { id: 4, text: "Few days ago"},
      ],
    },
    {
      text: "Has excessive gaming affected your relationships with family and friends?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Have you noticed any changes in your academic or work performance due to gaming?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "How do you feel when you're gaming?",
      options: [
        { id: 0, text: "Energetic"},
        { id: 1, text: "Stress-free"},
        { id: 2, text: "Good"},
        { id: 3, text: "Balanced" },
        { id: 4, text: "Neutral"},
      ],
    },
    {
      text: "Have you noticed any changes in your mood when you're not able to game as much as you'd like?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not Anymore"},
      ],
    },
    {
      text: "How has gaming impacted your social interactions and connections with others?",
      options: [
        { id: 0, text: "Very badly"},
        { id: 1, text: "Badly"},
        { id: 2, text: "Moderately"},
        { id: 3, text: "Balanced" },
        { id: 4, text: "None,I am cured"},
      ],
   },
   {
    text: "Have you tried any strategies to cut back on gaming or manage your gaming time in the past?",
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