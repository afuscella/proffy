import axios from "axios";

const api = axios.create({
  baseURL: "http://c35780c92f43.ngrok.io",
});

export default api;
