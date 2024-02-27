import './css/signin.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useState } from 'react';
import OAuth from './OAuth';
import ReactLoading from 'react-loading';

export default function Signin() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    var element = document.getElementById("signin-alert");
    if (!formData.email || !formData.password) {
      if (element.style.display === "block") {
        element.style.display = "none";
      }
      element.style.display = "block";
      dispatch(signInFailure("All fields are required!"));
      setTimeout(() => {
        element.style.display = "none";
      }, 5000);
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!formData.email || !formData.password) {
        dispatch(signInFailure("All fields are required!"));
        if (element.style.display === "block") {
          element.style.display = "none";
        }
        element.style.display = "block";
        setTimeout(() => {
          element.style.display = "none";
        }, 5000);
      }
      else if (data.message === "User not found!") {
        dispatch(signInFailure("User not found!"));
        if (element.style.display === "block") {
          element.style.display = "none";
        }
        element.style.display = "block";
        setTimeout(() => {
          element.style.display = "none";
        }, 5000);
      }
      else if (data.message === "Invalid password!") {
        dispatch(signInFailure("Invalid password!"));
        if (element.style.display === "block") {
          element.style.display = "none";
        }
        element.style.display = "block";
        setTimeout(() => {
          element.style.display = "none";
        }, 5000);
      }
      if (res.ok) {
        setTimeout(() => {
          dispatch(signInSuccess(data));
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
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
      <div className="signin flex">
        <div className="signin-side-img">
          <img src="/assets/login-img.jpg" alt="login-art" />
          <span id="sign-img-credit">Photo by <a href="https://unsplash.com/@efekurnaz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">Efe Kurnaz</a></span>
        </div>
        <div className="signin-container">
          <h1>Sign in to your account</h1>
          <form onSubmit={handleSubmit}>
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
            <div id="signin-alert" className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
            <div className="line-break"><span>or</span></div>
            <OAuth />
          </form>
          <span id="sign-bot-text">don't have an account? &nbsp;<Link to="/signup">Sign up</Link></span>
        </div>
      </div>
    </>
  )
}
