import React from 'react'
import axios from 'axios';
import './Card.scss';
import { useNavigate } from 'react-router';

function Card({ data }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.patch('http://localhost:8000/setdomain',{domain : data.title}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
        }
      })
      if(response.data?.user){
        console.log(response.data.user);
        navigate('/quiz')
      }
    } catch (error) {
      console.log(error);
    }
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
        <div class="btn-box">
          <button className='btn-1' onClick={handleClick}>Quiz
            <span class="first"></span>
            <span class="second"></span>
            <span class="third"></span>
            <span class="fourth"></span>
          </button>
          <button className='btn-2'>Precautions
            <span class="first"></span>
            <span class="second"></span>
            <span class="third"></span>
            <span class="fourth"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
