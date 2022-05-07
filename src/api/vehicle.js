import axios from "axios";

const headers = {
  "content-type": "application/json",
  Accept: "application/json",
};
const auth = async () => {
  const res = await axios.post(`https://api.autopress.cl/v1/auth/`, {
    contrasena: "AjhSfx894PzzFkFnANWzN57faGfVwB6F",
    usuario: "autoplaza_rest",
  });
  return res.data.token;
};

const API_V1 = axios.create({
  baseURL: `https://cryptic-lake-89500.herokuapp.com/vehicles/`,
  headers: headers,
});

const API_V2 = axios.create({
  baseURL: `https://api.autopress.cl/v1/patentes/`,
  headers: headers,
  //headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE4OTIyNTYsIm5iZiI6MTY1MTg5MjI1NiwianRpIjoiMDQwMmFhMTMtMTlhMi00MmE1LWE1MDctMTdlMDI2ODZhYWFhIiwiaWRlbnRpdHkiOnsiaWRfdXN1YXJpbyI6NDg2MSwiaWRfcGFpcyI6MX0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.fjJgXCYSEKVeXlI-gOAAlwhUVZbUe-2WWhWaWXv_amc'}
});

/*API_V2.interceptors.request.use(
  (config) => {
    API_AUTH.post(``, {
      contrasena: "AjhSfx894PzzFkFnANWzN57faGfVwB6F",
      usuario: "autoplaza_rest",
    }).then((res) => {
      if (res) {
        config.headers.Authorization = "Bearer " +  res.data.token;
      }
      return config;
    });
  },
  (error) => {
    Promise.reject(error);
  }
);*/

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
