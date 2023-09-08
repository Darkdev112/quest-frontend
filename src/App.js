
import React,{useState} from 'react';
// import Landing from './pages/Landing';
// import Domain from './pages/Domain';
// import Login from './component/Login';
// import Sign_up from './component/SignUp';
// import Dashboard from './pages/Dashboard';
//  import Quiz from "./pages/Quiz";
// // import Quiz2 from "./pages/Quiz2";

// import ContactPage from "./Contact";

// import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Home from './routes/Home'


function App() {
  return (
    <div className='App-main'>
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    </div>
  )
  }



export default App;
