// import axios from "axios";
import { LOGIN, REGISTER } from "../config/constanst";
import { API } from "../config/api";

export const login = data => {
  return {
    type: LOGIN,
    payload: async () => {
      const res = await API.post("/login", data);
      localStorage.setItem("token", res.data.token);
      return res.data;
    }
  };
};

export const register = data => {
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post("/register", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("email", res.data.email);
      return res.data;
    }
  };
};
