import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.scss'
import avatar from '../../assets/images/img_avatar2.png'
import checkup from '../../assets/images/12810348_5063406-removebg-preview.png'
import { useNavigate } from 'react-router'
import DashDynamic from '../../component/dashdynamic/DashDynamic'

function Dashboard({ userDetails }) {
  const [projectsDetails, setProjectDetails] = useState();
  const [projectNow,setProjectNow] = useState("");
  const navigate = useNavigate()

  const getProjectDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('https://breakingfree.onrender.com/getprojects', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.data?.projects) {
          console.log("projects : ", response.data.projects);
          setProjectDetails(response.data.projects)
          if(response.data.projects.length !== 0){
            setProjectNow(response.data.projects[0].addiction)
          }
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
        const response = await axios.delete('https://breakingfree.onrender.com/logout', {
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
            <img src={checkup} alt='checkup' />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='header-activities'>Your Domains</h2>
          <div className='lg:w-3/4 sm:w-full m-2 h-[10rem] flex flex-col items-center'>
            {!projectsDetails?.length && <p>No projects to display</p>}
            {projectsDetails?.length && <div className='activities-content'>
              <div className='dropdown'>
                <select className="form-select" id="week" name="week" onChange={(e) => setProjectNow(e.target.value)}>
                  {projectsDetails.map((project) => {
                    return <option key={project._id} value={project.addiction} defaultValue={projectNow}>{project.addiction}</option>
                  })}
                </select>
              </div>
            </div>}
          </div>
        </div>
      </div>

      <div className="split right">
        <div className='navb'>
          <div className='header-right'>
            <h2>Hi,{userDetails?.username}</h2>
            <h6>Lets track your health daily</h6>
          </div>
          <button className='LogOut' onClick={handleLogout}>Log Out</button>
        </div>
        {projectsDetails && <DashDynamic key={projectNow} tag={projectNow} projects={projectsDetails}/>}
      </div>

    </div>
  )
}

export default Dashboard

