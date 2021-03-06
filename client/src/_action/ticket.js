// import axios from "axios";
import { GET_TICKET, POST_TICKET } from "../config/constanst";
import { API } from "../config/api";

export const get_ticket = (from, to) => {
  return {
    type: GET_TICKET,
    payload: async () => {
      const res = await API.get(`/tickets?from=${from}&to=${to}`);
      const { data } = res.data;
      return data;
    }
  };
};

export const post_ticket = data => {
  return {
    type: POST_TICKET,
    payload: async () => {
      const res = await API.post("/ticket", data);
      const { ticket } = res.data;
      return ticket;
    }
  };
};
