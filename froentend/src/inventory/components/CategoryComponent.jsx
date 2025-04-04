// src/components/CategoryComponent.jsx
import React from "react";
import { FaBox, FaEdit, FaTrash } from "react-icons/fa";

const CategoryComponent = ({ category, index }) => {
  // Accept index as a prop
  return (
    <div className="grid grid-cols-12 items-center p-4 hover:bg-gray-50 transition-colors">
      <div className="col-span-1 text-gray-600">{index}</div>{" "}
      {/* Display the index */}
      <div className="col-span-4 font-medium text-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-md bg-purple-50 flex items-center justify-center text-purple-600 mr-3">
            <FaBox size={14} />
          </div>
          {category.categoryname} {/* Use category.categoryname */}
        </div>
      </div>
      <div className="col-span-3">
        <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
          {category.categoryid} {/* Use category.categoryid */}
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
  );
};

export default CategoryComponent;
