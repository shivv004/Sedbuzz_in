import './css/common.css';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { formatDate } from './hooks/formatDate';
import { Helmet } from 'react-helmet'

export default function Science() {
  const [sciencePost, setSciencePost] = useState(null);
  const [sciencePost2, setSciencePost2] = useState(null);
  const [sciencePost3, setSciencePost3] = useState(null);

  const [sciencePosts, setSciencePosts] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    try {
      const fetchSciencePosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&category=science&startIndex=0`);
        const res2 = await fetch(`/api/post/getposts?limit=1&category=science&startIndex=1`);
        const res3 = await fetch(`/api/post/getposts?limit=1&category=science&startIndex=2`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        if (res.ok && res2.ok && res3.ok) {
          setSciencePost(data.posts);
          setSciencePost2(data2.posts);
          setSciencePost3(data3.posts);
        }
      };
      fetchSciencePosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    const fetchSciencePosts2 = async () => {
      try {
        const res = await fetch(`/api/post/getposts?category=science&startIndex=3`);
        const data = await res.json();
        if (res.ok) {
          setSciencePosts(data.posts);
          if (data.posts.length < 8) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSciencePosts2();
  }, []);
  
  const handleShowMore = async () => {
    const startIndex = sciencePosts.length + 3;
    try {
      const res = await fetch(
        `/api/post/getposts?category=science&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setSciencePosts((prev) => [...prev, ...data.posts]);
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
        <title>Science | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/category/science`}/>
      </Helmet> 
      <div className="category-title">
        <div className="title-sec">
          <img src="/assets/science.jpg" alt="background"></img>
          <span>science</span>
        </div>
        <span id="common-img-credit">Photo by <a href="https://pixabay.com/users/kkolosov-2105326/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2030261" target="_blank" rel="noreferrer">Konstantin Kolosov</a></span>
      </div>
      <div className="science-cover">
        <div className="category-post-top flex">
          <div className="category-post-top-col1">
          {sciencePost &&
            sciencePost.map((post) =>
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
            {sciencePost2 &&
            sciencePost2.map((post) =>
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
            {sciencePost3 &&
            sciencePost3.map((post) =>
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
            {sciencePosts &&
            sciencePosts.map((post) =>
            <div id="science-post-bottom-row-post" className="category-post-bottom-row-post" key={post._id}>
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
