import { useState, useEffect } from "react";
import "./GetAllVisitorsPagination.css";
import NavBar from "./../NavBar";

const GetAllVisitorsPagination = () => {
  const [visitors, setVisitors] = useState([]);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    perPage: 3,
    pageNo: 1,
    totalPageCount: 1
  });

  // Fetch visitor data from API
  const fetchVisitors = async (page) => {
    try {
      const response = await fetch(`http://localhost:5040/api/Visitor/get/${page}/${pagination.perPage}`);
      const data = await response.json();
      setVisitors(data.data);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching visitors:", error);
    }
  };

  // Fetch data when component mounts or page changes
  useEffect(() => {
    fetchVisitors(pagination.pageNo);
  }, [pagination.pageNo]);

  return (
    <div>
      <NavBar />
    <div className="flex justify-center mt-10">
      <div className="bg-white w-1/2 p-4 rounded-lg shadow-md"> {/* Smaller Card */}
        <h4 className="text-center text-lg font-bold mb-4">Visitor List</h4>
        <div className="overflow-x-auto">
          
          {/* Table to Display Visitors */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 w-[40px]">ID</th> {/* Smaller */}
                <th className="border p-2 w-[200px]">Name</th> {/* Expanded */}
                <th className="border p-2">Email</th>
                <th className="border p-2">Contact</th>
                <th className="border p-2 w-[250px]">Purpose</th> {/* Expanded */}
                <th className="border p-2 w-[160px]">Check In</th> {/* Adjusted */}
                <th className="border p-2 w-[160px]">Check Out</th> {/* Adjusted */}
              </tr>
            </thead>
            <tbody>
              {visitors.map((visitor) => (
                <tr key={visitor.id}>
                  <td className="border p-2 w-[40px]">{visitor.visitorID}</td> {/* Smaller */}
                  <td className="border p-2 w-[200px]">{visitor.salutation} {visitor.firstName} {visitor.lastName}</td> {/* Expanded */}
                  <td className="border p-2">{visitor.email}</td>
                  <td className="border p-2">{visitor.contactNo}</td>
                  <td className="border p-2 w-[250px]">{visitor.purpose}</td> {/* Expanded */}
                  <td className="border p-2 w-[160px]">{visitor.checkInTime}</td> {/* Adjusted */}
                  <td className="border p-2 w-[160px]">{visitor.checkOutTime}</td> {/* Adjusted */}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              disabled={pagination.pageNo === 1}
              onClick={() => setPagination(prev => ({ ...prev, pageNo: prev.pageNo - 1 }))}
            >{"<<"}</button>

            <span className="text-gray-700">
              Page {pagination.pageNo} of {pagination.totalPageCount}
            </span>

            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              disabled={pagination.pageNo === pagination.totalPageCount}
              onClick={() => setPagination(prev => ({ ...prev, pageNo: prev.pageNo + 1 }))}
            >{">>"}</button>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default GetAllVisitorsPagination;
