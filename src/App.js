import React, { useContext,useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateVisitors from './components/ManageVisitors/CreateVisitors';
import UpdateVisitors from './components/ManageVisitors/UpdateVisitors';
import ViewVisitors from './components/ManageVisitors/ViewVisitors';
import DeleteVisitors from './components/ManageVisitors/DeleteVisitors';
import ViewVisitorsById from './components/ManageVisitors/ViewVisitorsById';
import CheckIn from './components/ManageVisitors/CheckIn';
import CheckOut from './components/ManageVisitors/CheckOut';
import GetAllVisitorsPagination from './components/ManageVisitors/GetAllVisitorsPagination';
import HostAction from './components/HostAction/HostAction';
import SearchVisitors from './components/ManageVisitors/SearchVisitors';
import Header from './components/Dashboard/Header';
import Footer from './components/Dashboard/Footer';
import Menu from './components/Dashboard/Menu';


const App = () => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
   

    <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Handle unknown routes */}
        <Route path="/createv" element={<CreateVisitors />} />
        <Route path="/updatev" element={<UpdateVisitors />} />
        <Route path="/searchv" element={<SearchVisitors />} />
        <Route path="/viewv" element={<ViewVisitors />} />
        <Route path="/viewbyid" element={<ViewVisitorsById />} />
        <Route path="/deletev" element={<DeleteVisitors />} />
        <Route path="/getAll" element={<GetAllVisitorsPagination />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/actionh" element={<HostAction />} />
        
    </Routes>
  );
};

export default App;
