import React from "react";
import "./About.css";
import myimage from '../../assets/saurabh5.png'
import Footer from "../Footer";
import logo from '../../assets/anyadaanlogo.jpg'

const About = () => {
  return (
    <>
    <div className="about-page">
      
      <div className="about-hero">
        <h1>About AnyaDaan</h1>
        <p>
          Empowering communities to reduce food waste and feed those in need.
          Together, we’re building a world where no food goes to waste.
        </p>
      </div>

      <div className="about-content">
        <div className="about-wrapper">
          <div className="about-left">
            <div className="about-icon">
                <img src={logo} alt="" />
            </div>
          </div>

          <div className="about-right">
            <h2>Who We Are</h2>
            <p>
              AnyaDaan is an initiative to fight hunger by connecting people who
              have extra food with those who need it most. Our mission is to
              minimize food waste while making sure every meal finds a plate.
            </p>
            <p>
              From small local drives to large community partnerships, we’re
              working tirelessly to create impact with compassion and
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="mission-section">
      <h2 className="mission-title">Our Mission</h2>

      <div className="mission-cards">
        {/* Card 1 */}
        <div className="mission-card">
          <div className="mission-icon recycle">♻️</div>
          <h3>Reduce Food Waste</h3>
          <p>
            We rescue surplus food from restaurants and individuals and redirect
            it to those in need.
          </p>
        </div>

        {/* Card 2 */}
        <div className="mission-card">
          <div className="mission-icon food">🍱</div>
          <h3>Feed Communities</h3>
          <p>
            Our volunteers deliver meals to underprivileged families across
            cities every day.
          </p>
        </div>

        {/* Card 3 */}
        <div className="mission-card">
          <div className="mission-icon heart">💚</div>
          <h3>Empower Change</h3>
          <p>
            We inspire communities to contribute and build a future where no one
            sleeps hungry.
          </p>
        </div>
      </div>
    </div>
    <section className="impact">
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
    </section>

    <div className="team-section">
      <h2 className="team-title">Meet the Team</h2>

      <div className="team-cards">
        
        <div className="team-card">
          <img
            src={myimage}
            alt="Saurabh Yadav"
            className="team-image"
          />
          <h3>Saurabh Yadav</h3>
          <p>Founder & Developer</p>
        </div>

        {/* Member 2 */}
        {/* <div className="team-card">
          <img
            src="/images/riya.jpg"
            alt="Riya Patel"
            className="team-image"
          />
          <h3>Riya Patel</h3>
          <p>Community Lead</p>
        </div> */}

        {/* Member 3 */}
        {/* <div className="team-card">
          <img
            src="/images/karan.jpg"
            alt="Karan Mehta"
            className="team-image"
          />
          <h3>Karan Mehta</h3>
          <p>Operations Manager</p>
        </div> */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
