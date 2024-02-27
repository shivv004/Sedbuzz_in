import { useEffect, useState } from 'react';
import './css/Main.css';
import { Link } from "react-router-dom";
import { formatDate } from './hooks/formatDate';
import { Helmet } from 'react-helmet'

export default function Main() {
  const [carouselPost, setCarouselPost] = useState(null);
  const [buzzPost, setBuzzPost] = useState(null);
  const [buzzPost2, setBuzzPost2] = useState(null);
  const [buzzPost3, setBuzzPost3] = useState(null);
  const [recentPosts1, setRecentPosts1] = useState(null);
  const [recentPosts2, setRecentPosts2] = useState(null);
  const [recentPosts3, setRecentPosts3] = useState(null);
  const [recentPosts4, setRecentPosts4] = useState(null);
  const [recentPosts5, setRecentPosts5] = useState(null);

  const [techPost1, setTechPost1] = useState(null);
  const [techPost2, setTechPost2] = useState(null);
  const [techPost3, setTechPost3] = useState(null);
  const [techPost4, setTechPost4] = useState(null);
  const [techPost5, setTechPost5] = useState(null);

  const [gamingPost1, setGamingPost1] = useState(null);
  const [gamingPost2, setGamingPost2] = useState(null);
  const [gamingPost3, setGamingPost3] = useState(null);
  const [gamingPost4, setGamingPost4] = useState(null);
  const [gamingPost5, setGamingPost5] = useState(null);

  const [sciencePost1, setSciencePost1] = useState(null);
  const [sciencePost2, setSciencePost2] = useState(null);
  const [sciencePost3, setSciencePost3] = useState(null);
  const [sciencePost4, setSciencePost4] = useState(null);
  const [sciencePost5, setSciencePost5] = useState(null);

  const [trendingPost1, setTrendingPost1] = useState(null);
  const [trendingPost2, setTrendingPost2] = useState(null);
  const [trendingPost3, setTrendingPost3] = useState(null);
  const [trendingPost4, setTrendingPost4] = useState(null);

  useEffect(() => {
    try {
      const fetchCarouselPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=5&startIndex=0`);
        const data = await res.json();
        if (res.ok) {
          setCarouselPost(data.posts);
        }
      };
      fetchCarouselPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchBuzzPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&startIndex=2`);
        const res2 = await fetch(`/api/post/getposts?limit=1&startIndex=3`);
        const res3 = await fetch(`/api/post/getposts?limit=1&startIndex=1`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        if (res.ok && res2.ok && res3.ok) {
          setBuzzPost(data.posts);
          setBuzzPost2(data2.posts);
          setBuzzPost3(data3.posts);
        }
      };
      fetchBuzzPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&startIndex=0`);
        const res2 = await fetch(`/api/post/getposts?limit=1&startIndex=4`);
        const res3 = await fetch(`/api/post/getposts?limit=1&startIndex=5`);
        const res4 = await fetch(`/api/post/getposts?limit=1&startIndex=6`);
        const res5 = await fetch(`/api/post/getposts?limit=1&startIndex=7`);
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

  useEffect(() => {
    try {
      const fetchTechPost = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&startIndex=0&category=technology`);
        const res2 = await fetch(`/api/post/getposts?limit=1&startIndex=1&category=technology`);
        const res3 = await fetch(`/api/post/getposts?limit=1&startIndex=2&category=technology`);
        const res4 = await fetch(`/api/post/getposts?limit=1&startIndex=3&category=technology`);
        const res5 = await fetch(`/api/post/getposts?limit=1&startIndex=4&category=technology`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        const data4 = await res4.json();
        const data5 = await res5.json();
        if (res.ok && res2.ok && res3.ok && res4.ok && res5.ok) {
          setTechPost1(data.posts);
          setTechPost2(data2.posts)
          setTechPost3(data3.posts)
          setTechPost4(data4.posts)
          setTechPost5(data5.posts)
        }
      };
      fetchTechPost();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchGamingPost = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&startIndex=0&category=gaming`);
        const res2 = await fetch(`/api/post/getposts?limit=1&startIndex=1&category=gaming`);
        const res3 = await fetch(`/api/post/getposts?limit=1&startIndex=2&category=gaming`);
        const res4 = await fetch(`/api/post/getposts?limit=1&startIndex=3&category=gaming`);
        const res5 = await fetch(`/api/post/getposts?limit=1&startIndex=4&category=gaming`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        const data4 = await res4.json();
        const data5 = await res5.json();
        if (res.ok && res2.ok && res3.ok && res4.ok && res5.ok) {
          setGamingPost1(data.posts);
          setGamingPost2(data2.posts)
          setGamingPost3(data3.posts)
          setGamingPost4(data4.posts)
          setGamingPost5(data5.posts)
        }
      };
      fetchGamingPost();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchSciencePost = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&startIndex=0&category=science`);
        const res2 = await fetch(`/api/post/getposts?limit=1&startIndex=1&category=science`);
        const res3 = await fetch(`/api/post/getposts?limit=1&startIndex=2&category=science`);
        const res4 = await fetch(`/api/post/getposts?limit=1&startIndex=3&category=science`);
        const res5 = await fetch(`/api/post/getposts?limit=1&startIndex=4&category=science`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        const data4 = await res4.json();
        const data5 = await res5.json();
        if (res.ok && res2.ok && res3.ok && res4.ok && res5.ok) {
          setSciencePost1(data.posts);
          setSciencePost2(data2.posts)
          setSciencePost3(data3.posts)
          setSciencePost4(data4.posts)
          setSciencePost5(data5.posts)
        }
      };
      fetchSciencePost();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchTrendingPost = async () => {
        const res = await fetch(`/api/post/getposts?limit=1&startIndex=7`);
        const res2 = await fetch(`/api/post/getposts?limit=1&startIndex=8`);
        const res3 = await fetch(`/api/post/getposts?limit=1&startIndex=9`);
        const res4 = await fetch(`/api/post/getposts?limit=1&startIndex=10`);
        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        const data4 = await res4.json();
        if (res.ok && res2.ok && res3.ok && res4.ok) {
          setTrendingPost1(data.posts);
          setTrendingPost2(data2.posts)
          setTrendingPost3(data3.posts)
          setTrendingPost4(data4.posts)
        }
      };
      fetchTrendingPost();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return(
    <>
      <Helmet>
        <title>SedBuzz – Your Source for the Latest Buzz! | Technology |  Gaming | Science</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com`}/>
        <meta property="og:description" content="We're here to keep it simple and fun, delivering the hottest updates and insights straight to you. Whether you're into the latest gadgets, gaming adventures, or fascinating scientific discoveries, SedBuzz has you covered."/>
      </Helmet> 
      <div className="carousel" data-bs-ride="true">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button id="indicator" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button id="indicator" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button id="indicator" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button id="indicator" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button id="indicator" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
          {carouselPost &&
          carouselPost.map((post, index) =>
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={post.image} className="d-block w-100" alt="thumbnail"/>
              <Link to={`/post/${post.slug}`}>
                <div className="carou-caption">
                  <h2 className="carousel-header">{post.title}</h2>
                  <p className="carousel-des">{post.description}</p>
                  <br></br>
                  <div className="carousel-post-info flex">
                    <p className="carousel-date"><span>{formatDate(post.updatedAt)}</span></p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          </div>
        </div>
      </div>
      <div className="post">
        <div className="top-post">
          <div className="featured">
            <div className="featured-head flex">
              <h3>BUZZING HIGHLIGHTS </h3>
              <div className="head-gap"></div>
            </div>
            <div className="featured-post flex">
              <div className="featured-col1">
                <div className="featured-col1-post1">
                {buzzPost &&
                buzzPost.map((post) =>
                  <Link to={`/post/${post.slug}`} key={post._id}>
                    <img src={post.image} alt="thumbnail"></img>
                    <p>{post.category}</p>
                    <h4>{post.title}</h4>
                    <p className="featured-col1-post-date">{formatDate(post.updatedAt)}</p>
                  </Link>
                )}
                </div>
                <div className="featured-col1-post2">
                {buzzPost2 &&
                buzzPost2.map((post) =>
                  <Link to={`/post/${post.slug}`} key={post._id}>
                    <img src={post.image} alt="thumbnail"></img>
                    <p>{post.category}</p>
                    <h4>{post.title}</h4>
                    <p className="featured-col1-post-date">{formatDate(post.updatedAt)}</p>
                  </Link>
                )}
                </div>
              </div>
              <div className="featured-col2">
                {buzzPost3 &&
                buzzPost3.map((post) =>
                <Link to={`/post/${post.slug}`} key={post._id}>
                  <img src={post.image} alt="thumbnail"></img>
                  <p className="featured-post-topic">{post.category}</p>
                  <h4>{post.title}</h4>
                  <p className="featured-post-description">{post.description}</p>
                  <p className="featured-post-date">{formatDate(post.updatedAt)}</p>
                </Link>
                )}
              </div>
            </div>
          </div>
          <div className="latest">
            <div className="latest-head flex">
              <Link to="category/most-recent"><h3>MOST RECENT</h3></Link>
              <div className="head-gap"></div>
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
              <div className="latest-post-div" id="latest-post-div-2">
              {recentPosts2 && 
              recentPosts2.map((post) =>
                <Link to={`/post/${post.slug}`} id="latest-rows-a" key={post._id}>
                  <div  className="latest-rows flex" id="latest-rows">
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
                  <div  className="latest-rows flex" id="latest-rows">
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
                  <div  className="latest-rows flex" id="latest-rows">
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
                  <div  className="latest-rows flex" id="latest-rows">
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
            </div>
          </div>
        </div>
        <div className="lower-post">
          <div className="lower-head flex">
            <Link to="category/technology"><h3>Technology</h3></Link>
            <div className="head-gap"></div>
          </div>
          {techPost1 && 
          techPost1.map((post) =>
          <Link to={`/post/${post.slug}`} key={post._id}>
            <div className="top-lower-post flex">
              <div className="top-lower-post-img">
                <img src={post.image} alt="thumbnail"></img>
              </div>
              <div className="top-lower-post-contents relative">
                <h4>{post.title}</h4>
                <p className="top-lower-post-description absolute bottom-8">{post.description}</p>
                <p className="top-lower-post-date absolute bottom-0">{formatDate(post.updatedAt)}</p>
              </div>
            </div>
          </Link>
          )}
          <hr style={{opacity:"0.18"}}></hr>
          <div className="bottom-lower-post">
            {techPost2 && 
            techPost2.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="first-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            {techPost3 && 
            techPost3.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="sec-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            <hr></hr>
            {techPost4 && 
            techPost4.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="third-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            <hr></hr>
            {techPost5 && 
            techPost5.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="last-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
          </div>
        </div>
        <div className="lower-post">
          <div className="lower-head flex">
            <Link to="category/gaming"><h3>Gaming</h3></Link>
            <div className="head-gap"></div>
          </div>
          {gamingPost1 && 
          gamingPost1.map((post) =>
          <Link to={`/post/${post.slug}`} key={post._id}>
            <div className="top-lower-post flex">
              <div className="top-lower-post-img">
                <img src={post.image} alt="thumbnail"></img>
              </div>
              <div className="top-lower-post-contents relative">
                <h4>{post.title}</h4>
                <p className="top-lower-post-description absolute bottom-8">{post.description}</p>
                <p className="top-lower-post-date absolute bottom-0">{formatDate(post.updatedAt)}</p>
              </div>
            </div>
          </Link>
          )}
          <hr style={{opacity:"0.18"}}></hr>
          <div className="bottom-lower-post">
            {gamingPost2 && 
            gamingPost2.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="first-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            {gamingPost3 && 
            gamingPost3.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="sec-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            <hr></hr>
            {gamingPost4 && 
            gamingPost4.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="third-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            <hr></hr>
            {gamingPost5 && 
            gamingPost5.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="last-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
          </div>
        </div>
        <div className="trending">
          <div className="lower-head flex">
            <Link to="category/trending"><h3>Trending Topics</h3></Link>
            <div className="head-gap"></div>
          </div>
          <div className="trending-row">
            <div className="trending-row-post" id="trending-row-post1" style={{paddingRight:`15px`}}>
              {trendingPost1 && 
              trendingPost1.map((post) =>
              <Link to={`/post/${post.slug}`} key={post._id}>
                <div className="trending-row-post-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="trending-row-post-details">
                  <p className="trending-row-post-topic">{post.category}</p>
                  <h4>{post.title}</h4>
                  <p className="trending-row-post-description">{post.description}</p>
                  <p className="trending-row-post-date">{formatDate(post.updatedAt)}</p>
                </div>
              </Link>
              )}
            </div>
            <div className="trending-row-post" id="trending-row-post2" style={{padding:`0 15px`}}>
              {trendingPost2 && 
              trendingPost2.map((post) =>
              <Link to={`/post/${post.slug}`} key={post._id}>
                <div className="trending-row-post-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="trending-row-post-details">
                  <p className="trending-row-post-topic">{post.category}</p>
                  <h4>{post.title}</h4>
                  <p className="trending-row-post-description">{post.description}</p>
                  <p className="trending-row-post-date">{formatDate(post.updatedAt)}</p>
                </div>
              </Link>
              )}
            </div>
            <div className="trending-row-post" id="trending-row-post3" style={{padding:`0 15px`}}>
              {trendingPost3 && 
              trendingPost3.map((post) =>
              <Link to={`/post/${post.slug}`} key={post._id}>
                <div className="trending-row-post-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="trending-row-post-details">
                  <p className="trending-row-post-topic">{post.category}</p>
                  <h4>{post.title}</h4>
                  <p className="trending-row-post-description">{post.description}</p>
                  <p className="trending-row-post-date">{formatDate(post.updatedAt)}</p>
                </div>
              </Link>
              )}
            </div>
            <div className="trending-row-post" id="trending-row-post4" style={{paddingLeft:`15px`}}>
              {trendingPost4 && 
              trendingPost4.map((post) =>
              <Link to={`/post/${post.slug}`} key={post._id}>
                <div className="trending-row-post-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="trending-row-post-details">
                  <p className="trending-row-post-topic">{post.category}</p>
                  <h4>{post.title}</h4>
                  <p className="trending-row-post-description">{post.description}</p>
                  <p className="trending-row-post-date">{formatDate(post.updatedAt)}</p>
                </div>
              </Link>
              )}
            </div>
          </div>
        </div>
        <div className="lower-post">
          <div className="lower-head flex">
            <Link to="category/science"><h3>Science</h3></Link>
            <div className="head-gap"></div>
          </div>
          {sciencePost1 && 
          sciencePost1.map((post) =>
          <Link to={`/post/${post.slug}`} key={post._id}>
            <div className="top-lower-post flex">
              <div className="top-lower-post-img">
                <img src={post.image} alt="thumbnail"></img>
              </div>
              <div className="top-lower-post-contents relative">
                <h4>{post.title}</h4>
                <p className="top-lower-post-description absolute bottom-8">{post.description}</p>
                <p className="top-lower-post-date absolute bottom-0">{formatDate(post.updatedAt)}</p>
              </div>
            </div>
          </Link>
          )}
          <hr style={{opacity:"0.18"}}></hr>
          <div className="bottom-lower-post">
            {sciencePost2 && 
            sciencePost2.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="first-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            {sciencePost3 && 
            sciencePost3.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="sec-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            <hr></hr>
            {sciencePost4 && 
            sciencePost4.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="third-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
            <hr></hr>
            {sciencePost5 && 
            sciencePost5.map((post) =>
            <Link to={`/post/${post.slug}`} key={post._id}>
              <div id="last-bottom-lower-post" className="bottom-lower-post-rows flex">
                  <div className="bottom-lower-post-row-details">
                    <p>{formatDate(post.updatedAt)}</p>
                    <h4>{post.title}</h4>
                  </div>
                  <div className="bottom-lower-post-img">
                    <img src={post.image} alt="thumbnail"></img>
                  </div>
              </div>
            </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
