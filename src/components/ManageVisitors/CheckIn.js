import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CheckIn = () => {
  const [visitorId, setVisitorId] = useState("");

  const handleCheckIn = () => {
    fetch(`http://localhost:5040/api/Visitor/CheckIn/${visitorId}`, {
      method: "POST",
    }).then(() => alert("Visitor checked in successfully"));
  };

  return (
    <div className="visitor-registration-container d-flex align-items-center justify-content-center min-vh-100 bg-light pt-5">
      <div className="visitor-registration-card p-4 bg-white shadow-lg rounded-3">
        <h2 className="visitor-registration-title text-center mb-3">Check-In Visitor</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleCheckIn(); }} className="visitor-registration-form">
          <div className="form-group mb-3">
            <label htmlFor="visitorId" className="form-label">Visitor ID</label>
            <input
              id="visitorId"
              type="text"
              name="visitorId"
              placeholder="Enter Visitor ID"
              value={visitorId}
              onChange={(e) => setVisitorId(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Check-In</button>
        </form>
      </div>
    </div>
  );
};

export default CheckIn;
