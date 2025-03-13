import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const ViewVisitors = () => {
  const [visitors, setVisitors] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5040/api/Visitor")
  //     .then((res) => res.json())
  //     .then((data) => setVisitors(data));
  // }, []);

  return (
    <div>
      
    <div className="visitor-registration-container d-flex align-items-center justify-content-center min-vh-100 bg-light pt-3">
      <div className="visitor-registration-card p-4 bg-white shadow-lg rounded-3">
        <h2 className="visitor-registration-title text-center mb-3">View Visitors</h2>
        <ul className="list-group">
          {visitors.map((visitor) => (
            <li key={visitor.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{visitor.name} - {visitor.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ViewVisitors;