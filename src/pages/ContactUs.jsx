// src/pages/Contact.jsx
import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#2563eb",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "500px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#1e293b" }}>
          <b>Contact Us</b>
        </h2>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
              resize: "vertical"
            }}
          />
          
          <button
            type="submit"
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Send Message
          </button>
        </form>
        
        <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f1f5f9", borderRadius: "8px" }}>
          <p style={{ margin: 0, color: "#64748b", fontSize: "14px", textAlign: "center" }}>
            For emergencies, please call: <strong>1-800-123-HELP</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;