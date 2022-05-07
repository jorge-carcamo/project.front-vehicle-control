import axios from "axios";

const headers = {
  "content-type": "application/json",
  Accept: "application/json",
};
const auth = async () => {
  const res = await axios.post(`https://api.autopress.cl/v1/auth/`, {
  });
  return res.data.token;
};

const API_V1 = axios.create({
  baseURL: `https://cryptic-lake-89500.herokuapp.com/vehicles/`,
  headers: headers,
});

const API_V2 = axios.create({
  baseURL: `https://api.autopress.cl/v1/patentes/`,
  headers: headers
});

API_V2.interceptors.request.use(
  async (config) => {
    const token = await auth();
    console.log(token);
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  async (error) => {
    Promise.reject(error);
  }
);

export { API_V1, API_V2 };
