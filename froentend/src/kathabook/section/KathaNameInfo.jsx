import React, { useState } from "react";
import { FaRupeeSign, FaPlus, FaTrash } from "react-icons/fa";
import { FaBox, FaEdit, FaCircle } from "react-icons/fa";

const KathaNameInfo = () => {
  const persons = [
    {
      id: 1,
      name: "MacBook Pro",
      GetMoney: 5000,
      GiveMoney: 300,
    },
    {
      id: 2,
      name: "Office Chair",
      GetMoney: 3000,
      GiveMoney: 200,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      GetMoney: 5000,
      GiveMoney: 500,
    },
  ];
  //   bg-green-100 text-green-800

  return (
    <div className="flex justify-center ml-60 min-h-screen bg-tranceperent">
      <div className="w-[75%]">
        {/* Header with title and add button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <FaBox className="mr-3 text-purple-600 text-xl" />
            Jetti Mukesh
          </h2>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <FaPlus className="mr-2" />
            Add Category
          </button>
        </div>

        {/* per Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-100 p-4 border-b border-gray-200 font-medium text-gray-700">
            <div className="col-span-1">ID</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-3">Get Money</div>
            <div className="col-span-2">Give Money</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {persons.map((person) => (
              <div
                key={person.id}
                className="grid grid-cols-12 items-center p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-1 text-gray-600">{person.id}</div>
                <div className="col-span-4 font-medium text-gray-800">
                  <div className="flex items-center">{person.name}</div>
                </div>
                <div className="col-span-3">
                  <span className="text-2x font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {person.GetMoney}
                  </span>
                </div>
                <div className="col-span-2">
                  <span
                    className={`px-3 py-1 rounded-full text-2x font-medium bg-red-100 text-red-800`}
                  >
                    {person.GiveMoney}
                  </span>
                </div>
                <div className="col-span-2 flex justify-end space-x-2">
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
                    <FaEdit size={14} />
                  </button>
                  <button className="p-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors">
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

export default KathaNameInfo;
