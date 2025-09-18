import axios from "axios";

const api = axios.create({
  baseURL: "http://10.2.232.206/api", // cambia por la IP de tu PC/Laravel
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
