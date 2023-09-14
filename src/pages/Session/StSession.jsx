import React, { useState } from 'react';
import './StSession.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';

function StSession() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [time,setTime] = useState("3 days");

  const handleClick = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.post(`https://breakingfree.onrender.com/startsessions/${id}`, {time}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.data?.project) {
        console.log(response.data);
        navigate('/dashboard')
        window.location.reload(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='Sessions'>
      <h2>To start your journey in breaking free</h2>
      <button onClick={handleClick} className='my-4'>Start Session</button>
      <select className="form-select" id="week" name="week" onChange={(e) => setTime(e.target.value)}>
        <option value="1 minute">Demo</option>
        <option value="3 days" defaultValue={true}>Twice a week</option>
        <option value="1 week">Once a week</option>
        <option value="2 weeks">Twice a month</option>
      </select>
    </div>
  );
}


export default StSession;