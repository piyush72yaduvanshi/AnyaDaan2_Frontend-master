import React from 'react'
import './VerifiedNgo.css'
import Footer from '../Footer'
import { Link, useNavigate } from "react-router-dom";

const VerifiedNgo = () => {
    return (
        <>
            <div className="ngo-page">
                {/* HERO */}
                <section className="ngo-hero">
                    <p className="support-text">Thank you for your support 💚</p>
                    <h1>
                        Verified <span>NGO's</span>
                    </h1>
                    <p className="hero-sub">
                        Trusted and verified organizations working with Anyadaan to ensure
                        transparent and impactful donations.
                    </p>

                    <div className="hero-actions">
                        <Link to="/"><button className="primary-btn">Donate Now</button></Link>
                        {/* <button className="secondary-btn">Explore NGOs</button> */}
                    </div>
                </section>

                {/* STATS */}
                <section className="stats">
                    <div className="stat-card">
                        <h2>2K+</h2>
                        <p>People Helped</p>
                    </div>
                    <div className="stat-card">
                        <h2>8+</h2>
                        <p>Verified NGOs</p>
                    </div>
                    <div className="stat-card">
                        <h2>10+</h2>
                        <p>Active Campaigns</p>
                    </div>
                </section>

                {/* NGO GRID */}
                <section className="ngo-grid">
                    {/* first */}
                    <div className="ngo-card" >
                        <div className="ngo-badge">✔ Verified</div>
                        <h3>Annapurna Seva </h3>
                        <p className="ngo-location">📍 India</p>
                        <p className="ngo-desc">
                            Annapurna Seva Trust is a nonprofit organization in India dedicated to eradicating hunger and providing nutritious meals to vulnerable communities.
                        </p>

                        <div className="ngo-tags">
                            <span>Food</span>
                            <span>Education</span>
                        </div>

                        <button className="card-btn" onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=Annapurna+Seva+Trust+Jhansi",
                                "_blank"
                            )
                        }>View Details</button>
                    </div>

                    <div className="ngo-card" >
                        <div className="ngo-badge">✔ Verified</div>
                        <h3>Akshaya Patra Foundation</h3>
                        <p className="ngo-location">📍 India</p>
                        <p className="ngo-desc">
                            The Akshaya Patra Foundation is a nonprofit organization based in India that implements large-scale school feeding programs to combat classroom hunger and encourage education.
                        </p>

                        <div className="ngo-tags">
                            <span>Food</span>
                            <span>Education</span>
                        </div>

                        <button className="card-btn" onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=Akshaya+Patra+Foundation",
                                "_blank"
                            )
                        }>View Details</button>
                    </div>

                    <div className="ngo-card" >
                        <div className="ngo-badge">✔ Verified</div>
                        <h3>Feeding India</h3>
                        <p className="ngo-location">📍 India</p>
                        <p className="ngo-desc">
                            Supporting food distribution and basic needs for underserved
                            communities.
                            Founded in 2014 and now supported by Zomato, it is one of India’s largest social initiatives addressing food insecurity.
                        </p>

                        <div className="ngo-tags">
                            <span>Food</span>
                            <span>Education</span>
                        </div>

                        <button className="card-btn" onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=Feeding +India",
                                "_blank"
                            )
                        }>View Details</button>
                    </div>

                    <div className="ngo-card" >
                        <div className="ngo-badge">✔ Verified</div>
                        <h3>Bundelkhand Manav Seva Samiti</h3>
                        <p className="ngo-location">📍 India</p>
                        <p className="ngo-desc">
                            Supporting food distribution and basic needs for underserved
                            communities. It operates at the grassroots level, focusing on underserved communities in and around the Jhansi district.
                        </p>

                        <div className="ngo-tags">
                            <span>Food</span>
                            <span>Education</span>
                        </div>

                        <button className="card-btn" onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=Bundelkhand+ Manav +Seva +Samiti",
                                "_blank"
                            )
                        }>View Details</button>
                    </div>
                    {/* fourth */}
                    <div className="ngo-card" >
                        <div className="ngo-badge">✔ Verified</div>
                        <h3>Roobin Hood Army</h3>
                        <p className="ngo-location">📍 India</p>
                        <p className="ngo-desc">
                            Supporting food distribution and basic needs for underserved
                            communities.
                        </p>

                        <div className="ngo-tags">
                            <span>Food</span>
                            <span>Education</span>
                        </div>

                        <button className="card-btn" onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=Roobin +Hood +Army",
                                "_blank"
                            )
                        }>View Details</button>
                    </div>

                    <div className="ngo-card" >
                        <div className="ngo-badge">✔ Verified</div>
                        <h3>Roti Bank Jhansi</h3>
                        <p className="ngo-location">📍 India</p>
                        <p className="ngo-desc">
                            Supporting food distribution and basic needs for underserved
                            communities.
                        </p>

                        <div className="ngo-tags">
                            <span>Food</span>
                            <span>Education</span>
                        </div>

                        <button className="card-btn" onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=Roti +Bank+ Jhansi",
                                "_blank"
                            )
                        }>View Details</button>
                    </div>

                    <div className="ngo-card" >
                        <div className="ngo-badge">✔ Verified</div>
                        <h3>Food Donor's</h3>
                        <p className="ngo-location">📍 India</p>
                        <p className="ngo-desc">
                            Supporting food distribution and basic needs for underserved
                            communities.
                        </p>

                        <div className="ngo-tags">
                            <span>Food</span>
                            <span>Education</span>
                        </div>

                        <button className="card-btn" onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=Trust+Jhansi",
                                "_blank"
                            )
                        }>View Details</button>
                    </div>

                    <div className="ngo-card" >
                        <div className="ngo-badge">✔ Verified</div>
                        <h3>Food Help Desk</h3>
                        <p className="ngo-location">📍 India</p>
                        <p className="ngo-desc">
                            Supporting food distribution and basic needs for underserved
                            communities.
                        </p>

                        <div className="ngo-tags">
                            <span>Food</span>
                            <span>Education</span>
                        </div>

                        <button className="card-btn" onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=Food +Help +Desk",
                                "_blank"
                            )
                        }>View Details</button>
                    </div>



                </section>
            </div>
            <Footer />
        </>
    )
}

export default VerifiedNgo;
