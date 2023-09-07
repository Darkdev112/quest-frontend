
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Home from './routes/Home'
import Dashboard from './pages/Dashboard';


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
