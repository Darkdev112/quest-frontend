import React,{useState} from 'react'
import Landing from './pages/Landing'
import Domain from './pages/Domain'
import Login from './component/Login'
import Sign_up from './component/SignUp'
import Dashboard from './pages/Dashboard'
import Quiz from "./Quiz";
import Quiz2 from "./Quiz2";
import "./App.css";

function App() {
  return (
    <div>
      <Dashboard/>
      <Quiz2></Quiz2>
    </div>
  )
}

export default App
