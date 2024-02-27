import './css/Header.css';
import './css/signin.css';
import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { MdOutlineManageAccounts } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { moreLinks, navLinks, socialLinks } from './hooks/menu';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
    const {currentUser} = useSelector(state => state.user);
    const dispatch = useDispatch();
    // window.onscroll = function() {myFunction()};
    // function myFunction() {
    //     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     var scrolled = (winScroll / height) * 100;
    //     document.getElementById("myBar").style.width = scrolled + "%";
    // }
    document.addEventListener('scroll', () => {
        const header = document.querySelector('nav');
        if(window.scrollY > 0){
            header.classList.add('scrolled');
        }
        else{
            header.classList.remove('scrolled');
        }
    })
    const[isMobileMenuOpen, setMobileMenu] = useState(false);
    const[isSideMenuOpen, setSideMenu] = useState(false);
    const closeMobileMenu = () => {
        setTimeout(() => {
            setMobileMenu(false)
        },400)
    }
    const closeSideMenu = () => {
        setTimeout(() => {
            setSideMenu(false)
        },100)
    }
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
            <style>
                {`
                @media screen and (min-width: 1025px){
                    nav{
                        z-index: 10;
                        position:fixed;
                        width:100%;
                        height:clamp(3.9755555556rem,4.7619047619vw,4.4444444444rem);
                        padding:0 1.75rem;
                        margin: 0 auto;
                        transition: background-color 0.4s ease-in-out;
                        #hr1{
                            opacity: 0.18;
                            transition: opacity 0.4s ease-in-out;
                            -webkit-transform: rotate(90deg);
                            transform: rotate(90deg);
                            width: 28px;
                            margin-top: 2px;
                        }
                        #hr2{
                            opacity: 0;
                            -webkit-transform:rotate(180deg);
                            transform:rotate(180deg);
                            left: -20vh;
                        }
                        .dropdown{
                            font-family: 'Roboto Slab', serif;
                            font-size: 13.5px;
                            font-weight: 500;
                            margin: 0 0.75rem;
                            color: #ffffff;
                            transition: var(--trans, color .4s ease 0s);
                        }
                        .dropdown-menu.show{
                            opacity: 0;
                            transition: opacity 0.4s ease-in-out;
                        }
                        #nav-links , #signup{
                            font-size: 16px;
                            font-weight: 500;
                        }
                        #nav_item_text{
                            font-family: 'Roboto Slab', serif;
                            font-size: 13.5px;
                            color: #ffffff;
                            transition: var(--trans,color .4s ease 0s);
                            text-transform: uppercase;
                        }
                        #nav_item_text:hover{
                            color: #057dbc;
                            transition: var(--trans,color .4s ease 0s);
                        }
                        #logo-light{
                            display: none;
                            transition: display 0.6s ease-in-out;
                        }
                        #logo{
                            background-image: url("/assets/logo-dark.svg");
                            transition: var(--trans,background-image .4s ease 0s);
                            background-size:contain;
                            background-repeat: no-repeat;
                            height: 32px;
                        }
                        #main-menu, #left-sec, #lg-menu-toggler{
                            color: #f7f7f7;
                            transition: var(--trans,color .4s ease 0s);
                        }
                        #left-sec{
                            gap: 0.75rem;
                        }
                    }
                    nav:hover{
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
                            z-index: 1;
                            opacity: 0;
                            -webkit-transform:rotate(180deg);
                            transform:rotate(180deg);
                            left: -20vh;
                        }
                        .dropdown{
                            font-weight: 500;
                            margin: 0 0.75rem;
                            color: #000000;
                            transition: var(--trans, color .4s ease 0s);
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
                        #nav_item_text:hover{
                            color: #057dbc;
                            transition: var(--trans,color .4s ease 0s);
                        }
                        #logo-dark{
                            display: none;
                        }
                        #logo-light{
                            display: block;
                            transition: display 0.6s ease-in-out;
                        }
                        #logo{
                            background-image: url("/assets/logo-light.svg");
                            transition: var(--trans,background-image .4s ease 0s);
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
                    nav.scrolled{
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
                            transform:rotate(180deg);
                            left: -20vh;
                        }
                        .dropdown{
                            font-weight: 500;
                            margin: 0 0.75rem;
                            color: #000000;
                            transition: var(--trans, color .4s ease 0s);
                        }
                        .dropdown-menu.show{
                            opacity: 1;
                        }
                        #nav-links , #signup{
                            font-size: 16px;
                            font-weight: 500;
                        }
                        #nav_item_text{
                            color: #000000;
                            transition: var(--trans,color .4s ease 0s);
                        }
                        #nav_item_text:hover{
                            color: #057dbc;
                            transition: var(--trans,color .4s ease 0s);
                        }
                        #logo-dark{
                            display: none;
                        }
                        #logo-light{
                            display: block;
                            transition: display 0.6s ease-in-out;
                        }
                        #logo{
                            background-image: url("/assets/logo-light.svg");
                            transition: var(--trans,background-image .4s ease 0s);
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
                    .modal-content{
                        border-radius: 0rem;
                        margin-top: 200px;
                    }
                    #modal-footer{
                        display: flex !important;
                        flex-wrap: nowrap !important;
                    }
                    #modal-footer button {
                        width: 100%;
                    }
                    #exampleModalLabel{
                        font-family: 'Poppins', sans-serif;
                        font-weight: 500;
                        font-size: 18px !important;
                    }
                }
                @media screen and (max-width: 1025px){
                    nav{
                        background-color: white;
                        position:fixed;
                        width:100%;
                        height:clamp(3.9755555556rem,4.7619047619vw,4.4444444444rem);
                        padding:0 clamp(0.8888888889rem,2.380952381vw,2.2222222222rem);
                        margin: 0 auto;
                
                        #hr2{
                            z-index: -1;
                            opacity: 0.18;
                            width: 160vw;
                            -webkit-transform:rotate(180deg);
                            transform:rotate(180deg);
                            left: -20vh;
                        }
                        #logo-dark{
                            display: none;
                        }
                        #logo{
                            background-image: url("/assets/logo-light.svg");
                            background-size: cover;
                            background-position: center;
                            height:30px;
                        }
                    }
                    .modal-content{
                        border-radius: 0rem;
                        margin-top: 200px;
                    }
                    #modal-footer{
                        display: flex !important;
                        flex-wrap: nowrap !important;
                    }
                    #modal-footer button {
                        width: 100%;
                    }
                    #exampleModalLabel{
                        font-family: 'Poppins', sans-serif;
                        font-weight: 500;
                        font-size: 18px !important;
                    }
                }
                `}
            </style>
            <nav className="flex justify-between items-center">
                <section id="nav-left" className="flex item-center">
                    <CgMenuLeft onClick={() => setSideMenu(true)} className="text-2xl cursor-pointer" id="lg-menu-toggler"/>
                    {/* side menu */}
                    <div id="side-menu" style={{transform: `translateX(${isSideMenuOpen ? '0%' : '-100%'})`,transition: 'transform 0.8s ease',}} className="hidden lg:block fixed h-full w-screen top-0 left-0 z-50">
                        <section id="side-nav" className={clsx("text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 z-5 flex items-start", isSideMenuOpen && "shadow-xl")}>
                                <IoClose onClick={() => setSideMenu(false)} className="cursor-pointer"/>
                                <h2>NAVIGATE</h2>
                                {navLinks.map((d, i) => (
                                    <Link id="side-nav-items" key={i} onClick={closeSideMenu} className="font-base hover:italic" to={d.link}>
                                        <span id="lg-nav_item_text">{d.label}</span>
                                    </Link>
                                ))}
                                <br/>
                                <h2>MORE</h2>
                                {moreLinks.map((d, i) => (
                                    <Link id="more-nav-items" key={i} onClick={closeSideMenu} className="font-base hover:italic" to={d.link} target={d.target} rel={d.rel}>
                                        {d.label}
                                    </Link>
                                ))}
                                <br/>
                                <h2>CONNECT</h2>
                                {socialLinks.map((d, i) => (
                                    <Link id="social-nav-items" key={i} className="font-base hover:italic" to={d.link} target={d.target} rel={d.rel}>
                                        {d.label}
                                    </Link>
                                ))}
                        </section>
                        <section id="side-nav-overlay" onClick={() => setSideMenu(false)} className="fixed h-full w-full top-0 left-0 z-0 bg-black opacity-0"></section>
                    </div>
                    {/* logo */}
                    <a id="logo" href="https://www.sedbuzz.com" className="text-3xl font-mono font-semibold">
                        {/* <img id="logo-light" src="logo-light.svg" alt="Sedbuzz"/>
                        <img id="logo-dark" src="logo-dark.svg" alt="Sedbuzz"/> */}
                    </a>
                    <div id="main-menu" className="flex gap-4 mx-4">
                        {/* menu */}
                        {navLinks.map((d, i) => (
                            <Link key={i} id="nav-links" className="hidden lg:block" to={d.link}>
                                <span id="nav_item_text">{d.label}</span>
                            </Link>
                        ))}
                        <div className="dropdown hidden lg:block">
                            <button className="flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span style={{textTransform: `uppercase`,fontSize: `13.5px`}}>More</span>
                                <FaAngleDown style={{margin:'3.5px 0 0 5px'}}/>
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/contact" style={{textWrap:`nowrap`}}>Contact</Link></li>
                                <li><a className="dropdown-item" href="https://www.buymeacoffee.com/shivv004" target="_blank" rel="noreferrer" style={{textWrap:`nowrap`}}>Support</a></li>
                                <li><Link className="dropdown-item" to="/portfolio" style={{textWrap:`nowrap`}}>my Portfolio</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* mobile menu */}
                <div id="mobile-menu" style={{transform: `translateX(${isMobileMenuOpen ? '0%' : '100%'})`,transition: 'transform 0.5s ease'}} className="fixed h-full w-screen lg:hidden top-0 right-0 z-100">
                    <section id="side-nav" className={clsx("text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 z-50 flex items-end", isMobileMenuOpen && "shadow-xl z-50")}>
                            {currentUser ? (
                                <Link to="/dashboard?tab=profile" onClick={() => setMobileMenu(false)}>
                                    <div className="btn-group lg:hidden" style={{margin:`12px 0`}}>
                                        <span className="m-user-id" style={{margin:`7px 10px`}}>@{currentUser.username}</span>
                                        <img src={currentUser.profilePicture} style={{objectFit: `cover`, width:`100%`, borderRadius:`50%`, maxHeight:`37px`, maxWidth:`37px`, minHeight:`37px`, minWidth:`37px`}} alt="account" />
                                    </div>
                                </Link>
                            ) : (
                                <Link onClick={() => setMobileMenu(false)} id="signup" to="/login">
                                <span>Sign in</span>
                                </Link>
                            )}
                            <IoClose onClick={() => setMobileMenu(false)} className="cursor-pointer"/>
                            <h2>NAVIGATE</h2>
                            {navLinks.map((d, i) => (
                                <Link id="side-nav-items" key={i} onClick={closeMobileMenu} className="font-base hover:italic" to={d.link}>
                                    <span id="nav_item_text">{d.label}</span>
                                </Link>
                            ))}
                            <br/>
                            <h2>MORE</h2>
                            {moreLinks.map((d, i) => (
                                <Link id="more-nav-items" key={i} onClick={closeMobileMenu} className="font-base hover:italic" to={d.link} target={d.target} rel={d.rel}>
                                    {d.label}
                                </Link>
                            ))}
                            <br/>
                            <h2>CONNECT</h2>
                            {socialLinks.map((d, i) => (
                                <Link id="social-nav-items" key={i} className="font-base hover:italic" to={d.link} target={d.target} rel={d.rel}>
                                    {d.label}
                                </Link>
                            ))}
                    </section>
                    <section id="side-nav-overlay" onClick={() => setMobileMenu(false)} className="fixed h-full w-full top-0 left-0 z-0 bg-black opacity-0"></section>
                </div>
                <section id="left-sec" className="flex">
                    {currentUser ? (
                        <div className="btn-group hidden lg:block">
                            <button className="flex" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:`37px`, borderRadius:`50%`}}>
                                <img src={currentUser.profilePicture} style={{objectFit: `cover`, width:`100%`, borderRadius:`50%`, maxHeight:`37px`, maxWidth:`37px`, minHeight:`37px`, minWidth:`37px`}} alt="account" />
                            </button>
                            <ul id="user-dropdown" className="dropdown-menu py-0" style={{borderRadius:`0`}}>
                            <li className="user-id">@{currentUser.username}</li>
                            <li className=""><Link className="dropdown-user" to="/dashboard?tab=profile" style={{textWrap:`nowrap`}}><MdOutlineManageAccounts id="account-ico" />Account</Link></li>
                            <li className="" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                <span className="dropdown-user" style={{textWrap:`nowrap`, cursor:`pointer`}}><PiSignOutBold id="out-ico" />Logout</span>
                            </li>
                            </ul>
                        </div>
                    ) : (
                        <Link className="hidden lg:block" id="signup" to="/login">
                        <span id="nav_item_text">Sign in</span>
                        </Link>
                    )}
                    <hr id="hr1"/>
                    <Link className="flex item-center" id="nav_item_text" to="/search">
                        <CgSearch className="text-2xl cursor-pointer" id="search"/>
                    </Link>
                    <CgMenuLeft onClick={() => setMobileMenu(true)} className="text-2xl cursor-pointer lg:hidden" id="menu-toggler"/>
                </section>
                <hr id="hr2" className="absolute h-1 w-full bottom-0"/>
                {/* <div className="progress-container absolute h-1 w-full bottom-0">
                    <div className="progress-bar" id="myBar"></div>
                </div> */}
            </nav>
        <Outlet />
        <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    </>
  )
}