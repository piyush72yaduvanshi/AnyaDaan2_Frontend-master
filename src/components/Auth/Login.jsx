import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios'
import { AuthContext } from "../../AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading,setLoading]=useState(false);
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
    //   const response = await fetch("http://127.0.0.1:8000/api/login/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
      const response = await axios.post('https://anyadaan2-backend-1.onrender.com/api/token/', {
  username: formData.email,
  password: formData.password
})
      // console.log(response.data)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      localStorage.setItem('loggedEmail',formData.email)
      
      // console.log('login successful')
      setIsLoggedIn(true)
      setErrors({})
      navigate('/')

    //   if (response.ok) {
    //     const data = await response.json();
    //     setMessage("✅ Login successful!");
    //     console.log("Login data:", data);
    //     setIsLoggedIn(true)
    //     navigate("/");
    //   } else {
    //     const errData = await response.json();
    //     setMessage(`❌ ${errData.detail || "Invalid credentials"}`);
    //   }
    } catch (error) {
      const backendMessage = error?.response?.data?.detail;
      // console.log("sfdsdfsdf",backendMessage)

    if (backendMessage?.includes("No active account")) {
      // alert("No account exists. Please sign up.");
      setMessage("Incorrect email or password.")
    } else if (backendMessage?.includes("credentials")) {
      // alert("Incorrect email or password.");
      setMessage("Incorrect email or password.")
    } else {
      alert("Login failed. Please try again.");
      setMessage("Login failed. Please try again.");
    }
      console.error(error.response?.data || error, 'invalid credentials');
      setErrors(error.response?.data || { detail: 'Login failed' });
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group login-form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group login-form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>
{/* 
        <button type="submit" className="login-btn">
          Login
        </button> */}
        {loading?(<button type="submit" className="login-btn">
                
<div className="loader">
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
    <div className="bar4"></div>
    <div className="bar5"></div>
    <div className="bar6"></div>
    <div className="bar7"></div>
    <div className="bar8"></div>
    <div className="bar9"></div>
    <div className="bar10"></div>
    <div className="bar11"></div>
    <div className="bar12"></div>
</div>
        </button>):(<button type="submit" className="login-btn">
          Login
        </button>)}

        {message && <p className="message">{message}</p>}

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
