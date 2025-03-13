import React, { useState } from "react";
import AutoCompleteSearch from "../UI/AutoCompleteSearch";
import axios from "axios";
import'./SearchVisitors.css';
import NavBar from "./../NavBar";
import Header from "../Dashboard/Header";
import Menu from "../Dashboard/Menu";

const SearchVisitors = () => {
  const [data, setData] = useState(null);
  
  // Function to receive data from child
  const handleDataFromChild = (obj) => {
    setData(obj);
    console.log("Received from child:", obj);
  };

  const handleCheckInNow = async () => {
    const apiUrl = `http://localhost:5040/api/Visitor/CheckInPut/${data.id}`;

    const payload = {
      cDateTime: new Date().toISOString(), // Current timestamp in ISO format
    };

    try {
      const response = await axios.put(apiUrl, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Update state with the check-in time from API response (if returned)
      setData((prev) => ({
        ...prev,
        checkInTime: payload.cDateTime, // Assuming API stores the same time
      }));

      alert("Check-in successful!");
    } catch (error) {
      console.error("Error checking in:", error);
      alert("Failed to check in. Try again.");
    }
  };

  const handleCheckOutNow = async () => {
    const apiUrl = `http://localhost:5040/api/Visitor/CheckOutPut/${data.id}`;

    const payload = {
      cDateTime: new Date().toISOString(), // Current timestamp in ISO format
    };

    try {
      const response = await axios.put(apiUrl, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Update state with the check-in time from API response (if returned)
      setData((prev) => ({
        ...prev,
        checkOutTime: payload.cDateTime, // Assuming API stores the same time
      }));

      alert("Check-out successful!");
    } catch (error) {
      console.error("Error checking out:", error);
      alert("Failed to check out. Try again.");
    }
  };

  return (
    <div>
      <Header />
      <Menu />
    <div className="mainpage-card">
        <h4 className="mainpage-title">
            Search Visitor
            <AutoCompleteSearch sendData={handleDataFromChild} />
        </h4>
        <div className="mainpage-form">
            {/* <table border="1">
                <tbody>
                <tr>
                    <td className="border p-2"><b>Visitor ID</b></td>
                    <td className="border p-2">{data.visitorID}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Name</b></td>
                    <td className="border p-2">{`${data.salutation} ${data.firstName} ${data.midName} ${data.lastName}`}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Passport</b></td>
                    <td className="border p-2">{data.noPassport}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>PAN</b></td>
                    <td className="border p-2">{data.noPAN}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Aadhar</b></td>
                    <td className="border p-2">{data.noAadhar}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Company</b></td>
                    <td className="border p-2">{data.companyName}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Email</b></td>
                    <td className="border p-2">{data.email}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Contact No</b></td>
                    <td className="border p-2">{data.contactNo}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Host Name</b></td>
                    <td className="border p-2">{data.hostName}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Host Contact</b></td>
                    <td className="border p-2">{data.hostContactNo}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Purpose of Visit</b></td>
                    <td className="border p-2">{data.purpose}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Check In</b></td>
                    <td className="border p-2">{data.checkInTime}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Check Out</b></td>
                    <td className="border p-2">{data.checkOutTime}</td>
                </tr>
                </tbody>
            </table> */}
            {data ? (
            <table border="1">
                <tbody>
                <tr>
                    <td className="border p-2"><b>Visitor ID</b></td>
                    <td className="border p-2">{data.visitorID}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Name</b></td>
                    <td className="border p-2">{`${data.salutation} ${data.firstName} ${data.midName} ${data.lastName}`}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Passport</b></td>
                    <td className="border p-2">{data.noPassport}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>PAN</b></td>
                    <td className="border p-2">{data.noPAN}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Aadhar</b></td>
                    <td className="border p-2">{data.noAadhar}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Company</b></td>
                    <td className="border p-2">{data.companyName}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Email</b></td>
                    <td className="border p-2">{data.email}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Contact No</b></td>
                    <td className="border p-2">{data.contactNo}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Host Name</b></td>
                    <td className="border p-2">{data.hostName}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Host Contact</b></td>
                    <td className="border p-2">{data.hostContactNo}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Purpose of Visit</b></td>
                    <td className="border p-2">{data.purpose}</td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Check In</b></td>
                    <td className="border p-2">
                        {!data?.checkInTime ?
                            <button onClick={handleCheckInNow}>Check In Now</button>
                        : data?.checkInTime
                        }
                    </td>
                </tr>
                <tr>
                    <td className="border p-2"><b>Check Out</b></td>
                    <td className="border p-2">
                        {!data?.checkOutTime ?
                            <button onClick={handleCheckOutNow}>Check Out Now</button>
                        : data?.checkOutTime
                        }
                    </td>
                </tr>
                </tbody>
            </table>
            ) : (
            <p>No visitor selected.</p>
            )}

        </div>
    </div>
    </div>
  );
};

export default SearchVisitors;
