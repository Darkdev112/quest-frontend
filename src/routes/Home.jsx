import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing'
import Domain from '../pages/Domain'
import Sign_up from '../component/SignUp'
import Dashboard from '../pages/Dashboard'

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
            if (response.data.status === "ok") {
                setUserDetails(response.data.data)
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
            <Route path='/signup' element={<Sign_up/>} />
            <Route path='/dashboard' element={<Dashboard userDetails = {userDetails}/>} />
            <Route path='/domain' element={<Domain userDetails={userDetails}/>} />
        </Routes>
    )
}

export default Home