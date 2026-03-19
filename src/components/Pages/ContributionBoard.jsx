import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContributionBoard.css";
import Footer from "../Footer";

const ContributionBoard = () => {
  const [board, setBoard] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchBoard = () => {
    axios
      .get("https://anyadaan2-backend-1.onrender.com/api/contributions/board")
      .then((res) => {
        setBoard(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error(err);
        setBoard([]); 
      });
  };

  const fetchPaymentsBoard = () => {
    axios
      .get("https://anyadaan2-backend-1.onrender.com/api/payments/leaderboard/")
      .then((res) => {
        
        setLeaderboard(
          Array.isArray(res.data.leaderboard)
            ? res.data.leaderboard
            : []
        );
      })
      .catch((err) => {
        console.error(err);
        setLeaderboard([]); 
      });
  };

  useEffect(() => {
    fetchBoard();
    fetchPaymentsBoard();

    const interval = setInterval(() => {
      fetchBoard();
      fetchPaymentsBoard();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const top3 = board.slice(0, 3);
  const rest = board.slice(3);

  const payment_top3 = leaderboard.slice(0, 3);
  const payment_rest = leaderboard.slice(3);

  return (
    <>
      <div className="CBpage">

        <div className="CBboard-page">
          <h2>DONOR'S LEADERBOARD</h2>

          <div className="CBtop3">
            {top3.map((item, index) => (
              <div className="CBtop-card" key={index}>
                <div className="CBavatar" />
                <h3>{item.name}</h3>
                <p className="CBdesignation">{item.company_name}</p>
                <div className="CBamount">
                  {item.total_donations} Donations
                </div>
              </div>
            ))}
          </div>

          <div className="CBtable">
            <div className="CBrow CBheader">
              <span>#</span>
              <span>Contributor</span>
              <span>Company</span>
              <span>Donations</span>
            </div>

            {rest.map((item, index) => (
              <div className="CBrow" key={index}>
                <span>{index + 4}</span>
                <div className="CBuser">
                  <strong>{item.name}</strong>
                </div>
                <span className="CBmuted">{item.company_name}</span>
                <strong>{item.total_donations}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="CBboard-page">
          <h2>💰 DONOR PAYMENTS LEADERBOARD</h2>

          <div className="CBtop3">
            {payment_top3.map((item, index) => (
              <div className="CBtop-card" key={index}>
                <div className="CBavatar">#{index + 1}</div>
                <h3>{item.name || "Anonymous Donor"}</h3>
                <div className="CBamount">
                  ₹{Number(item.total_amount).toLocaleString("en-IN")}
                </div>
                <p className="CBmuted">Total Contribution</p>
              </div>
            ))}
          </div>

          <div className="CBtable">
            <div className="CBrow CBheader">
              <span>#</span>
              <span>Contributor</span>
              <span>Total Amount</span>
            </div>

            {payment_rest.map((item, index) => (
              <div className="CBrow" key={index}>
                <span>{index + 4}</span>
                <div className="CBuser">
                  <strong>{item.name || "Anonymous Donor"}</strong>
                </div>
                <strong>
                  ₹{Number(item.total_amount).toLocaleString("en-IN")}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContributionBoard;
