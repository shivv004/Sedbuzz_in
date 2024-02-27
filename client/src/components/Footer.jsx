import './css/Footer.css';
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
    <div className="footer-cover"  style={{backgroundColor:`#1d1818`}}>
      <footer className="site-footer">
        <div className="section-1">
        <a href="https://www.sedbuzz.com">
          <img id="logo_footer" src="/assets/logo-dark.svg" alt="Sedbuzz"/>
        </a>
        <p>Your Source for the Latest Buzz! We're here to keep it simple and fun, delivering the hottest updates and insights straight to you. Whether you're into the latest gadgets, gaming adventures, or fascinating scientific discoveries, SedBuzz has you covered. </p>
        </div>
        <div className="section-2">
          <div className="categories">
            <div className="footer-list-title">
              <p>CATEGORIES</p>
            </div>
            <div className="footer-list">
              <ul className="footer-links" style={{columnCount:`2`}}>
              <li><Link to="/search">Search</Link></li>
                <li><Link to="category/trending">Trending</Link></li>
                <li><Link to="category/most-recent">Most Recent</Link></li>
                <li><Link to="category/technology">Technology</Link></li>
                <li><Link to="category/gaming">Games</Link></li>
                <li><Link to="category/science">Science</Link></li>
              </ul>
            </div>
          </div>
          <div className="more-links">
            <div className="footer-list-title">
              <p>MORE LINKS</p>
            </div>
            <div className="footer-list">
              <ul className="footer-links" style={{columnCount:`2`}}>
                <li><a href="https://www.buymeacoffee.com/shivv004" target="_blank" rel="noreferrer">Support</a></li>
                <li><Link to="/portfolio">My Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/disclaimers">Disclaimers</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-3">
          <p className="copyright-text">
            &copy; 2024 <a className='copy' id="bottom_link" href="https://www.sedbuzz.com"> Sedbuzz</a>, All Rights Reserved. This content and its related elements are protected by copyright law and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of Sedbuzz. Unauthorized use or reproduction may result in legal consequences.  For inquiries, please <u><Link to="/contact">contact</Link></u> us.
          </p>
          <div className="social-links">
            <ul className="social-icons flex">
              <li className='social'><a href="https://www.facebook.com/sedbuzz" rel="noreferrer" target="_blank"><CgFacebook /></a></li>
              <li className='social'><a href="https://www.instagram.com/sedbuzz_in" rel="noreferrer" target="_blank"><RiInstagramLine /></a></li>
              <li className='social'><a href="https://twitter.com/sedbuzz" rel="noreferrer" target="_blank"><FaXTwitter /></a></li>
              <li className='social'><a href="https://www.linkedin.com/company/sedbuzz" rel="noreferrer" target="_blank"><FaLinkedinIn /></a></li>
              <li className='social'><a href="mailto:shivshank019@gmail.com"><MdAlternateEmail /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    <Outlet />
    </>
  )
}
