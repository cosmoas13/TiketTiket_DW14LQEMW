import { GET_USER } from "../config/constanst";
import { API, setAuthToken } from "../config/api";

export const get_user = () => {
  return {
    type: GET_USER,
    payload: async () => {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const res = await API.get("/user");
      return res.data.data;
    }
  };
};
