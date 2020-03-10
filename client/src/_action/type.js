// import axios from "axios";
import { GET_TYPE } from "../config/constanst";
import { API, setAuthToken } from "../config/api";

export const get_type = () => {
  return {
    type: GET_TYPE,
    payload: async () => {
      const res = await API.get("/types");
      const { data } = res.data;
      return data;
    }
  };
};
