import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setError("Admin login required");
      return;
    }
    axios
      .get("http://127.0.0.1:8000/api/admin/contributions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        setError("You are not authorized to view this page");
      });
  }, []);

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>

      {error && <p className="admin-error">{error}</p>}

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Donor</th>
            <th>Email</th>
            <th>Status</th>
            <th>Accepted By</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <span className={`status ${item.status}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.accepted_by || "—"}</td>
              <td>{new Date(item.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
