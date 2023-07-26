import React from 'react'
import './Dashboard.scss'
import avatar from '../Assets/images/img_avatar2.png'
import checkup from '../Assets/images/12810348_5063406-removebg-preview.png'
import Track_quiz from '../component/Track_quiz'


function Dashboard() {
  return (
    <div className='dashboard'>
    <div class="split left">
    <div className='left-container'>
    <div class="centered">
    <img src={avatar} alt="Avatar woman"/>
    <h2>Check your condition</h2>
    <p> Check your every situation and your activities</p>
    </div>
    <div className='image-checkup'>
    <img src={checkup} />
    </div>
    </div>
  </div>
  
  <div class="split right">
  <div className='header-right'>
   <h2>Hi,Ayush</h2>
   <h6>Lets track your health daily</h6>
   </div>
   <div className='daily-quiz'>
   <h2>Your Daily Quizzes</h2>
   </div>
   <div className='track'>
   <Track_quiz/>
   </div>
  <div className='activities'>
  <div className='activities-content'>
  <h2>Your progress activities</h2>
  </div>
  </div>
  </div>
  
    </div>
  )
}

export default Dashboard
