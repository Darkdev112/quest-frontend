import React from 'react';
import VideoCarousel from './VideoCarousel';
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.scss'
import Aboutt from './Aboutt';
import ContactPage from './Contact';
import Footer from './Footer';


function Landing({userDetails}) {
  console.log(userDetails);
  const navigate=useNavigate();
  const handleClick1=()=>{
    navigate('/signup');
  }
  const handleClick2=()=>{
    navigate('/login');
  }
  return (
    <div>
        <nav class="navbar">
            <div class="navbar-container container">
                <div className='side-btn'>
            {userDetails && <Link to={'/dashboard'}><button>Dashboard</button></Link>}
            {!userDetails && <Link to={'/signup'}><button onClick={handleClick1}>Signup</button></Link>}
            {!userDetails && <Link to={'/login'}><button onClick={handleClick2}>Login</button></Link>}
        </div>
                <h1 class="logo">Breaking Free</h1>
                </div>
        </nav>
        <VideoCarousel/>
        <Aboutt/>
        <ContactPage/>
        <Footer/>
    </div>
  );
}

export default Landing;