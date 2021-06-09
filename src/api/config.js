import axios from "axios";

const VAL_HOST_URL =
  process.env.NODE_ENV === "development" ? "" : "http://localhost:8080";

export const axiosGet = async (url, params) => {
  return await axios
    .get(VAL_HOST_URL + url, { params: params })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const axiosPost = async (url, params, options = null) => {
  return await axios
    .post(VAL_HOST_URL + url, params, options)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const axiosPut = async (url, params, options = null) => {
  return await axios
    .put(VAL_HOST_URL + url, params, options)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const axiosDelete = async (url, params) => {
  return await axios
    .delete(VAL_HOST_URL + url, params)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const SetAxiosHeader = (key, value) => {
  if (value) {
    axios.defaults.headers.common[key] = value;
  } else {
    delete axios.defaults.headers.common[key];
  }
};
