import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from './hooks/formatDate';

export default function DashComments() {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [commentIdToDelete, setCommentIdToDelete] = useState('');
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getcomments`);
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          if (data.comments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchComments();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(`/api/comment/getcomments?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length === 0) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteComment = async () => {
    try {
        const res = await fetch(`/api/comment/deleteComment/${commentIdToDelete}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (res.ok) {
            setComments((prev) => prev.filter((comment) => comment._id !== commentIdToDelete));
            setShowModal(false);
        } else {
            console.log(data.message);
        }
    } catch (error) {
        console.log(error.message);
    }
  };

  return (
    <>
      <div className="DashComments">
      <h3>Comments</h3>
      {currentUser.isAdmin && comments.length > 0 ? (
          <>
          <div id="comments-table">
          <table>
            <thead>
                <tr>
                  <th>Date updated</th>
                  <th>Comment</th>
                  <th>Number of Likes</th>
                  <th>PostId</th>
                  <th>UserId</th>
                  <th style={{borderRight:`0`}}>Delete</th>
                </tr>
              </thead>
            {comments.map((comment) => (
              <tbody key={comment._id}>
                <tr>
                  <td style={{width:`140px`}}>
                    {formatDate(new Date(comment.updatedAt).toJSON())}
                  </td>
                  <td style={{width:`240px`, maxWidth:`240px`, textWrap:`wrap`, overflow:`auto`}}>
                    {comment.content}
                  </td>
                  <td>
                    {comment.numberOfLikes}
                  </td>
                  <td>
                    {comment.postId}
                  </td>
                  <td>
                    {comment.userId}
                  </td>
                  <td>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                      <span className='hover:underline' style={{fontSize:`16px`, color:`#da3633`, fontWeight:`500`}} onClick={() => {setCommentIdToDelete(comment._id);}}>
                        Delete
                      </span>
                    </button>
                    <div className="modal fade" id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                          <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Delete comment</h1>
                          </div>
                          <div style={{textAlign:`left`}} className="modal-body">
                            Are you sure you want to delete this comment?
                          </div>
                          <div id="modal-footer" className="modal-footer">
                              <button className="sedbtn sedbtn2" data-bs-dismiss="modal">No, cancel</button>
                              <button id='modal-delete-comments-btn' className="sedbtn sedbtn1" data-bs-dismiss="modal" onClick={handleDeleteComment}>Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          </div>
            {showMore && (
              <button id='comments-show-more' className='sedbtn sedbtn2'
                onClick={handleShowMore}>
                Show more
              </button>
            )}
          </>
          ) : (
          <p style={{textAlign:`center`, marginTop:`0.5rem`}}>You have no comments yet!</p>
        )}
    </div>
    </>
  )
}
