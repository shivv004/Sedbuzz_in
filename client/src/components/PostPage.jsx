import './css/PostPage.css';
import{ React, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ReactLoading from 'react-loading';
import { formatDate } from './hooks/formatDate';
import './css/Main.css';
import { useSelector } from 'react-redux';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import Comment from './Comment';
import { Helmet } from 'react-helmet'

export default function PostPage() {
    const { currentUser } = useSelector((state) => state.user);
    const [author, setAuthor] = useState([]);
    const {postSlug} = useParams();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const [morePost, setMorePost] = useState(null);
    const [recentPosts1, setRecentPosts1] = useState(null);
    const [recentPosts2, setRecentPosts2] = useState(null);
    const [recentPosts3, setRecentPosts3] = useState(null);
    const [recentPosts4, setRecentPosts4] = useState(null);
    const [comment, setComment] = useState('');
    const [commentError, setCommentError] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentToDelete, setCommentToDelete] = useState(null);
    const navigate = useNavigate();
    const updatedAtFormatted = post ? formatDate(post.updatedAt) : ''

    useEffect(() => {
        const fetchPost = async () => {
          try {
            setLoading(true);
            const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
            const data = await res.json();
            if (!res.ok) {
              setLoading(false);
              return;
            }
            if (res.ok) {
              setPost(data.posts[0]);
              setLoading(false);
            }
          } catch (error) {
            setLoading(false);
          }
        };
        fetchPost();
      }, [postSlug]);

      const cat = post && post.category;

      useEffect(() => {
        if (!cat) return;
        try {
          const fetchRecentPosts = async () => {
            const res = await fetch(`/api/post/getposts?limit=1&startIndex=0&category=${cat}`);
            const res2 = await fetch(`/api/post/getposts?limit=1&startIndex=1&category=${cat}`);
            const res3 = await fetch(`/api/post/getposts?limit=1&startIndex=2&category=${cat}`);
            const res4 = await fetch(`/api/post/getposts?limit=1&startIndex=3&category=${cat}`);
            const data = await res.json();
            const data2 = await res2.json();
            const data3 = await res3.json();
            const data4 = await res4.json();
            if (res.ok && res2.ok && res3.ok && res4.ok) {
              setRecentPosts1(data.posts);
              setRecentPosts2(data2.posts)
              setRecentPosts3(data3.posts)
              setRecentPosts4(data4.posts)
            }
          };
          fetchRecentPosts();
        } catch (error) {
          console.log(error.message);
        }
      }, [cat]);

      useEffect(() => {
        try {
          const fetchMorePosts = async () => {
            const res = await fetch(`/api/post/getposts?limit=8&startIndex=2`);
            const data = await res.json();
            if (res.ok) {
              setMorePost(data.posts);
            }
          };
          fetchMorePosts();
        } catch (error) {
          console.log(error.message);
        }
      }, []);

      useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const res = await fetch(`/api/user/author/${post.userId}`);
                const data = await res.json();
                if (res.ok) {
                  setAuthor(data);
                }
              } catch (error) {
                next(error);
              }
            };
        if (post && post.userId) {
            fetchAuthor();
        }
    }, [post]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (comment.length > 400) {
        return;
      }
      try {
        const res = await fetch('/api/comment/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: comment,
            postId: post._id,
            userId: currentUser._id,
          }),
        });
        const data = await res.json();
        if (res.ok) {
          setComment('');
          setCommentError(null);
          setComments([data, ...comments]);
        }
        if (!res.ok) {
          setCommentError("Something went wrong. Please try again.");
        }
      } catch (error) {
        setCommentError(error.message);
      }
    };

    const postId = post && post._id;

    useEffect(() => {
      const getComments = async () => {
        try {
          const res = await fetch(`/api/comment/getPostComments/${postId}`);
          if (res.ok) {
            const data = await res.json();
            setComments(data);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      getComments();
    }, [postId]);

    const handleLike = async (commentId) => {
      try {
        if (!currentUser) {
          navigate('/sign-in');
          return;
        }
        const res = await fetch(`/api/comment/likeComment/${commentId}`, {
          method: 'PUT',
        });
        if (res.ok) {
          const data = await res.json();
          setComments(
            comments.map((comment) =>
              comment._id === commentId
                ? {
                    ...comment,
                    likes: data.likes,
                    numberOfLikes: data.likes.length,
                  }
                : comment
            )
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const handleEdit = async (comment, editedContent) => {
      setComments(
        comments.map((c) =>
          c._id === comment._id ? { ...c, content: editedContent } : c
        )
      );
    };
  
    const handleDelete = async (commentId) => {
      try {
        if (!currentUser) {
          navigate('/sign-in');
          return;
        }
        const res = await fetch(`/api/comment/deleteComment/${commentId}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          const data = await res.json();
          setComments(comments.filter((comment) => comment._id !== commentId));
        }
      } catch (error) {
        console.log(error.message);
      }
    };

  if (loading){
    return (
        <>
        <style>
            {`
            nav{
                display:none !important;
            }
            footer{
              display:none !important;
            }
            @media screen and (min-width: 1025px){
              #post-loading svg{
                margin-top: 0;
              }
            }
            @media screen and (max-width: 1025px){
              #post-loading svg{
                margin-top:-55px;
              }
            }
            `}

        </style>
      <div id='post-loading' className='flex justify-center items-center min-h-screen'>
        <ReactLoading type="spin" style={{height:`40px`,width:`40px`,color:`#000000`}}/>
      </div>
        </>
    );
  }

  return (
    <>
      <style>
      {`
      @media screen and (min-width: 765px) and (max-width: 1025px){
        #latest-post-div-3{
          border-bottom: 0px;
        }
      }
      `}
    </style>
    <Helmet>
      <title>{`${post.title} | SedBuzz`}</title> 
      <meta property="og:site_name" content="sedbuzz"/>
      <meta property="og:image" content={post.image}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`https://www.sedbuzz.com/post/${post.slug}`}/>
      <meta property="og:description" content={post.description}/>
      <meta property="article:published_time" content={post.createdAt}/>
      <meta property="article:modified_time" content={post.updatedAt}/>
    </Helmet> 
    <div className="post-sec-1">
      <img src={post.image} alt="thumbnail" />
    </div>
    <div className="post-page-cover">
      <div className="post-page">
        <div className="post-img-ref" dangerouslySetInnerHTML={{__html: post && post.imageRef}}>
        </div>
        <div className="post-sec-2">
          <div className="post-sec-2-1">
            <div className="post-head flex">
              <Link to={`/category/${post.category}`}><h3>{post.category}</h3></Link>
              <div className="post-head-gap">
                <span>{updatedAtFormatted}</span>
              </div>
            </div>
          </div>
          <div className="post-sec-2-2">
            <h1 id='post-title'>{post.title}</h1>
          </div>
        </div>
          <div className="post-sec-3">
            <div className="post-sec-3-content" dangerouslySetInnerHTML={{__html: post && post.content}}></div>
            <div className="post-sec-3-2">
              <div className="post-sec-3-related">
              <div className="latest w-full">
                <div className="latest-head-2">
                  <Link to="../category/most-recent"><h3>MOST RECENT</h3></Link>
                </div>
                <div className="latest-posts">
                  {recentPosts1 && 
                    recentPosts1.map((post) =>
                  <div className="latest-post-div mt-0" key={post._id}>
                    <Link to={`/post/${post.slug}`} id="latest-rows-a">
                      <div className="latest-rows flex" id="latest-rows">
                        <div className="latest-row-details">
                          <h4 className="mt-0">{post.title}</h4>
                        <p>{formatDate(post.updatedAt)}</p>
                        </div>
                        <div className="latest-img">
                          <img src={post.image} alt="thumbnail"></img>
                        </div>
                      </div>
                    </Link>
                  </div>
                  )}
                  {recentPosts2 && 
                    recentPosts2.map((post) =>
                  <div className="latest-post-div" key={post._id}>
                    <Link to={`/post/${post.slug}`} id="latest-rows-a">
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
                  </div>
                  )}
                  {recentPosts3 && 
                    recentPosts3.map((post) =>
                  <div className="latest-post-div" id="latest-post-div-3" key={post._id}>
                    <Link to={`/post/${post.slug}`} id="latest-rows-a">
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
                  </div>
                  )}
                  {recentPosts4 && 
                    recentPosts4.map((post) =>
                  <div className="latest-post-div-4" style={{border:`none`}} key={post._id}>
                    <Link to={`/post/${post.slug}`} id="latest-rows-a">
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
                  </div>
                  )}
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post-sec-4">
            <div className="post-sec-4-left">
              <div className="post-sec-4-author">
                <div className="author-img">
                  <img src={author.profilePicture} alt={author.name} />
                </div>
                <div className="author-details">
                  <div className="author-details-para">
                    <p>{author.name} (@{author.username}) is a {author.isAdmin ? "admin" : "user"} at SedBuzz.&nbsp;{author.about}</p>
                  </div>
                  <div className="author-details-social">
                    <span>{author.isAdmin ? "admin" : "user"}</span>
                    {author.linkedin &&
                    <a href={author.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    }
                    {author.twitter &&
                    <a href={author.twitter} target="_blank" rel="noreferrer"><FaXTwitter /></a>
                    }
                    {author.github &&
                    <a href={author.github} target="_blank" rel="noreferrer"><IoLogoGithub /></a>
                    }
                  </div>
                </div>
              </div>
              {currentUser ? (
                <>
                  <div className="post-sec-4-comments">
                    <div className="post-sec-4-comments-sec1">
                        <span>Signed in as <img src={currentUser.profilePicture} alt={currentUser.name} /> <Link style={{color:`rgb(8, 145, 178)`,fontFamily: `'Poppins', sans-serif`, fontWeight:`500`}} to="/dashboard?tab=profile" id='post-sec-4-comments-sec1-link'>@{currentUser.username}</Link></span>
                    </div>
                    <div className="post-sec-4-comments-sec2">
                      <form onSubmit={handleSubmit}>
                        <textarea maxLength="400" onChange={(e) => setComment(e.target.value)} value={comment} placeholder="Write a comment..."></textarea>
                        <button className='sedbtn sedbtn2'>Post Comment</button>
                      </form>
                      {commentError && 
                        <div id="comment-alert" className="alert alert-danger" role="alert">
                          {commentError}
                        </div>
                      }
                    </div>
                  </div>
                </>
              ) :
              (
                <div id='login-to-comment'>
                  <span>You must be logged in to comment. <Link style={{color:`rgb(8, 145, 178)`,fontFamily: `'Poppins', sans-serif`, fontWeight:`500`}} to="/login">Login</Link></span>
                </div>
              )}
              {comments.length === 0 ? (
                <span className='italic' style={{fontSize:`14px`, color:`#7f7f7f`}}>no comments yet!</span>
              ) : (
                <>
                <div className="comments-div1">
                  <span>Comments</span>
                  <span style={{fontFamily:`'Lato', sans-serif`, fontWeight:`500`, fontSize:`14px`, marginTop:`0`}}>{comments.length}</span>
                </div>
                {comments.map((comment) => (
                  <Comment
                    key={comment._id}
                    comment={comment}
                    onLike={handleLike}
                    onEdit={handleEdit}
                    onDelete={(commentId) => {
                      setCommentToDelete(commentId);
                      handleDelete(commentToDelete);
                    }}
                  />
                ))}
                </>
              )}
            </div>
            <div className="post-sec-4-right">
            </div>
          </div>
          <div className="post-sec-5">
            <div className="post-sec-5-head">
              <h3>More from SedBuzz</h3>
            </div>
            <div className="post-sec-5-body">
              {morePost &&
              morePost.map((post) =>
              <Link to={`/post/${post.slug}`} key={post._id}>
                <div className="releted-post-img">
                  <img src={post.image} alt="thumbnail"></img>
                </div>
                <div className="releted-post-details">
                  <h4>{post.title}</h4>
                  <p className="releted-post-post-description">{post.description}</p>
                  <p className="releted-post-post-date">{formatDate(post.updatedAt)}</p>
                </div>
              </Link>
              )}
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
