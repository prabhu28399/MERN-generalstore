// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api", // Your backend URL
// });

// // Categories
// export const fetchCategories = () => API.get("/categories");
// export const createCategory = (newCategory) =>
//   API.post("/categories", newCategory);
// export const updateCategory = (id, updatedCategory) =>
//   API.put(`/categories/${id}`, updatedCategory);
// export const deleteCategory = (id) => API.delete(`/categories/${id}`);

// // Products
// export const fetchProducts = () => API.get("/products");
// export const createProduct = (newProduct) => API.post("/products", newProduct);
// export const updateProduct = (id, updatedProduct) =>
//   API.put(`/products/${id}`, updatedProduct);
// export const deleteProduct = (id) => API.delete(`/products/${id}`);

// // Locations
// export const fetchLocations = () => API.get("/locations");
// export const createLocation = (newLocation) =>
//   API.post("/locations", newLocation);
// export const updateLocation = (id, updatedLocation) =>
//   API.put(`/locations/${id}`, updatedLocation);
// export const deleteLocation = (id) => API.delete(`/locations/${id}`);

// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Your backend URL
});

// Categories
export const fetchCategories = () => API.get("/categories");
export const createCategory = (newCategory) =>
  API.post("/categories", newCategory);
export const updateCategory = (id, updatedCategory) =>
  API.put(`/categories/${id}`, updatedCategory);
export const deleteCategory = (id) => API.delete(`/categories/${id}`);

// You can add more API calls for products, locations, etc.
