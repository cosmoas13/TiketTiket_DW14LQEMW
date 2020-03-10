// import axios from "axios";
import { GET_TRAIN } from "../config/constanst";
import { API, setAuthToken } from "../config/api";

export const get_train = () => {
  return {
    type: GET_TRAIN,
    payload: async () => {
      const res = await API.get("/trains");
      const { data } = res.data;
      return data;
    }
  };
};
