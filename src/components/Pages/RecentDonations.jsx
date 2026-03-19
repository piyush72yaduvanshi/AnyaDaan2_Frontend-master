import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecentDonations.css";
import Footer from "../Footer";

const RecentDonations = () => {
  const [donations, setDonations] = useState([]);
  const [acceptingId, setAcceptingId] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading,setLoading]=useState(false);



  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = () => {
    axios
      .get("https://anyadaan2-backend-1.onrender.com/api/donations/recent/")
      .then((res) => setDonations(res.data))
      .catch((err) => console.error(err));
  };
  
  const getMapLink = (item) => {
    if (item.latitude && item.longitude) {
    return `https://www.google.com/maps?q=${item.latitude},${item.longitude}`;
    }
    const address = `${item.addres}, ${item.city}, ${item.pincode}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };
  const handleAcceptClick = (id) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Please log in to accept contributions.");
      return;
    }

    setAcceptingId(id); 
  };
  const handleAcceptSubmit = (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Please log in again.");
      return;
    }

    setLoading(true)

    axios
      .patch(
        `https://anyadaan2-backend-1.onrender.com/api/donations/${id}/accept/`,
        {
          message_to_donor: submitMessage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setAcceptingId(null);
        setSubmitMessage("");
        fetchDonations();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to accept donation.");
      });
    setLoading(false)
      
  };


  // const handleDelete = (id) => {
  //   if (!window.confirm("Are you sure you want to delete this donation?")) return;

  //   axios
  //     .delete(`http://127.0.0.1:8000/api/donations/${id}/delete/`)
  //     .then(() => {
  //       setDonations((prev) => prev.filter((item) => item.id !== id));
  //     })
  //     .catch((err) => console.error(err));
  // };

  return (
    <>
      <div className="page">
        <div className="recent-wrapper">
          <h2>Contributions in Last 24 Hours</h2>

          {donations.length === 0 && (
            <p>No contributions in the last 24 hours.</p>
          )}

          {donations.map((item) => (
            <div className="donation-card" key={item.id}>
              <h3>{item.name}</h3>
              <p><b>Type:</b> {item.contributionType}</p>
              <p><b>Description:</b> {item.description}</p>
              <p><b>Message:</b> {item.message}</p>
              <p>
                <b>Address:</b> {item.addres}, {item.city} - {item.pincode}
              </p>
              <p className="time">
                ⏰ {new Date(item.created_at).toLocaleString()}
              </p>
              <a
                href={getMapLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 View on Map
              </a>

              <div className="action-buttons">
                {/* <button
                  className="accept-btn"
                  disabled={item.status === "accepted"}
                  onClick={() => handleAccept(item.id)}
                >
                  {item.status === "accepted" ? "Accepted" : "Accept"}
                </button> */}
                <button
                  className="accept-btn"
                  disabled={item.status === "accepted"}
                  onClick={() => handleAcceptClick(item.id)}
                >
                  {item.status === "accepted" ? "Accepted" : "Accept"}
                </button>
                {acceptingId === item.id && (
                  <div className="messageBox">
                    <form onSubmit={(e) => handleAcceptSubmit(e, item.id)}>
                      <label>Message to Donor</label>

                      <textarea
                        required
                        placeholder="Write a message you want to send to donor"
                        value={submitMessage}
                        onChange={(e) => setSubmitMessage(e.target.value)}
                      />

                      <div className="Mform-actions">
                        {loading?(<button type="submit">Sending..</button>):(<button type="submit">Send & Accept</button>)}
                        
                        <button
                          type="button"
                          className="cancel-btn"
                          onClick={() => setAcceptingId(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}


                {item.status === "accepted" && (
                  <p className="accepted-text">
                    ✅ This order is accepted by the company <b>{item.company_name}</b>
                  </p>
                )}


                {/* <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecentDonations;
