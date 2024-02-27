import './css/search.css';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { formatDate } from './hooks/formatDate';
import { Helmet } from 'react-helmet'

export default function Search() {
  const [ formData, setFormData ] = useState({
    searchTerm: '',
    sort: 'desc',
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [noResult, setNoResult] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('q');
    const sortFromUrl = urlParams.get('sort');
    if (searchTermFromUrl || sortFromUrl) {
      setFormData({
        ...formData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
      });
    }
    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getsearchposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setFormData({ ...formData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setFormData({ ...formData, sort: order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    setNoResult(formData.searchTerm);
    urlParams.set('q', formData.searchTerm);
    urlParams.set('sort', formData.sort);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getsearchposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Search | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/search`}/>
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
        `}
      </style>
      <div className="search-page">
        <div className="title-sec">
          <span style={{color:`#000000`}}>Search SedBuzz</span>
          <form onSubmit={handleSubmit} className="search-bar flex-colomn">
            <div className="search-bar-input flex">
              <input type="search" placeholder="Try &quot;Artificial Intelligence&quot;" value={formData.searchTerm} onChange={handleChange} id='searchTerm'/>
              <CgSearch id="search"/>
              <button type="submit" className="sedbtn sedbtn2">Search</button>
            </div>
            <div className="form-floating">
              <p id="form-sort-text">Sort by</p>
              <select className="form-select" onChange={handleChange} value={formData.sort} id='sort'>
                <option value="desc">Newest</option>
                <option value="asc">Oldest</option>
              </select>
            </div>
          </form>
        </div>
        <div className="search-post">
          <div className="search-post-row">
          {!loading && posts.length === 0 && (
            <p style={{fontFamily:`'Poppins', sans-serif`, fontSize:`14px`}} className='text-m text-gray-400 mt-6'>0 posts about "{noResult}"</p>
          )}
          {loading && <p style={{fontFamily:`'Poppins', sans-serif`, fontSize:`14px`}} className='text-m text-gray-400 mt-6'>Loading...</p>}
          {!loading &&
          posts &&
          posts.map((post) =>
          <Link to={`/post/${post.slug}`} key={post._id}>
            <div className="search-post-row-post flex">
                <div className="search-post-row-post-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="search-post-row-post-info">
                  <p className="search-post-row-post-topic">{post.category}</p>
                  <h4>{post.title}</h4>
                  <p className="search-post-row-post-date">{formatDate(post.updatedAt)}</p>
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
