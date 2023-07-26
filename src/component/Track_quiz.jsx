import React from 'react'
import './Track-quiz.scss'
import quiz_img from '../Assets/images/tired-young-man-pulling-chain.jpg'

function Track_quiz() {
  return (
    <div className='track-quiz'>
    <div class="card-hover">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
        Say <span>no</span> to alcohol!
      </h3>
      {/*<p class="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>*/}      <a href="#" class="card-hover__link">
        <span>Start Quiz</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4><span>Throw the alcohol</span> before it throw<span> you away!</span></h4>
    </div>
    <img src={quiz_img} alt=""/>
  </div>
    </div>
  )
}

export default Track_quiz

