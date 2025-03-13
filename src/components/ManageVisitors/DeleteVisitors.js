import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeleteVisitors.css';
import Menu from "../Dashboard/Menu";
import Header from "../Dashboard/Header";

const DeleteVisitors = () => {
  const [id, setId] = useState("");

  const handleDelete = () => {
    fetch(`http://localhost:5040/api/Visitor/${id}`, {
      method: "DELETE",
    }).then(() => alert("Visitor deleted successfully"));
  };

  return (
    <div>
      <Menu />
      <Header />
    <div className="visitor-registration-container d-flex align-items-center justify-content-center min-vh-100 bg-light pt-5">
      <div className="visitor-registration-card">
        <h2 className="visitor-registration-title text-center mb-3">Delete Visitor</h2>
        <div className="form-group mb-3">
          <label htmlFor="visitorId" className="form-label">Visitor ID</label>
          <input
            id="visitorId"
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button onClick={handleDelete} className="btn btn-danger w-100 mt-3">Delete</button>
      </div>
    </div>
    </div>
  );
};

export default DeleteVisitors;
