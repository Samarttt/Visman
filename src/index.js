import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "admin-lte/dist/css/adminlte.min.css"; // AdminLTE CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "font-awesome/css/font-awesome.min.css"; // FontAwesome Icons
import "admin-lte/dist/js/adminlte.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery"; // Optional: If you need jQuery


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter> {/* ✅ Wrap App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </AuthProvider>
);

reportWebVitals();
