import React from 'react'
import './Track-quiz.scss'
import track from '../../assets/images/tired-young-man-pulling-chain.jpg'
import { useNavigate } from 'react-router'

function Trackquiz({tag,session}) {
  const navigate = useNavigate()

  const handleClick = async() => {
    navigate(`/quiz/${session._id}?session=${session.session}&tag=${tag}`)    
  }

  return (
    <div className='track-quiz'>
    <div className="card-hover">
    <div className="card-hover__content">
      <h3 className="card-hover__title">
        Say no <span>to {tag}</span> Quit it!
      </h3>
      <div className="card-hover__link cursor-pointer" onClick={handleClick}>
        <span>Play Quiz</span>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </div>
    </div>
    <div className="card-hover__extra">
      <h4>Addiction is <span>not a friend. </span>Its  <span>the</span> greatest threat</h4>
    </div>
    <img src={track} alt="track"/>
  </div>
    </div>
  )
}

export default Trackquiz

