import React from 'react';
import VideoCarousel from './VideoCarousel';
import {Link} from 'react-router-dom'
import './Landing.scss'

const videos = [
  'https://youtu.be/eVLpnMHHEPU',
  'https://youtu.be/RZ5LH634W8s',
  'https://youtu.be/1Luw2tiMuLk',
];

function Landing({userDetails}) {
  console.log(userDetails);
  return (
    <div className="Landing">
      <VideoCarousel videos={videos} />
        <div className=''>
            {userDetails && <Link to={'/dashboard'}><button>Dashboard</button></Link>}
            {!userDetails && <Link to={'/signup'}><button>Signup</button></Link>}
            {!userDetails && <Link to={'/login'}><button>Login</button></Link>}
        </div>
    </div>
  );
}

export default Landing;