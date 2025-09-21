// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Users, Heart, Map, Shield, Phone } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Disaster Relief Network</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connecting those in need with volunteers during emergencies and natural disasters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate("/request-help")}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <AlertTriangle size={24} />
              Request Emergency Help
            </button>
            <button 
              onClick={() => navigate("/volunteer-login")}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Users size={24} />
              Join as Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">How We Help During Disasters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Immediate Response</h3>
              <p className="text-gray-600">Rapid connection with nearby volunteers during emergencies</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Resource Mapping</h3>
              <p className="text-gray-600">Real-time tracking of available resources and needs</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Community Support</h3>
              <p className="text-gray-600">Mobilizing local volunteers to assist those affected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Volunteers Registered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">2,500+</div>
              <div className="text-gray-600">Crisis Responses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">48</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="py-16 px-4 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8">If you're in immediate danger, please contact emergency services first</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 bg-white text-blue-800 px-6 py-3 rounded-lg shadow-md">
              <Phone size={24} />
              <span className="text-lg font-semibold">Call 911</span>
            </div>
            <div className="flex items-center gap-3 bg-white text-blue-800 px-6 py-3 rounded-lg shadow-md">
              <Phone size={24} />
              <span className="text-lg font-semibold">Emergency Hotline: 1-800-123-HELP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;