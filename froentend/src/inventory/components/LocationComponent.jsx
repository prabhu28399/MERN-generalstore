import React from "react";
import {
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
  FaPlus,
  FaBoxes,
  FaLayerGroup,
  FaBorderAll,
} from "react-icons/fa";

const LocationComponent = () => {
  // Sample location data
  const locations = [
    {
      id: "LOC-1001",
      room: "Warehouse A",
      row: "Row 3",
      section: "Section B",
      container: "Bin 42",
      status: "Occupied",
    },
    {
      id: "LOC-1002",
      room: "Warehouse B",
      row: "Row 1",
      section: "Section C",
      container: "Bin 15",
      status: "Available",
    },
    {
      id: "LOC-1003",
      room: "Cold Storage",
      row: "Row 5",
      section: "Section A",
      container: "Bin 7",
      status: "Reserved",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Occupied":
        return "bg-purple-100 text-purple-800";
      case "Available":
        return "bg-green-100 text-green-800";
      case "Reserved":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex justify-center ml-60 min-h-screen bg-tranceparent">
      <div className="w-[75%]">
        {/* Header with title and add button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <FaMapMarkerAlt className="mr-3 text-blue-600 text-xl" />
            Location Management
          </h2>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FaPlus className="mr-2" />
            Add Location
          </button>
        </div>

        {/* Locations Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-100 p-4 border-b border-gray-200 font-medium text-gray-700">
            <div className="col-span-1">ID</div>
            <div className="col-span-2 flex items-center">
              <FaMapMarkerAlt className="mr-1" /> Room
            </div>
            <div className="col-span-2 flex items-center">
              <FaLayerGroup className="mr-1" /> Row
            </div>
            <div className="col-span-2 flex items-center">
              <FaBorderAll className="mr-1" /> Section
            </div>
            <div className="col-span-2 flex items-center">
              <FaBoxes className="mr-1" /> Container
            </div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {locations.map((location) => (
              <div
                key={location.id}
                className="grid grid-cols-12 items-center p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-1 font-mono text-blue-600">
                  {location.id}
                </div>
                <div className="col-span-2 font-medium text-gray-800">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 mr-3">
                      <FaMapMarkerAlt size={14} />
                    </div>
                    {location.room}
                  </div>
                </div>
                <div className="col-span-2">
                  <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {location.row}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {location.section}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {location.container}
                  </span>
                </div>
                <div className="col-span-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      location.status
                    )}`}
                  >
                    {location.status}
                  </span>
                </div>
                <div className="col-span-1 flex justify-end space-x-2">
                  <button
                    className="p-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
                    title="Edit"
                  >
                    <FaEdit size={14} />
                  </button>
                  <button
                    className="p-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
                    title="Delete"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
