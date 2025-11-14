// src/pages/ResponsePage.jsx
import React, { useEffect, useState } from "react";
import { User, Phone, Mail, MapPin, AlertTriangle, MessageCircle, Users, Shield } from "lucide-react";

function ResponsePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/help/last-request")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error("Error fetching request:", err));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <p className="text-gray-700 text-lg font-semibold">Loading details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-10 flex justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-200 p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <Shield className="text-blue-600" size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Emergency Request Details</h1>
            <p className="text-gray-600 text-sm">Submitted help request information</p>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-5">

          {/* Name */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border">
            <User className="text-blue-600" size={22} />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold text-gray-800">{data.name || "Not provided"}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border">
            <Phone className="text-blue-600" size={22} />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold text-gray-800">{data.contact}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border">
            <Mail className="text-blue-600" size={22} />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-800">{data.email}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border">
            <MapPin className="text-blue-600" size={22} />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold text-gray-800">{data.location}</p>
            </div>
          </div>

          {/* Emergency Type */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border">
            <AlertTriangle className="text-red-600" size={22} />
            <div>
              <p className="text-sm text-gray-500">Emergency Type</p>
              <p className="font-semibold text-gray-800 capitalize">{data.emergencyType}</p>
            </div>
          </div>

          {/* People Affected */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border">
            <Users className="text-blue-600" size={22} />
            <div>
              <p className="text-sm text-gray-500">People Affected</p>
              <p className="font-semibold text-gray-800">{data.peopleAffected}</p>
            </div>
          </div>

          {/* Description */}
          <div className="flex gap-3 p-4 rounded-xl bg-gray-50 border">
            <MessageCircle className="text-blue-600 mt-1" size={22} />
            <div>
              <p className="text-sm text-gray-500">Emergency Description</p>
              <p className="font-semibold text-gray-800">{data.description}</p>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-8 p-4 bg-blue-100 border border-blue-300 rounded-xl text-center">
          <p className="text-blue-800 text-sm">
            ⚠️ Emergency services have been notified. Stay safe and reachable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResponsePage;
