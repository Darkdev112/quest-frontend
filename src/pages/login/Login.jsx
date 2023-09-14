import React,{useState } from 'react'
import axios from 'axios';
import './Login.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router';


function Login() {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate();

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
    console.log(details);
    try {
      const response = await axios.post('http://localhost:8000/login',details, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if(response.data?.token){
        localStorage.setItem('token', response.data.token)
        if(response.data.projects.length != 0){
          navigate('/dashboard')
          window.location.reload()
        }
        else{
          navigate('/domain')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login-container'>
      <form action="" id='form'>
      <h3>LOGIN</h3>
      <i><PersonIcon></PersonIcon></i>
      <input type="username" name='username' placeholder='username' onChange={handleChange}/>
      <i><EmailIcon></EmailIcon></i>
      <input type="email" name='email' placeholder='email' onChange={handleChange}/>
      <i><LockIcon></LockIcon></i>
      <input type="password" name='password' placeholder='password' onChange={handleChange}/>
      <input type="submit" value="Login"  onClick={handleSubmit}/>
      </form>
    </div>
  )
}

export default Login
