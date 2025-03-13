import { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import "./Login.css";

const Auth = ({setIsAuthenticated}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulated admin login
    if (email === "admin" && password === "admin") {
      setIsAuthenticated(true);
      localStorage.setItem("token", "sample-auth-token");
      navigate("/dashboard", { replace: true }); // Only navigate to dashboard for admin login
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="auth-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Admin Login</h2>
      <div className="role-selection" style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "20px" }}>
       
        
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "300px", padding: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "300px", padding: "10px" }}
        />
        <button type="submit" style={{ width: "300px", padding: "10px", marginTop: "10px" }}>
         Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
