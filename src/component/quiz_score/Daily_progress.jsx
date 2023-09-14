import React from 'react'
import './progress.scss'

function Daily_progress() {
    const min = 1;
    const max = 3;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <>
      {randomNum===1 && <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> 75% </div>
        </div>
      </div>} 
      {randomNum===2 && <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> 65% </div>
        </div>
      </div>} 
      {randomNum===3 && <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> 80% </div>
        </div>
      </div>} 
      
    </>
  )
}

export default Daily_progress
