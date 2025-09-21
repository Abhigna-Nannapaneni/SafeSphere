import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isScrolled ? "0.7rem 5vw" : "1rem 5vw",
    background: isScrolled 
      ? "rgba(37, 99, 235, 0.95)" 
      : "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    backdropFilter: isScrolled ? "blur(10px)" : "none",
    color: "white",
    fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
    fontWeight: "600",
    flexWrap: "wrap",
    boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    transition: "all 0.3s ease"
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  };

  const navLinksStyle = {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
    position: "relative",
    padding: "0.5rem 0"
  };

  const loginBtnStyle = {
    backgroundColor: "#f59e0b",
    color: "white",
    padding: "0.6rem 1.5rem",
    borderRadius: "30px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "clamp(0.9rem, 1vw, 1rem)",
    transition: "all 0.3s ease",
    border: "2px solid #f59e0b"
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <i className="fas fa-shield-alt" style={{color: "#f59e0b"}}></i>
        SafeSphere
      </div>
      <div style={navLinksStyle}>
        <Link 
          to="/" 
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
          }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
          }}
        >
          About
        </Link>
        <Link 
          to="/services" 
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
          }}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
          }}
        >
          Contact
        </Link>
        <Link 
          to="/reports" 
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
          }}
        >
          Reports
        </Link>
        <Link 
          to="/resources" 
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
          }}
        >
          Resources
        </Link>
        <Link 
          to="/volunteer-dashboard" 
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = "#f59e0b";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
          }}
        >
          Volunteers
        </Link>
      </div>
      <Link 
        to="/login" 
        style={loginBtnStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#f59e0b";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 5px 15px rgba(245, 158, 11, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#f59e0b";
          e.target.style.color = "white";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
        }}
      >
        Log In
      </Link>
    </nav>
  );
}