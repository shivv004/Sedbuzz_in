import './css/common.css';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { formatDate } from './hooks/formatDate';
import { Helmet } from 'react-helmet'

export default function Gaming() {
  const [gamingPost, setGamingPost] = useState(null);
  const [gamingPost2, setGamingPost2] = useState(null);
  const [gamingPost3, setGamingPost3] = useState(null);

  const [gamingPosts, setGamingPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    try {
      const fetchGamingPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&category=gaming&startIndex=0`);
        const res2 = await fetch(`/api/post/getposts?limit=1&category=gaming&startIndex=1`);
        const res3 = await fetch(`/api/post/getposts?limit=1&category=gaming&startIndex=2`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        if (res.ok && res2.ok && res3.ok) {
          setGamingPost(data.posts);
          setGamingPost2(data2.posts);
          setGamingPost3(data3.posts);
        }
      };
      fetchGamingPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    const fetchGamingPosts2 = async () => {
      try {
        const res = await fetch(`/api/post/getposts?category=gaming&startIndex=3`);
        const data = await res.json();
        if (res.ok) {
          setGamingPosts(data.posts);
          if (data.posts.length < 8) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchGamingPosts2();
  }, []);
  
  const handleShowMore = async () => {
    const startIndex = gamingPosts.length + 3;
    try {
      const res = await fetch(
        `/api/post/getposts?category=gaming&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setGamingPosts((prev) => [...prev, ...data.posts]);
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
        <title>Gaming | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/category/gaming`}/>
      </Helmet> 
      <div className="category-title">
        <div className="title-sec">
          <img src="/assets/gaming.jpg" alt="background"></img>
          <span>Gaming</span>
        </div>
        <span id="common-img-credit">Photo by <a href="https://unsplash.com/@rapol?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">Rafael Pol</a></span>
      </div>
      <div className="gaming-cover">
        <div className="category-post-top flex">
          <div className="category-post-top-col1">
          {gamingPost &&
            gamingPost.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div className="category-post-top-col1-img">
                <img src={post.image} alt="thumbnail"></img>
              </div>
              <div className="category-post-top-col1-details">
                <h4>{post.title}</h4>
                <p className="category-post-top-col1-description">{post.description}</p>
                <p className="category-post-top-col1-date">{formatDate(post.updatedAt)}</p>
              </div>
            </Link>
            )}
          </div>
          <div className="category-post-top-col2">
            <div className="category-post-top-col2-post1">
            {gamingPost2 &&
            gamingPost2.map((post) =>
              <Link to={`/post/${post.slug}`} key={post._id}>
                <div className="category-post-top-col2-post1-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="category-post-top-col2-post1-details">
                  <h4>{post.title}</h4>
                  <p className="category-post-top-col2-post1-date">{formatDate(post.updatedAt)}</p>
                </div>
              </Link>
            )}
            </div>
            <div className="category-post-top-col2-post2">
            {gamingPost3 &&
            gamingPost3.map((post) =>
              <Link to={`/post/${post.slug}`} key={post._id}>
              <div className="category-post-top-col2-post2-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="category-post-top-col2-post2-details">
                  <h4>{post.title}</h4>
                  <p className="category-post-top-col2-post2-date">{formatDate(post.updatedAt)}</p>
                </div>
              </Link>
            )}
            </div>
          </div>
        </div>
        <div className="category-post-bottom">
          <div className="lower-head flex">
            <h3>Latest</h3>
            <div className="head-gap"></div>
          </div>
          <div className="category-post-bottom-row">
            {gamingPosts &&
            gamingPosts.map((post) =>
            <div id="gaming-post-bottom-row-post" className="category-post-bottom-row-post" key={post._id}>
              <Link to={`/post/${post.slug}`}>
                <div className="category-post-bottom-row-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="category-post-bottom-row-details">
                  <h4>{post.title}</h4>
                  <p className="category-post-bottom-row-post-description">{post.description}</p>
                  <p className="category-post-bottom-row-post-date">{formatDate(post.updatedAt)}</p>
                </div>
              </Link>
            </div>
            )}
          </div>
          {showMore && (
              <button style={{marginTop:`4rem`}} id="load-more" className="sedbtn sedbtn2" onClick={handleShowMore}>Load More</button>
          )}
        </div>
      </div>
    </>
  )
}
