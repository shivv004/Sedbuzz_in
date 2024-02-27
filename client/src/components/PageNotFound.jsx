import React from 'react'
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <>
    <style>
      {`
          @media screen and (min-width: 1025px){
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
            .page-not-found {
              background-color: #ffffff;
              font-family: 'Poppins', sans-serif;
              min-height: 100vh;
              color: #000000;
              padding: 120px 1.5rem;
              text-align: center;
            }
            .page-not-found h1 {
              margin-bottom: 1rem;
              font-size: 4.2rem;
              color: #515151;
            }
            .page-not-found p{
              font-size: 1rem;
            }
            .page-not-found img {
              width: 100%;
              max-width: 470px;
              margin: -40px auto;
            }
        }
        @media screen and (max-width: 1025px){
          .page-not-found {
            background-color: #ffffff;
            font-family: 'Poppins', sans-serif;
            min-height: 100vh;
            color: #000000;
            padding: 120px 1.5rem;
            text-align: center;
          }
          .page-not-found h1 {
            margin-bottom: 1rem;
            font-size: 3.7rem;
            color: #515151;
          }
          .page-not-found p{
            font-size: 1rem;
          }
          .page-not-found img {
            width: 100%;
            max-width: 500px;
            margin: -20px auto;
          }
        }
      `}
    </style>
    <div className="page-not-found">
      <img src="/assets/error-404.webp" alt="error-404" />
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Go back to <Link to="/">Home</Link></p>
    </div>
    </>
  )
}
