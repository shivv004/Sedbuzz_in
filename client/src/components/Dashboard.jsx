import React, { useEffect, useState } from 'react'
import './css/dashboard.css';
import { Navigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineArticle } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { LiaCommentSolid } from "react-icons/lia";
import { PiSignOutBold } from "react-icons/pi";
import DashProfile from './DashProfile';
import DashPosts from './DashPosts';
import DashUsers from './DashUsers';
import DashComments from './DashComments';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet'

export default function Dashboard() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user);
    const [tab , setTab] = useState("");
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if(tabFromUrl){
            setTab(tabFromUrl);
        }
    }, [location.search]);
    const handleSignout = async () => {
        try{
            const res = await fetch("/api/user/signout", {
                method: "POST",
            });
            const data = await res.json();
            if (res.ok) {
                dispatch(signoutSuccess());
                window.location.href = "/";
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <Helmet>
        <title>Account | SedBuzz</title> 
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/category/science`}/>
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
                .footer-cover{
                    display:none !important;
                }
                .modal-content{
                    border-radius: 0rem;
                    margin-top: 200px;
                }
                #modal-footer{
                    display: flex !important;
                    flex-wrap: nowrap !important;
                }
                #modal-delete-user-btn:hover, #modal-delete-post-btn:hover, #modal-delete-comments-btn:hover{
                    border-color: #da3633;
                }
                #modal-delete-user-btn::before, #modal-delete-post-btn::before, #modal-delete-comments-btn::before{
                    background: #da3633;
                }
                #modal-footer button, #modal-delete-user-btn, #modal-delete-comments-btn {
                    width: 100%;
                }
                #exampleModalLabel{
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    font-size: 18px !important;
                }
                .sedbtn:hover{
                    #load-svg{
                        transition: 0.3s ease-in-out;
                        fill: #000000 !important;
                    }
                }
            }
            @media screen and (max-width: 1025px){
                .footer-cover{
                    display:none !important;
                }
                .modal-content{
                    border-radius: 0rem;
                    margin-top: 200px;
                }
                #modal-footer{
                    display: flex !important;
                    flex-wrap: nowrap !important;
                }
                #modal-delete-user-btn:hover, #modal-delete-post-btn:hover, #modal-delete-comments-btn:hover {
                    border-color: #da3633;
                }
                #modal-delete-user-btn::before, #modal-delete-post-btn::before, #modal-delete-comments-btn::before {
                    background: #da3633;
                }
                #modal-footer button, #modal-delete-user-btn, #modal-delete-comments-btn {
                    width: 100%;
                }
                #exampleModalLabel{
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    font-size: 18px !important;
                }
                .sedbtn:hover{
                    #load-svg{
                        transition: 0.3s ease-in-out;
                        fill: #000000 !important;
                    }
                }
            }
            `}
        </style>
        <div className="dashboard-cover">
            <div className="dashboard">
                <div className="DashSideBar">
                    <div className="DashSideBarGroup">
                        <Link to="/dashboard?tab=profile">
                            <div className={`DashSideBarItem ${tab === 'profile' ? 'active' : ''}`}>
                                <span><GrUserSettings className="ml-4 mr-2 h-5 w-5"/>Profile</span>
                            </div>
                        </Link>
                        {currentUser.isAdmin && (
                        <Link to="/dashboard?tab=posts">
                            <div className={`DashSideBarItem ${tab === 'posts' ? 'active' : ''}`}>
                                <span><MdOutlineArticle className="ml-4 mr-2 h-5 w-5"/>Posts</span>
                            </div>
                        </Link>
                        )}
                        {currentUser.isAdmin && (
                        <Link to="/dashboard?tab=users">
                            <div className={`DashSideBarItem ${tab === 'users' ? 'active' : ''}`}>
                                <span><FiUsers className="ml-4 mr-2 h-5 w-5"/>Users</span>
                            </div>
                        </Link>
                        )}
                        {currentUser.isAdmin && (
                        <Link to="/dashboard?tab=comments">
                            <div className={`DashSideBarItem ${tab === 'comments' ? 'active' : ''}`}>
                                <span><LiaCommentSolid className="ml-4 mr-2 h-5 w-5"/>Comments</span>
                            </div>
                        </Link>
                        )}
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <div className="DashSideBarItem">
                                <span><PiSignOutBold className="ml-4 mr-2 h-5 w-5"/>Logout</span>
                            </div>
                        </button>
                    </div>
                </div>
                {
                    tab === "profile" && <DashProfile/>
                }
                {
                    tab === "posts" && <DashPosts/>
                }
                {
                    tab === "users" && <DashUsers/>
                }
                {
                    tab === "comments" && <DashComments/>
                }
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Logout</h1>
                        </div>
                        <div style={{textAlign:`left`}} className="modal-body">
                            Are you sure you want to logout?
                        </div>
                        <div id="modal-footer" className="modal-footer">
                            <button className="sedbtn sedbtn2" data-bs-dismiss="modal">No, cancel</button>
                            <button id='modal-logout-btn' className="sedbtn sedbtn1" data-bs-dismiss="modal" onClick={handleSignout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
