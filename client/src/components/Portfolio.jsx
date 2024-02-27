import './css/Portfolio.css';
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default function Portfolio() {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer","Programmer"],
    loop:{},
    typeSpeed: 120,
  });
  return (
    <>
      <Helmet>
        <title>My Portfolio | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/portfolio`}/>
      </Helmet> 
      <style>
        {`
        @media screen and (min-width: 1280px){
          .port-warn{
            display: none;
          }
          .dropdown-menu.show{
            background: linear-gradient(65deg, rgb(14 17 41), rgba(255, 255, 255, 0)) !important;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border:0px solid rgba(255, 255, 255, 0.18);
            box-shadow: none;
            border-top: 1px solid rgba(255, 255, 255, 0.18);
            border-left: 1px solid rgba(255, 255, 255, 0.18);
            border-right: 1px solid rgba(255, 255, 255, 0.18);
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          }
          .dropdown-item{
            color: #ffffff !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          }
          .dropdown-item:hover{
            background-color: #00000000 !important;
            color: #057dbc !important;
          }
          .dropdown-user{
            color: #ffffff !important;
            border-top: 1px solid rgba(255, 255, 255, 0.18);
          }
          .dropdown-user:hover{
            background-color: #00000000 !important;
            color: #057dbc !important;
          }
          .user-id{
            color: #ffffffa8 !important;
          }
          #side-nav svg {
            color: #ffffff;
          }
          #side-nav h2 {
            color: #ffffff;
          }
          #lg-nav_item_text {
            color: #ffffff;
          }
          #side-nav-items, #more-nav-items, #social-nav-items {
            color: #ffffff;
          }
          #side-nav {
            background: linear-gradient(135deg, rgb(14 17 41), rgb(14 17 41 / 78%)) !important;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px) !important;
            border-radius: 0 !important;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37) !important;
          }
          // nav::before, #side-nav::before{
          //   content: '';
          //   position: absolute;
          //   width: 100%;
          //   height: 100%;
          //   top: 0;
          //   left: 0;
          //   backdrop-filter: blur(10px);
          //   z-index: -1;
          // }
          nav{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #hr1{
              color: #fff;
              opacity: 0.18;
              transition: opacity 0.4s ease-in-out;
              -webkit-transform: rotate(90deg);
              transform: rotate(90deg);
              width: 28px;
              margin-top: 2px;
            }
            .dropdown-menu.show{
              opacity: 1;
            }
          }
          nav:hover{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #nav_item_text{
              color: #ffffff;
            }
            .dropdown{
              color: #ffffff;
            }
            #logo{
                background-image: url("/assets/logo-dark.svg");
            }
            #lg-menu-toggler{
              color: #ffffff;
            }
          }
          nav.scrolled{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #nav_item_text{
              color: #ffffff;
            }
            .dropdown{
              color: #ffffff;
            }
            #logo{
              background-image: url("/assets/logo-dark.svg");
            }
            #lg-menu-toggler{
              color: #ffffff;
            }
          }
          .footer-cover{
            background-color: rgb(14 17 41) !important;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          }
          .site-footer{
            background-color:#00000000;
          }
          .site-footer .section-2, .site-footer .section-3 {
            border-top: 1px solid #3d3d3d;
          }
          ::-webkit-scrollbar{
            width: 0.5rem;
            background-color: #252525;
          }
          ::-webkit-scrollbar-button{
            display: none;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #464646;
          }
          ::-webkit-scrollbar-thumb:active {
            background-color: #3a3a3a;
          }
          .exp-details:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
            transform: translateY(-5px);
            .exp-para{
              overflow: hidden;
              display: -webkit-box;
              max-width: 100%;
              -webkit-line-clamp: 10;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
            }
            .exp-img{
              display: flex;
              gap: 20px;
              margin-top: 20px;
            }
          }
          .project-items:hover{
            transform: translateY(-10px);
            box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 50px 4px;
            filter: brightness(1.1);
            .project-para{
              -webkit-line-clamp: 12;
            }
            .project-items{
              height: max-content;
            }
          }
          .edu-details:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
            transform: translateY(-5px);
            .edu-para{
              overflow: hidden;
              display: -webkit-box;
              max-width: 100%;
              -webkit-line-clamp: 10;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
            }
          }
        }
        @media screen and (min-width: 1025px) and (max-width: 1280px){
          .port-warn{
            display: none;
          }
          .dropdown-menu.show{
            background: linear-gradient(65deg, rgb(14 17 41), rgba(255, 255, 255, 0)) !important;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border:0px solid rgba(255, 255, 255, 0.18);
            box-shadow: none;
            border-top: 1px solid rgba(255, 255, 255, 0.18);
            border-left: 1px solid rgba(255, 255, 255, 0.18);
            border-right: 1px solid rgba(255, 255, 255, 0.18);
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          }
          .dropdown-item{
            color: #ffffff !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          }
          .dropdown-item:hover{
            background-color: #00000000 !important;
            color: #057dbc !important;
          }
          .dropdown-user{
            color: #ffffff !important;
            border-top: 1px solid rgba(255, 255, 255, 0.18);
          }
          .dropdown-user:hover{
            background-color: #00000000 !important;
            color: #057dbc !important;
          }
          .user-id{
            color: #ffffffa8 !important;
          }
          #side-nav svg {
            color: #ffffff;
          }
          #side-nav h2 {
            color: #ffffff;
          }
          #lg-nav_item_text {
            color: #ffffff;
          }
          #side-nav-items, #more-nav-items, #social-nav-items {
            color: #ffffff;
          }
          #side-nav {
            background: linear-gradient(135deg, rgb(14 17 41), rgb(14 17 41 / 78%)) !important;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px) !important;
            border-radius: 0 !important;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37) !important;
          }
          // nav::before, #side-nav::before{
          //   content: '';
          //   position: absolute;
          //   width: 100%;
          //   height: 100%;
          //   top: 0;
          //   left: 0;
          //   backdrop-filter: blur(10px);
          //   z-index: -1;
          // }
          nav{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #hr1{
              color: #fff;
              opacity: 0.18;
              transition: opacity 0.4s ease-in-out;
              -webkit-transform: rotate(90deg);
              transform: rotate(90deg);
              width: 28px;
              margin-top: 2px;
            }
            .dropdown-menu.show{
              opacity: 1;
            }
          }
          nav:hover{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #nav_item_text{
              color: #ffffff;
            }
            .dropdown{
              color: #ffffff;
            }
            #logo{
                background-image: url("/assets/logo-dark.svg");
            }
            #lg-menu-toggler{
              color: #ffffff;
            }
          }
          nav.scrolled{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #nav_item_text{
              color: #ffffff;
            }
            .dropdown{
              color: #ffffff;
            }
            #logo{
              background-image: url("/assets/logo-dark.svg");
            }
            #lg-menu-toggler{
              color: #ffffff;
            }
          }
          .footer-cover{
            background-color: rgb(14 17 41) !important;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          }
          .site-footer{
            background-color:#00000000;
          }
          .site-footer .section-2, .site-footer .section-3 {
            border-top: 1px solid #3d3d3d;
          }
          ::-webkit-scrollbar{
            width: 0.5rem;
            background-color: #252525;
          }
          ::-webkit-scrollbar-button{
            display: none;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #464646;
          }
          ::-webkit-scrollbar-thumb:active {
            background-color: #3a3a3a;
          }
          .exp-details:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
            transform: translateY(-5px);
            .exp-para{
              overflow: hidden;
              display: -webkit-box;
              max-width: 100%;
              -webkit-line-clamp: 10;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
            }
            .exp-img{
              display: flex;
              gap: 20px;
              margin-top: 20px;
            }
          }
          .project-items:hover{
            transform: translateY(-10px);
            box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 50px 4px;
            filter: brightness(1.1);
            .project-para{
              -webkit-line-clamp: 12;
            }
            .project-items{
              height: max-content;
            }
          }
          .edu-details:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
            transform: translateY(-5px);
            .edu-para{
              overflow: hidden;
              display: -webkit-box;
              max-width: 100%;
              -webkit-line-clamp: 10;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
            }
          }
        }
        @media screen and (min-width: 765px) and (max-width: 1025px){
          .port-warn{
            display: none;
          }
          nav #side-nav {
            background: linear-gradient(223deg, rgb(14 17 41), rgb(14 17 41 / 15%)) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;;
            border-radius: 0 !important;;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37) !important;;
          }
          #side-nav svg {
            color: #ffffff;
          }
          #side-nav h2 {
            color: #ffffff;
          }
          #side-nav-items, #more-nav-items, #social-nav-items {
            color: #ffffff;
          }
          .m-user-id{
            color: #ffffffa8 !important;
          }
          nav{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #hr1{
              display: none;
            }
            #logo{
              background-image: url("/assets/logo-dark.svg");
            }
            #search {
              color: #ffffff;
            }
            #menu-toggler{
              color: #ffffff;
            }
          }
          nav:hover{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #hr1{
              display: none;
            }
            #nav_item_text{
              color: #ffffff;
            }
            #nav_item_text:hover{
              color: #057dbc;
            }
            .dropdown{
              color: #ffffff;
            }
            #logo{
              background-image: url("/assets/logo-dark.svg");
            }
          }
          nav.scrolled{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #hr1{
              display: none;
            }
            #nav_item_text{
              color: #ffffff;
            }
            #nav_item_text:hover{
              color: #057dbc;
            }
            .dropdown{
              color: #ffffff;
            }
            #logo{
              background-image: url("/assets/logo-dark.svg");
            }
          }
          .footer-cover{
            background-color: rgb(14 17 41) !important;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          }
          .site-footer{
            background-color:#00000000;
          }
          .site-footer .section-2, .site-footer .section-3 {
            border-top: 1px solid #3d3d3d;
          }
          ::-webkit-scrollbar{
            width: 0.5rem;
            background-color: #252525;
          }
          ::-webkit-scrollbar-button{
            display: none;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #464646;
          }
          ::-webkit-scrollbar-thumb:active {
            background-color: #3a3a3a;
          }
          .exp-details:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
            transform: translateY(-5px);
            .exp-para{
              overflow: hidden;
              display: -webkit-box;
              max-width: 100%;
              -webkit-line-clamp: 10;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
            }
            .exp-img{
              display: flex;
              gap: 20px;
              margin-top: 20px;
            }
          }
          .project-items:hover{
            transform: translateY(-10px);
            box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 50px 4px;
            filter: brightness(1.1);
          }
          .edu-details:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
            transform: translateY(-5px);
            .edu-para{
              overflow: hidden;
              display: -webkit-box;
              max-width: 100%;
              -webkit-line-clamp: 10;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
            }
          }
        }
        @media screen and (max-width: 765px){
          nav #side-nav {
            background: linear-gradient(223deg, rgb(14 17 41), rgb(14 17 41 / 15%)) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;;
            border-radius: 0 !important;;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37) !important;;
          }
          #side-nav svg {
            color: #ffffff;
          }
          #side-nav h2 {
            color: #ffffff;
          }
          #side-nav-items, #more-nav-items, #social-nav-items {
            color: #ffffff;
          }
          .m-user-id{
            color: #ffffffa8 !important;
          }
          nav{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #hr1{
              display: none;
            }
            #logo{
              background-image: url("/assets/logo-dark.svg");
              transition: none;
            }
            #search {
              color: #ffffff;
            }
            #menu-toggler{
              color: #ffffff;
            }
          }
          nav:hover{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #hr1{
              display: none;
            }
            #nav_item_text{
              color: #ffffff;
            }
            #nav_item_text:hover{
              color: #057dbc;
            }
            .dropdown{
              color: #ffffff;
            }
            #logo{
              background-image: url("/assets/logo-dark.svg");
              transition: none;
            }
          }
          nav.scrolled{
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            #hr2{
              display: none;
            }
            #hr1{
              display: none;
            }
            #nav_item_text{
              color: #ffffff;
            }
            #nav_item_text:hover{
              color: #057dbc;
            }
            .dropdown{
              color: #ffffff;
            }
            #logo{
              background-image: url("/assets/logo-dark.svg");
              transition: none;
            }
          }
          .footer-cover{
            background-color: rgb(14 17 41) !important;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          }
          .site-footer{
            background-color:#00000000;
          }
          .site-footer .section-2, .site-footer .section-3 {
            border-top: 1px solid #3d3d3d;
          }
          ::-webkit-scrollbar{
            width: 0.5rem;
            background-color: #252525;
          }
          ::-webkit-scrollbar-button{
            display: none;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #464646;
          }
          ::-webkit-scrollbar-thumb:active {
            background-color: #3a3a3a;
          }
          .exp-details:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
            transform: translateY(-5px);
            .exp-para{
              overflow: hidden;
              display: -webkit-box;
              max-width: 100%;
              -webkit-line-clamp: 14;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
            }
            .exp-img{
              display: flex;
              gap: 20px;
              margin-top: 20px;
            }
          }
          .project-items:hover{
            transform: translateY(-10px);
            box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 50px 4px;
            filter: brightness(1.1);
          }
          .edu-details:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
            transform: translateY(-5px);
            .edu-para{
              overflow: hidden;
              display: -webkit-box;
              max-width: 100%;
              -webkit-line-clamp: 14;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
            }
          }
        }
        @media screen and (max-width: 765px) and (min-width: 322px){
          .port-warn{
            display: none;
          }
        }

        @media screen and (max-width: 322px){
          nav{
            display: none !important;
          }
          .footer-cover{
            display: none !important;
          }
          .portfolio-cover{
            display: none !important;
          }
          .port-warn{
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            align-items: center;
            font-size: 0.85rem;
          }
        }
        `}
      </style>
      <div className="portfolio-cover">
        <div className="my-portfolio">
          <div className="portfolio-top">
            <Spline scene="https://prod.spline.design/bI1j2dPEK-7agLEh/scene.splinecode" />
            <div className="introduction">
              <h3>
                Shiv Shankar
              </h3>
              <h4>
                I am a &nbsp;
                <span>
                  {text}
                </span>
                <Cursor style={{color:`rgb(146 84 255)`}} />
              </h4>
              <p>I am an enthusiastic and adaptable individual, constantly seeking out fresh challenges to tackle. Fueled by a fervent passion for continuous learning, I am committed to delivering excellence in every project I undertake. Armed with a positive outlook and a steadfast growth mindset, I am poised to make a substantial impact and accomplish remarkable feats.</p>
              <div className="buttons">
                <a href="https://drive.google.com/file/d/1sM8htFShXhZxhs4_G9hQGxiZcuDkFbha/view?usp=sharing" target="_blank" rel="noreferrer"><button className="r-btn">Check Resume</button></a>
                <a href="https://github.com/shivv004" target="_blank" rel="noreferrer"><button className="g-btn">Github</button></a>
              </div>
            </div>
            <div className="side-line">
              <div className="menu-line"></div>
            </div>
          </div>
          <div className="portfolio-bottom">
            <div className="portfolio-skills">
              <h3>Skills</h3>
              <p>Here are some of my skills on which I have been working on for the past 3 years.</p>
              <div className="skills-cards">
                <div className="skills-card-1">
                  <h2>Frontend</h2>
                  <div className="skills-card-elements">
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Freact.svg?alt=media&token=6bd0d417-ce94-4c3c-900d-522e03f82160" alt="icon" />
                      <span>React Js</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fnext.svg?alt=media&token=b4c05238-8324-4756-a51a-943c6829be74" alt="icon" />
                      <span>Next Js</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fhtml.svg?alt=media&token=142f718c-345a-422c-bfbd-a7c5f74a15eb" alt="icon" />
                      <span>HTML</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fcss.svg?alt=media&token=cbdc06fd-cc0e-4d03-a97a-0314054dc6ac" alt="icon" />
                      <span>CSS</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fjs.svg?alt=media&token=22314440-8621-4990-a575-54120631439c" alt="icon" />
                      <span>JavaScript</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Ftw.svg?alt=media&token=9d9a8bb8-8f68-4186-952f-e7e5f1966203" alt="icon" />
                      <span>Tailwind</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fbs.svg?alt=media&token=481a6cb3-9e65-44a2-bc96-fbadfc347eff" alt="icon" />
                      <span>Bootstrap</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fmu.svg?alt=media&token=ad32ff81-98f5-403d-bc3f-e7d45b95f395" alt="icon" />
                      <span>Material UI</span>
                    </div>
                  </div>
                </div>
                <div className="skills-card-2">
                  <h2>Backend</h2>
                  <div className="skills-card-elements">
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fnode.svg?alt=media&token=c89a13d9-d1cd-4e52-aaf6-83ba8ab204d0" alt="icon" />
                      <span>Node Js</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fex.svg?alt=media&token=88e3fac6-220f-455d-86b0-7bfa9ad7afde" alt="icon" style={{background:`#ffffff`}}/>
                      <span>Express Js</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fms.svg?alt=media&token=081c595c-4c1e-4a44-acb6-b0682056013c" alt="icon" />
                      <span>MySQL</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fmd.svg?alt=media&token=73c3e778-0cbf-414f-823e-ba2e31dca403" alt="icon" />
                      <span>MongoDB</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fjwt.svg?alt=media&token=4e78e36f-383c-41ab-8df4-60235d0816f7" alt="icon" />
                      <span>JWT</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fredux.svg?alt=media&token=ca52f38e-8c59-45d6-b2f4-3494c05fd0c4" alt="icon" />
                      <span>Redux</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Ffb.svg?alt=media&token=c2df478e-a2b1-4d8b-97cb-fa52f22d2509" alt="icon" />
                      <span>Firebase</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fphp.svg?alt=media&token=97a25e2d-11b6-4831-a511-d1c51d9b52eb" alt="icon" />
                      <span>PHP</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fc.svg?alt=media&token=46198a7d-ad94-4d33-b94b-3356c71cdf52" alt="icon" />
                      <span>C/C++</span>
                    </div>
                  </div>
                </div>
                <div className="skills-card-2">
                  <h2>Android</h2>
                  <div className="skills-card-elements">
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fjava.svg?alt=media&token=4250081d-de0f-415a-adea-5d705ea15186" alt="icon" />
                      <span>Java</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fxml.svg?alt=media&token=14fee07b-ba34-49e6-9c3d-c25d83dd7f1a" alt="icon" style={{background:`#ffffff`}}/>
                      <span>XML</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fas.svg?alt=media&token=f252b7f2-7e2b-4ec6-9a64-3519b1dfee49" alt="icon" />
                      <span>Android Studio</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fjp.svg?alt=media&token=b1b7a632-8dbb-451c-a77d-e38072a044c9" alt="icon" />
                      <span>Jetpack Compose</span>
                    </div>
                  </div>
                </div>
                <div className="skills-card-3">
                  <h2>Others</h2>
                  <div className="skills-card-elements">
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fgit.svg?alt=media&token=042bdc0b-ca52-4b84-b0c4-134d4a116b23" alt="icon" />
                      <span>Git</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fgithub.svg?alt=media&token=fc280292-49cf-4b5f-9dc5-7396fcb38694" alt="icon"/>
                      <span>GitHub</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fpm.svg?alt=media&token=21842c35-8c21-49f6-899b-dcaac9096f03" alt="icon" />
                      <span>Postman</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fvs.svg?alt=media&token=405a2147-5504-41e4-b445-a738946da71d" alt="icon" />
                      <span>VS Code</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Ffigma.svg?alt=media&token=cd8d75f9-a325-4bc3-94bd-ae0e64b2d79a" alt="icon" />
                      <span>Figma</span>
                    </div>
                    <div className="skill-element">
                      <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fspline.png?alt=media&token=3117bed0-860f-4662-bb74-4e0de3aab677" alt="icon" />
                      <span>Spline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-exp">
              <h3>Experience</h3>
              <p>My work experience as a software engineer and working on different companies.</p>
              <ul className="exp-list">
                <li className="exp-list-item">
                  <div className="exp-line">
                    <span className="exp-line-dot"></span>
                    <span className="exp-line-line"></span>
                  </div>
                  <div className="exp-right">
                    <div className="exp-details">
                      <div className="exp-details-sec-1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fdecrypton_logo.jpg?alt=media&token=13ae266a-56ee-4240-81f2-9ceafeaa077c" alt="logo" />
                        <div className="exp-title">
                          <div className="exp-title-head">Full Stack Web Developer Intern</div>
                          <div className="exp-title-name">Decrypton</div>
                          <div className="exp-title-date">Sept 2022 - Dec 2022</div>
                        </div>
                      </div>
                      <div className="exp-details-sec-2">
                        <span className="exp-para">Implemented JavaScript-based features across multiple projects, enhancing overall user interactivity and engagement. 
                        Developed an automated settings page for the company's website, using JavaScript, to streamline configuration processes and improve website customization. 
                        Resolved critical bugs on the website, resulting in a substantial enhancement of web functionality and a notable increase in website speed. 
                        Effectively implemented PHP APIs for sending and retrieving data. 
                        </span>
                        <br></br>
                        <div className="exp-skills">
                          <b>Skills:</b>
                          <div className="exp-skill-names">
                            <div className="exp-skill-items">• Laravel</div>
                            <div className="exp-skill-items">• PHP</div>
                            <div className="exp-skill-items">• JavaScript</div>
                            <div className="exp-skill-items">• HTML5</div>
                            <div className="exp-skill-items">• CSS</div>
                            <div className="exp-skill-items">• MySQL</div>
                          </div>
                        </div>
                        <div className="exp-img">
                        <a href="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fdecrypton1.png?alt=media&token=6c0b7e7b-49a4-4e90-899f-fdbf4c93fa92" target="_blank" rel="noreferrer">
                          <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fdecrypton1.png?alt=media&token=6c0b7e7b-49a4-4e90-899f-fdbf4c93fa92" alt="offer-letter" />
                        </a>
                        <a href="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fdecrypton2.png?alt=media&token=0bc12b12-de6d-4464-8aa1-a18b8e1e0161" target="_blank" rel="noreferrer">
                          <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fdecrypton2.png?alt=media&token=0bc12b12-de6d-4464-8aa1-a18b8e1e0161" alt="recommendation" />
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="exp-list-item">
                  <div className="exp-line">
                    <span className="exp-line-dot"></span>
                  </div>
                  <div className="exp-right">
                    <div className="exp-details">
                      <div className="exp-details-sec-1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Ffl.svg?alt=media&token=cb1d5f99-4271-43ff-a0ac-e0b708c8e178" alt="logo" style={{backgroundColor:`#fd8469`}}/>
                        <div className="exp-title">
                          <div className="exp-title-head">Freelancer</div>
                          <div className="exp-title-date">April 2022 - Present</div>
                        </div>
                      </div>
                      <div className="exp-details-sec-2">
                        <span className="exp-para">Worked as a freelancer and developed multiple projects for clients. 
                        </span>
                        <br></br>
                        <div className="exp-skills">
                          <b>Skills:</b>
                          <div className="exp-skill-names">
                            <div className="exp-skill-items">• Wordpress</div>
                            <div className="exp-skill-items">• PHP</div>
                            <div className="exp-skill-items">• JavaScript</div>
                            <div className="exp-skill-items">• HTML5</div>
                            <div className="exp-skill-items">• CSS</div>
                            <div className="exp-skill-items">• MySQL</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="portfolio-projects">
              <h3>Projects</h3>
              <p>I've dedicated myself to a handful of projects that showcase my versatility across different technologies. Here are some of my projects.</p>
              <div className="project-list">
                <a href="https://www.sedbuzz.com" target="_blank" rel="noreferrer">
                  <div className="project-items">
                    <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fsb.png?alt=media&token=42161a03-7d3e-4f4f-a64f-0c177c1bba24" alt="logo" />
                    <div className="project-sec1">
                      <span>React Js</span>
                      <span>JavaScript</span>
                      <span>Node js</span>
                      <span>Express js</span>
                      <span>HTML5</span>
                      <span>CSS</span>
                      <span>Tailwind</span>
                      <span>Bootstrap</span>
                      <span>MongoDB</span>
                      <span>JWT</span>
                      <span>Redux</span>
                    </div>
                    <div className="project-sec2">
                      <div className="project-details">
                        <div className="project-name">SedBuzz</div>
                        <div className="project-date">Dec 2023 - Feb 2024</div>
                        <div className="project-para">Developed a responsive MERN stack dynamic blog project named "SedBuzz".
                        Implemented a robust user authentication system with login and signup functionalities, ensuring secure access and personalised features for individual users/admins.
                        Designed and integrated an admin login system, streamlining the post-publishing process through automation. 
                        Utilised Tailwind CSS to achieve a visually appealing and responsive design.
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/shivv004/PGLife" target="_blank" rel="noreferrer">
                  <div className="project-items">
                    <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fpl.png?alt=media&token=f082ff4e-0113-4b81-a648-2f890121b948" alt="logo" />
                    <div className="project-sec1">
                      <span>PHP</span>
                      <span>JavaScript</span>
                      <span>HTML5</span>
                      <span>CSS</span>
                      <span>Bootstrap</span>
                      <span>MySQL</span>
                      <span>Git</span>
                    </div>
                    <div className="project-sec2">
                      <div className="project-details">
                        <div className="project-name">PGLife</div>
                        <div className="project-date">May 2022 - July 2022</div>
                        <div className="project-para">Implemented PHP for server-side scripting, enabling dynamic content generation and interaction with databases and user-friendly login/signup system.
                        Leveraged Bootstrap to enhance the website's responsiveness and streamline the development process. 
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/shivv004/Textutils" target="_blank" rel="noreferrer">
                  <div className="project-items">
                    <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Ftu.png?alt=media&token=53079559-78e2-4a45-adba-7f02b543b11b" alt="logo" />
                    <div className="project-sec1">
                      <span>React Js</span>
                      <span>JavaScript</span>
                      <span>Node js</span>
                      <span>HTML5</span>
                      <span>CSS</span>
                      <span>Tailwind</span>
                      <span>Git</span>
                    </div>
                    <div className="project-sec2">
                      <div className="project-details">
                        <div className="project-name">TextUtils</div>
                        <div className="project-date">Dec 2023 - Dec 2023</div>
                        <div className="project-para">Implemented a Dark Mode/Light Mode switch for improved accessibility. Implemented formatting tools, find and replace feature, enhancing text manipulation capabilities. 
                        Utilised version control tools (Git) to manage and track changes in the codebase, promoting collaboration and code stability.
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/shivv004/Instagram_clone" target="_blank" rel="noreferrer">
                  <div className="project-items">
                    <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fic.png?alt=media&token=b9df514f-9f1b-4bd4-b965-36388db88897" alt="logo" />
                    <div className="project-sec1">
                      <span>Java</span>
                      <span>XML</span>
                      <span>Jetpack Compose</span>
                      <span>Android Studio</span>
                    </div>
                    <div className="project-sec2">
                      <div className="project-details">
                        <div className="project-name">Instagram UI Clone</div>
                        <div className="project-date">April 2023 - May 2023</div>
                        <div className="project-para">Developed a Java-based Instagram home screen UI clone, replicating key features like post feeds and feed stories. Applied design principles and architecture patterns to ensure a clean, scalable codebase. Implemented testing and debugging strategies for quality assurance.
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://docs.google.com/document/d/1UTm_PWnSwgrGvT4J-YECzKcbGffzFd4X/edit?usp=sharing&ouid=116935974658002647575&rtpof=true&sd=true" target="_blank" rel="noreferrer">
                  <div className="project-items">
                    <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fresearch.png?alt=media&token=fbcf50de-18f5-443d-93c3-594177351094" alt="logo" />
                    <div className="project-sec1">
                      <span>Python</span>
                      <span>Open CV</span>
                      <span>Machine Learning</span>
                      <span>CNN</span>
                      <span>TensorFlow</span>
                    </div>
                    <div className="project-sec2">
                      <div className="project-details">
                        <div className="project-name">[Research] Image Encryption using Visual Cryptography</div>
                        <div className="project-date">Jan 2023 - April 2023</div>
                        <div className="project-para">Using Machine Learning Approach to generate better quality
                          random grids for image encryption.
                          The scheme for Multiple Information Hiding was achieved. This
                          method can be used to transmit many secret images at once.
                          The scheme to use Convolution Neural Networks, to generate
                          better quality random grids was achieved
                          There was a marginal improvement in PSNR of predicted images
                          using CNN.
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-edu">
              <h3>Education</h3>
              <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
              <ul className="edu-list">
              <li className="edu-list-item">
                  <div className="edu-line">
                    <span className="edu-line-dot"></span>
                    <span className="edu-line-line"></span>
                  </div>
                  <div className="edu-right">
                    <div className="edu-details">
                      <div className="edu-details-sec-1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fsmit.png?alt=media&token=249432b5-e784-41f1-a08f-c2c064b26fa4" alt="logo" />
                        <div className="edu-title">
                          <div className="edu-title-head">Sikkim Manipal Intitute of Technology, Majitar</div>
                          <div className="edu-title-name">Bachelor of Technology - BTech, Computer Science and Engineering</div>
                          <div className="edu-title-date">Aug 2020 - Present</div>
                        </div>
                      </div>
                      <div className="edu-details-sec-2">
                      <div className="edu-score">
                          <b>Grade:</b>
                          <div className="edu-score-items">&nbsp; 8.0 CGPA</div>
                        </div>
                        <span className="edu-para">I am an undergraduate student pursuing a Bachelor's degree in Computer Science and Engineering from Sikkim Manipal Institute of Technology, Majitar. Having completed 7 semesters, I hold a commendable CGPA of 8.0. My academic journey has covered various fundamental courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Artificial Neural Network and Ethical Hacking, among others.
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="edu-list-item">
                  <div className="edu-line">
                    <span className="edu-line-dot"></span>
                    <span className="edu-line-line"></span>
                  </div>
                  <div className="edu-right">
                    <div className="edu-details">
                      <div className="edu-details-sec-1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fportfolio%2Fdav.png?alt=media&token=9d2ad9cf-b451-4f5c-af6b-1b7ef96b6b27" alt="logo" style={{backgroundColor:`#ffffff`}} />
                        <div className="edu-title">
                        <div className="edu-title-head">D.A.V. Public School, Patna</div>
                          <div className="edu-title-name">CBSC(XII), Science with Computer</div>
                          <div className="edu-title-date">April 2019 - April 2020</div>
                        </div>
                      </div>
                      <div className="edu-details-sec-2">
                      <div className="edu-score">
                          <b>Grade:</b>
                          <div className="edu-score-items">&nbsp; 71.6%</div>
                        </div>
                        <span className="edu-para">I completed my class 10 education at D.A.V. Public School, Patna, where I studied Science with Computer Application.
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="edu-list-item">
                  <div className="edu-line">
                    <span className="edu-line-dot"></span>
                  </div>
                  <div className="edu-right">
                    <div className="edu-details">
                      <div className="edu-details-sec-1">
                        <img src="/pf/dav.png" alt="logo" style={{backgroundColor:`#ffffff`}}/>
                        <div className="edu-title">
                          <div className="edu-title-head">D.A.V. Public School, Patna</div>
                          <div className="edu-title-name">CBSC(X), Science with Computer</div>
                          <div className="edu-title-date">April 2017 - April 2018</div>
                        </div>
                      </div>
                      <div className="edu-details-sec-2">
                      <div className="edu-score">
                          <b>Grade:</b>
                          <div className="edu-score-items">&nbsp; 88%</div>
                        </div>
                        <span className="edu-para">I completed my class 10 education at D.A.V. Public School, Patna, where I studied Science with Computer Application. 
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="port-warn">
        Screen size not compatible for this page. Please view on a larger screen.
        <Link className='underline' to="/">Return Home</Link>
      </div>
    </>
  )
}
