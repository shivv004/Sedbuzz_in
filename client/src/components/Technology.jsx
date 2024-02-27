import './css/common.css';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { formatDate } from './hooks/formatDate';
import { Helmet } from 'react-helmet'

export default function Technology() {
  const [techPost, setTechPost] = useState(null);
  const [techPost2, setTechPost2] = useState(null);
  const [techPost3, setTechPost3] = useState(null);

  const [techPosts, setTechPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    try {
      const fetchTechPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&category=technology&startIndex=0`);
        const res2 = await fetch(`/api/post/getposts?limit=1&category=technology&startIndex=1`);
        const res3 = await fetch(`/api/post/getposts?limit=1&category=technology&startIndex=2`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        if (res.ok && res2.ok && res3.ok) {
          setTechPost(data.posts);
          setTechPost2(data2.posts);
          setTechPost3(data3.posts);
        }
      };
      fetchTechPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    const fetchTechPosts2 = async () => {
      try {
        const res = await fetch(`/api/post/getposts?category=technology&startIndex=3`);
        const data = await res.json();
        if (res.ok) {
          setTechPosts(data.posts);
          if (data.posts.length < 8) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTechPosts2();
  }, []);
  
  const handleShowMore = async () => {
    const startIndex = techPosts.length + 3;
    try {
      const res = await fetch(
        `/api/post/getposts?category=technology&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setTechPosts((prev) => [...prev, ...data.posts]);
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
        <title>Technology | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/category/technology`}/>
      </Helmet> 
      <div className="category-title">
        <div className="title-sec">
          <img src="/assets/tech.jpg" alt="background"></img>
          <span>Technology</span>
        </div>
        <span id="common-img-credit">Photo by <a href="https://unsplash.com/@austindistel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">Austin Distel</a></span>
      </div>
      <div className="tech-cover">
        <div className="category-post-top flex">
          <div className="category-post-top-col1">
            {techPost &&
            techPost.map((post) =>
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
            {techPost2 &&
            techPost2.map((post) =>
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
            {techPost3 &&
            techPost3.map((post) =>
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
            {techPosts &&
            techPosts.map((post) =>
            <div id="tech-post-bottom-row-post" className="category-post-bottom-row-post" key={post._id}>
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
