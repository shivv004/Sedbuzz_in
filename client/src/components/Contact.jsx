import './css/Contact.css';
import './css/Main.css';
import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { formatDate } from './hooks/formatDate';
import { Helmet } from 'react-helmet'

export default function Contact() {
  const [recentPosts1, setRecentPosts1] = useState(null);
  const [recentPosts2, setRecentPosts2] = useState(null);
  const [recentPosts3, setRecentPosts3] = useState(null);
  const [recentPosts4, setRecentPosts4] = useState(null);
  const [recentPosts5, setRecentPosts5] = useState(null);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&startIndex=0`);
        const res2 = await fetch(`/api/post/getposts?limit=1&startIndex=1`);
        const res3 = await fetch(`/api/post/getposts?limit=1&startIndex=2`);
        const res4 = await fetch(`/api/post/getposts?limit=1&startIndex=3`);
        const res5 = await fetch(`/api/post/getposts?limit=1&startIndex=4`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        const data4 = await res4.json();
        const data5 = await res5.json();
        if (res.ok && res2.ok && res3.ok && res4.ok && res5.ok) {
          setRecentPosts1(data.posts);
          setRecentPosts2(data2.posts)
          setRecentPosts3(data3.posts)
          setRecentPosts4(data4.posts)
          setRecentPosts5(data5.posts)
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/contact`}/>
      </Helmet> 
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
          }
          .latest{
            width:100%;
            padding-left:3rem;
          }
          .latest-head h3{
            color: white;
            text-wrap: nowrap;
            font-size: 14px;
            font-weight: 550;
            font-family: 'Poppins', sans-serif;
            text-transform: uppercase;
          }
        `}
      </style>
      <div className="contact">
        <div className="contact-title">
          <span style={{color:`#000000`, marginBottom:`-100px`}}>Contact</span>
        </div>
        <div className="contact-container flex">
          <div className="contact-container-main">
            <div className="contact-container-sec">
              <span>call</span>
              <p>IN, (+91) 99737 54578</p>
            </div>
            <div className="contact-container-sec">
              <span>contact support</span>
              <p>If you have any questions or need further assistance, feel free to reach out to us.<br></br><u><Link to="mailto:shivshank019@gmail.com">shivshank019@gmail.com</Link></u><br></br> or <br></br><u><Link to="mailto:admin@sedbuzz.com">admin@sedbuzz.com</Link></u></p>
            </div>
            <div className="contact-container-sec">
              <span>address</span>
              <p>204 <br></br>Akansha Poonam Palace<br></br> Sawbhagya Sharma Path <br></br> Patna, BR 800014, IN</p>
            </div>
          </div>
          <div className="contact-container-post">
          <div className="latest">
            <div className="latest-head-2">
              <Link to="../category/most-recent"><h3>MOST RECENT</h3></Link>
            </div>
            <div className="latest-posts">
              <div className="latest-post-div mt-0">
              {recentPosts1 && 
              recentPosts1.map((post) =>
                <Link to={`/post/${post.slug}`} id="latest-rows-a" key={post._id}>
                  <div  className="latest-rows flex" id="latest-rows">
                    <div className="latest-row-details">
                      <h4 className="mt-0">{post.title}</h4>
                     <p>{formatDate(post.updatedAt)}</p>
                    </div>
                    <div className="latest-img">
                      <img src={post.image} alt="thumbnail"></img>
                    </div>
                  </div>
                </Link>
              )}
              </div>
              <div className="latest-post-div">
              {recentPosts2 && 
              recentPosts2.map((post) =>
                <Link to={`/post/${post.slug}`} id="latest-rows-a" key={post._id}>
                  <div className="latest-rows flex" id="latest-rows">
                    <div className="latest-row-details">
                      <h4>{post.title}</h4>
                     <p>{formatDate(post.updatedAt)}</p>
                    </div>
                    <div className="latest-img">
                      <img src={post.image} alt="thumbnail"></img>
                    </div>
                  </div>
                </Link>
              )}
              </div>
              <div className="latest-post-div">
              {recentPosts3 && 
              recentPosts3.map((post) =>
                <Link to={`/post/${post.slug}`} id="latest-rows-a" key={post._id}>
                  <div className="latest-rows flex" id="latest-rows">
                    <div className="latest-row-details">
                      <h4>{post.title}</h4>
                     <p>{formatDate(post.updatedAt)}</p>
                    </div>
                    <div className="latest-img">
                      <img src={post.image} alt="thumbnail"></img>
                    </div>
                  </div>
                </Link>
              )}
              </div>
              <div className="latest-post-div-4">
              {recentPosts4 && 
              recentPosts4.map((post) =>
                <Link to={`/post/${post.slug}`} id="latest-rows-a" key={post._id}>
                  <div className="latest-rows flex" id="latest-rows">
                    <div className="latest-row-details">
                      <h4>{post.title}</h4>
                     <p>{formatDate(post.updatedAt)}</p>
                    </div>
                    <div className="latest-img">
                      <img src={post.image} alt="thumbnail"></img>
                    </div>
                  </div>
                </Link>
              )}
              </div>
              <div className="latest-post-div" style={{borderBottom:`none`}}>
              {recentPosts5 && 
              recentPosts5.map((post) =>
                <Link to={`/post/${post.slug}`} id="latest-rows-a" key={post._id}>
                  <div className="latest-rows flex" id="latest-rows">
                    <div className="latest-row-details">
                      <h4>{post.title}.</h4>
                     <p>{formatDate(post.updatedAt)}</p>
                    </div>
                    <div className="latest-img">
                      <img src={post.image} alt="thumbnail"></img>
                    </div>
                  </div>
                </Link>
              )}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
