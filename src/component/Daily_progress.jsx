import React from 'react'
import './progress.scss'

function Daily_progress() {
  return (
    <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 75% </div>
        </div>
      </div>
  )
}

export default Daily_progress
