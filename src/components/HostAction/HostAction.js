import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VisitorActionsCard = ({ visitor = {} }) => {
  // Initialize state with visitor details or empty fields
  const [visitorDetails, setVisitorDetails] = useState({
    name: visitor.name || "",
    companyName: visitor.companyName || "",
    email: visitor.email || "",
    phoneNo: visitor.phoneNo || "",
    expectedDate: visitor.expectedDate || "",
    expectedTime: visitor.expectedTime || "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setVisitorDetails({ ...visitorDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h4 className="text-center mb-3">Visitor Details</h4>
        <form>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={visitorDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              name="companyName"
              value={visitorDetails.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={visitorDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Phone No</label>
            <input
              type="tel"
              className="form-control"
              name="phoneNo"
              value={visitorDetails.phoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Expected Date</label>
            <input
              type="date"
              className="form-control"
              name="expectedDate"
              value={visitorDetails.expectedDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Expected Time</label>
            <input
              type="time"
              className="form-control"
              name="expectedTime"
              value={visitorDetails.expectedTime}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button type="button" className="btn btn-success">Accept</button>
            <button type="button" className="btn btn-danger">Reject</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VisitorActionsCard;
