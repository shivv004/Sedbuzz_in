import './css/signin.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import OAuth from './OAuth';
import ReactLoading from 'react-loading';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    var element = document.getElementById("signup-alert");
    if (!formData.username || !formData.email || !formData.password) {
      if (element.style.display === "block") {
        element.style.display = "none";
      }
      element.style.display = "block";
      setErrorMessage("All fields are required!");
      setTimeout(() => {
        element.style.display = "none";
      }, 5000);
    }
    else if (formData.username.length < 5 || formData.username.length > 20 || !formData.username.match(/^[a-zA-Z0-9._-]+$/)) {
      if (element.style.display === "block") {
        element.style.display = "none";
      }
      element.style.display = "block";
      setErrorMessage("Username must be between 5 and 20 characters! (only letters, numbers, underscores, dot, and hyphens)");
      setTimeout(() => {
        element.style.display = "none";
      }, 5000);
    }
    else if (formData.password.length < 8 || formData.password.length > 20 || formData.password.includes(" ")) {
      if (element.style.display === "block") {
        element.style.display = "none";
      }
      element.style.display = "block";
      setErrorMessage("Password must be between 8 and 20 characters! (no spaces)");
      setTimeout(() => {
        element.style.display = "none";
      }, 5000);
    }
    else if (formData.email.length < 8 || formData.email.length > 30  || !formData.email.includes("@") || !formData.email.includes(".") || formData.email.includes(" ") || formData.email.includes("@.") || formData.email.includes(".@") || !formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ) {
      if (element.style.display === "block") {
        element.style.display = "none";
      }
      element.style.display = "block";
      setErrorMessage("Invalid email!");
      setTimeout(() => {
        element.style.display = "none";
      }, 5000);
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!formData.username || !formData.email || !formData.password) {
        if (element.style.display === "block") {
          element.style.display = "none";
        }
        element.style.display = "block";
        setErrorMessage("All fields are required!");
        setTimeout(() => {
          element.style.display = "none";
        }, 5000);
      }
      else if (formData.username.length < 5 || formData.username.length > 20 || !formData.username.match(/^[a-zA-Z0-9._-]+$/)) {
        if (element.style.display === "block") {
          element.style.display = "none";
        }
        element.style.display = "block";
        setErrorMessage("Username must be between 5 and 20 characters! (only letters, numbers, underscores, dot, and hyphens)");
        setTimeout(() => {
          element.style.display = "none";
        }, 5000);
      }
      else if (formData.password.length < 8 || formData.password.length > 20 || formData.password.includes(" ")) {
        if (element.style.display === "block") {
          element.style.display = "none";
        }
        element.style.display = "block";
        setErrorMessage("Password must be between 8 and 20 characters! (no spaces)");
        setTimeout(() => {
          element.style.display = "none";
        }, 5000);
      }
      else if (formData.email.length < 8 || formData.email.length > 30  || !formData.email.includes("@") || !formData.email.includes(".") || formData.email.includes(" ") || formData.email.includes("@.") || formData.email.includes(".@") || !formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ) {
        if (element.style.display === "block") {
          element.style.display = "none";
        }
        element.style.display = "block";
        setErrorMessage("Invalid email!");
        setTimeout(() => {
          element.style.display = "none";
        }, 5000);
      }
      else if (data.success === false) {
        if (element.style.display === "block") {
          element.style.display = "none";
        }
        element.style.display = "block";
        setErrorMessage("User already exists!");
        setTimeout(() => {
          element.style.display = "none";
        }, 5000);
      }
      setLoading(false);
      if (res.ok) {
        var element2 = document.getElementById("signup-complete-alert");
        element2.style.display = "block";
        element2.innerHTML = "Signup successful! redirecting...";
        setTimeout(() => {
          element2.style.display = "none";
          navigate('/login');
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
    }
  }
  return (
    <>
    <style>
    {`@media screen and (min-width: 1025px){
        nav{
          background: white;
          opacity:0.98;
          #hr1{
            opacity: 0.18;
            transition: opacity 0.4s ease-in-out;
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            width: 28px;
            margin-top: 2px;
          }
          #hr2{
            opacity: 0.18;
            z-index: 1;
            transition: opacity 0.4s ease-in-out;
            width: 130vw;
            -webkit-transform:rotate(180deg);
            left: -20vh;
          }
          .dropdown{
              font-weight: 500;
              margin: 0 0.75rem;
              color: #000000;
          }
          .dropdown-menu.show{
            opacity: 1;
            transition: opacity 0.4s ease-in-out;
          }
          #nav-links , #signup{
              font-size: 16px;
              font-weight: 500;
          }
          #nav_item_text{
            color: #000000;
            transition: var(--trans,color .4s ease 0s);
          }
          #logo{
              background-image: url("/assets/logo-light.svg");
              transition: background-image 0.4s ease-in-out;
              background-size:contain;
              background-repeat: no-repeat;
          }
          #main-menu, #left-sec, #lg-menu-toggler{
              color: black;
              transition: var(--trans,color .4s ease 0s);
          }
          #left-sec{
            gap: 0.75rem;
          }
        }
        nav:hover{
          #hr2{
            opacity: 0.18;
            z-index: 1;
            transition: opacity 0.4s ease-in-out;
            width: 130vw;
            -webkit-transform:rotate(180deg);
            left: -20vh;
          }
        }
      }
      .sedbtn:hover{
        #load-svg{
          transition: 0.3s ease-in-out;
          fill: #000000 !important;
        }
      }
    `}
  </style>
      <div className="signup flex">
        <div className="signup-side-img">
          <img src="/assets/login-img.jpg" alt="login-art" />
          <span id="sign-img-credit">Photo by <a href="https://unsplash.com/@efekurnaz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">Efe Kurnaz</a></span>
        </div>
        <div className="signup-container">
          <h1>Create new account</h1>
          <div id="signup-complete-alert" className="alert alert-success" role="alert"></div>
          <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input type="text" id="username" onChange={handleChange}/>
            <p>Email address</p>
            <input type="email" id="email" onChange={handleChange}/>
            <p>Password</p>
            <input type="password" id="password" onChange={handleChange}/>
            <button className="sedbtn sedbtn2" type="submit" disabled={loading}>
              {
                loading ? (
                  <span className="flex gap-2 justify-center"><ReactLoading id="load-svg" className="center transition ease-in-out delay-150" type="spin" color="#fff" height="20px" width="20px" />Loading...</span>
                ) : 
                (
                  "continue with email"
                )
              }
            </button>
            <div id="signup-alert" className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
            <div className="line-break"><span>or</span></div>
            <OAuth />
          </form>
          <span id="sign-bot-text">have an account? &nbsp;<Link to="/login">Sign in</Link></span>
        </div>
      </div>
    </>
  )
}
