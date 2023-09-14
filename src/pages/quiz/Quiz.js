import React, { useState } from "react";
import axios from "axios";
import "./Quiz.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

function Quiz() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState();
  const [submit, setSubmit] = useState([])

  const query = []
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  for (const entry of searchParams.entries()) {
    console.log(entry);
    query.push(entry)
  }

  const getQuestions = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`https://breakingfree.onrender.com/getquestions/${query[1][1]}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.data?.questions) {
          console.log(response.data);
          setQuestions(response.data.questions)
        } else {
          setQuestions([])
          console.log("sessions fetch failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])


  const optionClicked = (index) => {
    setSubmit((prev) => {
      return prev.push({
        qid: questions[currentQuestion]?._id,
        option_chosen: index
      })
    })
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <>
      {questions && <div className="Quiz_bg">
          <h1 className="Head2">Take a Short Quiz</h1>
          <p className="Head4">Choose the options that best describes your current situation.</p>


          {showResults ? (
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
            <div className="question-card">
              <div className="Ques-Ans">
                <h2 className="Head3">
                  Question:{currentQuestion + 1} out of {questions?.length}
                </h2>
                <h3 className="question-text">{questions[currentQuestion]?.question}</h3>
              </div>
              <ul className="Ques">
                {questions[currentQuestion]?.options.map((option, index) => {
                  return (
                    <li className={`Option option-${index}`}
                      key={index}
                      onClick={() => optionClicked(index)}
                    >
                      {option}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      }
    </>
  );
}

export default Quiz;