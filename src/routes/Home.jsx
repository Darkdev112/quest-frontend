import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
// import Landing from '../pages/Landing';
// import Domain from '../pages/Domain';
// import Signup from '../component/SignUp';
// import Login from '../component/Login';
// import Dashboard from '../pages/Dashboard';
import Quiz from '../pages/quiz/Quiz';
// import Precaution from '../pages/precautions/Precaution';
import Landing from '../pages/landing/Landing';
import Domain from '../pages/domain/Domain';
import Signup from '../pages/sign up/SignUp';
import Login from '../pages/login/Login';

import Dashboard from '../pages/dashboard/Dashboard';
// import StSession from '../pages/Session/StSession';
// import Quiz from '../pages/quiz/Quiz';

const Home = () => {
    const [userDetails, setUserDetails] = useState();
    
    const getUserDetails = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            const response = await axios.get('http://localhost:8000/getuser', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.data.user) {
                setUserDetails(response.data.user)
            } else {
                console.log("single user fetch failed");
            }
        }
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Landing userDetails = {userDetails} />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/domain' element={<Domain/>} />
            <Route path='/quiz' element={<Quiz/>} />
        
        </Routes>
    )
}

export default Home