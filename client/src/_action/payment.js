// import axios from "axios";
import { GET_PAYMENT } from "../config/constanst";
import { API, setAuthToken } from "../config/api";

export const get_payment = () => {
  return {
    type: GET_PAYMENT,
    payload: async () => {
      const res = await API.get("/payments");
      const { data } = res.data;
      return data;
    }
  };
};
