import React from 'react'
import './Login.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';


function Sign_up() {
  return (
    <div className='login-container'>
      <form action="" id='form'>
      <h3>SIGN UP!</h3>
      <i><PersonIcon></PersonIcon></i>
      <input type="text" placeholder='username'/>
      <i><EmailIcon></EmailIcon></i>
      <input type="email" placeholder='email'/>
      <i><LockIcon></LockIcon></i>
      <input type="password" placeholder='enter password'/>
      <i><VisibilityIcon></VisibilityIcon></i>
      <input type="password" placeholder='re-enter password'/>
      <input type="submit" value="Sign Up" />
      </form>
    </div>
  )
}

export default Sign_up;
