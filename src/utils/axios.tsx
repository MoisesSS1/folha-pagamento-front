import axios from "axios";

const instance = axios.create({
  baseURL: "https://sheet-back-258f9a8b8603.herokuapp.com",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default instance;
