import React, { useState, useContext, useEffect } from "react";
import "./Contribute.css";
import Footer from "../Footer";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from "../../AuthProvider";

const Contribute = () => {
  const [imageName, setImageName] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contributionType, setContributionType] = useState("");
  const [addres, setAddres] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("")
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cordinates, setCordinates] = useState(false);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const { isLoggedIn, user } = useContext(AuthContext);
  // console.log("isLoggedIn:", isLoggedIn);
// console.log("user:", user);

useEffect(() => {
  const storedEmail = localStorage.getItem("loggedEmail");
  if (storedEmail) {
    setEmail(storedEmail);
  }
}, []);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setCordinates(true);
      },

      () => {
        alert("Location permission denied");

      }
    );
  };
  const handleRazorpayPayment = async () => {
    try {
      const res = await axios.post(
        "https://anyadaan2-backend-1.onrender.com/api/create-order/",
        {
          amount,
          name,
          email,
        }
      );

      const { order_id, amount: orderAmount } = res.data;

      const options = {
        key: "rzp_test_S2YNh8fj9oJuac",
        amount: orderAmount,
        currency: "INR",
        name: "AnyaDaan",
        description: "Money Donation",
        order_id: order_id,

        handler: async function (response) {
          try {
            await axios.post(
              "https://anyadaan2-backend-1.onrender.com/api/verify-payment/",
              {
                razorpay_order_id: order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            alert("Payment successful 🎉");
            navigate("/thankyou");

          } catch (err) {
            console.error(err);
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: name,
          email: email,
        },

        theme: {
          color: "#22c55e",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        console.error(response.error);
        alert(response.error.description || "Payment failed");
      });
      rzp.open();

    } catch (error) {
      console.error(error);
      alert("Payment failed. Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (contributionType === "Money Donation") {
      if (!amount || amount < 1) {
        alert("Please enter a valid amount");
        return;
      }

      handleRazorpayPayment();
      return;
    }
    else {
      setLoading(true)
      const contributionData = {
        name, email, contributionType, imageName, description, message, addres, city, pincode, latitude, longitude
      };
      console.log(contributionData);
      try {
        const response = await axios.post(
          "https://anyadaan2-backend-1.onrender.com/api/donationData/",
          contributionData,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response, "this data is send to backend")
        console.log(response.data)
        navigate('/thankyou')

      }
      catch (error) {
        console.error("error are", error.response?.data);
      }
      finally {
        setLoading(false)
      }
    }


  };
  return (
    <>
      <div className="contribute-wrapper">
        <form onSubmit={handleSubmit} className="contributeForm form">
          <div className="contribute-card">
            <h2>Contribute Now</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name"  onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" value={email}   readOnly={!!localStorage.getItem("loggedEmail")} // optional
 onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Contribution Type</label>
              <select value={contributionType}
                onChange={(e) => setContributionType(e.target.value)}>
                <option>Select an option</option>
                <option>Food Donation</option>
                <option>Money Donation</option>
                <option>Volunteer</option>
              </select>
            </div>
            {contributionType !== "Money Donation" && (<>
              <div className="form-group">
                <label>Upload Image</label>

                <div className="upload-box">
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={(e) => {
                      setImageName(e.target.files[0]?.name || "");
                      // setImage(e.target.files[0]);
                    }
                    }
                  //   onChange={(e)=> setImage(e.target.files[0])}
                  />
                  <label htmlFor="imageUpload" className="upload-btn">
                    Choose Image
                  </label>
                  {imageName && <span className="file-name">{imageName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Write the description of donation..." onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className="form-group">
                <label>Addres</label>
                <input type="text" placeholder="Enter pickup location" onChange={(e) => setAddres(e.target.value)} />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input type="number" placeholder="Enter pincode" onChange={(e) => setPincode(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Write a short message..." onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
            </>)}

            {contributionType === "Money Donation" && (
              <div className="form-group">
                <label>Donation Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            )}

            {contributionType !== "Money Donation" && (
              <>
                {cordinates ? (<button type="button" className="submit-btn location" onClick={getCurrentLocation} disabled={true}>Location stored</button>) : <button type="button" className="submit-btn location" onClick={getCurrentLocation}>📍 Use Current Location</button>}
              </>
            )}

            {/* <button type="button" className="submit-btn location" onClick={getCurrentLocation}>📍 Use Current Location</button> */}
            {/* {cordinates ? (<button type="button" className="submit-btn location" onClick={getCurrentLocation} disabled={true}>Location stored</button>) : <button type="button" className="submit-btn location" onClick={getCurrentLocation}>📍 Use Current Location</button>} */}
            {loading ? (<button className="submit-btn" type="submit" disabled={true} >Please Wait....</button>) : (<button className="submit-btn" type="submit">
              {contributionType === "Money Donation"
                ? `Donate ₹${amount || ""}`
                : "Submit Contribution"}
            </button>)}

          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contribute;
