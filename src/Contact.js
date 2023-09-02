import React, { useState } from "react";
import "./App.css";
// import Quiz from "./pages/Quiz";
// import Quiz2 from "./Quiz2";

function ContactPage() {
    return (
   <>
   <div className="Contact"> 
  <h1 className="Head5"> Contact us</h1>
  <div className="Contact2">
  <ul>
  <h3>About Us</h3>
    <li className="C1">How it Works</li>
    <li className="C1">All Events</li>
    <li className="C1">Blog</li>
    <li className="C1">Contact Us</li>
    
    </ul>
    <ul>
    <h3>Our Platforms</h3>
    <li className="C2">My Account</li>
    <li className="C2">History</li>
    <li className="C2">Notifications</li>
    <li className="C2">Dashboard</li>
   
    
    </ul>
    <ul>
 <h3>Contact</h3>
    <li className="C3">Zero Addiction.inc</li>
    <li className="C3">ABC square,Delhi</li>
    <li className="C3">zeroaddiction@redifmail.com</li>
    <li className="C3">7386243492</li>
    </ul>
    </div>
  </div>
   </>
    );
}

export default ContactPage;