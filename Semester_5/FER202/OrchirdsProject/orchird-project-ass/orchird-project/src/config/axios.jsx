import axios from "axios";
const baseUrl = "https://670f54093e715186165756ee.mockapi.io/";
const config = {
  baseUrl: baseUrl,
};

const api = axios.create(config);

api.defaults.baseURL = baseUrl;

// handle before call API
const handleBefore = (config) => {
  // handle hành động trước khi call API

  // lấy ra cái token và đính kèm theo cái request
  //   const token = localStorage.getItem("token")?.replaceAll('"', "");
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  return config;
};

api.interceptors.request.use(handleBefore, (error) => Promise.reject(error));

//////////////////////////////////
api.interceptors.response.use(
  (response) => {
    // Xử lý phản hồi từ server
    return response;
  },
  (error) => {
    // Xử lý lỗi từ server
    return Promise.reject(error);
  }
);
export default api;
