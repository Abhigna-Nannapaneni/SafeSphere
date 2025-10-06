// src/pages/Reports.jsx
import React, { useState } from "react";
import { FileText, Download, Calendar, MapPin, Filter, Search } from "lucide-react";

function Reports() {
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const reports = [
    {
      id: 1,
      title: "Flood Response Report - Coastal Region",
      type: "flood",
      date: "2024-01-15",
      location: "Coastal Area",
      status: "completed",
      downloads: 142
    },
    {
      id: 2,
      title: "Earthquake Damage Assessment",
      type: "earthquake",
      date: "2024-01-10",
      location: "Northern District",
      status: "ongoing",
      downloads: 89
    },
    {
      id: 3,
      title: "Wildfire Evacuation Statistics",
      type: "wildfire",
      date: "2024-01-05",
      location: "Forest Region",
      status: "completed",
      downloads: 203
    },
    {
      id: 4,
      title: "Hurricane Preparedness Guide",
      type: "hurricane",
      date: "2024-01-01",
      location: "Eastern Coast",
      status: "published",
      downloads: 317
    },
    {
      id: 5,
      title: "Emergency Shelter Capacity Report",
      type: "shelter",
      date: "2023-12-28",
      location: "Multiple Locations",
      status: "completed",
      downloads: 76
    },
    {
      id: 6,
      title: "Medical Supply Inventory Update",
      type: "medical",
      date: "2023-12-25",
      location: "Central Region",
      status: "published",
      downloads: 154
    }
  ];

  const filteredReports = reports.filter(report => {
    const matchesType = selectedType === "all" || report.type === selectedType;
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "ongoing": return "bg-blue-100 text-blue-800";
      case "published": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-red-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Disaster Reports</h1>
          <p className="text-gray-600 text-lg">Access comprehensive reports on disaster responses, assessments, and statistics</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-600" />
                <span className="font-semibold">Filter by:</span>
              </div>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="flood">Flood</option>
                <option value="earthquake">Earthquake</option>
                <option value="wildfire">Wildfire</option>
                <option value="hurricane">Hurricane</option>
                <option value="medical">Medical</option>
                <option value="shelter">Shelter</option>
              </select>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => (
            <div key={report.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                  <FileText className="text-blue-600" size={20} />
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{report.title}</h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Calendar size={16} />
                  <span>{new Date(report.date).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <MapPin size={16} />
                  <span>{report.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{report.downloads} downloads</span>
                  <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <FileText size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No reports found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports;