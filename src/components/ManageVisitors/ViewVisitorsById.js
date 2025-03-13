import React, { useState, useEffect } from "react";
const ViewVisitorsById = () => {
    const [id, setId] = useState("");
    const [visitor, setVisitor] = useState(null);
  
    const fetchVisitor = () => {
      fetch(`http://localhost:5040/api/Visitor/${id}`)
        .then((res) => res.json())
        .then((data) => setVisitor(data));
    };
  
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-2">View Visitor by ID</h2>
        <input type="text" placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)} className="border p-2 rounded" />
        <button onClick={fetchVisitor} className="bg-blue-500 text-white p-2 ml-2 rounded">Search</button>
        {visitor && <div className="border p-2 mt-2 rounded">{visitor.name} - {visitor.email}</div>}
      </div>
    );
  };
  export default ViewVisitorsById;