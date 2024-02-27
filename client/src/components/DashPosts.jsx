import {React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { formatDate } from './hooks/formatDate';

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [postIdToDelete, setPostIdToDelete] = useState('');
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 8) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length === 0) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletePost = async () => {
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="DashPosts">
      <h3>Posts</h3>
        <Link id='create-new-post-btn' to="/create-post">
          <img id='new-post-img' src="/assets/new-post.svg" alt="new post" />
            <button style={{width:`150px`}} className="sedbtn sedbtn1"> New Post</button>
        </Link>
        {currentUser.isAdmin && userPosts.length > 0 ? (
          <>
          <div id="post-table">
          <table>
            <thead>
                <tr>
                  <th>Date updated</th>
                  <th>Thumbnail</th>
                  <th id='post-title-th'>Post title</th>
                  <th>Category</th>
                  <th>Delete</th>
                  <th style={{borderRight:`0`}}>Edit</th>
                </tr>
              </thead>
            {userPosts.map((post) => (
              <tbody key={post._id}>
                <tr>
                  <td style={{width:`140px`}}>{formatDate(new Date(post.updatedAt).toJSON())}</td>
                  <td style={{width:`140px`, minWidth:`140px`, maxWidth:'140px'}}>
                    <Link to={`/post/${post.slug}`}>
                      <img style={{objectFit: 'cover'}} 
                        src={post.image}
                        alt={post.title}
                      />
                    </Link>
                  </td>
                  <td id='post-title-td' style={{maxWidth:`300px`, minWidth:`250px`, overflow:`hidden`}}>
                    <Link className="hover:underline" to={`/post/${post.slug}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td style={{width:`150px`, textTransform:`capitalize`}}>{post.category}</td>
                  <td style={{width:`130px`}}>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <span style={{fontSize:`16px`, color:`#da3633`, fontWeight:`500`}} className="hover:underline cursor-pointer"
                        onClick={() => {
                          setPostIdToDelete(post._id);
                        }}>
                        Delete
                      </span>
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                          <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Delete post</h1>
                          </div>
                          <div style={{textAlign:`left`}} className="modal-body">
                            Are you sure you want to delete this post?
                          </div>
                          <div id="modal-footer" className="modal-footer">
                              <button className="sedbtn sedbtn2" data-bs-dismiss="modal">No, cancel</button>
                              <button id='modal-delete-post-btn' className="sedbtn sedbtn1" data-bs-dismiss="modal" onClick={handleDeletePost}>Delete</button>
                          </div>
                          </div>
                      </div>
                    </div>
                  </td>
                  <td style={{width:`110px`,color:`#057dbc`}}>
                    <Link className="hover:underline" to={`/update-post/${post._id}`}>
                      <span style={{fontSize:`16px`, fontWeight:`500`}}>Edit</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          </div>
            {showMore && (
              <button id='post-show-more' className='sedbtn sedbtn2'
                onClick={handleShowMore}>
                Show more
              </button>
            )}
          </>
          ) : (
          <p style={{textAlign:`center`, marginTop:`0.5rem`}}>You have no posts yet!</p>
        )}
      </div>
    </>
  )
}
