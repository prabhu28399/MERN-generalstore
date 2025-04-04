// src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // or use env variable
});

export default API;
