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
import VolunteerDashboard from "./pages/VounteerDashboard";

// Create a layout component that conditionally renders Navbar and Footer
function Layout({ children }) {
  const location = useLocation();
  // Hide navbar and footer on login-related pages
  const hideNavbarFooter = ['/login', '/volunteer-login','/request-help'].includes(location.pathname);
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-red-50">
      {!hideNavbarFooter && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <Layout>
            <Login />
          </Layout>
        } />
        <Route path="/volunteer-login" element={
          <Layout>
            <VolunteerLogin />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/request-help" element={<RequestHelp />} />
            </Routes>
          </Layout>
        } />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;