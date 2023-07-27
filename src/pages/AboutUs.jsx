import React from 'react'
import './About .css'
import aboutImg1 from '../Assets/images/bad-habit-concept-with-alcohol-bottles.jpg'
import aboutImg2 from '../Assets/images/man-drinks-whiskey-businessman-reads-documents-director-shirt-suspenders.jpg'

function AboutUs() {
  return (
    <div className='abt'>
    <div class="we-are-block">

    <div id="about-us-section">
  
      <div class="about-us-image">
  
        <img src={aboutImg1} width="808" height="458" alt="Lobby Image"/>
  
      </div>
  
      <div class="about-us-info">
  
        <h2>About Us</h2>
  
        <p>Welcome to Breaking Free, a compassionate and supportive online platform 
        dedicated to helping individuals overcome addiction and reclaim their lives.
         We understand the challenging and often lonely journey towards sobriety, 
         and our mission is to provide a safe space for healing, recovery, and personal growth.
          Whether you are struggling with substance abuse, behavioral addictions, or supporting a 
          loved one through their battle, we are here for you every step of the way.</p>
  
        <a href="#" title="About Us Button">Read More</a>
  
      </div>
  
    </div>
  
    <div id="history-section">
  
      <div class="history-image">
  
        <img src={aboutImg2} width="951" height="471" alt="Building Pic"/>
  
      </div>
  
      <div class="history-info">
  
        <h2>Say No To Addiction</h2>
  
        <p>At Breaking Free, we envision a world where addiction is met with understanding and empathy, where individuals
         feel empowered to seek help without judgment or stigma. We believe that with the right guidance, resources, and a 
         strong support network, anyone can break free from the chains of addiction and embrace a fulfilling life of sobriety</p>
  
        <a href="#" title="Domain btn">DOMAIN</a>
  
      </div>
  
    </div>
  
  </div>
    </div>
  )
}

export default AboutUs


