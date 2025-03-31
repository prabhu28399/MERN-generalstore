import React from "react";
import { FaBox, FaEdit, FaTrash, FaCircle, FaPlus } from "react-icons/fa";

const TableStructure = () => {
  // Sample data
  const products = [
    { id: 1, name: "MacBook Pro", category: "Electronics", status: "In Stock" },
    { id: 2, name: "Office Chair", category: "Furniture", status: "Low Stock" },
    {
      id: 3,
      name: "Bluetooth Speaker",
      category: "Electronics",
      status: "Out of Stock",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-purple-100 text-purple-800";
    }
  };

  return (
    <div className="flex justify-center ml-60 min-h-screen bg-tranceperent">
      <div className="w-[75%]">
        {/* Header with title and add button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <FaBox className="mr-3 text-purple-600 text-xl" />
            Inventory Categorys
          </h2>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <FaPlus className="mr-2" />
            Add Category
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-100 p-4 border-b border-gray-200 font-medium text-gray-700">
            <div className="col-span-1">ID</div>
            <div className="col-span-4">Name</div>
            <div className="col-span-3">Category_id</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-12 items-center p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-1 text-gray-600">{product.id}</div>
                <div className="col-span-4 font-medium text-gray-800">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md bg-purple-50 flex items-center justify-center text-purple-600 mr-3">
                      <FaBox size={14} />
                    </div>
                    {product.name}
                  </div>
                </div>
                <div className="col-span-3">
                  <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="col-span-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      product.status
                    )}`}
                  >
                    {product.status}
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

export default TableStructure;
