// src/context/inventory/CategoryContext.js
import React, { createContext, useState, useEffect } from "react";
import { fetchCategories } from "../../api/api";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchCategories();
        // Filter out the _id from the fetched categories
        const filteredCategories = response.data.map(
          ({ _id, ...rest }) => rest
        );
        setCategories(filteredCategories);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, loading, error }}>
      {children}
    </CategoryContext.Provider>
  );
};
