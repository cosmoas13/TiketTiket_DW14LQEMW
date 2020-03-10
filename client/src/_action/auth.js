// import axios from "axios";
import { LOGIN, REGISTER, GET_USER } from "../config/constanst";
import { API, setAuthToken } from "../config/api";

export const login = data => {
  console.log("data action login", data);
  return {
    type: LOGIN,
    payload: async () => {
      const res = await API.post("/login", data);
      console.log("cek login", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);
      return res.data;
    }
  };
};

export const register = data => {
  console.log("data action register", data);
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post("/register", data);
      console.log("cek register", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);
      return res.data;
    }
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
    payload: async () => {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const res = await API.get("/user");
      return res.data;
    }
  };
};
