import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FaHeart } from "react-icons/fa6";

export default function Comment({comment, onLike, onEdit, onDelete}) {
    const [user, setUser] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.content);
    const { currentUser } = useSelector((state) => state.user);
    useEffect(() => {
      const getUser = async () => {
        try {
          const res = await fetch(`/api/user/${comment.userId}`);
          const data = await res.json();
          if (res.ok) {
            setUser(data);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      getUser();
    }, [comment]);
  
    const handleEdit = () => {
      setIsEditing(true);
      setEditedContent(comment.content);
    };
  
    const handleSave = async () => {
      if (editedContent.length > 400) {
        return;
      }
      try {
        const res = await fetch(`/api/comment/editComment/${comment._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: editedContent,
          }),
        });
        if (res.ok) {
          setIsEditing(false);
          onEdit(comment, editedContent);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <>
      <div className="comments-div2">
        <div className="comments-div2-img">
            <img src={user.profilePicture} alt={user.name} />
        </div>
        <div className="comments-div2-details">
            <div><span style={{fontFamily:`'Poppins', sans-serif`,fontSize: `14.5px`, fontWeight:`550`}}>@{user.username}</span> <span style={{fontSize: `13.5px`}}> &nbsp;&nbsp;{moment(comment.createdAt).fromNow()}</span></div>
        {isEditing ? (
          <>
            <textarea
            maxLength="400"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className='flex justify-end gap-3' style={{fontFamily:`'Lato', sans-serif`,fontSize:`14px`}}>
              <button
                type='button'
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type='button'
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p id="comment-content">{comment.content}</p>
            <div id='comment-options' className='flex gap-2'>
              <button
                type='button'
                onClick={() => onLike(comment._id)}
                className={`text-gray-400 hover:text-red-400 ${
                  currentUser &&
                  comment.likes.includes(currentUser._id) &&
                  '!text-red-400'
                }`}
              >
                <FaHeart style={{fontSize:`16px`}}/>
              </button>
              <p id='numberOfLikes'>
                {comment.numberOfLikes > 0 &&
                  comment.numberOfLikes }
              </p>
              {currentUser &&
                (currentUser._id === comment.userId || currentUser.isAdmin) && (
                  <>
                    <button
                      type='button'
                      className='mr-1'
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      type='button'
                      onClick={() => onDelete(comment._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
            </div>
          </>
        )}
        </div>
      </div>
    </>
  )
}
