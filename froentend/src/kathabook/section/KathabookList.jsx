import React from "react";
import { Link } from "react-router-dom"; // Import Link

import {
  FaUser,
  FaEdit,
  FaTrash,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const KathabookList = () => {
  // Sample transaction data
  const transactions = [
    {
      id: "T1001",
      image:
        "https://res.cloudinary.com/hyld/image/upload/f_auto,c_fill,g_auto,w_510,h_510/v1/h2/resources/terminology/terminology-header-19",
      name: "John Doe",
      lastUpdated: "2 hours ago",
      youWillGet: 100,
      youWillGive: 50,
    },
    {
      id: "T1002",
      image:
        "https://res.cloudinary.com/hyld/image/upload/f_auto,c_fill,g_auto,w_510,h_510/v1/h2/resources/terminology/terminology-header-19",
      name: "Jane Smith",
      lastUpdated: "1 day ago",
      youWillGet: 150,
      youWillGive: 75,
    },
    {
      id: "T1003",
      image:
        "https://res.cloudinary.com/hyld/image/upload/f_auto,c_fill,g_auto,w_510,h_510/v1/h2/resources/terminology/terminology-header-19",
      name: "Robert Johnson",
      lastUpdated: "3 days ago",
      youWillGet: 200,
      youWillGive: 100,
    },
    {
      id: "T1003",
      image:
        "https://res.cloudinary.com/hyld/image/upload/f_auto,c_fill,g_auto,w_510,h_510/v1/h2/resources/terminology/terminology-header-19",
      name: "Robert Johnson",
      lastUpdated: "3 days ago",
      youWillGet: 200,
      youWillGive: 100,
    },
  ];

  return (
    <div className="flex justify-center ml-60 min-h-screen bg-transparent">
      <div className="w-[75%]">
        {/* Header with title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <FaUser className="mr-3 text-indigo-600 text-xl" />
            Kathabook Transactions
          </h2>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-100 from-indigo-600 to-purple-600 p-4 font-medium text-black">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Image</div>
            <div className="col-span-3">Details</div>
            <div className="col-span-3 flex items-center">
              <FaArrowUp className="mr-1 text-green-300" /> You Will Get
            </div>
            <div className="col-span-2 flex items-center">
              <FaArrowDown className="mr-1 text-red-300" /> You Will Give
            </div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="grid grid-cols-12 items-center p-4 hover:bg-indigo-50 transition-colors"
              >
                <div className="col-span-1 font-mono text-indigo-600">
                  {transaction.id}
                </div>
                <div className="col-span-2">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full object-cover border-2 border-indigo-200"
                      src={transaction.image}
                      alt="Profile"
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <Link
                    to="/kathabook/name" // Dynamic route (e.g., /user/T1001)
                    className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    <div className="font-medium text-gray-800">
                      {transaction.name}
                    </div>
                  </Link>
                  <div className="text-sm text-gray-500">
                    Updated: {transaction.lastUpdated}
                  </div>
                </div>
                <div className="col-span-3">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 flex items-center w-fit">
                    <FaArrowUp className="mr-1" /> ${transaction.youWillGet}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 flex items-center w-fit">
                    <FaArrowDown className="mr-1" /> ${transaction.youWillGive}
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

export default KathabookList;
