import axios from "axios";

// console.log("API URL:", import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    console.log("Request is being sent:", config.url);

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status);

    return response;
  },
  (error) => {
    if (error.response) {
      console.log("API Error Status:", error.response.status);
      console.log("API Error Message:", error.response.data);


      if (error.response.status === 401) {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/login";

  return Promise.reject(error);
}

if (error.response.status === 403) {
  error.message =
    error.response.data?.message || "You do not have permission.";

  return Promise.reject(error);
}

      // Get backend error message
      error.message =
        error.response.data?.message || "Something went wrong.";
    }
    
    
    else {
      console.log("Network Error:", error.message);

      error.message = "Unable to connect to the server.";
    }

    return Promise.reject(error);
  }
);
// Export Axios instance
export default api;