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
      text: "How has your excessive use of social media affected your daily life and relationships?",
      options: [
        { id: 0, text: "Badly" },
        {id: 1, text: "Highly" },
        { id: 2, text: "Medially"},
        { id: 3, text: "Less" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "2.How many hours a day ,do you usually invest in social media?",
      options: [
        { id: 0, text: "More than 12 hours"},
        { id: 1, text: "8-10 hours"},
        { id: 2, text: "4-6 hours"},
        { id: 3, text: "2-3 hours" },
        { id: 4, text: "Less than 2 hours"},
      ],
    },
    {
      text: "Can you describe any specific negative consequences or situations that have arisen due to your social media usage?",
      options: [
        { id: 0, text: "Depression and Anxiety"},
        { id: 1, text: "Cyberbullying and FOMO(Fear of missing out)"},
        { id: 2, text: "Unrealistic expectations and general addiction"},
        { id: 3, text: "Unrealistic sleep addiction" },
        { id: 4, text: "None"},
      ],
    },
    {
      text: "What are the situations or emotions that typically lead you to use social media excessively?",
      options: [
        { id: 0, text: "Low self-esteem"},
        { id: 1, text: "Personal Dissatisfaction"},
        { id: 2, text: "Depression and hyperactivity"},
        { id: 3, text: "Peer pressure" },
        { id: 4, text: "None"},
      ],
    },
    {
      text: "Do you find it hard to control your social media addiction?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "6.How does using social media make you feel?",
      options: [
        { id: 0, text: "Fulfilling"},
        { id: 1, text: "Fulfilling"},
        { id: 2, text: "Moderate"},
        { id: 3, text: "Draining" },
        { id: 4, text: "Unaffected"},
      ],
    },
    {
      text: "What do you think you're seeking or trying to fulfill through your use of social media?",
      options: [
        { id: 0, text: "Gain attention"},
        { id: 1, text: "Acting on peer pressure"},
        { id: 2, text: "Building self-esteem"},
        { id: 3, text: "Feeling connected" },
        { id: 4, text: "Nothing,just using"},
      ],
    },
    {
      text: "Do you thing social media is affecting your life?",
      options: [
        { id: 0, text: "Always"},
        { id: 1, text: "Often"},
        { id: 2, text: "Sometimes"},
        { id: 3, text: "Rarely" },
        { id: 4, text: "Not anymore"},
      ],
    },
    {
      text: "Would you be open to using tools or techniques that help you monitor and control your social media usage?",
      options: [
        { id: 0, text: "Never"},
      { id: 1, text: "Rarely"},
      { id: 2, text: "Sometimes"},
      { id: 3, text: "Often" },
      { id: 4, text: "Always"},
      ],
   },
   {
    text: "What steps can you take to prevent relapse and maintain a healthier relationship with social media in the long run?",
    options: [
      { id: 0, text: "None"},
      { id: 1, text: "Not interested"},
      { id: 2, text: "I will try"},
      { id: 3, text: "Take precautions" },
      { id: 4, text: "Work on improving everyday"},
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