import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { formatDate } from './hooks/formatDate';
import { Helmet } from 'react-helmet'

export default function MostRecent() {
  const [mostRecentPosts, setMostRecentPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  
  useEffect(() => {
    const fetchMostRecentPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?startIndex=0`);
        const data = await res.json();
        if (res.ok) {
          setMostRecentPosts(data.posts);
          if (data.posts.length < 8) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
      fetchMostRecentPosts();
  }, []);
  
  const handleShowMore = async () => {
    const startIndex = mostRecentPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setMostRecentPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length === 0) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Most Recent | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/category/most-recent`}/>
      </Helmet> 
      <style>
        {`
        @media screen and (min-width: 1280px){
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
          .most-recent-cover{
            margin: 0 auto;
            max-width: 1600px;
          }
          .most-recent-cover .title-sec {
            height: 450px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 2.2rem;
          }
          .most-recent-cover .title-sec span {
            text-transform: capitalize;
              font-family: 'Poppins', sans-serif;
              font-size: 42px;
              font-weight: 550;
              position: absolute;
          }
          .most-recent-post{
            margin: -30px 4rem 100px 4rem ;
          }
          .most-recent-post-row{
            width:68%;
          }
          .most-recent-post-row-post-img{
            width:32%;
          }
          .most-recent-post-row-post-img img{
            width:100%;
            height:12.4vw;
            max-height: 190px;
            object-fit:cover;
          }
          .most-recent-post-row-post{
            padding:2rem 0;
            margin-right: 1.75rem;
            border-bottom: 1px solid rgb(216, 216, 216);
          }
          .most-recent-post-row-post-info{
            margin: 0 0 0 2rem;
            width:68%;
          }
          .most-recent-post-row-post h4{
            line-height: 1.25em;
            margin: 0.25rem 0 1rem 0;
            font-size: 24px;
            font-weight:550;
            transition: var(--trans,color .4s ease 0s);
            font-family: 'Lato', sans-serif;
          }
          .most-recent-post-row-post h4:hover{
            color: #057dbc;
            transition: var(--trans,color .4s ease 0s);
          }
          .most-recent-post-row-post-topic{
            text-transform: uppercase;
            font-size: 12px;
            font-family: 'Poppins', sans-serif !important;
            font-weight: 500 !important;
          }
          .most-recent-post-row-post-date{
            text-transform: uppercase;
            font-size: 12px;
            margin-top: 12px;
            font-family: 'Poppins', sans-serif !important;
            font-weight: 500 !important;
          }
        }
        @media screen and (min-width: 1025px) and (max-width: 1280px){
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
            .most-recent-cover .title-sec {
              height: 450px;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 2.2rem;
            }
            .most-recent-cover .title-sec span {
              text-transform: capitalize;
                font-family: 'Poppins', sans-serif;
                font-size: 42px;
                font-weight: 550;
                position: absolute;
            }
            .most-recent-post{
              margin: -30px 3rem 100px 3rem ;
            }
            .most-recent-post-row{
              width:68%;
            }
            .most-recent-post-row-post-img{
              width:32%;
            }
            .most-recent-post-row-post-img img{
              width:100%;
              height:12.4vw;
              max-height: 190px;
              object-fit:cover;
            }
            .most-recent-post-row-post{
              padding:2rem 0;
              margin-right: 1.75rem;
              border-bottom: 1px solid rgb(216, 216, 216);
            }
            .most-recent-post-row-post-info{
              margin: 0 0 0 2rem;
              width:68%;
            }
            .most-recent-post-row-post h4{
              line-height: 1.25em;
              margin: 0.25rem 0 1rem 0;
              font-size: 24px;
              font-weight:550;
              transition: var(--trans,color .4s ease 0s);
              font-family: 'Lato', sans-serif;
            }
            .most-recent-post-row-post h4:hover{
              color: #057dbc;
              transition: var(--trans,color .4s ease 0s);
            }
            .most-recent-post-row-post-topic{
              text-transform: uppercase;
              font-size: 12px;
              font-family: 'Poppins', sans-serif !important;
              font-weight: 500 !important;
            }
            .most-recent-post-row-post-date{
              text-transform: uppercase;
              font-size: 12px;
              margin-top: 12px;
              font-family: 'Poppins', sans-serif !important;
              font-weight: 500 !important;
            }
          }
          @media screen and (min-width: 750px) and (max-width: 1025px){
            .most-recent-cover .title-sec {
              height: 450px;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 2.2rem;
            }
            .most-recent-cover .title-sec span {
              text-transform: capitalize;
                font-family: 'Poppins', sans-serif;
                font-size: 42px;
                font-weight: 550;
                position: absolute;
            }
            .most-recent-post{
              margin: -30px 3rem 100px 3rem ;
            }
            .most-recent-post-row{
              width:100%;
            }
            .most-recent-post-row-post-img{
              width:33.5%;
            }
            .most-recent-post-row-post-img img{
              width:100%;
              height:19vw;
              max-height: 190px;
              object-fit:cover;
            }
            .most-recent-post-row-post{
              padding:2rem 0;
              border-bottom: 1px solid rgb(216, 216, 216);
            }
            .most-recent-post-row-post-info{
              margin: 0 0 0 1.5rem;
              width:66.5%;
            }
            .most-recent-post-row-post h4{
              line-height: 1.25em;
              margin: 0.25rem 0 1rem 0;
              font-size: 24px;
              font-weight:550;
              transition: var(--trans,color .4s ease 0s);
              font-family: 'Lato', sans-serif;
            }
            .most-recent-post-row-post h4:hover{
              color: #057dbc;
              transition: var(--trans,color .4s ease 0s);
            }
            .most-recent-post-row-post-topic{
              text-transform: uppercase;
              font-size: 12px;
              font-family: 'Poppins', sans-serif !important;
              font-weight: 500 !important;
            }
            .most-recent-post-row-post-date{
              text-transform: uppercase;
              font-size: 12px;
              margin-top: 12px;
              font-family: 'Poppins', sans-serif !important;
              font-weight: 500 !important;
            }
          }
          @media screen and (max-width: 750px){
            .most-recent-cover .title-sec {
              margin: 0 1.5rem;
              height: 463px;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .most-recent-cover .title-sec span {
              text-transform: capitalize;
              font-family: 'Poppins', sans-serif;
              font-size: 35px;
              font-weight: 550;
              position: absolute;
              margin-top: -4rem;
            }
            .most-recent-post{
              margin: -30px 1.5rem 100px 1.5rem;
            }
            .most-recent-post-row{
              width:100%;
            }
            .most-recent-post-row-post-img{
              width:26%;
            }
            .most-recent-post-row-post-img img{
              width:100%;
              height:21.2vw;
              max-height: 160px;
              max-width: 283.5px;
              object-fit:cover;
            }
            .most-recent-post-row-post{
              flex-direction: row-reverse;
              padding:2rem 0;
              border-bottom: 1px solid rgb(216, 216, 216);
            }
            .most-recent-post-row-post-info{
              margin: 0 1.5rem 0 0;
              width:74%;
            }
            .most-recent-post-row-post h4{
              line-height: 1.2em;
              margin: 0.25rem 0 0.75rem 0;
              font-size: 20.5px;
              font-weight:550;
              transition: var(--trans,color .4s ease 0s);
              font-family: 'Lato', sans-serif;
            }
            .most-recent-post-row-post h4:hover{
              color: #057dbc;
              transition: var(--trans,color .4s ease 0s);
            }
            .most-recent-post-row-post-topic{
              text-transform: uppercase;
              font-size: 12px;
              font-family: 'Poppins', sans-serif !important;
              font-weight: 500 !important;
            }
            .most-recent-post-row-post-date{
              text-transform: uppercase;
              font-size: 12px;
              font-family: 'Poppins', sans-serif !important;
              font-weight: 500 !important;
            }
          }
        `}
      </style>
      <div className="most-recent-cover">
        <div className="title-sec" style={{height:`350px`}}>
          <span style={{color:`#000000`, marginBottom:`-100px`}}>Most Recent</span>
        </div>
        <div className="most-recent-post">
          <div className="most-recent-post-row">
          {mostRecentPosts &&
          mostRecentPosts.map((post) =>
          <Link to={`/post/${post.slug}`} key={post._id}>
            <div className="most-recent-post-row-post flex">
                <div className="most-recent-post-row-post-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="most-recent-post-row-post-info">
                  <p className="most-recent-post-row-post-topic">{post.category}</p>
                  <h4>{post.title}</h4>
                  <p className="most-recent-post-row-post-date">{formatDate(post.updatedAt)}</p>
                </div>
            </div>
          </Link>
          )}
          {showMore && (
            <button id="load-more" className="sedbtn sedbtn2" onClick={handleShowMore}>Load More</button>
          )}
          </div>
        </div>
      </div>
    </>
  )
}
