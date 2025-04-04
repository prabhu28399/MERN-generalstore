// src/components/CategoryList.jsx
import React, { useContext } from "react";
import CategoryComponent from "../components/CategoryComponent"; // Assuming you have a CategoryComponent
import { CategoryContext } from "../../context/inventory/CategoryContext";

const CategoryList = () => {
  const { categories, loading, error } = useContext(CategoryContext);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories: {error}</p>;

  return (
    <div className="flex justify-center ml-60 min-h-screen bg-transparent">
      <div className="w-[75%]">
        {/* Header with title and add button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <span className="mr-3 text-purple-600 text-xl">📦</span>
            Inventory Categories
          </h2>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <span className="mr-2">➕</span>
            Add Category
          </button>
        </div>

        {/* Categories Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-100 p-4 border-b border-gray-200 font-medium text-gray-700">
            <div className="col-span-1">#</div> {/* Sequential Number Header */}
            <div className="col-span-4">Name</div>
            <div className="col-span-3">Category ID</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {categories.map((category, index) => (
              <CategoryComponent
                key={category.categoryid} // Use category.categoryid as the key
                category={category}
                index={index + 1} // Pass the index + 1 for sequential numbering
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
