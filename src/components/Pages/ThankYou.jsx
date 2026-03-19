import { Link } from "react-router-dom";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <div className="check-icon">✔</div>

        <h1>Thank You for Your Contribution 🤍</h1>

        <p>
          Your kindness means a lot to us.  
          Because of you, someone’s life will be a little better today.
        </p>

        <p className="highlight">
          We truly appreciate your generosity.
        </p>

        <div className="btn-group">
          <Link to="/" className="btn primary-btn">
            Go to Home
          </Link>

          <Link to="/contribute" className="btn secondary-btn">
            Contribute Again
          </Link>
        </div>
      </div>
    </div>
  );
}
