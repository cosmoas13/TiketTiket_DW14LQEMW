// import axios from "axios";
import { GET_STATION } from "../config/constanst";
import { API } from "../config/api";

export const get_stations = () => {
  return {
    type: GET_STATION,
    payload: async () => {
      const res = await API.get("/stations");
      const { data } = res.data;
      return data;
    }
  };
};
