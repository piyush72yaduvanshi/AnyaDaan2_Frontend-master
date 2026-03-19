import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import {AuthContext} from '../AuthProvider';
import { useContext } from 'react';
import logo from '../assets/anyadaanlogo.jpg'

const Header = () => {
  const {isLoggedIn,setIsLoggedIn,user}=useContext(AuthContext);

  const handleLogout=()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');
        localStorage.removeItem('loggedEmail');
        setIsLoggedIn(false);
        // navigate('/login');
        // console.log('logged out successfully')
    }
  return (
    <>
    <div className="headerBox">
      <div className="logoDiv">
        <img src={logo} alt="" /><Link to='/'>AnyaDaan</Link>
      </div>
      <div className="optionsDiv">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contribute">Contribute</a></li>
          <li><a href="/contributionBoard">LeadersBoard</a></li>
          <li><a href="/recentDonations">Donations</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/verifiedngo">Verified NGO's</a></li>
        </ul>
      </div>
      <div className="auth-buttons">
        {
          isLoggedIn ? (<button onClick={handleLogout} className="Hbtn logoutBtn">Logout</button>):(
        <>
        <Link to="/login" className="Hbtn btn-login">
        Login
      </Link>

      <Link to="/signup" className="Hbtn btn-signup">
        Signup
      </Link>
      </>
      )
        }
      
    </div>
    </div>
    </>
  )
}

export default Header;
