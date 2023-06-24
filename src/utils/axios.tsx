import axios from "axios";

const instance = axios.create({
  baseURL: "https://sheet-back-c6170a37c530.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default instance;
