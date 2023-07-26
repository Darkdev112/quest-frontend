import React from 'react'
import './Login.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


function Login() {
  return (
    <div className='login-container'>
      <form action="" id='form'>
      <h3>LOGIN</h3>
      <i><PersonIcon></PersonIcon></i>
      <input type="text" placeholder='username'/>
      <i><EmailIcon></EmailIcon></i>
      <input type="email" placeholder='email'/>
      <i><LockIcon></LockIcon></i>
      <input type="password" placeholder='password'/>
      <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
