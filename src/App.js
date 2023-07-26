import React,{useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Home from './routes/Home'
// import Quiz from "./Quiz";
// import Quiz2 from "./Quiz2";

function App() {
  return (
    <div className='App-main'>
        <BrowserRouter>
          <Home/>
        </BrowserRouter>
    </div>
  )
}

export default App
