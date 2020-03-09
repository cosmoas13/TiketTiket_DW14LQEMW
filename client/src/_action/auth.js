// import axios from "axios";
import { LOGIN, REGISTER, GET_USER } from "../config/constanst";
import { API, setAuthToken } from "../config/api";

// export const getAuth = () => {
//   console.log("getusers");
//   const token = localStorage.getItem("token");
//   if (token) {
//     return {
//       type: "GET_AUTH",
//       payload: async () => {
//         setAuthToken(token);
//         const res = await API.get("/autoauth");
//         console.log("cek data", res.data.data);

//         return res.data.data;
//       }
//     };
//   } else {
//     return {
//       type: "LOGOUT",
//       payload: {}
//     };
//   }
// };

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
      const res = await API.post("/user");
      return res.data;
    }
  };
};
