import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import bg from '../assets/bg-image-ad.jpg'
import { AuthContext } from '../AuthProvider';
import { useContext, useState } from 'react';
import donateImg from '../assets/donationMessageImg.jpg'
import faqImg from "../assets/chatImg.png"
import sendBtn from "../assets/sendBtn.webp"

const Home = () => {

  const [faq, setFaq] = useState(false);
  const { isLoggedIn, setIsLoggedIn, user } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const suggestedQuestions = [
    "How can I donate food on AnyaDaan",
    "Who can donate food",
    "How do NGOs accept donations",
    "Is there any cost for donating food",
    "How does payment work on AnyaDaan"
  ];


  const handleFaq = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: "user", text: input }]);

    try {
      setLoading(true)
      const response = await fetch("https://anyadaan2-backend-1.onrender.com/api/api/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
        }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: "bot", text: "Server not responding" }]);
    }
    finally {
      setLoading(false)
    }
    setInput("");
  }
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: { bg },
        }}
      >

        <div className="hero-overlay" ></div>

        <div className="hero-content">

          <h1 className="hero-title">
            Together, Let’s <span>End Food Waste</span>
          </h1>

          <p className="hero-text">
            Donate excess food to people in need. Every small act can make a big
            difference.
          </p>


          <div className="search-wrapper">
            <div className="search-box">

            </div>
          </div>

          <div className="hero-buttons">
            <Link to='/contribute'><button className="btn-primary">Contribute Now</button></Link>
            <Link to='/recentDonations'><button className="btn-secondary">Recieve</button></Link>
          </div>
        </div>
      </div>
      <div className="chatBox">
        {faq ? (<div className="chatArea">
          <button className="closeBtn" onClick={() => setFaq(false)}>X</button>
          <div className="messages">
            <div className="message-bubbleV">
              Hello!
              here You can ask your query
            </div>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-row ${msg.sender === "user" ? "sent" : "received"}`}
              >
                <div className="message-bubble">
                  {msg.text}
                </div>
              </div>
            ))}

          </div>

          <form action="" onSubmit={handleFaq} >
            {loading ? (<input className='inputQ' disabled />) : (<><input type="text" placeholder="Ask anything you want?" className='inputQ' value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {

                setTimeout(() => setShowSuggestions(false), 150);
              }} /></>)}

            {showSuggestions && input.length === 0 && (
              <div className="suggestionsBox">
                {suggestedQuestions.map((q, index) => (
                  <div
                    key={index}
                    className="suggestionItem"
                    onMouseDown={() => {
                      setInput(q);
                      setShowSuggestions(false);
                    }}
                  >
                    {q}
                  </div>
                ))}
              </div>
            )}

            <button type='submit' className='sendBtn'><img src={sendBtn} /></button>
          </form>
        </div>) : (<button className="openBtn" onClick={() => setFaq(prev => !prev)}><img src={faqImg} /></button>)}

      </div>
      <section className="how-it-works">
        <div>
          <h2 className="title">
            How It <span>Works</span>
          </h2>

          <p className="subtitle">
            Simple steps to make a big difference in reducing food waste and helping communities.
          </p>

          <div className="cards">
            <div className="card">
              <div className="icon green">🍴</div>
              <h3> Donation Request</h3>
              <p>
                We collaborate with restaurants, events, and individuals to donate
                their surplus food.
              </p>
            </div>

            <div className="card">
              <div className="icon blue">👥</div>
              <h3>Notification to NGOs</h3>
              <p>
                Your Donation Deatils are send to verified NGOs through Mails.
              </p>
            </div>

            <div className="card">
              <div className="icon yellow">🚚</div>
              <h3>Response By NGOs</h3>
              <p>
                NGOs give response to collect Food by Accepting the donation request on our Website.
              </p>
            </div>

            <div className="card">
              <div className="icon red">❤️</div>
              <h3>Reduce Hunger</h3>
              <p>
                Every contribution helps reduce food waste and feed someone in need.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* <section className="impact">
      <h2 className="impact-title">
        Our <span>Impact</span>
      </h2>

      <p className="impact-subtitle">
        Every number here represents a life touched, a meal served, and a positive change created.
      </p>

      <div className="impact-cards">
        <div className="impact-card">
          <div className="icon green">
            🍴
          </div>
          <h3 className="number">1250+</h3>
          <p className="label">Meals Served</p>
        </div>

        <div className="impact-card">
          <div className="icon blue">
            👥
          </div>
          <h3 className="number">85+</h3>
          <p className="label">Volunteers</p>
        </div>

        <div className="impact-card">
          <div className="icon yellow">
            📍
          </div>
          <h3 className="number">5+</h3>
          <p className="label">Cities Covered</p>
        </div>

        <div className="impact-card">
          <div className="icon red">
            🤝
          </div>
          <h3 className="number">20+</h3>
          <p className="label">NGOs Partnered</p>
        </div>
      </div>
    </section> */}

      <section className="cta">
        <div className="cta-container">

          <div className="cta-image">
            <img
              // src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80"
              src="https://www.sata.com.sg/wp-content/uploads/2019/11/SATA-Donation-1.jpg"
              alt="Food donation"
            />
          </div>
          <div className="cta-content">
            <h2>
              Be the Change, <span>Contribute Today</span>
            </h2>

            <p>
              Your small act of kindness can feed a hungry person. Join our
              movement to reduce food waste and share happiness with those
              in need.
            </p>

            <div className="cta-buttons">
              <button className="btn primary"><Link to='/contribute' onClick={() => window.scrollTo(0, 0)}>Donate</Link></button>
              <button className="btn outline"><Link to="/contributionBoard" onClick={() => window.scrollTo(0, 0)}>Top Donor's</Link></button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-container">
          <div className="cta-image">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="Food donation"
            />
          </div>

          <div className="cta-content">
            <h2>
              Our<span> Mission</span>
            </h2>

            <p>
              At AnyaDaan, our mission is to bridge the gap between surplus and scarcity. We empower communities by connecting food donors with organizations that serve those in need.
              Through technology, compassion, and collaboration, we aim to reduce food waste and ensure every meal reaches the right plate.
            </p>

            <div className="cta-buttons">
              <Link to='/about' onClick={() => window.scrollTo(0, 0)}><button className="btn primary">Learn More</button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <h1>
          Join Our Mission to <span>End Food Waste</span>
        </h1>

        <p>
          Every meal you save brings hope to someone in need. Become part of our
          growing community of changemakers today.
        </p>

        <div className="mission-buttons">
          {/* <button className="btn light" >Sign Up Now</button> */}
          {isLoggedIn ? (<></>) : (<Link to="/signup" className='btn light'>SignUp</Link>)}


          <button className="btn outline-light"><Link to='/contribute'>Donate Today</Link></button>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Home;
