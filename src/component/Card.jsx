import React from 'react'
import './Card.scss';

function Card({data}) {
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
    <button className='btn-1'>Quiz
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
