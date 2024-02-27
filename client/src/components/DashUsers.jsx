import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from './hooks/formatDate';

export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [userIdToDelete, setUserIdToDelete] = useState('');
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          if (data.users.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);
        if (data.users.length === 0) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
        const res = await fetch(`/api/user/delete/${userIdToDelete}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (res.ok) {
            setUsers((prev) => prev.filter((user) => user._id !== userIdToDelete));
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
      <div className="DashUsers">
      <h3>Users</h3>
      {currentUser.isAdmin && users.length > 0 ? (
          <>
          <div id="user-table">
          <table>
            <thead>
                <tr>
                  <th>Date created</th>
                  <th>User image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th style={{borderRight:`0`}}>Delete</th>
                </tr>
              </thead>
            {users.map((user) => (
              <tbody key={user._id}>
                <tr>
                  <td style={{width:`140px`}}>
                    {formatDate(new Date(user.createdAt).toJSON())}
                  </td>
                  <td style={{width:`140px`, maxWidth:`140px`}}>
                    <img
                      style={{minWidth:`100px`, width:`140px`, height:`110px`, objectFit:`cover`}}
                      src={user.profilePicture}
                      alt={user.username}
                      className='w-10 h-10'
                    />
                  </td>
                  <td style={{width:`220px`}}>
                    {user.username}
                  </td>
                  <td style={{}}>
                    {user.email}
                  </td>
                  <td style={{width:`110px`}}>
                    {user.isAdmin ? (
                      <span>Admin</span>
                    ) : (
                      <span>User</span>
                    )}
                  </td>
                  <td style={{width:`110px`}}>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                      <span className='hover:underline' style={{fontSize:`16px`, color:`#da3633`, fontWeight:`500`}} onClick={() => {setUserIdToDelete(user._id);}}>
                        Delete
                      </span>
                    </button>
                    <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                          <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Delete user</h1>
                          </div>
                          <div style={{textAlign:`left`}} className="modal-body">
                            Are you sure you want to delete this user?
                          </div>
                          <div id="modal-footer" className="modal-footer">
                              <button className="sedbtn sedbtn2" data-bs-dismiss="modal">No, cancel</button>
                              <button id='modal-delete-user-btn' className="sedbtn sedbtn1" data-bs-dismiss="modal" onClick={handleDeleteUser}>Delete</button>
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
              <button id='user-show-more' className='sedbtn sedbtn2'
                onClick={handleShowMore}>
                Show more
              </button>
            )}
          </>
          ) : (
          <p style={{textAlign:`center`, marginTop:`0.5rem`}}>You have no users yet!</p>
        )}
    </div>
    </>
  )
}
