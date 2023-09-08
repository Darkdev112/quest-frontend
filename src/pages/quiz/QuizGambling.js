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
  const min = 1;
  const max = 5;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  const questions = [
    {
      text: "What types of gambling activities do you engage in?",
      options: [
        { id: 0, text: "All kinds" },
        {id: 1, text: "Casino" },
        { id: 2, text: "Online gamblings,sports bettings"},
        { id: 3, text: "Just one activities" },
        { id: 4, text: "None"},
      ],
    },
    {
      text: "How often do you gamble?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Never"},
       
      ],
    },
    {
      text: "Have you experienced a pattern of increasing bets or gambling more frequently over time?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Never"},
       
      ],
    },
    {
      text: "Can you identify specific situations, emotions, or triggers that lead you to gamble?",
      options: [
        { id: 0, text: "Depression and Anxiety"},
        { id: 1, text: "Stress"},
        { id: 2, text: "Peer pressure"},
        { id: 3, text: "Interests" },
        { id: 4, text: "None"},
      
      ],
    },
    {
      text: "What negative consequences have you experienced as a result of your gambling?",
      options: [
        { id: 0, text: "Financial Problems"},
        { id: 1, text: "Legal Issues"},
        { id: 2, text: "Stained Relations."},
        { id: 3, text: "Bad influence" },
        { id: 4, text: "None"},
    
      ],
    },
    {
      text: "Has gambling affected your life?",
      options: [

        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},


      ],
    },
    {

      text: "Have you tried to quit gambling in the past?",

      text: "Have others expressed concern about your alcohol consumption?",

      options: [

        { id: 0, text: "Every year"},
        { id: 1, text: "Every 6 months"},
        { id: 2, text: "Few months ago"},
        { id: 3, text: "This week" },
        { id: 4, text: "Few days ago"},

  
      ],
    },
    {
      text: "Do you find it difficult to stop gambling once you've started?",
      options: [

        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},

      ],
    },
    {
      text: "Do you want to replace gambling with some healthier coping mechanisms?",
      options: [

        { id: 0, text: "Never"},
      { id: 1, text: "Rarely"},
      { id: 2, text: "Sometimes"},
      { id: 3, text: "Often" },
      { id: 4, text: "Always"},
      ],
   },
   {
    text: " Would you like to handle moments when you feel the urge to gamble?",
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
        <>
          {randomNum===1 &&<div class="circle-wrap">
            <div class="circle">
              <div class="mask full">
                <div class="fill"></div>
              </div>
              <div class="mask half">
                <div class="fill"></div>
              </div>
              <div class="inside-circle"> 70% </div>
            </div>
          </div>}
          {randomNum===2 &&<div class="circle-wrap">
            <div class="circle">
              <div class="mask full">
                <div class="fill"></div>
              </div>
              <div class="mask half">
                <div class="fill"></div>
              </div>
              <div class="inside-circle"> 75% </div>
            </div>
          </div>}
          {randomNum===3 &&<div class="circle-wrap">
            <div class="circle">
              <div class="mask full">
                <div class="fill"></div>
              </div>
              <div class="mask half">
                <div class="fill"></div>
              </div>
              <div class="inside-circle"> 85% </div>
            </div>
          </div>}
          {randomNum===4 &&<div class="circle-wrap">
            <div class="circle">
              <div class="mask full">
                <div class="fill"></div>
              </div>
              <div class="mask half">
                <div class="fill"></div>
              </div>
              <div class="inside-circle"> 81% </div>
            </div>
          </div>}
          {randomNum===5 &&<div class="circle-wrap">
            <div class="circle">
              <div class="mask full">
                <div class="fill"></div>
              </div>
              <div class="mask half">
                <div class="fill"></div>
              </div>
              <div class="inside-circle"> 79% </div>
            </div>
          </div>}
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