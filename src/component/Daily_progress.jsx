import React from 'react'
import './progress.scss'

function Daily_progress() {
    const min = 1;
    const max = 3;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <>
      {randomNum===1 && <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 75% </div>
        </div>
      </div>} 
      {randomNum===2 && <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 65% </div>
        </div>
      </div>} 
      {randomNum===3 && <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 80% </div>
        </div>
      </div>} 
      
    </>
  )
}

export default Daily_progress
