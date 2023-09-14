import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Quiz from '../pages/quiz/Quiz';
import Landing from '../pages/landing/Landing';
import Domain from '../pages/domain/Domain';
import Signup from '../pages/sign up/SignUp';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Precautions from '../pages/precautions/Precautions'

const Home = () => {
    const [userDetails, setUserDetails] = useState();
    
    const getUserDetails = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const response = await axios.get('https://breakingfree.onrender.com/getuser', {
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
        // if(localStorage.getItem('token').length !== 0){
            getUserDetails();
        // }
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Landing userDetails = {userDetails} />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard userDetails = {userDetails} />} />
            <Route path='/domain' element={<Domain/>} />
            <Route path='/quiz' element={<Quiz/>} />
            <Route path='/precautions' element={<Precautions/>}></Route>
        </Routes>
    )
}

export default Home