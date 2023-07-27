import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.scss'
import avatar from '../Assets/images/img_avatar2.png'
import checkup from '../Assets/images/12810348_5063406-removebg-preview.png'
import Trackquiz from '../component/Trackquiz'
import Barr from '../component/Barr'
import Daily_progress from '../component/Daily_progress'
import { useNavigate } from 'react-router'

function Dashboard() {
  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate()

  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      if (token) {
        const response = await axios.get('http://localhost:8000/getuser', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.data?.user) {
          setUserDetails(response.data.user)
          console.log("dashboard data : ", response.data.user);
        } else {
          console.log("single user fetch failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    try {
      if (token) {
        const response = await axios.delete('http://localhost:8000/logout', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.status === 200) {
          localStorage.removeItem('token')
          navigate('/')
        }
      }
    } catch (error) {
      console.log("unsuccessful logout");
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [])
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
    {userDetails && <div className='logout'>
          <button onClick={handleLogout}>Logout</button>
    </div>}
  <div className='header-right'>
   <h2>Hi,Ananya</h2>
   <h6>Lets track your health daily</h6>
   </div>
   <div className='daily-quiz'>
   <h2>Your Daily Quizzes</h2>
   </div>
   <div className='track'>
   <Trackquiz/>
   </div>
  <div className='activities'>
  <div className='activities-content'>
  <div className='header-activities'>
  <h2>Your progress activities</h2>
  </div>
  <div className='dropdown'>
  <select class="form-select" id="week" name="week">
    <option value="">Once a day</option>
    <option value="twice a week">Twice a week</option>
    <option value="once in a month">Once in a month</option>
    <option value="twice a month">Twice a month</option>
</select>
  </div>
  </div>
  <div className='progress'>
  <div className='bar'>
<Barr/>
  </div>
  <div className='daily-progress'>
  <div className='progress-head'>
 <h2>Daily Progress</h2>
 <p>Keep improving the quality of ur health</p>
  </div>
  <div className='indicator'>
<Daily_progress/>
</div>
  </div>
  </div>
  </div>
  </div>
  
    </div>
  )
}

export default Dashboard
