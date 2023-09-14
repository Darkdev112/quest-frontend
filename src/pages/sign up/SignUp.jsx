import React, { useState } from 'react'
import axios from 'axios';
import '../login/Login.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router';


function Signup() {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const navigate = useNavigate()
  
  
  const handleChange = (e) => {
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [e.target.name]: e.target.value
      }
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (details.password.localeCompare(details.confirmPassword) !== 0 || details.username === "" || details.email === "") {
      alert("passwords don't match")
      return;
    }
    console.log(details);
    try {
      const response = await axios.post('https://breakingfree.onrender.com/signup',details, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if(response.data?.token){
        localStorage.setItem('token', response.data.token)
        navigate('/domain')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login-container'>
      <form action="" id='form'>
        <h3>SIGN UP!</h3>
        <i><PersonIcon></PersonIcon></i>
        <input type="username" name="username" placeholder='username' onChange={handleChange} />
        <i><EmailIcon></EmailIcon></i>
        <input type="email" name="email" placeholder='email' onChange={handleChange} />
        <i><LockIcon></LockIcon></i>
        <input type="password" name="password" placeholder='enter password' onChange={handleChange} />
        <i><VisibilityIcon></VisibilityIcon></i>
        <input type="password" name="confirmPassword" placeholder='re-enter password' onChange={handleChange} />
        <input type="submit" value="Sign Up" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default Signup;
