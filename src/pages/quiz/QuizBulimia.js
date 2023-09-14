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
      text: "How often are you engaging in bingeing and purging behaviors?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Never"},
      ],
    },
    {
      text: "What are some of the thoughts and feelings that lead to episodes of bingeing and purging?",
      options: [
        { id: 0, text: "Depression"},
        { id: 1, text: "Anxiety"},
        { id: 2, text: "Insecurity about body shape"},
        { id: 3, text: "Low self-esteem" },
        { id: 4, text: "Genetic and social ideas"},
      ],
    },
    {
      text: "How is your experience with bulimia?:",
      options: [
        { id: 0, text: "Very badly"},
        { id: 1, text: "Badly"},
        { id: 2, text: "Moderately"},
        { id: 3, text: "Balanced" },
        { id: 4, text: "None,I am cured"},
      ],
    },
    {
      text: "Do you feel in control during these episodes of bulimia, or does it feel more impulsive?:",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Are you experiencing any physical symptoms as a result of your behaviors?:",
      options: [
        { id: 0, text: "Swollen cheeks ,fainting"},
        { id: 1, text: "Dehydration"},
        { id: 2, text: "Bloodshot eyes and Gastrointestinal issues"},
        { id: 3, text: "Some symptoms but not regular" },
        { id: 4, text: "None,I am cured"},
      ],
    },
    {
      text: "Has bulimia affected your daily life, relationships, and overall well-being?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Have you ever tried to stop these behaviors on your own?",
      options: [
        { id: 0, text: "Never"},
      { id: 1, text: "Rarely"},
      { id: 2, text: "Sometimes"},
      { id: 3, text: "Often" },
      { id: 4, text: "Always"},
      ],
    },
    {
      text: "Do you have a support system in place, such as friends, family, or other loved ones?",
      options: [
        { id: 0, text: "Never"},
        { id: 1, text: "Rarely"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Often" },
        { id: 4, text: "Always"},
      ],
    },
    {
      text: "How do you feel about the idea of working towards a healthier relationship with food and your body?",
      options: [
        { id: 0, text: "Do not appreciate"},
        { id: 1, text: "Bad"},
        { id: 2, text: "Moderate"},
        { id: 3, text: "Good" },
        { id: 4, text: "Very good"},
      ],
   },
   {
    text: "10.Would you be open to exploring coping strategies that don't involve bingeing and purging?",
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
        <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> 75% </div>
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