import React from 'react'
import axios from 'axios';
import './Card.scss';
import { useNavigate } from 'react-router';

function Card({ data }) {
  const navigate = useNavigate();
  
  const handleClick = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.post('http://localhost:8000/makeproject',{addiction : data.tag}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
        }
      })
      if(response.data?.project){
        console.log(response.data);
        navigate('/dashboard')
        window.location.reload(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick2 = async () => {
    navigate('/precautions')
  }
  return (
    <div>
      <div className='card'>
        <div className='card-img'>
          <img src={data.img} alt="pic" />
        </div>
        <div className='card-title'>
          <h2>{data.title}</h2>
        </div>
        <div className="btn-box">
          <button className='btn-1' onClick={handleClick}>Quiz
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </button>
          <button className='btn-2' onClick={handleClick2}>Precautions
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
