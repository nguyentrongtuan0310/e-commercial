import axios  from "axios";

const axiosClient = axios.create({
    baseURL: 'https://63876514e399d2e473fdc7d4.mockapi.io/api',
    headers: {"Content-Type":'application/json'}
  });
  // Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response.data){
        return response.data
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  export default axiosClient