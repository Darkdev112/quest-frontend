
import React,{useState} from 'react';
import Landing from './pages/Landing';
import Aboutt from './pages/Aboutt';
import Domain from './pages/Domain';
import Login from './component/Login';
import Sign_up from './component/SignUp';
import Dashboard from './pages/Dashboard';
import Quiz from './Quiz';
import Quiz2 from './Quiz2';

import ContactPage from "./Contact";

import { BrowserRouter } from 'react-router-dom';

import "./App.css";
import Home from './routes/Home'

// function App() {
//     return (
//      <Quiz></Quiz>
//     //  <Quiz2></Quiz2>
//     // <ContactPage></ContactPage>
//     );



// import Quiz from "./Quiz";
// import Quiz2 from "./Quiz2";

function App() {
  return (

    // <div>
    //   <Dashboard/>
    //   {/* <Quiz2></Quiz2> */}

    <div className='App-main'>
        <BrowserRouter>
          {/*<Landing/>
          <Aboutt/>
  <ContactPage/>*/}
  <Dashboard/>
        </BrowserRouter>

    {/* </div> */}
    </div>
  )
  }



export default App;
