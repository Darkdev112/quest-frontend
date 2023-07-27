
import React,{useState} from 'react';
import Landing from './pages/Landing';
import Domain from './pages/Domain';
import Login from './component/Login';
import Sign_up from './component/SignUp';
import Dashboard from './pages/Dashboard';
import Quiz from "./Quiz";
import Quiz2 from "./Quiz2";

import ContactPage from "./Contact";

import { BrowserRouter } from 'react-router-dom';

import "./App.css";
import Home from './routes/Home'
import AboutUs from './pages/AboutUs';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
// import Quiz from "./Quiz";
// import Quiz2 from "./Quiz2";

function App() {
  return (
    <div className='App-main'>
        <BrowserRouter>
        <Landing/>
          <AboutUs/>
        </BrowserRouter>
    </div>
  )
  }



export default App;
