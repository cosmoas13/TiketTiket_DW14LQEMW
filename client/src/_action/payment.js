// import axios from "axios";
import { GET_PAYMENT, POST_PAYMENT } from "../config/constanst";
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

export const post_payment = data => {
  return {
    type: POST_PAYMENT,
    payload: async () => {
      const res = await API.post("/payment", data);
      const { payment } = res.data;
      return payment;
    }
  };
};
