import React from 'react'
import './Footer.css'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">

          <div className="footer-col">
            <h3>AnyaDaan</h3>
            <p>
              Connecting communities to reduce food waste and feed the needy.
              Together, we can make a difference one meal at a time 🍲
            </p>
          </div>


          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="mainFooterDiv">
              <div className="div1">
                <ul>
                  <li><Link to='/' onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                  <li><Link to='/about' onClick={() => window.scrollTo(0, 0)}>About</Link></li>
                  <li><Link to='/contribute' onClick={() => window.scrollTo(0, 0)}>Contribute</Link></li>
                  
                </ul>
              </div>
              <div className="div2">
                <ul>
                  <li><Link to='/recentDonations' onClick={() => window.scrollTo(0, 0)}>Donations</Link></li>
                  <li><Link to='/contributionBoard' onClick={() => window.scrollTo(0, 0)}>LeadersBoard</Link></li>
                  <li><Link to='/verifiedngo' onClick={() => window.scrollTo(0, 0)}>Verified NGO's</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4>Connect With Us</h4>
            <div className="socials">
              <a href="https://www.instagram.com/anyadaan/" target='blank'><span><FontAwesomeIcon icon={faInstagram} /></span></a>
              <span><FontAwesomeIcon icon={faLinkedin} /></span>
              <span><FontAwesomeIcon icon={faTwitter} /></span>
              <span><FontAwesomeIcon icon={faEnvelope} /></span>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 <span>AnyaDaan</span> — All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
