// import axios from "axios";
import {
  GET_PAYMENT,
  POST_PAYMENT,
  GET_TICKET,
  GET_ALLTICKET,
  UPDATE_PAYMENT,
  DELETE_PAYMENT,
  UPLOAD_PAYMENT
} from "../config/constanst";
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

export const get_allticket = () => {
  return {
    type: GET_ALLTICKET,
    payload: async () => {
      const res = await API.get("/detail");
      const { data } = res.data;
      return data;
    }
  };
};

export const get_myticket = () => {
  return {
    type: GET_TICKET,
    payload: async () => {
      const token = localStorage.getItem("token"); // panggil token ini jika menggunakan auth
      setAuthToken(token); // token yang diambil. digunakan saat api butuh konfirmasi login user
      const res = await API.get("/myticket");
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

export const update_payment = (data, id) => {
  return {
    type: UPDATE_PAYMENT,
    payload: async () => {
      const res = await API.put(`/update/${id}`, data);
      const { payment } = res.data;
      return payment;
    }
  };
};

export const delete_payment = id => {
  return {
    type: DELETE_PAYMENT,
    payload: async () => {
      const res = await API.delete(`/delete/${id}`);
      const { data } = res.data;
      return data;
    }
  };
};

export const uploadPayment = formData => {
  return {
    type: UPLOAD_PAYMENT,
    payload: async () => {
      const token = localStorage.getItem("token"); // panggil token ini jika menggunakan auth
      setAuthToken(token);
      const res = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { data } = res.data;
      return data;
    }
  };
};
