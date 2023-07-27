import React from 'react';
import VideoCarousel from './VideoCarousel';
import {Link} from 'react-router-dom'
import './Landing.scss'
import Aboutt from './Aboutt';
import ContactPage from '../Contact';


function Landing({userDetails}) {
  console.log(userDetails);
  return (
    <div className="Landing">
      <div className='side-btn'>
        <div className=''>
            {userDetails && <Link to={'/dashboard'}><button>Dashboard</button></Link>}
            {!userDetails && <Link to={'/signup'}><button>Signup</button></Link>}
            {!userDetails && <Link to={'/login'}><button>Login</button></Link>}
        </div>
        </div>
        <VideoCarousel/>
        <Aboutt/>
        <ContactPage/>
    </div>
  );
}

export default Landing;