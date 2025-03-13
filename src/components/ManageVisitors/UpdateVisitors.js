import { useState } from 'react';
import { registerVisitor } from '../../services/visitorService';
import './UpdateVisitor.css';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./../NavBar";
import Menu from '../Dashboard/Menu';
import Header from '../Dashboard/Header';

const UpdateVisitors = () => {
    const [visitorDetails, setVisitorDetails] = useState({
        visitorID: '',
        salutation: '',
        firstName: '',
        midName: '',
        lastName: '',
        noPassport: '',
        noPAN: '',
        noAadhar: '',
        companyName: '',
        email: '',
        contactNo: '',
        hostName: '',
        hostContactNo: '',
        purpose: '',
        checkInTime: new Date().toISOString(),
        checkOutTime: new Date().toISOString(),
        preRegistration: false,
        idType: '',
        idNumber: '',
    });

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerVisitor(visitorDetails);
            if (response.status === 201) {
                setShowModal(true);
            } else {
                setShowModal(false);
            }
        } catch (error) {
            console.error('Registration failed', error);
            alert("Registration failed");
        }
    };

    return (
        <div>
      <Menu />
      <Header />
        <div className="container mt-5">
            <div className="card p-4">
                <h2 className="text-center mb-4"> Update Visitor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="salutation">Salutation</label>
                            <select className="form-control border-dark border-2" id="salutation" onChange={e => setVisitorDetails({ ...visitorDetails, salutation: e.target.value })} required>
                                <option value="">Select</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Master">Master</option>
                                <option value="Miss">Miss</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control border-dark" id="firstName" onChange={e => setVisitorDetails({ ...visitorDetails, firstName: e.target.value })} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="midName">Middle Name</label>
                            <input type="text" className="form-control border-dark" id="midName" onChange={e => setVisitorDetails({ ...visitorDetails, midName: e.target.value })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control border-dark" id="lastName" onChange={e => setVisitorDetails({ ...visitorDetails, lastName: e.target.value })} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="noPassport">Passport Number</label>
                            <input type="text" className="form-control border-dark" id="noPassport" onChange={e => setVisitorDetails({ ...visitorDetails, noPassport: e.target.value })} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="noPAN">PAN Number</label>
                            <input type="text" className="form-control border-dark" id="noPAN" onChange={e => setVisitorDetails({ ...visitorDetails, noPAN: e.target.value })} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="noAadhar">Aadhar Number</label>
                            <input type="text" className="form-control border-dark" id="noAadhar" onChange={e => setVisitorDetails({ ...visitorDetails, noAadhar: e.target.value })} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text" className="form-control border-dark" id="companyName" onChange={e => setVisitorDetails({ ...visitorDetails, companyName: e.target.value })} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control border-dark border-2" id="email" onChange={e => setVisitorDetails({ ...visitorDetails, email: e.target.value })} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="contactNo">Contact Number</label>
                            <input type="tel" className="form-control border-dark border-2" id="contactNo" onChange={e => setVisitorDetails({ ...visitorDetails, contactNo: e.target.value })} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="hostName">Host Name</label>
                            <input type="text" className="form-control border-dark" id="hostName" onChange={e => setVisitorDetails({ ...visitorDetails, hostName: e.target.value })} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="hostContactNo">Host Contact Number</label>
                            <input type="tel" className="form-control border-dark border-2" id="hostContactNo" onChange={e => setVisitorDetails({ ...visitorDetails, hostContactNo: e.target.value })} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="purpose">Purpose of Visit</label>
                            <textarea className="form-control border-dark border-2" id="purpose" rows="3" onChange={e => setVisitorDetails({ ...visitorDetails, purpose: e.target.value })} required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateVisitors;