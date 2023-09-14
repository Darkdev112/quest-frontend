import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.scss'
import avatar from '../../assets/images/img_avatar2.png'
import checkup from '../../assets/images/12810348_5063406-removebg-preview.png'
import Trackquiz from '../../component/progress/Trackquiz'
import Barr from '../../component/progress/Barr'
import Daily_progress from '../../component/quiz_score/Daily_progress'
import { useNavigate } from 'react-router'

function Dashboard({ userDetails }) {
  const [projectsDetails, setProjectDetails] = useState();
  const navigate = useNavigate()
  console.log(userDetails);

  const getProjectDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('http://localhost:8000/getprojects', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.data?.projects) {
          setProjectDetails(response.data.projects)
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
          window.location.reload(true)
        }
      }
    } catch (error) {
      console.log("unsuccessful logout");
    }
  }

  useEffect(() => {
    getProjectDetails()
  }, [])

  return (
    <div className='dashboard'>
      <div className="split left">
        <div className='left-container'>
          <div className="centered">
            <img src={avatar} alt="Avatar woman" />
            <h2>{userDetails?.email}</h2>
          </div>
          <div className='image-checkup'>
            <img src={checkup} />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='header-activities'>Your Domains</h2>
          <div className='lg:w-3/4 sm:w-full m-2 h-[10rem] flex flex-col items-center'>
            {!projectsDetails?.length && <p>No projects to display</p>}
            {projectsDetails?.length && projectsDetails.map((project) => {
              return <div className='bg-red-100 h-[2rem] my-2 w-fit px-2 text-lg rounded-lg hover:bg-red-500 cursor-pointer active:bg-red-500'>{project.addiction}</div>
            })}
          </div>
        </div>
      </div>

      <div className="split right">
        <div className='navb'>

          <div className='header-right'>
            <h2>Hi,{userDetails?.username}</h2>
            <h6>Lets track your health daily</h6>

            <h2 className='header-activities'>Your Daily Quizes</h2>
          </div>
          <button className='LogOut' onClick={handleLogout}>Log Out</button>

        </div>
        <div className='track'>
          <Trackquiz />
        </div>
        <div className='cards'>
          <div className="Card1">
            <div className='Cart1c'>
              <h4>Upcoming Quizes</h4>
              <p>See the upcoming quizes here..</p>
              <p>The next quiz will be on 28th Sep 23</p>
            </div>

            <button className="Card1b">Attempt Quiz</button>

          </div>
          <div className="Card2">
            <div className='Cart2c'>
              <h4>Quizes Attempted</h4>
              <p>See the attempted quizes here..</p>
              <p>Your progress is what keeps you updated</p>
            </div>

            <button className="Card2b">Attempted</button>

          </div>
          <div className="Card3">
            <div className='Cart3c'>
              <h4>Prevent</h4>
              <p>Take the precautions while you can</p>
              <p>Hop on to see the tips to prevent..</p>
            </div>

            <button className="Card3b">Prevent</button>

          </div>
        </div>



        <div className='activities'>
          <div className='activities-content'>
            <h2 className='header-activities'>Your daily quizes</h2>
            <div className='dropdown'>
              <select className="form-select" id="week" name="week">
                <option value="">Once a day</option>
                <option value="twice a week">Twice a week</option>
                <option value="once in a month">Once in a month</option>
                <option value="twice a month">Twice a month</option>
              </select>
            </div>

          </div>
          <div>

          </div>
          {/* <div className='progress'>
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
  </div> */}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
