// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import VolunteerLogin from "./pages/VolunteerLogin";
import RequestHelp from "./pages/RequestHelp";
import About from "./pages/About";
import Services from "./pages/Services";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import ContactUs from "./pages/ContactUs";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbarFooter = ['/login', '/volunteer-login', '/request-help','/about','/services'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-red-50">
      {!hideNavbarFooter && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/volunteer-login" element={<VolunteerLogin />} />
          <Route path="/request-help" element={<RequestHelp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
